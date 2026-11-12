import { useCallback, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SearchOverlay from './SearchOverlay'

const navItems = {
  es: [
    { id: 'projects', label: 'PROYECTOS' },
    { id: 'studio', label: 'ESTUDIO' },
    { id: 'contact', label: 'CONTACTO' },
    { id: 'news', label: 'NOTICIAS' },
    { id: 'academy', label: 'ACADEMIA' },
    { id: 'shop', label: 'TIENDA ONLINE' },
  ],
  en: [
    { id: 'projects', label: 'PROJECTS' },
    { id: 'studio', label: 'STUDIO' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'news', label: 'NEWS' },
    { id: 'academy', label: 'ACADEMY' },
    { id: 'shop', label: 'ONLINE SHOP' },
  ],
  it: [
    { id: 'projects', label: 'PROGETTI' },
    { id: 'studio', label: 'STUDIO' },
    { id: 'contact', label: 'CONTATTI' },
    { id: 'news', label: 'NOTIZIE' },
    { id: 'academy', label: 'ACCADEMIA' },
    { id: 'shop', label: 'NEGOZIO ONLINE' },
  ],
}

export default function PageHeader({
  activePage,
  onBack,
  onNavigate,
}) {
  const { language, setLanguage } = useLanguage()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const closeSearch = useCallback(() => setIsSearchOpen(false), [])

  return (
    <header className="projects-page-header">
      <button type="button" className="projects-page-brand" onClick={onBack}>
        M047
      </button>

      <div className="projects-page-nav-row">
        <nav className="projects-page-nav" aria-label="Secciones principales">
          {navItems[language].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`projects-page-nav-link${activePage === item.id ? ' is-active' : ''}`}
              onClick={() => onNavigate?.(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="projects-page-header-tools">
          <button type="button" className="projects-page-search-button" aria-label={language === 'es' ? 'Buscar' : language === 'it' ? 'Cerca' : 'Search'} onClick={() => setIsSearchOpen(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button>
          {isSearchOpen ? <SearchOverlay onClose={closeSearch} /> : null}
          <div className="projects-page-lang-switch" role="group" aria-label="Idioma">
          <button
            type="button"
            className={`projects-page-lang${language === 'en' ? ' is-active' : ''}`}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <span className="projects-page-lang-separator">/</span>
          <button
            type="button"
            className={`projects-page-lang${language === 'it' ? ' is-active' : ''}`}
            aria-pressed={language === 'it'}
            onClick={() => setLanguage('it')}
          >
            IT
          </button>
          <span className="projects-page-lang-separator">/</span>
          <button
            type="button"
            className={`projects-page-lang${language === 'es' ? ' is-active' : ''}`}
            aria-pressed={language === 'es'}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
        </div>
        </div>
      </div>
    </header>
  )
}
