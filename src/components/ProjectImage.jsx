// Lamina de un proyecto. En movil se sirve una version de 900 px de ancho
// (mismo diseno, pesa 4-10 veces menos); en ordenador, la de siempre.
const MOBILE_VERSIONS = new Set(['HAZ.webp', 'MITECO.webp', 'albun_musical.webp', 'boat.webp', 'bodega.webp', 'capilla.jpg', 'miteco_2.jpg', 'nave_16.jpg', 'telefonica.webp'])

export default function ProjectImage({ src, alt, className = 'project-detail-image' }) {
  const name = src.split('/').pop()
  const img = <img className={className} src={src} alt={alt} decoding="async" fetchPriority="high" />
  if (!MOBILE_VERSIONS.has(name)) return img
  return (
    <picture>
      <source media="(max-width: 700px)" srcSet={`/pages/proyectos/movil/${name}`} />
      {img}
    </picture>
  )
}
