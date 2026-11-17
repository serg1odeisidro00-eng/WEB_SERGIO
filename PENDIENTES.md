# Pendientes para cerrar la web M047

Lista de cierre acordada con Sergio (16-nov-2026). Ir tachando (`[x]`) lo que
se haga y anotar la decisión en el historial de `CLAUDE.md`.
Sergio usa macOS Tahoe 26.1 (Safari actual: WebP sin problema).

## A. Imprescindible para cerrar (en este orden)

- [x] **A1. m047.es conectado a Vercel** (16-nov). Nameservers de Hostinger
      (cosmos/nova.dns-parking.com), A `@` 216.198.79.1, CNAME `www`
      d1256a63a3f464dd.vercel-dns-017.com, 2 TXT `_vercel`; correo intacto.
      Principal: https://www.m047.es (m047.es redirige 308). `www` puede salir
      unas horas como "DNS Change Recommended" mientras se extiende el cambio.
- [ ] **A2. Retirar la web antigua**: mensaje enviado al amigo (16-nov) para que
      quite m047.es de su Vercel y borre su proyecto (contenido duplicado).
- [x] A3. Comprobación final (16-nov): 108 direcciones del sitemap en
      www.m047.es responden 200 y en su idioma, sin errores; canonical, vista
      previa y ficha para Google con www.m047.es.
- [x] A4. Correos probados por Sergio (16-nov): llegan y salen bien.
- [x] **A5. Prueba en su iPhone** (hecha 16-nov) (Sergio): personajes sin "flotar", sonido al
      entrar, menú, bajar al recorrido por plantas, botón atrás, ticket del teléfono.
- [x] A6. Firma de correo nueva puesta en Hostinger (https://www.m047.es/firma.html).

## B. Contenido que solo puede dar Sergio

- [x] B1. Traducciones EN/IT revisadas por Sergio y aplicadas (16-nov). Documento con todos los textos ES/EN/IT: https://claude.ai/artifact/WPJz3ZoFf8kQq1xEhqFQMw
- [x] B2. MITECO 2: mismos icono y foto que MITECO; no sale en "Todos" (5×5 = 25), solo en Paisajismo.
- [x] B3. Cartel de teatro / UFV: rótulo manuscrito original (de JUNTO copia) en las dos láminas.
- [x] B4. De JUNTO copia solo quedaba el cartel (hecho en B3); el resto ya no.
- [x] B5. Tienda: "Próximamente" + botón "Avísame cuando abra" (mailto info@).
- [x] B6. Academia: se queda "Tarifas a consultar".
- [ ] B7. Portfolio en PDF diseñado por Sergio (Claude lo enlaza después).
- [ ] B8. Opiniones reales de clientes (no inventarlas).

## C. Sugerencias de Claude para dejarlo cerrado

- [x] C1. Guía corta "cómo pedir cambios" (`docs/GUIA.md`): qué mandar para
      añadir un proyecto o una noticia (lámina, foto de tarjeta, diagrama,
      textos ES, datos), en qué carpeta de Drive y con qué nombres.
- [x] C2. Tienda: mientras no exista, o bien quitarla del menú, o bien cambiar
      "Próximamente" por "Avísame cuando abra" (correo con mailto).
- [x] C3a. Google Search Console: dominio m047.es verificado y sitemap
      enviado (16-nov: «Correcto», 108 páginas).
- [x] C3b. Perfil de Empresa en Google creado (16-nov): «Estudio M047», zona
      Madrid, 9-19 h, sin dirección pública. Verificación en curso (hasta 5 días).
      Material: `docs/perfil-google/` (ficha, portada, fotos; logo: el de Sergio).
- [x] C4. Correo de Hostinger bien configurado (SPF/DKIM) — ya estaba (16-nov) para que las
      respuestas a clientes no acaben en spam.
- [x] C5. Analytics activado en Vercel (16-nov); mirarlo al mes de difundir la web.
- [x] C6. Copia de los `.af` fuera de Drive, avisos de Vercel, renovación
      automática del dominio, 2FA y enlace en redes (Sergio, 17-nov).
- [x] C7. Versiones de la web en /en y /it (16-nov, pendiente de publicar) para que Google también
      la enseñe en inglés e italiano (hoy Google solo ve el español).
- [x] C9. Páginas legales en inglés e italiano (16-nov; prevalece el español).
- [ ] C8. Opcional (diseño): sorpresas en la portada (personaje de temporada,
      ambiente de noche), newsletter, noticias nuevas cada cierto tiempo.

## Hecho (resumen)

Portada de ordenador y móvil (mezcla A + D, todo animado, recorrido por
plantas), pantalla de carga, sonido (también en iPhone en silencio), proyectos
(tipografías, diagramas y fotos del diseño, 2 departamentos, destacados,
anterior/siguiente, volver), buscador, noticias, academia, contacto con
formulario y WhatsApp, estudio, legales sin datos personales, página de
error, direcciones por página, SEO y vista previa al compartir, estadísticas,
accesibilidad, velocidad (andamio visible 10,5 s → 4,7 s con 4G; láminas y
fotos ligeras en móvil; sonido solo en la portada).
Maquetas de móvil en `docs/movil/`; lienzo de diseño:
https://claude.ai/artifact/82eCiRCW6zDGnjgwBW9rgY

## Decisiones ya tomadas (no repetir)

- Buscador: se queda como está.
- Páginas legales sin datos personales; nombre y NIF solo si se vende por la web.
- Transición del andamio: fundido actual.
- `fondo.jpg`: no tocarlo. `Casa`: siempre a resolución completa (Casa.webp es
  la misma imagen sin pérdida).
- Opiniones de clientes: nunca inventadas.
- Cartel del cuadro (Diseño de interiores): letra negra también en reposo.
