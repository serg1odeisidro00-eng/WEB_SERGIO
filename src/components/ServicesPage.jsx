import { useLanguage } from '../context/LanguageContext'
import { englishProjectTitles, italianProjectTitles, projectItems } from '../content/projects'
import { servicesCopy } from '../content/services'
import { pathForState } from '../lib/routes'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const projectsById = Object.fromEntries(projectItems.map((project) => [project.id, project]))

// Navega dentro de la web sin recargar (el enlace sigue sirviendo para abrir
// en otra pestana y para Google).
const go = (onNavigate, target) => (event) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey) return
  event.preventDefault()
  onNavigate?.(target)
}

export default function ServicesPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const copy = servicesCopy[language] ?? servicesCopy.es
  const titleOf = (project) => (language === 'en' ? englishProjectTitles[project.id] : language === 'it' ? italianProjectTitles[project.id] : null) ?? project.title

  return (
    <section className="projects-page services-page" lang={language}>
      <PageHeader activePage={activePage} onBack={onBack} onNavigate={onNavigate} />

      <div className="academy services">
        <h1 className="academy-section-title">{copy.section}</h1>
        <hr className="academy-rule" />

        <div className="services-intro">
          <p className="services-claim">{copy.claim[0]}<br />{copy.claim[1]}</p>
          <p className="services-intro-text">{copy.intro}</p>
        </div>

        {copy.main.map((block) => (
          <article key={block.code} className="services-block">
            <h2 className="academy-section-title services-block-title">{block.code}  /  {block.title}</h2>
            <hr className="academy-rule" />
            <div className="services-block-body">
              <div className="services-block-copy">
                <p>{block.text}</p>
                <ul className="services-list">
                  {block.items.map(([who, what]) => <li key={who}><strong>{who}</strong> · {what}</li>)}
                </ul>
                <a
                  className="services-more"
                  href={pathForState({ pageId: 'projects', filterId: block.filterId })}
                  onClick={go(onNavigate, { pageId: 'projects', filterId: block.filterId })}
                >
                  {block.more} →
                </a>
              </div>
              <div className="services-projects">
                {block.projects.map((id) => projectsById[id]).filter(Boolean).map((project) => (
                  <a
                    key={project.id}
                    className="services-project"
                    href={pathForState({ pageId: `project-${project.id}` })}
                    onClick={go(onNavigate, `project-${project.id}`)}
                  >
                    <img src={project.imageSrc ?? `/proyectos/fotos/${project.id}.webp`} alt="" loading="lazy" width="1011" height="645" />
                    <span>{titleOf(project)}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div className="services-also">
          <h2 className="services-also-title">{copy.alsoTitle}</h2>
          <div className="services-also-items">
            {copy.also.map((item) => (
              <a
                key={item.title}
                className="services-also-item"
                href={pathForState({ pageId: 'projects', filterId: item.filterId })}
                onClick={go(onNavigate, { pageId: 'projects', filterId: item.filterId })}
              >
                <span className="services-also-name">{item.title}</span>
                <span className="services-also-text">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <p className="services-prices">{copy.prices}</p>
          <a
            className="academy-button"
            href={pathForState({ pageId: 'contact' })}
            onClick={go(onNavigate, 'contact')}
          >
            {copy.cta[0]} {copy.cta[1]}
          </a>
        </div>
      </div>

      <PageFooter />
    </section>
  )
}
