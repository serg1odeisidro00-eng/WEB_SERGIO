import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'
import { englishProjectTitles, italianProjectTitles, projectItems } from '../content/projects'



function englishLocation(location) {
  return location.replace(/Espa\u00f1a|EspaÃ±a/g, 'Spain')
}

function italianLocation(location) {
  return location.replace(/Espa\u00f1a|Espa\u00f1a/g, 'Spagna')
}

function ProjectCard({
  projectId,
  title,
  location,
  category,
  iconSrc,
  imageSrc,
  onOpen,
}) {
  return (
    <article
      className={`projects-card${projectId ? ` projects-card--${projectId}` : ''}`}
      data-category={[].concat(category).join(' ')}
      onClick={onOpen}
    >
      {projectId ? (
        // Enlace real (se puede abrir en otra pestana, usar con teclado y Google lo sigue).
        <a
          className="projects-card-link"
          href={`/proyectos/${projectId}`}
          aria-label={`${title}. ${location}`}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
              event.stopPropagation()
              return
            }
            event.preventDefault()
          }}
        />
      ) : null}
      <div className="projects-card-content">
        <div className="projects-card-media">
          <div className="projects-card-icon">
            <img src={iconSrc} alt="" aria-hidden="true" />
          </div>
        </div>
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
      <div className="projects-card-image">
        <img src={imageSrc} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </div>
    </article>
  )
}

export default function ProjectsPage({
  activePage,
  initialFilter = 'all',
  initialSearch = '',
  onBack,
  onNavigate,
  onOpenProject,
}) {
  const { language } = useLanguage()
  const { navigateToPage } = useProjectNavigation()
  const [isSpanish, setIsSpanish] = useState(false)
  const [activeFilter, setActiveFilter] = useState(initialFilter)

  useEffect(() => {
    setActiveFilter(initialFilter)
  }, [initialFilter])

  const filteredProjects = useMemo(() => {
    const query = initialSearch.trim().toLocaleLowerCase()
    return projectItems.filter((project) => (activeFilter === 'all' || [].concat(project.category).includes(activeFilter)) && (!query || `${project.title} ${project.location} ${englishProjectTitles[project.id] ?? ''} ${italianProjectTitles[project.id] ?? ''}`.toLocaleLowerCase().includes(query)))
  }, [activeFilter, initialSearch])

  return (
    <section className="projects-page">
      <PageHeader
        activePage={activePage}
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <ProjectsFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="projects-page-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            projectId={project.id}
            title={language === 'en' ? (englishProjectTitles[project.id] ?? project.title) : language === 'it' ? (italianProjectTitles[project.id] ?? project.title) : project.title}
            location={language === 'en' ? englishLocation(project.location) : language === 'it' ? italianLocation(project.location) : project.location}
            category={project.category}
            iconSrc={project.iconSrc}
            imageSrc={project.imageSrc}
            onOpen={project.id ? () => navigateToPage(`project-${project.id}`) : undefined}
          />
        ))}
      </div>

      <PageFooter />
    </section>
  )
}
