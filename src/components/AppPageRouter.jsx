import { useLayoutEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { newsById } from '../content/news'
import AcademyPage from './AcademyPage'
import AlbumMusicalProjectPage from './AlbumMusicalProjectPage'
import BoatProjectPage from './BoatProjectPage'
import CapillaProjectPage from './CapillaProjectPage'
import CartelTeatroProjectPage from './CartelTeatroProjectPage'
import ContactPage from './ContactPage'
import CrossProjectPage from './CrossProjectPage'
import EfimeroProjectPage from './EfimeroProjectPage'
import ElBosqueProjectPage from './ElBosqueProjectPage'
import ElCirculoProjectPage from './ElCirculoProjectPage'
import ElRastroProjectPage from './ElRastroProjectPage'
import EneoProjectPage from './EneoProjectPage'
import LegalPage from './LegalPage'
import EspacioExpositivoProjectPage from './EspacioExpositivoProjectPage'
import FiestasLocalesProjectPage from './FiestasLocalesProjectPage'
import HargokProjectPage from './HargokProjectPage'
import HazProjectPage from './HazProjectPage'
import IlustracionesProjectPage from './IlustracionesProjectPage'
import MitecoProjectPage from './MitecoProjectPage'
import Miteco2ProjectPage from './Miteco2ProjectPage'
import Nave16ProjectPage from './Nave16ProjectPage'
import NewsArticlePage from './NewsArticlePage'
import NewsPage from './NewsPage'
import PackagingProjectPage from './PackagingProjectPage'
import PgProjectPage from './PgProjectPage'
import PlaygroundProjectPage from './PlaygroundProjectPage'
import PodcastProjectPage from './PodcastProjectPage'
import ProjectsPage from './ProjectsPage'
import ShopPage from './ShopPage'
import SoldrinkProjectPage from './SoldrinkProjectPage'
import StudioPage from './StudioPage'
import TelefonicaProjectPage from './TelefonicaProjectPage'
import UfvProjectPage from './UfvProjectPage'
import VKartingProjectPage from './VKartingProjectPage'

const projectPages = {
  'project-album-musical': AlbumMusicalProjectPage,
  'project-boat': BoatProjectPage,
  'project-capilla': CapillaProjectPage,
  'project-cartel-teatro': CartelTeatroProjectPage,
  'project-cross': CrossProjectPage,
  'project-efimero': EfimeroProjectPage,
  'project-el-bosque': ElBosqueProjectPage,
  'project-el-circulo': ElCirculoProjectPage,
  'project-el-rastro': ElRastroProjectPage,
  'project-eneo': EneoProjectPage,
  'project-espacio-expositivo': EspacioExpositivoProjectPage,
  'project-fiestas-locales': FiestasLocalesProjectPage,
  'project-hargok': HargokProjectPage,
  'project-haz': HazProjectPage,
  'project-ilustraciones': IlustracionesProjectPage,
  'project-miteco': MitecoProjectPage,
  'project-miteco-2': Miteco2ProjectPage,
  'project-nave-16': Nave16ProjectPage,
  'project-packaging': PackagingProjectPage,
  'project-pg': PgProjectPage,
  'project-playground': PlaygroundProjectPage,
  'project-podcast': PodcastProjectPage,
  'project-soldrink': SoldrinkProjectPage,
  'project-telefonica': TelefonicaProjectPage,
  'project-ufv': UfvProjectPage,
  'project-v-karting': VKartingProjectPage,
}

const standardPages = {
  academy: AcademyPage,
  contact: ContactPage,
  cookies: LegalPage,
  legal: LegalPage,
  privacy: LegalPage,
  news: NewsPage,
  shop: ShopPage,
  studio: StudioPage,
}

// Los titulos de proyecto van siempre en una linea (diseno de Sergio): si un
// titulo no cabe en la columna, se reduce su tamano hasta que quepa.
function fitProjectTitles() {
  document.querySelectorAll('.project-detail-sidebar h1').forEach((title) => {
    title.style.fontSize = ''
    const available = title.parentElement.clientWidth
    let size = parseFloat(getComputedStyle(title).fontSize)
    while (title.scrollWidth > available && size > 14) {
      size -= 1
      title.style.fontSize = `${size}px`
    }
  })
}

function useFitProjectTitles(activePage) {
  const { language } = useLanguage()
  useLayoutEffect(() => {
    fitProjectTitles()
    const frame = window.requestAnimationFrame(fitProjectTitles)
    document.fonts?.ready.then(fitProjectTitles)
    window.addEventListener('resize', fitProjectTitles)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', fitProjectTitles)
    }
  }, [activePage, language])
}

export default function AppPageRouter({ activePage, projectsFilter, projectsSearch, onBack, onNavigate }) {
  useFitProjectTitles(activePage)
  if (activePage === 'projects') {
    return <ProjectsPage activePage={activePage} initialFilter={projectsFilter} initialSearch={projectsSearch} onBack={onBack} onNavigate={onNavigate} />
  }

  if (newsById[activePage]) {
    return <NewsArticlePage articleId={activePage} onBack={onBack} onNavigate={onNavigate} />
  }

  const ProjectPage = projectPages[activePage]
  if (ProjectPage) return <ProjectPage onBack={onBack} onNavigate={onNavigate} />

  const StandardPage = standardPages[activePage]
  if (StandardPage) return <StandardPage activePage={activePage} onBack={onBack} onNavigate={onNavigate} />

  return null
}
