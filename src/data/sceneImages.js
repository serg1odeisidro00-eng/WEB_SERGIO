// Imagenes de la portada.
// Proporcion del dibujo original (fondo.jpg 7537 x 4500).
export const SCENE_IMAGE_RATIO = 7537 / 4500

// Ya no se estira en pantalla: el borde derecho se corrigio en el propio fondo.jpg.
export const FONDO_STRETCH = 1

// Versiones reducidas con filtro de calidad (sin enfocar ni retocar) en
// public/scene/. Se elige la mas pequena que sea IGUAL O MAYOR que la pantalla
// en pixeles reales: el navegador solo tiene que reducir un poco, nunca ampliar.
// (Si se cambia fondo.jpg o Casa.png hay que regenerarlas.)
const WIDTHS = [1800, 2200, 2600, 3000, 3400, 4000, 4800, 5600]

function pickWidth() {
  if (typeof window === 'undefined') return null
  const target = Math.max(window.innerWidth, window.screen?.width || 0) * (window.devicePixelRatio || 1)
  return WIDTHS.find((width) => width >= target) ?? null
}

const width = pickWidth()
export const FONDO_SRC = width ? `/scene/fondo-${width}.jpg` : '/fondo.jpg'
export const CASA_SRC = width ? `/scene/casa-${width}.png` : '/Casa.png'
