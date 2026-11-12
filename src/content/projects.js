// Lista de proyectos (tarjetas de Proyectos y buscador).
// category puede ser un texto o una lista (proyectos en 2 departamentos).

export const projectItems = [
  // Destacados (los de Instagram) primero.
  { id: 'nave-16', title: 'Residencia artística en Nave 16', location: 'Madrid, España', category: 'interiors', iconSrc: '/proyectos/diagramas/nave-16.webp', imageSrc: '/proyectos/fotos/nave-16.webp' },
  { id: 'playground', title: 'Vivienda experimental y Playground', location: 'Pontevedra, España', category: ['scenography', 'interiors', 'landscape'], iconSrc: '/proyectos/diagramas/playground.webp', imageSrc: '/proyectos/fotos/playground.webp' },
  { id: 'capilla', title: 'Diseño e iluminación Capilla', location: 'Madrid, España', category: 'interiors', iconSrc: '/proyectos/diagramas/capilla.webp', imageSrc: '/proyectos/fotos/capilla.webp' },
  { id: 'efimero', title: 'Stand efímero de venta', location: 'Madrid, España', category: ['scenography', 'interiors'], iconSrc: '/proyectos/diagramas/efimero.webp', imageSrc: '/proyectos/fotos/efimero.webp' },
  { id: 'el-circulo', title: 'Juguete de construcción El Círculo', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/el-circulo.webp', imageSrc: '/proyectos/fotos/el-circulo.webp' },
  { id: 'cartel-teatro', title: 'Cartel de teatro', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/cartel-teatro.webp', imageSrc: '/proyectos/fotos/cartel-teatro.webp' },
  { id: 'el-rastro', title: 'Identidad Corporativa El Rastro', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/el-rastro.webp', imageSrc: '/proyectos/fotos/el-rastro.webp' },
  { id: 'hargok', title: 'Tipografía Hargok', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/hargok.webp', imageSrc: '/proyectos/fotos/hargok.webp' },
  { id: 'haz', title: 'Lámpara HAZ', location: 'Segovia, España', category: 'graphic', iconSrc: '/proyectos/diagramas/haz.webp', imageSrc: '/proyectos/fotos/haz.webp' },
  { id: 'podcast', title: 'Identidad Corporativa Podcast', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/podcast.webp', imageSrc: '/proyectos/fotos/podcast.webp' },
  { id: 'eneo', title: 'Identidad Corporativa Eneo', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/eneo.webp', imageSrc: '/proyectos/fotos/eneo.webp' },
  { id: 'fiestas-locales', title: 'Cartel de Fiestas Locales', location: 'San Rafael (Segovia), España', category: 'graphic', iconSrc: '/proyectos/diagramas/fiestas-locales.webp', imageSrc: '/proyectos/fotos/fiestas-locales.webp' },
  { id: 'packaging', title: 'Diseño Editorial y Packaging', location: 'Santander, España', category: 'graphic', iconSrc: '/proyectos/diagramas/packaging.webp', imageSrc: '/proyectos/fotos/packaging.webp' },
  { id: 'ilustraciones', title: 'Colección de Ilustraciones', location: 'Villaviciosa (Madrid), España', category: 'graphic', iconSrc: '/proyectos/diagramas/ilustraciones.webp', imageSrc: '/proyectos/fotos/ilustraciones.webp' },
  { id: 'cross', title: 'Silla CROSS', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/cross.webp', imageSrc: '/proyectos/fotos/cross.webp' },
  { id: 'ufv', title: 'Escenografía UFV', location: 'Madrid, España', category: 'scenography', iconSrc: '/proyectos/diagramas/ufv.webp', imageSrc: '/proyectos/fotos/ufv.webp' },
  { id: 'pg', title: 'Identidad Corporativa PG', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/pg.webp', imageSrc: '/proyectos/fotos/pg.webp' },
  { id: 'boat', title: 'Escultura Boat', location: 'Madrid, España', category: 'graphic', iconSrc: '/proyectos/diagramas/boat.webp', imageSrc: '/proyectos/fotos/boat.webp' },
  { id: 'telefonica', title: 'Proyecto de Oficinas en Edificio Telef\u00f3nica', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/diagramas/telefonica.webp', imageSrc: '/proyectos/fotos/telefonica.webp' },
  { id: 'miteco', title: 'Proyecto Paisajismo MITECO', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/diagramas/miteco.webp', imageSrc: '/proyectos/fotos/miteco.webp' },
  { id: 'miteco-2', title: 'Proyecto Paisajismo MITECO 2', location: 'Madrid, Espa\u00f1a', category: 'landscape', iconSrc: '/proyectos/diagramas/miteco.webp', imageSrc: '/proyectos/fotos/miteco-2.webp' },
  { id: 'el-bosque', title: 'Centro cultural El Bosque', location: 'Madrid, Espa\u00f1a', category: 'interiors', iconSrc: '/proyectos/diagramas/el-bosque.webp', imageSrc: '/proyectos/fotos/el-bosque.webp' },
  { id: 'album-musical', title: 'Direcci\u00f3n de arte \u00e1lbum musical', location: 'Madrid, Espa\u00f1a', category: ['art-direction', 'graphic'], iconSrc: '/proyectos/diagramas/album-musical.webp', imageSrc: '/proyectos/fotos/album-musical.webp' },
  { id: 'espacio-expositivo', title: 'Espacio expositivo temporal 2021', location: 'Madrid, España', category: ['scenography', 'interiors'], iconSrc: '/proyectos/diagramas/espacio-expositivo.webp', imageSrc: '/proyectos/fotos/espacio-expositivo.webp' },
  { id: 'v-karting', title: 'Dise\u00f1o Logotipo y Livery V.Karting', location: 'Villaviciosa (Madrid), Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/diagramas/v-karting.webp', imageSrc: '/proyectos/fotos/v-karting.webp' },
  { id: 'soldrink', title: 'Branding y etiquetas bodega', location: 'Toledo, Espa\u00f1a', category: 'graphic', iconSrc: '/proyectos/diagramas/soldrink.webp', imageSrc: '/proyectos/fotos/soldrink.webp' },
]

export const englishProjectTitles = {
  'el-circulo': 'The Circle construction toy', 'cartel-teatro': 'Theatre poster', 'el-rastro': 'El Rastro corporate identity', hargok: 'Hargok typeface', haz: 'HAZ lamp', podcast: 'Podcast corporate identity', eneo: 'Eneo corporate identity', 'fiestas-locales': 'Local festivities poster', packaging: 'Editorial design and packaging', ilustraciones: 'Illustration collection', cross: 'CROSS chair', ufv: 'UFV scenography', playground: 'Experimental housing and playground', capilla: 'Chapel design and lighting', pg: 'PG corporate identity', boat: 'Boat sculpture', telefonica: 'Office project in the Telef\u00f3nica building', miteco: 'MITECO landscaping project', 'miteco-2': 'MITECO landscaping project 2', 'el-bosque': 'El Bosque cultural centre', 'album-musical': 'Art direction for a music album', 'espacio-expositivo': 'Temporary exhibition space 2021', 'v-karting': 'V.Karting logo and livery design', soldrink: 'Winery branding and labels', efimero: 'Ephemeral sales stand', 'nave-16': 'Artists\' residency at Nave 16',
}

export const italianProjectTitles = {
  'el-circulo': 'Gioco di costruzioni The Circle', 'cartel-teatro': 'Manifesto teatrale', 'el-rastro': 'Identità visiva El Rastro', hargok: 'Carattere Hargok', haz: 'Lampada HAZ', podcast: 'Identità visiva Podcast', eneo: 'Identità visiva Eneo', 'fiestas-locales': 'Manifesto delle feste locali', packaging: 'Design editoriale e packaging', ilustraciones: 'Collezione di illustrazioni', cross: 'Sedia CROSS', ufv: 'Scenografia UFV', playground: 'Abitazione sperimentale e Playground', capilla: 'Progetto illuminotecnico per cappella', pg: 'Identità visiva PG', boat: 'Scultura Boat', telefonica: "Progetto di uffici nell'edificio Telefónica", miteco: 'Progetto paesaggistico MITECO', 'miteco-2': 'Progetto paesaggistico MITECO 2', 'el-bosque': 'Centro culturale El Bosque', 'album-musical': 'Direzione artistica per album musicale', 'espacio-expositivo': 'Spazio espositivo temporaneo 2021', 'v-karting': 'Design del logo e livrea V.Karting', soldrink: 'Branding ed etichette per cantina', efimero: 'Stand di vendita temporaneo', 'nave-16': 'Residenza artistica presso Nave 16',
}

// El Circulo se muestra como "The Circle" en las tarjetas.
projectItems.find((project) => project.id === 'el-circulo').title = 'The Circle'
englishProjectTitles['el-circulo'] = 'The Circle'
italianProjectTitles['el-circulo'] = 'The Circle'
