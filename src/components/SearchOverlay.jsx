import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'
import { englishProjectTitles, italianProjectTitles, projectItems } from '../content/projects'

const placeholder = { es: 'BUSCAR EN ESTA WEB', en: 'SEARCH THIS WEBSITE', it: 'CERCA IN QUESTO SITO' }
const closeLabel = { es: 'Cerrar buscador', en: 'Close search', it: 'Chiudi ricerca' }
const noResults = { es: 'No hay proyectos con esa búsqueda.', en: 'No projects match your search.', it: 'Nessun progetto corrisponde alla ricerca.' }

// Buscador a pantalla completa (diseno de Sergio, Seccion_228_Fotos):
// campo "BUSCAR EN ESTA WEB", X para cerrar y cuadricula de fotos de los
// proyectos, que se filtra mientras se escribe.
export default function SearchOverlay({ onClose }) {
  const { language } = useLanguage()
  const { navigateToPage } = useProjectNavigation()
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  const titleOf = (project) => (language === 'en' ? englishProjectTitles[project.id] : language === 'it' ? italianProjectTitles[project.id] : null) ?? project.title

  const results = useMemo(() => {
    const normalize = (text) => text.toLocaleLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    const q = normalize(query.trim())
    if (!q) return projectItems
    return projectItems.filter((project) => normalize(`${project.title} ${project.location} ${englishProjectTitles[project.id] ?? ''} ${italianProjectTitles[project.id] ?? ''}`).includes(q))
  }, [query])

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label={placeholder[language]}>
      <div className="search-overlay-bar">
        <input
          className="search-overlay-input"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder[language]}
          aria-label={placeholder[language]}
        />
        <button type="button" className="search-overlay-close" aria-label={closeLabel[language]} onClick={onClose}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>
      </div>
      {results.length ? (
        <div className="search-overlay-grid">
          {results.map((project) => (
            <a
              key={project.id}
              className="search-overlay-item"
              href={`/proyectos/${project.id}`}
              title={titleOf(project)}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey) return
                event.preventDefault()
                onClose()
                navigateToPage(`project-${project.id}`)
              }}
            >
              <img src={project.imageSrc} alt={titleOf(project)} loading="lazy" />
            </a>
          ))}
        </div>
      ) : (
        <p className="search-overlay-empty">{noResults[language]}</p>
      )}
    </div>
  )
}
