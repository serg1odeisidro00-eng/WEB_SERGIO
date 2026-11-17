// Imagenes de la portada (originales a resolucion completa; Sergio rechazo las
// versiones reducidas: se veian pixeladas).
// Proporcion del dibujo original (fondo.jpg 7537 x 4500).
export const SCENE_IMAGE_RATIO = 7537 / 4500

// Ya no se estira en pantalla: el borde derecho se corrigio en el propio fondo.jpg.
export const FONDO_STRETCH = 1

// Fondo (aprobado por Sergio el 17-nov-2026):
// - ordenador: fondo_v2.jpg = fondo.jpg con los mismos pixeles (jpegtran -optimize
//   -progressive), 1,21 -> 0,84 MB. fondo.jpg se queda como original.
// - movil (<= 700 px): fondo_movil.jpg a 3800 px; en un iPhone el fondo se dibuja
//   a ~3200-3500 px reales, asi que tiene mas pixeles de los que se ven (0,32 MB).
// Si se cambia el fondo, CAMBIAR EL NOMBRE de los archivos (cache de 1 h + 1 dia).
export const FONDO_DESKTOP_SRC = '/fondo_v2.jpg'
export const FONDO_MOBILE_SRC = '/fondo_movil.jpg'
export const FONDO_SRC = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 700px)').matches
  ? FONDO_MOBILE_SRC
  : FONDO_DESKTOP_SRC
// Casa.webp = Casa.png en WebP sin perdida (mismos pixeles, misma resolucion, 1,1 MB en vez de 2,8 MB).
// Casa: en el movil se dibuja a ~3200-3500 px reales; Casa_movil.webp (3800 px,
// sin perdida de compresion) tiene mas pixeles de los que se ven. Ordenador: igual que antes.
export const CASA_DESKTOP_SRC = '/Casa.webp'
export const CASA_MOBILE_SRC = '/Casa_movil.webp'
export const CASA_SRC = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 700px)').matches
  ? CASA_MOBILE_SRC
  : CASA_DESKTOP_SRC
// OJO: CASA_SRC/FONDO_SRC solo sirven para precargar. Para PINTAR se elige con
// isMobile en App.jsx: si la web se abre estrecha y se agranda, el ordenador
// debe usar siempre los originales (si no, se veria pixelado).
