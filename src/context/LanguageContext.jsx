import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'm047-language'
const LANGUAGES = ['es', 'en', 'it']

// El idioma elegido se recuerda en el navegador del visitante.
function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // navegacion privada o almacenamiento bloqueado
  }
  return 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // sin almacenamiento: el idioma vale solo para esta visita
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
