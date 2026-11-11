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
- `public/`: imágenes. `fondo.jpg` (7537×4500) y `Casa.png` se usan SIEMPRE a
  resolución completa: Sergio ha rechazado dos veces las versiones reducidas
  (se ven pixeladas). No volver a intentarlo. El borde derecho del fondo se
  corrigió estirando solo la franja x>7100 dentro de `fondo.jpg` (estirar toda
  la imagen desalineaba el gris con Casa.png). Referencia gráfica del
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

## Siguientes pasos

Ver `PENDIENTES.md` (lista acordada con Sergio, incluida la versión móvil).

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
- 2026-11-11 (4): humo más oscuro (líneas ×0,55, alfa ×1,35). Árbol: vegetación
  baja rellena de blanco y extremos de la línea de tierra bajados hasta el
  suelo. Pájaros: solo al segundo 1 de la pista (confirmado por Sergio), 9 fps,
  deriva suave final con `sine.in`. Si no convencen, volver al commit anterior.
- 2026-11-11 (5): pájaros rehechos: 4 posturas de aleteo sacadas de
  `Pájaros copia.ai` (alineadas por el pico, `public/Frames/pajaro/0-3.png`) y
  vuelo continuo de 8 pájaros montado en código (`createBirdFlight` en App.jsx):
  cruzan de borde a borde por detrás de los edificios, aleteo ~12 fps.
  Sonido: pantalla ENTRAR al terminar de cargar (el clic desbloquea el audio en
  Safari); si el navegador ya permite audio se entra directo. "Entrar sin
  sonido" apaga el sonido.
- 2026-11-11 (6): pantalla de carga = la portada con el andamio
  (`public/andamio.webp`, de Drive `Pantalla Carga/Sección_228_carga.svg`,
  cartel antiguo "228" quitado y lona con "ESTUDIO M047") delante del edificio
  (`scene-scaffold` en SceneArtboard). Carga en 2 fases: fondo+casa+andamio+
  árbol+pájaros primero, resto con "CARGANDO n %"; luego "PULSA PARA ENTRAR"
  (clic en cualquier sitio = desbloquea sonido) y el andamio baja 1,8 s.
  Pájaros: 13, más bajos (20-40 %), señales de audio en s 1 y 27, sin sonido
  cada 28 s. Árbol a 6 fps.
- 2026-11-11 (7): pantalla de carga rehecha como pantalla aparte (como la
  imagen de Sergio): fondo, edificios laterales, farola, árbol, cartela y
  andamio; edificio, personajes, carteles y menú ocultos (`.scene-frame.is-loading`)
  y aparecen con fundido de 1,4 s al pulsar. Andamio con antena y bloque
  originales; solo se quitó el cartel "228" y se ve el M047 de Casa.png detrás
  (`scene-scaffold-behind`, recorte de la parte alta). Pájaros solo tras entrar,
  15 (2 bajos por la ventana del ordenador), algo más lentos.
- 2026-11-11 (8): pantalla de carga ajustada a la imagen de referencia de
  Sergio: cartel original del andamio con "M047" en vez de "228"; capa blanca
  (`scene-loading-ground`, z 7) que tapa el contorno del edificio que trae
  `fondo.jpg` y lo de debajo del suelo, y línea de tierra con escalón (z 51,
  izquierda al 83,15 %, derecha al 74,75 %, escalón en x 69 %). Menú y marco
  negro visibles en la carga. Ojo: clases Tailwind arbitrarias (`z-[n]`) pegadas
  a `${...}` en plantillas no se generan; usar `style`. Pájaros bajos al
  36,5-39 % (mitad alta de la ventana del ordenador).
- 2026-11-12: `fondo.jpg` traía el contorno del edificio principal sin relleno
  (líneas que no coincidían con Casa.png y salían dobles). Se borraron del fondo
  solo donde Casa.png es opaca (margen ~12 px, zona x 24-70 %, y >17 %); copia
  previa en scratchpad `fondo_before_ghost.jpg`. Así la pantalla de carga ya no
  necesita capa blanca. Andamio: barras por delante de las letras del cartel
  M047. Línea de tierra de la carga: izquierda 0-45 % al 83,15 %, derecha desde
  detrás del andamio (60 %) al 74,75 %, sin escalón. Árbol: línea de tierra
  cortada a la derecha del poste de luz.
- 2026-11-12 (2): transición del andamio: Sergio se queda con el fundido
  actual (las maquetas de desmontaje/lona caída le parecieron demasiado).
  Quitado `scene-scaffold-behind` (traía cabeza de la chica y relleno blanco);
  restaurada en `fondo.jpg` la franja superior (y < 21,5 %) desde
  `fondo_before_ghost.jpg` porque el borrado se comía parte del sol.
- 2026-11-12 (3): Paisajismo. Chica de la regadera recortada de Casa.png a
  `public/Frames/regadera/0.png` (reposo) + 1-6 (Drive "Paisajismo", líneas
  oscurecidas, cartel de madera por delante), capa dentro de la casa
  (`houseExtras`, x 50,89 % y 14,51 % ancho 3,575 % de Casa). Secuencia
  1-6-1 (12) a 8 fps con 0,35 s de pausa; al salir vuelve a 0. Señor del
  taburete: fotogramas 7 y 8 sustituidos por Frame 7/8 de JUNTO copia.
  Chica de la maceta: pausas cortas (0,6 s arriba, 0,8 s al final).
  "Ajardinamiento" → "Paisajismo" en textos (MITECO, Academia). Copias:
  scratchpad `Casa_before_regadera.png`, `fondo_before_regadera.jpg`.
- 2026-11-12 (4): regadera: Sergio prefiere los fotogramas, el fondo y el
  edificio izquierdo tal como estaban en (3) (sin engrosar líneas ni borrar
  líneas sueltas). Solo cambia la velocidad: 5 fps y 0,15 s de pausa.
  Reposo (0.png) = copia de 1.png: el dibujo original la tenía duplicada.
- 2026-11-12 (5): láminas de proyectos optimizadas sin tocar el diseño
  (`public/` ~247 → ~111 MB; cada deploy de Vercel llenaba el almacenamiento
  gratuito). PNG → WebP q92 (máx. 2400 px de ancho); las muy altas (límite
  WebP 16383 px) → JPEG q90 a 1800 px sobre blanco (miteco_2, capilla,
  bodega, nave_16). SVG con fotos dentro: fotos reducidas a su tamaño visible
  a 2400 px. Borrados 6 SVG que no se usaban. Originales en scratchpad
  `opt/svg_backup` (y en git, commit anterior).
- 2026-11-12 (6): sofá de Diseño de interiores: avance lineal sincronizado con
  los pasos (fotogramas 3-14), 4 fps, recorrido 41,8 → 50 %, pausa 1,2-2,5 s.
  Cartel del cuadro: Sergio prefiere los fotogramas originales (sin cambios).
- 2026-11-12 (7): mejoras técnicas tras una revisión externa (que miraba
  m047.es, todavía con la web antigua del amigo):
  - Direcciones propias por página (`src/lib/routes.js`): /proyectos,
    /proyectos/<id>, /estudio, /contacto, /noticias/<n>, /academia, /tienda,
    /aviso-legal, /privacidad, /cookies. Si se entra directo a una página, la
    portada no se descarga hasta ir a ella.
  - SEO y vista previa al compartir: `src/content/pageMeta.js` (título,
    descripción e imagen de cada página; al añadir proyecto o noticia, añadir
    su entrada) + `scripts/prerender.mjs` (tras `vite build` crea un
    index.html por página, sitemap.xml y robots.txt; usa el dominio de
    producción de Vercel). Imágenes de vista previa en `public/og/`.
  - Idioma recordado (localStorage) y `lang` del HTML. Italiano con acentos.
    Estudio en italiano. "Próximamente" de la tienda traducido.
  - Contacto: formulario "Cuéntanos tu proyecto" (mailto, como Academia) y
    botón de WhatsApp (`src/content/contact.js`).
  - Páginas legales (`src/content/legal.js`, `LegalPage.jsx`); falta NIF.
  - Accesibilidad: zonas de la portada y tarjetas de proyecto con teclado.
  - Favicon de 10 KB (`favicon.ico` + `apple-touch-icon.png`), fuentes en woff2.
  - Estadística: `@vercel/analytics` (sin cookies); Sergio debe activarla en
    Vercel > proyecto > Analytics.
- 2026-11-12 (8): lámina Capilla: erratas corregidas sobre la maqueta de
  Sergio (texto rehecho con Liberation Sans = Arial, mismo tamaño y
  justificado con guiones; fichas Artemide y LITESTAR copiadas del PDF
  original `Capilla1.pdf` de Drive a la misma escala). Script y original en
  scratchpad `capfix/`. Páginas legales sin datos personales (decisión de Sergio).
- 2026-11-12 (9): páginas de proyecto: tipografía según Sergio (título 100 pt
  ≈ 3,6vw negrita en una sola línea —`fitProjectTitles` en AppPageRouter lo
  reduce si no cabe—, localización 35 pt ≈ 1,26vw negrita, texto 36 pt ≈
  1,3vw normal). Cartel de teatro/UFV: texto SVG rehecho (centrado, Arial).
  Enlaces de Eneo, Packaging, Ilustraciones, PG y Álbum corregidos. Proyectos
  en 2 departamentos (`category` puede ser lista): Álbum (dirección de arte +
  gráfico); Stand efímero, Espacio expositivo y Playground (escenografía +
  interiorismo). MITECO 2 es un proyecto aparte (/proyectos/miteco-2), sin
  botones de versión. "Hargok" (no Harvok). Marcos blancos recortados en
  Boat, Ilustraciones, PG y El Bosque. Buscador: Sergio lo deja como está.
