import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'

const projectItems = [
  { id: 'el-circulo', title: 'Juguete de construcción El Círculo', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/el_circulo.png', imageSrc: '/proyectos/imagenes/el_circulo.png' },
  { id: 'cartel-teatro', title: 'Cartel de teatro', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/intereses_creado.png', imageSrc: '/proyectos/imagenes/intereses_creado.png' },
  { id: 'el-rastro', title: 'Identidad Corporativa El Rastro', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/el_rastro.png', imageSrc: '/proyectos/imagenes/el_rastro.png' },
  { id: 'hargok', title: 'Tipografía Hargok', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/hargok.png', imageSrc: '/proyectos/imagenes/hargok.png' },
  { id: 'haz', title: 'Lámpara HAZ', location: 'Segovia, España', category: 'graphic', iconSrc: '/proyectos/iconos/HAZ.png', imageSrc: '/proyectos/imagenes/HAZ.png' },
  { id: 'podcast', title: 'Identidad Corporativa Podcast', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/xrail.png', imageSrc: '/proyectos/imagenes/xrail.png' },
  { id: 'eneo', title: 'Identidad Corporativa Eneo', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/eneo.png', imageSrc: '/proyectos/imagenes/eneo.png' },
  { id: 'fiestas-locales', title: 'Cartel de Fiestas Locales', location: 'San Rafael (Segovia), España', category: 'graphic', iconSrc: '/proyectos/iconos/fiestas_locales.png', imageSrc: '/proyectos/imagenes/fiestas_locales.png' },
  { id: 'packaging', title: 'Diseño Editorial y Packaging', location: 'Santander, España', category: 'graphic', iconSrc: '/proyectos/iconos/editorial_packaging.png', imageSrc: '/proyectos/imagenes/editorial_packaging.png' },
  { id: 'ilustraciones', title: 'Colección de Ilustraciones', location: 'Villaviciosa (Madrid), España', category: 'graphic', iconSrc: '/proyectos/iconos/plantae.png', imageSrc: '/proyectos/imagenes/plantae.png' },
  { id: 'cross', title: 'Silla CROSS', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/CROSS.png', imageSrc: '/proyectos/imagenes/CROSS.png' },
  { id: 'ufv', title: 'Escenografía UFV', location: 'Madrid, España', category: 'scenography', iconSrc: '/proyectos/iconos/UFV.png', imageSrc: '/proyectos/imagenes/UFV.png' },
  { id: 'playground', title: 'Vivienda experimental y Playground', location: 'Pontevedra, España', category: ['scenography', 'interiors'], iconSrc: '/proyectos/iconos/hormiguero.png', imageSrc: '/proyectos/imagenes/hormiguero.png' },
  { id: 'capilla', title: 'Diseño e iluminación Capilla', location: 'Madrid, España', category: 'interiors', iconSrc: '/proyectos/iconos/ETSAM.png', imageSrc: '/proyectos/imagenes/ETSAM.png' },
  { id: 'pg', title: 'Identidad Corporativa PG', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/corporativa_pg.png', imageSrc: '/proyectos/imagenes/corporativa_pg.png' },
  { id: 'boat', title: 'Escultura Boat', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/iconos/el_barco.png', imageSrc: '/proyectos/imagenes/el_barco.png' },
  { id: 'telefonica', title: 'Proyecto de Oficinas en Edificio Telef\u00f3nica', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/edificio_telefonica.png', imageSrc: '/proyectos/imagenes/edificio_telefonica.png' },
  { id: 'miteco', title: 'Proyecto Paisajismo MITECO', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/iconos/MITECO.png', imageSrc: '/proyectos/imagenes/MITECO.png' },
  { id: 'miteco-2', title: 'Proyecto Paisajismo MITECO 2', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/iconos/MITECO.png', imageSrc: '/proyectos/imagenes/miteco_2.jpg' },
  { id: 'el-bosque', title: 'Centro cultural El Bosque', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/iconos/EL_BOSQUE.png', imageSrc: '/proyectos/imagenes/EL_BOSQUE.png' },
  { id: 'album-musical', title: 'Direcci\u00f3n de arte \u00e1lbum musical', location: 'Madrid, Espa\u00f1a', category: ['art-direction', 'graphic'], iconSrc: '/proyectos/iconos/albun_musical.png', imageSrc: '/proyectos/imagenes/albun_musical.png' },
  { id: 'espacio-expositivo', title: 'Espacio expositivo temporal 2021', location: 'Madrid, España', category: ['scenography', 'interiors'], iconSrc: '/proyectos/iconos/temporal_2021.png', imageSrc: '/proyectos/imagenes/temporal_2021.png' },
  { id: 'v-karting', title: 'Dise\u00f1o Logotipo y Livery V.Karting', location: 'Villaviciosa (Madrid), Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/v_karting.png', imageSrc: '/proyectos/imagenes/v_karting.png' },
  { id: 'soldrink', title: 'Branding y etiquetas bodega', location: 'Toledo, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/iconos/soldrink.png', imageSrc: '/proyectos/imagenes/soldrink.png' },
  { id: 'efimero', title: 'Stand efímero de venta', location: 'Madrid, España', category: ['scenography', 'interiors'], iconSrc: '/proyectos/iconos/efimero.png', imageSrc: '/proyectos/imagenes/efimero.png' },
  { id: 'nave-16', title: 'Residencia artística en Nave 16', location: 'Madrid, España', category: 'interiors', iconSrc: '/proyectos/iconos/nave_16.png', imageSrc: '/proyectos/imagenes/nave_16.png' },
]

const englishProjectTitles = {
  'el-circulo': 'The Circle construction toy', 'cartel-teatro': 'Theatre poster', 'el-rastro': 'El Rastro corporate identity', hargok: 'Hargok typeface', haz: 'HAZ lamp', podcast: 'Podcast corporate identity', eneo: 'Eneo corporate identity', 'fiestas-locales': 'Local festivities poster', packaging: 'Editorial design and packaging', ilustraciones: 'Illustration collection', cross: 'CROSS chair', ufv: 'UFV scenography', playground: 'Experimental housing and playground', capilla: 'Chapel design and lighting', pg: 'PG corporate identity', boat: 'Boat sculpture', telefonica: 'Office project in the Telef\u00f3nica building', miteco: 'MITECO landscaping project', 'miteco-2': 'MITECO landscaping project 2', 'el-bosque': 'El Bosque cultural centre', 'album-musical': 'Art direction for a music album', 'espacio-expositivo': 'Temporary exhibition space 2021', 'v-karting': 'V.Karting logo and livery design', soldrink: 'Winery branding and labels', efimero: 'Ephemeral sales stand', 'nave-16': 'Artists\' residency at Nave 16',
}

const italianProjectTitles = {
  'el-circulo': 'Gioco di costruzioni The Circle', 'cartel-teatro': 'Manifesto teatrale', 'el-rastro': 'Identità visiva El Rastro', hargok: 'Carattere Hargok', haz: 'Lampada HAZ', podcast: 'Identità visiva Podcast', eneo: 'Identità visiva Eneo', 'fiestas-locales': 'Manifesto delle feste locali', packaging: 'Design editoriale e packaging', ilustraciones: 'Collezione di illustrazioni', cross: 'Sedia CROSS', ufv: 'Scenografia UFV', playground: 'Abitazione sperimentale e Playground', capilla: 'Progetto illuminotecnico per cappella', pg: 'Identità visiva PG', boat: 'Scultura Boat', telefonica: "Progetto di uffici nell'edificio Telefónica", miteco: 'Progetto paesaggistico MITECO', 'miteco-2': 'Progetto paesaggistico MITECO 2', 'el-bosque': 'Centro culturale El Bosque', 'album-musical': 'Direzione artistica per album musicale', 'espacio-expositivo': 'Spazio espositivo temporaneo 2021', 'v-karting': 'Design del logo e livrea V.Karting', soldrink: 'Branding ed etichette per cantina', efimero: 'Stand di vendita temporaneo', 'nave-16': 'Residenza artistica presso Nave 16',
}

projectItems[0].title = 'The Circle'
englishProjectTitles['el-circulo'] = 'The Circle'
italianProjectTitles['el-circulo'] = 'The Circle'

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
        <img src={imageSrc} alt="" aria-hidden="true" />
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
