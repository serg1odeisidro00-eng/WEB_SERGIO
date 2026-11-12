import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'

const label = { es: 'Volver a proyectos', en: 'Back to projects', it: 'Torna ai progetti' }

// Boton "Volver" encima de cada proyecto. Si se llego desde la propia web,
// vuelve a donde estaba (con su filtro); si se entro directo, va a Proyectos.
export default function ProjectBackLink({ filterId = 'all' }) {
  const { language } = useLanguage()
  const { navigateToProjects } = useProjectNavigation()

  const goBack = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return
    event.preventDefault()
    if (window.__m047CameFromSite) window.history.back()
    else navigateToProjects(filterId)
  }

  return (
    <a className="project-back-link" href="/proyectos" onClick={goBack}>
      ← {label[language] ?? label.es}
    </a>
  )
}
