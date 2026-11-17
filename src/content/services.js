// Pagina Servicios (es / en / it). Posicionamiento acordado con Sergio
// (tarea 19): Interiorismo y Direccion de arte como principales; Diseno
// grafico y Paisajismo como secundarios ("Tambien hacemos").
// Listas: opcion B elegida por Sergio (por para quien es). Sin repetir proyectos
// entre bloques (El Rastro es la identidad de Nave 16: en su lugar, Soldrink).

export const servicesCopy = {
  es: {
    section: 'SERVICIOS',
    claim: ['INTERIORISMO CON DIRECCIÓN DE ARTE:', 'ESPACIOS E IDENTIDAD PENSADOS A LA VEZ.'],
    intro: 'Diseñamos el espacio y la imagen de un proyecto como una sola cosa: cómo se vive, cómo se ve y cómo se cuenta. Del concepto a la obra, con el mismo criterio en cada escala.',
    main: [
      {
        code: '01',
        title: 'INTERIORISMO',
        text: 'Proyectos de interior pensados desde el uso y la atmósfera: distribución, materiales, luz y mobiliario resueltos con un mismo concepto.',
        items: [['Tu casa', 'vivienda, reforma y mobiliario a medida'], ['Tu negocio', 'local, oficina o stand'], ['Tu evento', 'espacios efímeros y exposiciones']],
        projects: ['capilla', 'nave-16', 'efimero'],
        filterId: 'interiors',
        more: 'VER PROYECTOS DE INTERIORISMO',
      },
      {
        code: '02',
        title: 'DIRECCIÓN DE ARTE',
        text: 'La identidad de un proyecto más allá del logotipo: el universo visual que une espacio, gráfica, objeto y relato.',
        items: [['Tu marca', 'identidad y su espacio'], ['Tu lanzamiento', 'disco, producto o campaña'], ['Tu escena', 'teatro, escaparate o rodaje']],
        projects: ['album-musical', 'ufv', 'soldrink'],
        filterId: 'art-direction',
        more: 'VER PROYECTOS DE DIRECCIÓN DE ARTE',
      },
    ],
    alsoTitle: 'TAMBIÉN HACEMOS',
    also: [
      { title: 'DISEÑO GRÁFICO', text: 'Identidad corporativa, carteles, tipografía e ilustración.', filterId: 'graphic' },
      { title: 'PAISAJISMO', text: 'Espacios exteriores, jardines y paisaje urbano.', filterId: 'landscape' },
    ],
    cta: ['¿TIENES UN PROYECTO EN MENTE?', 'CUÉNTANOSLO'],
    prices: 'PRESUPUESTO A MEDIDA SEGÚN PROYECTO.',
  },
  en: {
    section: 'SERVICES',
    claim: ['INTERIOR DESIGN WITH ART DIRECTION:', 'SPACE AND IDENTITY DESIGNED TOGETHER.'],
    intro: 'We design the space and the image of a project as one thing: how it is lived in, how it looks and how it is told. From concept to construction, with the same judgement at every scale.',
    main: [
      {
        code: '01',
        title: 'INTERIOR DESIGN',
        text: 'Interior projects driven by use and atmosphere: layout, materials, light and furniture resolved through a single concept.',
        items: [['Your home', 'home design, renovation and bespoke furniture'], ['Your business', 'shop, office or stand'], ['Your event', 'temporary spaces and exhibitions']],
        projects: ['capilla', 'nave-16', 'efimero'],
        filterId: 'interiors',
        more: 'SEE INTERIOR DESIGN PROJECTS',
      },
      {
        code: '02',
        title: 'ART DIRECTION',
        text: 'A project’s identity beyond the logo: the visual world that brings space, graphics, objects and story together.',
        items: [['Your brand', 'identity and its space'], ['Your launch', 'album, product or campaign'], ['Your stage', 'theatre, shop window or shoot']],
        projects: ['album-musical', 'ufv', 'soldrink'],
        filterId: 'art-direction',
        more: 'SEE ART DIRECTION PROJECTS',
      },
    ],
    alsoTitle: 'WE ALSO DO',
    also: [
      { title: 'GRAPHIC DESIGN', text: 'Corporate identity, posters, typography and illustration.', filterId: 'graphic' },
      { title: 'LANDSCAPE DESIGN', text: 'Outdoor spaces, gardens and urban landscape.', filterId: 'landscape' },
    ],
    cta: ['HAVE A PROJECT IN MIND?', 'TELL US ABOUT IT'],
    prices: 'TAILORED QUOTE FOR EACH PROJECT.',
  },
  it: {
    section: 'SERVIZI',
    claim: ['INTERIOR DESIGN CON DIREZIONE ARTISTICA:', 'SPAZI E IDENTITÀ PENSATI INSIEME.'],
    intro: 'Progettiamo lo spazio e l’immagine di un progetto come un’unica cosa: come si vive, come si vede e come si racconta. Dal concept al cantiere, con lo stesso criterio a ogni scala.',
    main: [
      {
        code: '01',
        title: 'DESIGN DEGLI INTERNI',
        text: 'Progetti d’interni pensati a partire dall’uso e dall’atmosfera: distribuzione, materiali, luce e arredi risolti con un unico concept.',
        items: [['La tua casa', 'abitazione, ristrutturazione e arredi su misura'], ['La tua attività', 'negozio, ufficio o stand'], ['Il tuo evento', 'spazi temporanei e mostre']],
        projects: ['capilla', 'nave-16', 'efimero'],
        filterId: 'interiors',
        more: 'VEDI I PROGETTI DI INTERIOR DESIGN',
      },
      {
        code: '02',
        title: 'DIREZIONE ARTISTICA',
        text: 'L’identità di un progetto oltre il logo: l’universo visivo che unisce spazio, grafica, oggetto e racconto.',
        items: [['Il tuo brand', 'identità e il suo spazio'], ['Il tuo lancio', 'disco, prodotto o campagna'], ['La tua scena', 'teatro, vetrina o set']],
        projects: ['album-musical', 'ufv', 'soldrink'],
        filterId: 'art-direction',
        more: 'VEDI I PROGETTI DI DIREZIONE ARTISTICA',
      },
    ],
    alsoTitle: 'FACCIAMO ANCHE',
    also: [
      { title: 'DESIGN GRAFICO', text: 'Identità visiva, manifesti, tipografia e illustrazione.', filterId: 'graphic' },
      { title: 'PROGETTAZIONE DEL PAESAGGIO', text: 'Spazi esterni, giardini e paesaggio urbano.', filterId: 'landscape' },
    ],
    cta: ['HAI UN PROGETTO IN MENTE?', 'RACCONTACELO'],
    prices: 'PREVENTIVO SU MISURA PER OGNI PROGETTO.',
  },
}
