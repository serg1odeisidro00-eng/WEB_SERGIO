# Pendientes para cerrar la web M047

Lista de cierre acordada con Sergio (16-nov-2026). Ir tachando (`[x]`) lo que
se haga y anotar la decisión en el historial de `CLAUDE.md`.
Sergio usa macOS Tahoe 26.1 (Safari actual: WebP sin problema).

## A. Imprescindible para cerrar (en este orden)

- [ ] **A1. Conectar m047.es a Vercel** (Sergio + Claude guiando). Vercel →
      proyecto `web-sergio` → Settings → Domains → añadir `m047.es` y
      `www.m047.es`; en Hostinger → DNS, poner los registros que diga Vercel.
      Hoy m047.es enseña la web antigua del amigo.
- [ ] **A2. Retirar la web antigua**: pedir al amigo (viniciustaliari) que borre
      o desactive su proyecto de Vercel, para que no quede una copia vieja
      publicada en otra dirección (Google la vería como contenido duplicado).
- [ ] **A3. Comprobación final tras A1** (Claude): sitemap, robots, vistas
      previas al compartir y ficha para Google con m047.es; repaso completo de
      todas las páginas en ordenador y móvil.
- [ ] **A4. Correos** (Sergio): mandarse una prueba a `contacto@m047.es` e
      `info@m047.es` y comprobar que llegan (formularios de Contacto y Academia).
- [ ] **A5. Prueba en su iPhone** (Sergio): personajes sin "flotar", sonido al
      entrar, menú, bajar al recorrido por plantas, botón atrás.

## B. Contenido que solo puede dar Sergio

- [ ] B1. Revisar traducciones EN/IT (o pasárselas a alguien nativo).
- [ ] B2. MITECO 2: foto e icono propios (ahora usa el de MITECO).
- [ ] B3. Cartel de teatro / UFV: documento bueno de Affinity para comparar.
- [ ] B4. De `Sección_228_JUNTO copia.svg`: ¿siguen pendientes el letrero de
      Diseño gráfico, el logo nuevo, la foto nueva del kart y el cartel de
      Escenografía?
- [ ] B5. Tienda online: decidir (ver sugerencias C2).
- [ ] B6. Academia: ¿precios "desde…" o se queda "a consultar"?
- [ ] B7. Portfolio en PDF diseñado por Sergio (Claude lo enlaza después).
- [ ] B8. Opiniones reales de clientes (no inventarlas).

## C. Sugerencias de Claude para dejarlo cerrado

- [ ] C1. Guía corta "cómo pedir cambios" (`docs/GUIA.md`): qué mandar para
      añadir un proyecto o una noticia (lámina, foto de tarjeta, diagrama,
      textos ES, datos), en qué carpeta de Drive y con qué nombres.
- [ ] C2. Tienda: mientras no exista, o bien quitarla del menú, o bien cambiar
      "Próximamente" por "Avísame cuando abra" (correo con mailto).
- [ ] C3. Tras A1: Google Search Console (enviar sitemap) y perfil de empresa
      en Google Maps como estudio en Madrid.
- [ ] C4. Correo de Hostinger bien configurado (SPF/DKIM) para que las
      respuestas a clientes no acaben en spam.
- [ ] C5. Revisar Vercel → Analytics al mes de difundir la web.
- [ ] C6. Copia de seguridad de los `.af` fuera de Drive y avisos de Vercel por
      correo si falla una publicación.
- [ ] C7. Opcional: versiones de la web en /en y /it para que Google también
      la enseñe en inglés e italiano (hoy Google solo ve el español).
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
