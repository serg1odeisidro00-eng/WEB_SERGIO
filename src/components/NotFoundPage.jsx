import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const copy = {
  es: { title: 'Aquí no hay nada…', text: 'La página que buscas no existe o ha cambiado de sitio.', home: 'Volver al edificio', projects: 'Ver proyectos' },
  en: { title: 'Nothing here…', text: 'The page you are looking for does not exist or has moved.', home: 'Back to the building', projects: 'See projects' },
  it: { title: 'Qui non c’è niente…', text: 'La pagina che cerchi non esiste o è stata spostata.', home: 'Torna all’edificio', projects: 'Vedi i progetti' },
}

// Pagina de error (direccion que no existe).
export default function NotFoundPage({ onBack, onNavigate }) {
  const { language } = useLanguage()
  const t = copy[language] ?? copy.es

  useEffect(() => {
    document.title = `${copy.es.title} · M047`
    let robots = document.head.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex')
    return () => robots.remove()
  }, [])

  return (
    <section className="projects-page not-found-page">
      <PageHeader activePage="" onBack={onBack} onNavigate={onNavigate} />
      <div className="not-found">
        <img className="not-found-image" src="/Frames/lector/1.png" alt="" aria-hidden="true" />
        <div className="not-found-copy">
          <h1>{t.title}</h1>
          <p>{t.text}</p>
          <div className="not-found-actions">
            <button type="button" className="academy-button" onClick={onBack}>{t.home}</button>
            <button type="button" className="academy-link-button" onClick={() => onNavigate?.('projects')}>{t.projects}</button>
          </div>
        </div>
      </div>
      <PageFooter />
    </section>
  )
}
