import { pageMeta } from '../content/pageMeta'
import { pathForState } from './routes'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

// Actualiza titulo, descripcion y vista previa al cambiar de pagina.
export function applyPageMeta(pageId) {
  const meta = pageMeta[pageId] ?? pageMeta.home
  const url = window.location.origin + pathForState({ pageId: pageMeta[pageId] ? pageId : 'home' })
  document.title = meta.title
  setMeta('name', 'description', meta.description)
  setMeta('property', 'og:title', meta.title)
  setMeta('property', 'og:description', meta.description)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:image', window.location.origin + meta.image)
  setMeta('name', 'twitter:title', meta.title)
  setMeta('name', 'twitter:description', meta.description)
  setMeta('name', 'twitter:image', window.location.origin + meta.image)
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}
