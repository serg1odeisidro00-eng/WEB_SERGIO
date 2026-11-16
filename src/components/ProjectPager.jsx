import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'
import { englishProjectTitles, italianProjectTitles, projectItems } from '../content/projects'
import { pathForState, stateFromLocation } from '../lib/routes'

const labels = {
  es: { prev: 'Proyecto anterior', next: 'Proyecto siguiente', cta: '¿Tienes un proyecto en mente?', ctaLink: 'Cuéntanoslo' },
  en: { prev: 'Previous project', next: 'Next project', cta: 'Have a project in mind?', ctaLink: 'Tell us about it' },
  it: { prev: 'Progetto precedente', next: 'Progetto successivo', cta: 'Hai un progetto in mente?', ctaLink: 'Raccontacelo' },
}

// Al final de cada proyecto: anterior / siguiente (en el orden de la
// cuadricula de Proyectos) y enlace al formulario de Contacto.
export default function ProjectPager() {
  const { language } = useLanguage()
  const { navigateToPage } = useProjectNavigation()
  const currentId = stateFromLocation().pageId.replace(/^project-/, '')
  const index = projectItems.findIndex((project) => project.id === currentId)
  if (index < 0) return null
  const t = labels[language] ?? labels.es
  const total = projectItems.length
  const prev = projectItems[(index - 1 + total) % total]
  const next = projectItems[(index + 1) % total]
  const titleOf = (project) => (language === 'en' ? englishProjectTitles[project.id] : language === 'it' ? italianProjectTitles[project.id] : null) ?? project.title

  const go = (pageId) => (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return
    event.preventDefault()
    navigateToPage(pageId)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="project-pager" aria-label={`${t.prev} / ${t.next}`}>
      <a className="project-pager-link is-prev" href={pathForState({ pageId: `project-${prev.id}` })} onClick={go(`project-${prev.id}`)}>
        <span className="project-pager-label">← {t.prev}</span>
        <span className="project-pager-title">{titleOf(prev)}</span>
      </a>
      <p className="project-pager-cta">
        {t.cta}{' '}
        <a href={pathForState({ pageId: 'contact' })} onClick={go('contact')}>{t.ctaLink}</a>
      </p>
      <a className="project-pager-link is-next" href={pathForState({ pageId: `project-${next.id}` })} onClick={go(`project-${next.id}`)}>
        <span className="project-pager-label">{t.next} →</span>
        <span className="project-pager-title">{titleOf(next)}</span>
      </a>
    </nav>
  )
}
