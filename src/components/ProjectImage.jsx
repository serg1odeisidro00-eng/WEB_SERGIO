// Lamina de un proyecto. En movil se sirve una version de ~1000 px de ancho
// (mismo diseno, pesa mucho menos); en ordenador, la de siempre.
const MOBILE_VERSIONS = new Set(['HAZ.webp', 'MITECO.webp', 'albun_musical.webp', 'boat.webp', 'bodega.webp', 'capilla.jpg', 'miteco_2.jpg', 'nave_16.jpg', 'telefonica.webp'])

function mobileSource(src) {
  if (!src.startsWith('/pages/proyectos/')) return null
  const name = src.split('/').pop()
  if (name.endsWith('.svg')) return `/pages/proyectos/movil/${name.replace(/\.svg$/, '.webp')}`
  return MOBILE_VERSIONS.has(name) ? `/pages/proyectos/movil/${name}` : null
}

export default function ProjectImage({ src, alt, className = 'project-detail-image' }) {
  const mobile = mobileSource(src)
  const img = <img className={className} src={src} alt={alt} decoding="async" fetchPriority="high" />
  if (!mobile) return img
  return (
    <picture>
      <source media="(max-width: 700px)" srcSet={mobile} />
      {img}
    </picture>
  )
}
