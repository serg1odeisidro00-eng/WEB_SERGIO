# Guía para pedir cambios en la web M047

Para que cada cambio sea rápido y no haya idas y venidas. Sube los archivos a
la carpeta compartida de Google Drive de la web y escribe a Claude qué quieres.

## Añadir un PROYECTO nuevo

Manda en una carpeta de Drive con el nombre del proyecto (por ejemplo
`Proyecto - Casa Aluche`):

1. **Lámina** del proyecto (la imagen larga): exportada de Affinity en **PNG o
   JPG**, 1800-2400 px de ancho. (SVG solo si hace falta; pesan mucho.)
2. **Diagrama** de la tarjeta (el dibujo en línea que se ve en Proyectos):
   PNG con fondo blanco o transparente.
3. **Foto** de la tarjeta (la que aparece al pasar el ratón): JPG horizontal,
   proporción como las demás (337 × 215, por ejemplo 1350 × 860 px).
4. **Textos en español** (los traduce Claude a inglés e italiano):
   - Título (que quepa en una línea).
   - Localización (ciudad, país).
   - 1-3 párrafos de descripción.
   - Datos: Superficie, Fecha, Estado (Proyecto / Realizado / Construido),
     Cliente, Equipo, Premios (si hay), enlace (si hay: web, Instagram…).
5. **Departamento(s)**: Diseño de interiores, Paisajismo, Escenografía, Diseño
   gráfico, Dirección de arte (puede estar en varios).
6. ¿Va entre los **destacados** (primeros de la lista)? Sí / No.

## Añadir una NOTICIA

Diseño de Affinity exportado en **SVG o PDF** (como las noticias actuales) en
Drive > `Sección Noticias`, o bien:

1. Título, subtítulo y fecha.
2. Texto por bloques, indicando dónde va cada foto.
3. Fotos en JPG (máx. 2400 px de ancho) con su pie de foto.
4. Foto de portada para la cuadrícula de Noticias.

## Cambiar algo de la PORTADA (personajes, animaciones)

- Fotogramas exportados de Affinity/Illustrator (un archivo por fotograma, o
  un .ai/.pdf con una capa por fotograma, como "Animaciones continuas").
- Nombre de la carpeta = qué es (ej. `Portada - Chica de la regadera`).
- Velocidad deseada (rápido / lento / pausa entre vueltas).

## Corregir TEXTOS o erratas

Basta con una captura de pantalla con lo que está mal rodeado y el texto
bueno escrito. Si el texto está dentro de una lámina (imagen), mejor mandar
la lámina corregida; si no, Claude lo rehace sobre la imagen.

## Cómo se publica

1. Claude lo prepara en la **versión de prueba** (Vercel → Recent Previews) y
   manda capturas.
2. Cuando des el visto bueno, se **publica** en m047.es (1-2 minutos).

## Cosas que no hay que tocar sin hablarlo

- En Hostinger → DNS: los registros del correo (MX, SPF "v=spf1…",
  `_dmarc`, `hostingermail-…`, autodiscover, autoconfig) y los de la web
  (A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com, TXT `_vercel`).
- Nameservers de vuelta atrás (solo si algo fallara): ns1.vercel-dns.com y
  ns2.vercel-dns.com (eran los del Vercel del amigo; hoy son los de Hostinger:
  cosmos.dns-parking.com y nova.dns-parking.com).
