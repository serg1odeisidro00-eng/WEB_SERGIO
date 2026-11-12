# Pendientes para terminar la web M047

Lista de trabajo acordada con Sergio (12-nov-2026). Ir tachando (`[x]`) lo que
se haga y anotar la decisión en el historial de `CLAUDE.md`.

## Lista de Sergio (cosas que hace él)

- [ ] Conectar m047.es a Vercel (Claude le guía paso a paso).
- [ ] Mandarse un correo de prueba a contacto@m047.es e info@m047.es.
- [ ] Revisar la web en su iPhone (Safari): personajes, sonido, botón atrás.
- [ ] Tras conectar el dominio: Google Search Console y perfil de empresa en Google.
- [ ] Revisar las traducciones EN/IT (o pasárselas a alguien nativo).
- [ ] Pedir 1-2 frases de opinión a clientes reales.
- [ ] Copia de seguridad de los .af fuera de Drive.
- [ ] Activar los avisos por correo de Vercel si falla una publicación.

## 0. Imprescindible antes de difundir la web

- [ ] **Conectar m047.es a Vercel** (proyecto `web-sergio`): Vercel → Settings →
      Domains → añadir `m047.es` y `www.m047.es`; en Hostinger, DNS con los
      registros que indique Vercel. Hoy m047.es enseña la web antigua del amigo.
      Tras conectarlo, comprobar que `sitemap.xml`, `robots.txt` y las vistas
      previas usan m047.es (`scripts/prerender.mjs` toma el dominio de producción).
- [ ] **Comprobar los buzones** `contacto@m047.es` (formulario de Contacto) e
      `info@m047.es` (Academia, CV, prensa): que existan en Hostinger y lleguen.
- [ ] **Probar en iPhone / Safari**: personajes que "flotaban" (arreglo del
      11-nov sin confirmar), sonido al pulsar "Pulsa para entrar", botón atrás.

## 1. Versión móvil (prioridad alta)

Problemas actuales (notas de Sergio):
- La portada se abre a mitad de la escena: es más ancha que la pantalla.
- El botón de menú queda fuera de pantalla, a la derecha.
- No hay ninguna pista de que se puede deslizar o tocar.
- Las zonas pequeñas son difíciles de pulsar; el menú sencillo debería mandar.

Idea de Sergio: en móvil, todos los personajes se mueven a la vez y en bucle
(sin tener que pasar el dedo), y el menú sencillo es el protagonista.

Opciones (ver detalle en la conversación; elegir una con maquetas antes de programar):
- **A. Recorte**: la escena centrada en el edificio ocupando el ancho de la
  pantalla, laterales recortados, botón de menú fijo y visible, animaciones en
  bucle. Rápido; no necesita dibujos nuevos.
- **B. Escena + menú tipo app** (recomendada para empezar): arriba la escena
  recortada como "cabecera viva" con todo animado; debajo, la lista grande de
  secciones (Proyectos, Estudio, Contacto, Noticias, Academia, Tienda) con el
  estilo de la cartela. Navegación cómoda con el pulgar.
- **C. Escena vertical rediseñada**: Sergio redibuja la sección del bloque en
  formato vertical (9:16) reutilizando personajes. El mejor resultado, pero
  necesita trabajo de dibujo. Se pueden hacer antes maquetas para decidir.
- **D. Deslizar guiado**: escena completa con desplazamiento lateral, empieza
  en el edificio, botón de menú fijo y una mano/flecha que indica "desliza".
  La más barata, pero la menos cómoda.

Además, en todas: revisar páginas interiores en móvil (proyectos, noticias,
academia, contacto, legales), tamaños de letra, cabecera y menú.

## 2. Proyectos

- [x] Al final de cada proyecto: **proyecto anterior / siguiente** y un enlace
      **"Cuéntanos tu proyecto"** que lleve al formulario de Contacto.
- [x] **Proyectos destacados**: Nave 16, Playground, Capilla y Stand efímero salen primero.
- [ ] MITECO 2: imagen de tarjeta e icono propios (ahora: recorte de los arcos
      rojos y el icono de MITECO).
- [ ] Cartel de teatro / UFV: Sergio enviará el documento bueno de Affinity
      para comprobar que el texto rehecho coincide.
- [ ] Del diseño `Sección_228_JUNTO copia.svg` (pendientes antiguos): letrero
      del cartel Diseño gráfico, nuevo logo, foto nueva del kart, cartel
      Escenografía. Confirmar con Sergio si siguen pendientes.
- [ ] Opiniones de clientes: solo reales (no inventar); pedirlas a Plantae, Soldrink, UFV…

## 3. Estudio y contenido

- [x] Estudio: pie de foto (José Luis de Isidro con su hijo Sergio).
- [ ] Revisión de traducciones EN/IT (noticias, academia, proyectos, legales).
- [ ] Academia: precios orientativos ("desde…") si Sergio quiere.
- [x] Portfolio en PDF descargable (`public/m047-portfolio.pdf`, se regenera con
      `node scripts/build-portfolio.cjs [portada.jpg]` cuando cambien proyectos).
- [ ] Tienda online: contenido o fecha (ahora "Próximamente").
- [ ] Noticias nuevas de vez en cuando.
- [ ] Newsletter sencilla (Brevo/Mailchimp), opcional.

## 4. Google y difusión (después del punto 0)

- [ ] Google Search Console: verificar m047.es y enviar el sitemap.
- [ ] Perfil de empresa en Google (Google Business Profile) como estudio en Madrid.
- [ ] Revisar estadísticas en Vercel → Analytics (ya activadas).

## 5. Técnico

- [ ] Portada más ligera: fotogramas de animaciones a WebP sin pérdida
      (sin tocar `fondo.jpg` ni `Casa.png`, que van siempre a resolución completa).
- [x] Página de error propia ("Aquí no hay nada… vuelve al edificio").
- [ ] Avisos de Vercel por correo si falla una publicación.
- [ ] Copia de seguridad de los `.af` fuera de Drive.

## 6. Ideas de diseño (opcional)

- [ ] Pequeñas sorpresas en la portada: un personaje que reacciona al pasar el
      ratón, ambiente distinto de noche, personaje de temporada (Navidad, verano…).

## Decisiones ya tomadas (no repetir)

- Buscador: se queda como está.
- Páginas legales sin datos personales; añadir nombre y NIF solo si se vende por la web.
- Transición del andamio: fundido actual.
- `fondo.jpg` y `Casa.png`: nunca versiones reducidas.
