import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'

const projectFilters = {
  es: [{ id: 'all', label: 'TODOS' }, { id: 'interiors', label: 'DISE\u00d1O DE INTERIORES' }, { id: 'art-direction', label: 'DIRECCI\u00d3N DE ARTE' }, { id: 'graphic', label: 'DISE\u00d1O GR\u00c1FICO' }, { id: 'landscape', label: 'PAISAJISMO' }, { id: 'scenography', label: 'ESCENOGRAF\u00cdA' }],
  en: [{ id: 'all', label: 'ALL' }, { id: 'interiors', label: 'INTERIOR DESIGN' }, { id: 'art-direction', label: 'ART DIRECTION' }, { id: 'graphic', label: 'GRAPHIC DESIGN' }, { id: 'landscape', label: 'LANDSCAPE DESIGN' }, { id: 'scenography', label: 'SCENOGRAPHY' }],
  it: [{ id: 'all', label: 'TUTTI' }, { id: 'interiors', label: 'DESIGN DEGLI INTERNI' }, { id: 'art-direction', label: "DIREZIONE ARTISTICA" }, { id: 'graphic', label: 'DESIGN GRAFICO' }, { id: 'landscape', label: 'PROGETTAZIONE DEL PAESAGGIO' }, { id: 'scenography', label: 'SCENOGRAFIA' }],
}

export default function ProjectsFilterBar({ activeFilter = 'all', onFilterChange }) {
  const { language } = useLanguage()
  const { navigateToProjects } = useProjectNavigation()

  const handleFilterChange = (filterId) => {
    if (onFilterChange) {
      onFilterChange(filterId)
      return
    }

    navigateToProjects(filterId)
  }

  return <div className="projects-page-filters">{projectFilters[language].map((filter) => <button key={filter.id} type="button" className={`projects-page-filter${activeFilter === filter.id ? ' is-active' : ''}`} onClick={() => handleFilterChange(filter.id)}>{filter.label}</button>)}</div>
}
