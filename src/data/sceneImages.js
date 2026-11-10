// Fondo y casa de la portada en varios tamanos ya reducidos con buena calidad
// (public/scene/). Se elige el mas cercano a la pantalla para que las lineas
// finas no se difuminen al reducir el original de 7537 px en el navegador.
const WIDTHS = [1600, 2000, 2400, 2800, 3200, 3600, 4200, 5000]

// Proporcion del dibujo original (fondo.jpg 7537 x 4500).
export const SCENE_IMAGE_RATIO = 7537 / 4500

// El dibujo del fondo termina 21 px antes del borde derecho del archivo
// original: se estira ese 0,28 % para que nube y casas lleguen al recuadro.
export const FONDO_STRETCH = 7537 / 7516

function pickWidth() {
  if (typeof window === 'undefined') return 2800
  const screenWidth = Math.min(window.innerWidth, window.screen?.width || window.innerWidth)
  const target = screenWidth * (window.devicePixelRatio || 1)
  return WIDTHS.find((width) => width >= target * 0.95) ?? WIDTHS[WIDTHS.length - 1]
}

const width = pickWidth()
export const FONDO_SRC = `/scene/fondo-${width}.webp`
export const CASA_SRC = `/scene/casa-${width}.webp`
