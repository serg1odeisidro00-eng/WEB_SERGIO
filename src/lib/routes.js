// Direcciones (URL) de cada pagina de la web.
// pageId es el nombre interno que usa App.jsx; path es lo que se ve en el navegador.
// Si se anade un proyecto nuevo (pageId 'project-xxx'), su direccion sera
// /proyectos/xxx sin tocar nada aqui.

const staticRoutes = {
  home: '/',
  projects: '/proyectos',
  studio: '/estudio',
  contact: '/contacto',
  news: '/noticias',
  academy: '/academia',
  shop: '/tienda',
  legal: '/aviso-legal',
  privacy: '/privacidad',
  cookies: '/cookies',
}

const pathToPage = Object.fromEntries(Object.entries(staticRoutes).map(([pageId, path]) => [path, pageId]))

// Filtros de la pagina de proyectos (?categoria=...)
const filterSlugs = {
  interiors: 'interiorismo',
  landscape: 'paisajismo',
  scenography: 'escenografia',
  graphic: 'diseno-grafico',
  'art-direction': 'direccion-de-arte',
}
const slugToFilter = Object.fromEntries(Object.entries(filterSlugs).map(([id, slug]) => [slug, id]))

export function pathForState({ pageId = 'home', filterId = 'all' } = {}) {
  if (staticRoutes[pageId]) {
    if (pageId === 'projects' && filterId && filterId !== 'all' && filterSlugs[filterId]) {
      return `/proyectos?categoria=${filterSlugs[filterId]}`
    }
    return staticRoutes[pageId]
  }
  if (pageId.startsWith('project-')) return `/proyectos/${pageId.slice('project-'.length)}`
  if (pageId.startsWith('news-')) return `/noticias/${pageId.slice('news-'.length)}`
  return '/'
}

export function stateFromLocation(location = window.location) {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  const params = new URLSearchParams(location.search)
  if (pathToPage[path]) {
    const pageId = pathToPage[path]
    const filterId = pageId === 'projects' ? slugToFilter[params.get('categoria')] ?? 'all' : 'all'
    return { pageId, filterId, searchQuery: '' }
  }
  const project = path.match(/^\/proyectos\/([a-z0-9-]+)$/)
  if (project) return { pageId: `project-${project[1]}`, filterId: 'all', searchQuery: '' }
  const news = path.match(/^\/noticias\/([a-z0-9-]+)$/)
  if (news) return { pageId: `news-${news[1]}`, filterId: 'all', searchQuery: '' }
  if (path === '/') return { pageId: 'home', filterId: 'all', searchQuery: '' }
  return { pageId: 'not-found', filterId: 'all', searchQuery: '' }
}
