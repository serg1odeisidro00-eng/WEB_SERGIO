// Se ejecuta al publicar, despues de "vite build".
// Crea un index.html por pagina (dist/proyectos/capilla/index.html, etc.) con
// su titulo, descripcion y vista previa para WhatsApp/LinkedIn, y un texto
// basico para buscadores. Tambien crea sitemap.xml y robots.txt.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pageMeta } from '../src/content/pageMeta.js'
import { pageMetaI18n } from '../src/content/pageMetaI18n.js'
import { LANGUAGES, pathForState } from '../src/lib/routes.js'

const dist = 'dist'
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
const siteUrl = (process.env.SITE_URL || (productionHost ? `https://${productionHost}` : 'https://web-sergio-orcin.vercel.app')).replace(/\/$/, '')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const escape = (text) => String(text)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

// Ficha del estudio para Google (datos que ya se ven en la web).
const studioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Estudio M047',
  description: pageMeta.home.description,
  url: siteUrl + '/',
  image: siteUrl + pageMeta.home.image,
  telephone: '+34 633 878 755',
  email: 'contacto@m047.es',
  address: { '@type': 'PostalAddress', postalCode: '28047', addressLocality: 'Madrid', addressCountry: 'ES' },
  areaServed: 'Madrid',
  sameAs: ['https://www.instagram.com/m047.studio/', 'https://www.linkedin.com/in/m047/', 'https://www.behance.net/M047'],
}

// Cada pagina en los tres idiomas: /proyectos, /en/proyectos, /it/proyectos.
const locales = { es: 'es_ES', en: 'en_GB', it: 'it_IT' }
const metaFor = (pageId, language) => ({ ...pageMeta[pageId], ...(language === 'es' ? {} : pageMetaI18n[language]?.[pageId]) })
const pages = LANGUAGES.flatMap((language) => Object.keys(pageMeta).map((pageId) => ({
  pageId,
  language,
  meta: metaFor(pageId, language),
  path: pathForState({ pageId }, language),
})))
const indexable = pages.filter((page) => !page.meta.noindex)
const navLinksFor = (language) => indexable
  .filter((page) => page.language === language)
  .map(({ meta, path }) => `<li><a href="${path}">${escape(meta.title.replace(/ · M047$/, ''))}</a></li>`)
  .join('')
// Enlaces entre las versiones de idioma de una misma pagina (para Google).
const alternatesFor = (pageId) => [
  ...LANGUAGES.map((language) => ({ hreflang: language, href: siteUrl + pathForState({ pageId }, language) })),
  { hreflang: 'x-default', href: siteUrl + pathForState({ pageId }, 'es') },
]

for (const { pageId, language, meta, path } of pages) {
  const url = siteUrl + path
  const image = siteUrl + meta.image
  const head = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...(meta.noindex ? [] : alternatesFor(pageId).map(({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`)),
    meta.noindex ? '<meta name="robots" content="noindex" />' : '',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="M047" />',
    `<meta property="og:locale" content="${locales[language]}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    pageId === 'home' ? '<link rel="preload" as="image" href="/fondo.jpg" fetchpriority="high" />\n    <link rel="preload" as="image" href="/andamio.webp" />' : '',
    pageId === 'home' ? `<script type="application/ld+json">${JSON.stringify({ ...studioSchema, description: meta.description, url })}</script>` : '',
  ].filter(Boolean).join('\n    ')

  // Texto para buscadores; React lo sustituye en cuanto arranca la web.
  const body = `<div class="prerender-content"><h1>${escape(meta.title.replace(/ · M047$/, ''))}</h1><p>${escape(meta.description)}</p><nav aria-label="M047"><ul>${navLinksFor(language)}</ul></nav></div>`

  const html = template
    .replace('<html lang="es">', `<html lang="${language}">`)
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/<title>[\s\S]*?<\/title>/, head)
    .replace('<div id="app"></div>', `<div id="app">${body}</div>`)

  const file = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

// Direcciones que no existen: Vercel sirve 404.html con codigo 404 y la web
// muestra la pagina "Aqui no hay nada..." (NotFoundPage).
writeFileSync(join(dist, '404.html'), template
  .replace(/\s*<meta name="description"[^>]*>/, '')
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Aquí no hay nada… · M047</title>\n    <meta name="robots" content="noindex" />'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${indexable.map(({ pageId, path }) => `  <url><loc>${siteUrl}${path}</loc><lastmod>${today}</lastmod>${alternatesFor(pageId).map(({ hreflang, href }) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`).join('')}</url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`prerender: ${pages.length} paginas, sitemap con ${indexable.length} direcciones (${siteUrl})`)
