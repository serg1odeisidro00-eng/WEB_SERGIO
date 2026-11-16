import { createContext, useContext, useEffect, useState } from 'react'
import { LANGUAGES, languageFromPath, setRouteLanguage, stripLanguage, withLanguage } from '../lib/routes'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'm047-language'

// Manda la direccion (/en/..., /it/...); si no lleva idioma, el que el
// visitante eligio la ultima vez (se recuerda en su navegador); si no, espanol.
function getInitialLanguage() {
  const fromPath = languageFromPath()
  if (fromPath) return fromPath
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // navegacion privada o almacenamiento bloqueado
  }
  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const initial = getInitialLanguage()
    setRouteLanguage(initial)
    return initial
  })

  setRouteLanguage(language)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // sin almacenamiento: el idioma vale solo para esta visita
    }
    // La direccion sigue al idioma: /proyectos <-> /en/proyectos <-> /it/proyectos
    const { pathname, search, hash } = window.location
    const nextPath = withLanguage(stripLanguage(pathname), language)
    if (nextPath !== pathname) {
      window.history.replaceState(window.history.state, '', nextPath + search + hash)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
