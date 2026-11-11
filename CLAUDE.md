# Web de Sergio de Isidro — notas del proyecto

Notas para retomar el trabajo en cualquier sesión nueva. Mantener al día cuando
cambie algo importante.

## Quién es quién

- **Sergio** es el dueño de la web y el diseñador. Diseña todo en Affinity y
  dirige los cambios. **No es programador**: explicar los pasos técnicos en
  sencillo, en español, sin dar por hecho conocimientos de GitHub o Vercel, y
  avisar antes de cualquier paso que pueda romper algo.
- El código lo empezó un amigo programador (cuenta de GitHub
  `viniciustaliari`, repo `viniciustaliari/WEB_SERGIO`). Ese repo es el
  original, pero **ya no es el que se publica**.
- El repo de trabajo es **`serg1odeisidro00-eng/WEB_SERGIO`** (cuenta de
  GitHub de Sergio). Es una copia del de su amigo hasta el commit `4583bac`
  ("add pajaros", 6-nov-2026); a partir de ahí los cambios se hacen aquí.

## Publicación (Vercel)

- Vercel publica automáticamente la rama **`master`** de
  `serg1odeisidro00-eng/WEB_SERGIO` en https://web-sergio-orcin.vercel.app
  (tarda 1-2 min tras cada push).
- Sergio tiene un **dominio propio en Hostinger** que todavía no apunta a
  Vercel (pendiente de conectar: añadir el dominio en Vercel → Settings →
  Domains y poner en el DNS de Hostinger los registros que indique Vercel).
- El entorno cloud `WEB_SERGIO` permite abrir `web-sergio-orcin.vercel.app`
  para comprobar cada publicación con curl/Playwright.

## Forma de trabajar con Sergio

1. Sergio pide el cambio (texto + captura o "ficha" en PDF, y los archivos
   exportados de Affinity, normalmente vía Google Drive).
2. Se programa en la rama de trabajo de la sesión y se prueba en local
   (`npm run dev`, captura con Playwright para enseñársela).
3. Sergio da el visto bueno.
4. Push a la rama de trabajo y luego a `master` (fast-forward) para publicar.
   Cambios grandes o secciones nuevas: enseñar antes una versión de prueba.
5. Comprobar que se ha publicado en Vercel.

Un cambio (o un grupo pequeño de cambios relacionados) por commit, con mensaje
claro en español.

## Cómo recibir los diseños

- Sergio exporta desde Affinity en **SVG** (o PDF) y lo sube a la carpeta de
  Google Drive compartida (`1fD1o40RKB5Req2_x6XQTMwPwH-xdvywO`; subcarpeta
  "Sección Noticias" para noticias). Los `.af` no se pueden abrir fuera de Affinity.
- Los SVG pesan decenas de MB (llevan las fotos dentro): no usar el conector de
  Drive para descargarlos, sino curl:
  `https://drive.usercontent.google.com/download?id=<ID>&export=download&confirm=t`
  (el entorno `WEB_SERGIO` permite drive.google.com y drive.usercontent.google.com).
- Para verlos: renderizar con Playwright (ver la fuente instalándola antes en
  `~/.fonts` desde `public/fonts/condensed`). Para extraer texto y posiciones:
  cargar el SVG en Chromium y leer `getBoundingClientRect` de `<text>` y de los
  grupos `g[serif:id]`. Para las imágenes: renderizar el SVG sin `<text>` a 3000 px
  de ancho y recortar.
- Medidas del diseño: la mesa de trabajo = ancho de la ventana, así que las
  proporciones se pasan a CSS en `vw` (con `clamp` para móvil).

## Tecnología

- React 19 + Vite + Tailwind 4 + GSAP para las animaciones.
- `npm run dev` (local), `npm run build` (comprobar que compila).
- Idiomas: es / en / it (`src/context/LanguageContext.jsx`,
  `src/content/italianProjectContent.js` y objetos `copy` en cada página).

## Estructura

- `src/App.jsx`: la portada (escena del edificio en sección). Define capas,
  personajes animados, zonas clicables (`sceneHotspots`) y las animaciones GSAP.
- `src/components/SceneArtboard.jsx`: monta las capas de la escena en orden.
- `src/data/sceneFrames.js`: lista de fotogramas de cada animación
  (`public/Frames/<nombre>/N.png`).
- `src/components/AppPageRouter.jsx`: navegación a las demás páginas
  (proyectos, estudio, academia, contacto, tienda, noticias…).
- `src/components/*ProjectPage.jsx`: una página por proyecto.
- Noticias: contenido (es/en/it) en `src/content/news.js`, páginas
  `NewsPage.jsx` (cuadrícula de 3 columnas, estilo cpinos.com/noticias) y
  `NewsArticlePage.jsx` (columna central del 52 %). Imágenes en
  `public/noticias/`. Cada noticia es una página `news-N` en el router.
- Academia: contenido (es/en/it) y email de destino en `src/content/academy.js`,
  página `AcademyPage.jsx`. El formulario no usa servicios externos: valida y
  abre el correo del alumno (`mailto:`) con la solicitud escrita.
- Sonido de la portada: `src/lib/sceneAudio.js` (Web Audio). Se desbloquea en
  la primera interacción del visitante (los navegadores bloquean el audio hasta
  entonces), bucle continuo de `public/sounds/ambiente_m047.mp3` (pista de
  Sergio con fundido cruzado final→inicio, 128 kbps) y timbre
  `public/sounds/telefono_timbre.mp3` (2 timbres, ~8,6 s).
- `public/`: imágenes. `fondo.jpg` (7537×4500) y `Casa.png` se usan a resolución
  completa (Sergio probó versiones reducidas/enfocadas y las rechazó: se veían
  borrosas). El fondo se estira un 0,28 % (`FONDO_STRETCH` en
  `src/data/sceneImages.js`, con `maxWidth: none` por la regla de Tailwind)
  porque su dibujo termina 21 px antes del borde derecho. Referencia gráfica del
  menú: Drive `Sección_228_M3(SIN FRAMES-CON MENÚ).png`.

### Capas de la portada (de atrás a delante, por z-index)

- `fondo.jpg` (sin z) → edificio izquierdo `edificio_izquierda.svg` (z-5,
  dentro de `.scene-overlay`) → farola `farola.png` (z-6, mismo sistema de
  coordenadas que el fondo) → casa `Casa.png` (z-10) → personajes (z-20/30/40/50) →
  cartela del plano (z-55) → menú (z-110).
- Recorte (versión E, 10-nov-2026): la escena completa (`.scene-artboard`) se ve
  a través de `.scene-frame`, que oculta el 5 % de arriba y el 3,12 % de abajo
  (`SCENE_CROP_TOP/BOTTOM` en `src/hooks/useSceneSize.js`). La cartela sube con
  el recorte y el menú (`.scene-menu`) ocupa solo la parte visible; su panel se
  dibuja a tamaño de referencia (dibujo de 1387 px) y se escala con el dibujo
  para casar siempre con la cartela. El "piquito" bajo la escalera del sótano
  se borró de `public/Casa.png`.
- Ojo: `.scene-overlay` tiene márgenes (`inset: 0.35rem 7% 14% 7%`), así que
  las capas dentro de él usan porcentajes distintos a los del fondo. Para
  alinear algo con `fondo.jpg`, ponerlo directamente en el artboard.

## Historial de decisiones

- 2026-11-09: la farola de detrás de la furgo estaba dibujada en `fondo.jpg`
  pero la tapaba `edificio_izquierda.svg`. Se recortó como `public/farola.png`
  y se puso como capa propia encima del edificio.
- El estudio se llama "M047" (así sale también en los diseños de noticias);
  "228" es el número del bloque de Aluche que inspira la portada.
- 2026-11-10: sección Noticias con 3 noticias (diseños Sección_228-Noticia1-3 y
  Sección_228_MenuNoticias). Traducciones EN/IT hechas por Claude, pendientes
  de revisión de Sergio. En la noticia 2 del diseño había un bloque copiado de
  la noticia 1 ("Animación frame a frame…") que se ha omitido.
- `m047.es` (Hostinger) apunta todavía al Vercel del amigo; pendiente de
  pasarlo al proyecto `web-sergio` de Sergio cuando la web esté lista.
- 2026-11-10: menú interior a tamaño intermedio y nuevo orden: Proyectos,
  Estudio, Contacto, Noticias, Academia, Tienda online (Academia es la 05).
- 2026-11-10: Academia. Sergio no está dado de alta como autónomo todavía:
  formulario por `mailto:` (sin terceros ni datos guardados en la web) con una
  nota de uso de datos; las páginas legales (aviso legal, privacidad, cookies)
  quedan pendientes para cuando tenga los datos fiscales. Precios: "a consultar".
- 2026-11-10: nube de arriba a la derecha bajada en `fondo.jpg` para dejar
  hueco al botón del menú (más grande, negro, sobre blanco). Marco exterior negro. Farola rehecha
  (poste relleno de blanco, cables opacos). Teléfono: primer aviso a los 10 s
  y luego cada 40 s. Teléfono clicable (`tel:`) en Contacto y en el pie.
- 2026-11-11: `fondo.jpg` venía en CMYK sin perfil y salía azulado; se pasó a
  gris neutro (escala de grises) y el sol a #CCCCCC (dato de Sergio). La farola
  se volvió a recortar de ese fondo neutro para que los cables casen en color.
- 2026-11-11: en Safari los personajes "flotaban" sobre sus suelos (en Chrome
  no). Las cajas `*-anchor` usan `aspect-ratio`; ahora App.jsx les fija la
  altura en px (ancho / proporción) en un `useLayoutEffect`. Pendiente de que
  Sergio confirme en Safari. Aquí no hay WebKit para probar (descarga bloqueada).
- 2026-11-11: animaciones continuas (árbol, humo, pájaros: siempre en marcha,
  "como vídeo"). Fuentes en Drive > "Animaciones continuas" (.ai = PDF con una
  capa por fotograma; se separan con `pypdf` poniendo cada OCG en ON y el resto
  en OFF y renderizando con `pdftocairo -transp`). Árbol sustituido por
  `Árbol 07.ai` (con raíces), 12 fps en bucle. Humo a 12 fps (antes 4 fps).
  Humo estático borrado de `fumador.png`. Teléfono: sin relleno blanco entre
  cable y cuerpo. Pájaros: pendiente del vídeo de referencia.
- 2026-11-11 (2): pájaros = `Pájaros copia.ai` (34 fotogramas, el recorrido
  va dibujado; `public/Frames/pajaros/`), a 4 fps, una pasada cada vez que en
  la pista ambiente suenan pájaros (`BIRD_AUDIO_CUES` en App.jsx, segundos 1 y
  32, a confirmar por Sergio; sin sonido, a los 1,5 s y cada 45 s). Árbol a
  8 fps y humo a 12 fps, ambos con 2 s de pausa entre vueltas. Árbol subido
  para que su línea de tierra quede sobre el suelo.
- 2026-11-11 (3): pájaros a 7 fps, estirados en horizontal (fotogramas
  dibujados en A4) y colocados para que el hueco de la hoja (40-66 % del ancho)
  caiga detrás del edificio principal; al final se desplazan un 8 % para salir
  por el borde derecho. Árbol en capa propia por detrás de `Casa.png` (poste,
  cartel y línea de tierra delante) con franja de tierra rellena de blanco.
  Árbol 0,5 s de pausa; humo continuo. Script de relleno del teléfono:
  scratchpad `tools/phone_fill.py` (zona del auricular = 30 % superior).
