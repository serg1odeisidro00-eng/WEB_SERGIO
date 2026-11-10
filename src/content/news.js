// Contenido de la seccion Noticias (es / en / it).
// Las imagenes estan en public/noticias/. Cada noticia es una lista de bloques:
//   { p: { es, en, it } }                                   -> parrafo
//   { img: 'archivo.webp', w, h, caption: { es, en, it } }  -> imagen con pie (caption opcional)
// Disenos originales: Drive > Seccion Noticias > Seccion_228-NoticiaN.svg

export const newsListCopy = {
  es: { title: 'Noticias', back: 'Volver a noticias' },
  en: { title: 'News', back: 'Back to news' },
  it: { title: 'Notizie', back: 'Torna alle notizie' },
}

export const newsArticles = [
  {
    id: 'news-1',
    date: '08.12.24',
    cover: { src: '/noticias/noticia1-portada.webp', w: 868, h: 556 },
    cardTitle: {
      es: 'Detrás de esta pantalla: así diseñamos la web en la que estás navegando.',
      en: 'Behind this screen: how we designed the website you are browsing.',
      it: 'Dietro questo schermo: così abbiamo progettato il sito che stai navigando.',
    },
    title: {
      es: 'Así diseñamos la web en la que estás navegando',
      en: 'How we designed the website you are browsing',
      it: 'Così abbiamo progettato il sito che stai navigando',
    },
    subtitle: {
      es: 'Cuaderno de bitácora: cómo construimos nuestro espacio digital fotograma a fotograma, sin atajos ni trucos prefabricados.',
      en: 'Logbook: how we built our digital space frame by frame, with no shortcuts and no prefabricated tricks.',
      it: 'Diario di bordo: come abbiamo costruito il nostro spazio digitale fotogramma per fotogramma, senza scorciatoie né trucchi prefabbricati.',
    },
    blocks: [
      {
        img: 'noticia1-1.webp', w: 1562, h: 1002,
        caption: {
          es: 'Detalle de la sección principal con todos los frames agrupados (Sergio de Isidro/Blanca Aramburu)',
          en: 'Detail of the main section with all the frames grouped together (Sergio de Isidro/Blanca Aramburu)',
          it: 'Dettaglio della sezione principale con tutti i frame raggruppati (Sergio de Isidro/Blanca Aramburu)',
        },
      },
      {
        p: {
          es: 'Si tus ojos recorren estas líneas, ya estás dentro del engranaje. Cada interacción que disparas, cada margen y cada movimiento que responde a tu cursor no vienen de una librería genérica ni de un script automático: son horas de trazo, tinta y ensayo.',
          en: 'If your eyes are running over these lines, you are already inside the machinery. Every interaction you trigger, every margin and every movement that responds to your cursor does not come from a generic library or an automatic script: it is hours of line work, ink and trial and error.',
          it: 'Se i tuoi occhi stanno scorrendo queste righe, sei già dentro l’ingranaggio. Ogni interazione che attivi, ogni margine e ogni movimento che risponde al tuo cursore non arrivano da una libreria generica né da uno script automatico: sono ore di tratto, inchiostro e prove.',
        },
      },
      {
        p: {
          es: 'En internet sobran plantillas clónicas y falta oficio. En M047 decidimos complicarnos la vida y hacer justo lo contrario: tratar esta web como una pieza de artesanía pura.',
          en: 'The internet is full of cloned templates and short on craft. At M047 we decided to make life difficult for ourselves and do exactly the opposite: treat this website as a piece of pure craftsmanship.',
          it: 'Su internet abbondano i template clonati e manca il mestiere. In M047 abbiamo deciso di complicarci la vita e fare esattamente il contrario: trattare questo sito come un pezzo di puro artigianato.',
        },
      },
      {
        img: 'noticia1-2.webp', w: 1562, h: 1701,
        caption: {
          es: 'Primeros bocetos de la sección e ideas de animación (Sergio de Isidro/Jose Luis de Isidro)',
          en: 'First sketches of the section and animation ideas (Sergio de Isidro/Jose Luis de Isidro)',
          it: 'Primi schizzi della sezione e idee di animazione (Sergio de Isidro/Jose Luis de Isidro)',
        },
      },
      {
        p: {
          es: 'Antes de tirar una sola línea de código, llenamos la mesa de bocetos. No empezamos colocando cajitas predefinidas en una cuadrícula; empezamos dibujando a mano.',
          en: 'Before writing a single line of code, we covered the table with sketches. We did not start by placing predefined boxes on a grid; we started by drawing by hand.',
          it: 'Prima di scrivere una sola riga di codice, abbiamo riempito il tavolo di schizzi. Non abbiamo iniziato sistemando riquadri predefiniti su una griglia; abbiamo iniziato disegnando a mano.',
        },
      },
      {
        p: {
          es: 'Queríamos que la pantalla tuviera pulso. Cada icono, cada detalle gráfico y cada elemento de la interfaz nació del trazo manual. La regla fue clara desde el minuto uno: si iba a estar en nuestra web, tenía que salir directamente de nuestras manos.',
          en: 'We wanted the screen to have a pulse. Every icon, every graphic detail and every element of the interface was born from a hand-drawn line. The rule was clear from minute one: if it was going to be on our website, it had to come straight from our hands.',
          it: 'Volevamo che lo schermo avesse un battito. Ogni icona, ogni dettaglio grafico e ogni elemento dell’interfaccia è nato dal tratto a mano. La regola è stata chiara fin dal primo minuto: se doveva stare sul nostro sito, doveva uscire direttamente dalle nostre mani.',
        },
      },
      {
        img: 'noticia1-3.webp', w: 1562, h: 949,
        caption: {
          es: 'Dibujos de frame a frame para las animaciones (Sergio de Isidro/Jose Luis de Isidro)',
          en: 'Frame-by-frame drawings for the animations (Sergio de Isidro/Jose Luis de Isidro)',
          it: 'Disegni frame per frame per le animazioni (Sergio de Isidro/Jose Luis de Isidro)',
        },
      },
      { img: 'noticia1-4.webp', w: 1562, h: 1314 },
      {
        p: {
          es: 'Animación frame a frame como en el cine clásico:',
          en: 'Frame-by-frame animation, like classic cinema:',
          it: 'Animazione frame per frame come nel cinema classico:',
        },
      },
      {
        p: {
          es: 'Aquí es donde decidimos tirarnos a la piscina: en vez de meter transiciones automáticas o efectos de catálogo, abordamos el movimiento como en las películas de animación tradicional. Fotograma a fotograma.',
          en: 'This is where we decided to take the plunge: instead of adding automatic transitions or off-the-shelf effects, we approached movement as in traditional animated films. Frame by frame.',
          it: 'È qui che abbiamo deciso di buttarci: invece di inserire transizioni automatiche o effetti da catalogo, abbiamo affrontato il movimento come nei film d’animazione tradizionale. Fotogramma per fotogramma.',
        },
      },
      {
        p: {
          es: '-Dibujar cada segundo: Cada animación que ves al navegar se descompuso en dibujos individuales; 12, 24 o 30 frames por segundo donde el trazo cambia milimétricamente para que el movimiento sea orgánico y tenga peso real.',
          en: '-Drawing every second: Every animation you see as you browse was broken down into individual drawings; 12, 24 or 30 frames per second in which the line changes millimetre by millimetre so that the movement feels organic and has real weight.',
          it: '-Disegnare ogni secondo: Ogni animazione che vedi navigando è stata scomposta in disegni singoli; 12, 24 o 30 frame al secondo in cui il tratto cambia millimetricamente perché il movimento sia organico e abbia un peso reale.',
        },
      },
      {
        p: {
          es: '-Buscar la imperfección viva: No queríamos la frialdad matemática de un algoritmo, sino el nervio del dibujo a mano.',
          en: '-Looking for living imperfection: We did not want the mathematical coldness of an algorithm, but the nerve of hand drawing.',
          it: '-Cercare l’imperfezione viva: Non volevamo la freddezza matematica di un algoritmo, ma il nervo del disegno a mano.',
        },
      },
      {
        p: {
          es: '-Hacer que no pese una tonelada: El reto gordo vino después. Dibujar a mano es una cosa; conseguir que decenas de ilustraciones y fotogramas pesen pocos kilobytes para que la web vuele en tu móvil fue pura cabezonería técnica. Vectorizar, limpiar curvas y optimizar sin perder el alma del trazo.',
          en: '-Making it not weigh a ton: The big challenge came afterwards. Drawing by hand is one thing; getting dozens of illustrations and frames to weigh just a few kilobytes so the website flies on your phone was pure technical stubbornness. Vectorising, cleaning up curves and optimising without losing the soul of the line.',
          it: '-Fare in modo che non pesi una tonnellata: La vera sfida è arrivata dopo. Disegnare a mano è una cosa; far sì che decine di illustrazioni e fotogrammi pesino pochi kilobyte perché il sito voli sul tuo telefono è stata pura testardaggine tecnica. Vettorializzare, pulire le curve e ottimizzare senza perdere l’anima del tratto.',
        },
      },
      {
        img: 'noticia1-5.webp', w: 1562, h: 807,
        caption: {
          es: 'Dibujo de los frames del departamento de Dirección de Arte (Sergio de Isidro)',
          en: 'Drawing of the frames for the Art Direction department (Sergio de Isidro)',
          it: 'Disegno dei frame del reparto di Direzione Artistica (Sergio de Isidro)',
        },
      },
      {
        p: {
          es: 'El encaje de las piezas, meter animación tradicional en un entorno web que tiene que responder al instante fue un reto técnico tremendo:',
          en: 'Fitting the pieces together, bringing traditional animation into a web environment that has to respond instantly, was a huge technical challenge:',
          it: 'Far combaciare i pezzi, portare l’animazione tradizionale in un ambiente web che deve rispondere all’istante, è stata una sfida tecnica enorme:',
        },
      },
      {
        p: {
          es: '-Sincronización: Cada fotograma tenía que saltar en el milisegundo exacto en que haces scroll o tocas la pantalla, sin tirones ni esperas.',
          en: '-Synchronisation: Every frame had to jump at the exact millisecond you scroll or touch the screen, with no jerks or waiting.',
          it: '-Sincronizzazione: Ogni fotogramma doveva scattare nel millisecondo esatto in cui scorri o tocchi lo schermo, senza scatti né attese.',
        },
      },
      {
        p: {
          es: '-Cero fuegos artificiales vacíos: La animación no está para presumir ni para marearte; está para guiarte de forma natural hacia los proyectos.',
          en: '-Zero empty fireworks: The animation is not there to show off or make you dizzy; it is there to guide you naturally towards the projects.',
          it: '-Zero fuochi d’artificio vuoti: L’animazione non serve a mettersi in mostra né a stordirti; serve a guidarti in modo naturale verso i progetti.',
        },
      },
      {
        p: {
          es: '-Equilibrio: Dejar respirar el espacio para que el dibujo sume carácter sin entorpecer la lectura.',
          en: '-Balance: Letting the space breathe so the drawing adds character without getting in the way of reading.',
          it: '-Equilibrio: Lasciare respirare lo spazio perché il disegno aggiunga carattere senza ostacolare la lettura.',
        },
      },
      {
        img: 'noticia1-6.webp', w: 1562, h: 1111,
        caption: {
          es: 'Portada y dibujos de inspiración (F.Ibáñez)',
          en: 'Cover and inspiration drawings (F.Ibáñez)',
          it: 'Copertina e disegni di ispirazione (F.Ibáñez)',
        },
      },
      {
        p: {
          es: 'Esta web que estás navegando es la base sobre la que vamos a seguir construyendo. No está pensada para ser intocable, sino para evolucionar al ritmo de los proyectos que entren por la puerta y de las historias que queramos contar por aquí.',
          en: 'The website you are browsing is the foundation we will keep building on. It is not meant to be untouchable, but to evolve at the pace of the projects that come through the door and the stories we want to tell here.',
          it: 'Il sito che stai navigando è la base su cui continueremo a costruire. Non è pensato per essere intoccabile, ma per evolvere al ritmo dei progetti che entreranno dalla porta e delle storie che vorremo raccontare qui.',
        },
      },
      {
        p: {
          es: 'Todo nuestro agradecimiento a las personas que han hecho alcanzable este proyecto: Blanca Aramburu, Álvaro De Isidro, Vinicius Taliari, José De Isidro, Antonia Sánchez, José Luis De Isidro, José de Isidro Lozano, Miguel Sánchez Belijar y María del Carmen Martí, a todos gracias por el apoyo incondicional.',
          en: 'Our heartfelt thanks to the people who made this project possible: Blanca Aramburu, Álvaro De Isidro, Vinicius Taliari, José De Isidro, Antonia Sánchez, José Luis De Isidro, José de Isidro Lozano, Miguel Sánchez Belijar and María del Carmen Martí. Thank you all for your unconditional support.',
          it: 'Tutta la nostra gratitudine alle persone che hanno reso possibile questo progetto: Blanca Aramburu, Álvaro De Isidro, Vinicius Taliari, José De Isidro, Antonia Sánchez, José Luis De Isidro, José de Isidro Lozano, Miguel Sánchez Belijar e María del Carmen Martí. Grazie a tutti per il sostegno incondizionato.',
        },
      },
      {
        p: {
          es: 'Gracias por pasarte por casa. Ponte cómodo, haz clic en lo que te llame la atención y, si tienes un proyecto en mente que necesite este mismo cuidado por el detalle, ya sabes dónde encontrarnos.',
          en: 'Thank you for stopping by. Make yourself at home, click on whatever catches your eye and, if you have a project in mind that needs this same attention to detail, you know where to find us.',
          it: 'Grazie per essere passato da casa nostra. Mettiti comodo, clicca su ciò che ti incuriosisce e, se hai in mente un progetto che ha bisogno della stessa cura per il dettaglio, sai dove trovarci.',
        },
      },
    ],
  },
  {
    id: 'news-2',
    date: '10.09.22',
    cover: { src: '/noticias/noticia2-portada.webp', w: 868, h: 556 },
    cardTitle: {
      es: 'Dime cuál es tu oficio y te diré cuál es tu calle de Madrid.',
      en: 'Tell me your trade and I will tell you your street in Madrid.',
      it: 'Dimmi qual è il tuo mestiere e ti dirò qual è la tua via di Madrid.',
    },
    title: {
      es: 'Dime cuál es tu oficio y te diré cuál es tu calle de Madrid.',
      en: 'Tell me your trade and I will tell you your street in Madrid.',
      it: 'Dimmi qual è il tuo mestiere e ti dirò qual è la tua via di Madrid.',
    },
    subtitle: {
      es: 'Una ruta por el callejero gremial, las tripas de la ciudad y el hilo invisible que une a los antiguos artesanos con los creadores de hoy.',
      en: 'A walk through the guild street map, the guts of the city and the invisible thread that links the old craftsmen with today’s creators.',
      it: 'Un percorso tra le vie delle corporazioni, le viscere della città e il filo invisibile che unisce gli antichi artigiani ai creativi di oggi.',
    },
    blocks: [
      {
        img: 'noticia2-1.webp', w: 1562, h: 1006,
        caption: {
          es: 'Las placas cerámicas son el ejemplo perfecto de cómo el diseño gráfico, la tipografía y la ilustración narran la identidad de una ciudad (Alfredo Ruiz de Luna)',
          en: 'The ceramic street signs are the perfect example of how graphic design, typography and illustration tell the story of a city’s identity (Alfredo Ruiz de Luna)',
          it: 'Le targhe in ceramica sono l’esempio perfetto di come il design grafico, la tipografia e l’illustrazione raccontino l’identità di una città (Alfredo Ruiz de Luna)',
        },
      },
      {
        p: {
          es: 'La toponimia de una ciudad nunca es fruto de la casualidad; es su acta de nacimiento. En Madrid, si levantas la vista del asfalto en el casco histórico, las esquinas no te hablan de reyes ni de generales a caballo, sino de gente trabajando con las manos: Cuchilleros, Latoneros, Curtidores, Bordadores, Tintoreros.',
          en: 'A city’s place names are never a matter of chance; they are its birth certificate. In Madrid, if you look up from the asphalt in the old town, the street corners do not speak of kings or generals on horseback, but of people working with their hands: Cuchilleros (cutlers), Latoneros (brass-workers), Curtidores (tanners), Bordadores (embroiderers), Tintoreros (dyers).',
          it: 'La toponomastica di una città non è mai frutto del caso; è il suo atto di nascita. A Madrid, se alzi lo sguardo dall’asfalto nel centro storico, gli angoli delle strade non ti parlano di re né di generali a cavallo, ma di gente che lavorava con le mani: Cuchilleros (coltellinai), Latoneros (ottonai), Curtidores (conciatori), Bordadores (ricamatori), Tintoreros (tintori).',
        },
      },
      {
        p: {
          es: 'Hubo un tiempo en el que tu dirección postal no era un código numérico: era lo que sabías hacer.',
          en: 'There was a time when your postal address was not a numeric code: it was what you knew how to do.',
          it: 'C’è stato un tempo in cui il tuo indirizzo non era un codice numerico: era ciò che sapevi fare.',
        },
      },
      {
        img: 'noticia2-2.webp', w: 1563, h: 2086,
        caption: {
          es: 'Imágenes y planos de la memoria histórica Madrid (M. 1857)',
          en: 'Images and maps from Madrid’s historical memory (M. 1857)',
          it: 'Immagini e mappe della memoria storica di Madrid (M. 1857)',
        },
      },
      {
        p: {
          es: 'Para entender cómo se bautizó el Madrid antiguo hay que bajar hasta el foso de la ciudad medieval. Con la llegada de la Corte de Felipe II, Madrid multiplicó su población y se convirtió en una boca insaciable de abastecimiento.',
          en: 'To understand how old Madrid got its names, you have to go down to the moat of the medieval city. With the arrival of Philip II’s Court, Madrid’s population multiplied and the city became an insatiable mouth to feed.',
          it: 'Per capire come fu battezzata la Madrid antica bisogna scendere fino al fossato della città medievale. Con l’arrivo della Corte di Filippo II, Madrid moltiplicò la sua popolazione e divenne una bocca insaziabile da rifornire.',
        },
      },
      {
        p: {
          es: 'Las reses entraban en tropel por el camino del sur, cruzando la Puerta de Toledo. Muy cerca se instaló en 1497 el primer matadero municipal de la villa. El ganado sacrificado se despiezaba y las pieles se arrastraban cuesta abajo hacia las tenerías para transformarlas en cuero. El reguero rojo que marcaba la tierra en la Ribera de Curtidores camino a la Plaza del Cascorro bautizó para siempre el mercado al aire libre más castizo del mundo: el Rastro.',
          en: 'Cattle poured in along the southern road, through the Puerta de Toledo. Nearby, in 1497, the town’s first municipal slaughterhouse was set up. The slaughtered animals were butchered and the hides were dragged downhill to the tanneries to be turned into leather. The red trail that marked the ground along the Ribera de Curtidores on the way to the Plaza del Cascorro gave its name forever to the most traditional open-air market in the world: el Rastro (“the trail”).',
          it: 'Il bestiame entrava in massa dalla strada del sud, attraversando la Puerta de Toledo. Lì vicino, nel 1497, fu installato il primo mattatoio municipale della città. Gli animali macellati venivano sezionati e le pelli trascinate in discesa verso le concerie per trasformarle in cuoio. La scia rossa che segnava la terra lungo la Ribera de Curtidores, verso la Plaza del Cascorro, diede per sempre il nome al mercato all’aperto più castizo del mondo: el Rastro (“la scia”).',
        },
      },
      {
        p: {
          es: 'De ese flujo nacían las sinergias: las carnes subían a abastecer la Casa de la Carnicería en la Plaza Mayor, y a tiro de piedra se asentaban los artesanos que afilaban el instrumental necesario para despiezarlas: nacía la calle de Cuchilleros.',
          en: 'That flow created synergies: the meat went up to supply the Casa de la Carnicería in the Plaza Mayor, and a stone’s throw away settled the craftsmen who sharpened the tools needed to butcher it: the calle de Cuchilleros was born.',
          it: 'Da quel flusso nascevano le sinergie: la carne saliva a rifornire la Casa de la Carnicería in Plaza Mayor e, a due passi, si stabilivano gli artigiani che affilavano gli strumenti necessari per sezionarla: nasceva la calle de Cuchilleros.',
        },
      },
      {
        img: 'noticia2-3.webp', w: 1563, h: 849,
        caption: {
          es: 'Las placas cerámicas de Alfredo Ruiz de Luna',
          en: 'The ceramic street signs by Alfredo Ruiz de Luna',
          it: 'Le targhe in ceramica di Alfredo Ruiz de Luna',
        },
      },
      { img: 'noticia2-4.webp', w: 1562, h: 757,
        caption: {
          es: 'Imágenes de la memoria histórica Madrid de la zona de Legazpi y Puerta de Toledo',
          en: 'Images from Madrid’s historical memory of the Legazpi and Puerta de Toledo area',
          it: 'Immagini della memoria storica di Madrid della zona di Legazpi e Puerta de Toledo',
        },
      },
      {
        p: {
          es: 'Cuando el matadero de Puerta de Toledo se quedó obsoleto a comienzos del siglo XX, la ciudad empujó su despensa todavía más al sur, al borde del río Manzanares: Arganzuela.',
          en: 'When the Puerta de Toledo slaughterhouse became obsolete in the early 20th century, the city pushed its larder even further south, to the banks of the Manzanares river: Arganzuela.',
          it: 'Quando il mattatoio della Puerta de Toledo divenne obsoleto all’inizio del Novecento, la città spinse la sua dispensa ancora più a sud, sulle rive del fiume Manzanares: Arganzuela.',
        },
      },
      {
        p: {
          es: 'El nuevo Matadero Municipal y Mercado Municipal de Ganados de Luis Bellido (1924) cambió por completo el mapa obrero de Madrid. El trazado laberíntico del casco antiguo dio paso a una geometría funcional e industrial. Si caminabas por Arganzuela hace cien años no escuchabas carruajes: oías el silbato de las locomotoras que conectaban las vías de la Estación de Delicias, el estruendo del descargadero, las chimeneas de ladrillo y las sirenas de cambio de turno.',
          en: 'Luis Bellido’s new Municipal Slaughterhouse and Livestock Market (1924) completely changed Madrid’s working-class map. The labyrinthine layout of the old town gave way to a functional, industrial geometry. If you walked through Arganzuela a hundred years ago you would not hear carriages: you heard the whistle of the locomotives on the tracks to Delicias Station, the roar of the unloading yard, the brick chimneys and the shift-change sirens.',
          it: 'Il nuovo Mattatoio Municipale e Mercato del Bestiame di Luis Bellido (1924) cambiò completamente la mappa operaia di Madrid. Il tracciato labirintico del centro storico lasciò il posto a una geometria funzionale e industriale. Se cent’anni fa camminavi per Arganzuela non sentivi carrozze: sentivi il fischio delle locomotive che collegavano i binari della Stazione di Delicias, il fragore dello scarico, le ciminiere in mattoni e le sirene del cambio turno.',
        },
      },
      {
        p: {
          es: 'Aquel polo industrial también forjó la gastronomía de taberna: las casquerías populares, las gallinejas y los entresijos nacieron del ingenio popular para cocinar las piezas descartadas del despiece diario de reses.',
          en: 'That industrial hub also shaped tavern cooking: the popular offal shops, gallinejas and entresijos were born from people’s ingenuity in cooking the cuts left over from the daily butchering of cattle.',
          it: 'Quel polo industriale forgiò anche la cucina da taverna: le frattaglierie popolari, le gallinejas e gli entresijos nacquero dall’ingegno popolare per cucinare i pezzi scartati dalla macellazione quotidiana.',
        },
      },
      {
        img: 'noticia2-5.webp', w: 1561, h: 2230,
        caption: {
          es: 'Fotografías actuales de Matadero y El Mercado de Frutas y Verduras de Legazpi (Miguel Sánchez Belijar)',
          en: 'Present-day photographs of Matadero and the Legazpi Fruit and Vegetable Market (Miguel Sánchez Belijar)',
          it: 'Fotografie attuali del Matadero e del Mercato della Frutta e Verdura di Legazpi (Miguel Sánchez Belijar)',
        },
      },
      {
        p: {
          es: 'De nave de despiece a taller contemporáneo: el círculo se cierra.',
          en: 'From butchering shed to contemporary workshop: the circle closes.',
          it: 'Dal capannone di macellazione al laboratorio contemporaneo: il cerchio si chiude.',
        },
      },
      {
        p: {
          es: 'Un siglo después, el Matadero dejó de oler a hierro y vapor, pero sus naves de ladrillo visto, hierro forjado y azulejo cerámico no perdieron el espíritu gremial. Cambiaron las herramientas, pero no el concepto.',
          en: 'A century later, Matadero no longer smells of iron and steam, but its sheds of exposed brick, wrought iron and ceramic tiles have not lost their guild spirit. The tools changed, but not the concept.',
          it: 'Un secolo dopo, il Matadero non odora più di ferro e vapore, ma i suoi capannoni in mattoni a vista, ferro battuto e piastrelle in ceramica non hanno perso lo spirito delle corporazioni. Sono cambiati gli strumenti, non il concetto.',
        },
      },
      {
        p: {
          es: 'Donde antes se despiezaban reses y se secaban pieles, hoy se abren residencias artísticas, talleres de diseño, espacios de escenografía y centros de experimentación cultural. El paralelismo es directo:',
          en: 'Where cattle were once butchered and hides dried, today there are artist residencies, design workshops, set-design spaces and centres for cultural experimentation. The parallel is direct:',
          it: 'Dove un tempo si macellava il bestiame e si essiccavano le pelli, oggi aprono residenze artistiche, laboratori di design, spazi di scenografia e centri di sperimentazione culturale. Il parallelo è diretto:',
        },
      },
      {
        p: {
          es: 'El taller gremial del siglo XVII era un espacio compartido donde maestros, oficiales y aprendices se nutrían unos de otros en un mismo rincón de la calle.',
          en: 'The 17th-century guild workshop was a shared space where masters, journeymen and apprentices fed off one another in the same corner of the street.',
          it: 'La bottega delle corporazioni del Seicento era uno spazio condiviso dove maestri, lavoranti e apprendisti si nutrivano a vicenda nello stesso angolo di strada.',
        },
      },
      {
        p: {
          es: 'Las naves de creación contemporáneas funcionan exactamente igual: artistas, diseñadores y arquitectos conviviendo bajo las mismas cubiertas industriales, contaminándose de ideas y compartiendo procesos.',
          en: 'Today’s creative sheds work in exactly the same way: artists, designers and architects living together under the same industrial roofs, cross-pollinating ideas and sharing processes.',
          it: 'I capannoni creativi contemporanei funzionano esattamente allo stesso modo: artisti, designer e architetti che convivono sotto le stesse coperture industriali, contaminandosi di idee e condividendo processi.',
        },
      },
      {
        img: 'noticia2-6.webp', w: 1562, h: 1040,
        caption: {
          es: 'Madrid desde el cielo',
          en: 'Madrid from the sky',
          it: 'Madrid dal cielo',
        },
      },
      {
        p: {
          es: 'Lo que cuentan nuestras esquinas... la identidad de Madrid no se inventó en un despacho; se fue tallando a base de oficios, sudor de barrio y necesidad compartida. Desde el artesano que rotulaba su negocio en azulejo en el Madrid de los Austrias hasta el diseñador que hoy traza vectores en una nave industrial rehabilitada junto a Madrid Río, el motor sigue siendo el mismo: transformar la materia prima en cultura viva.',
          en: 'What our street corners tell us... Madrid’s identity was not invented in an office; it was carved out of trades, neighbourhood sweat and shared need. From the craftsman who signed his shop in ceramic tiles in Habsburg Madrid to the designer who draws vectors today in a restored industrial shed next to Madrid Río, the engine is still the same: turning raw material into living culture.',
          it: 'Quello che raccontano i nostri angoli di strada... l’identità di Madrid non è stata inventata in un ufficio; si è scolpita a forza di mestieri, sudore di quartiere e bisogni condivisi. Dall’artigiano che dipingeva l’insegna della sua bottega su piastrelle nella Madrid degli Asburgo al designer che oggi traccia vettori in un capannone industriale recuperato accanto a Madrid Río, il motore è sempre lo stesso: trasformare la materia prima in cultura viva.',
        },
      },
      {
        p: {
          es: 'La próxima vez que dobles una esquina y leas Latoneros, Bordadores o Curtidores, recuerda que esa placa no es un homenaje a un rey: es la firma de los que construyeron esta ciudad con las manos.',
          en: 'Next time you turn a corner and read Latoneros, Bordadores or Curtidores, remember that the sign is not a tribute to a king: it is the signature of those who built this city with their hands.',
          it: 'La prossima volta che giri un angolo e leggi Latoneros, Bordadores o Curtidores, ricorda che quella targa non è un omaggio a un re: è la firma di chi ha costruito questa città con le proprie mani.',
        },
      },
    ],
  },
  {
    id: 'news-3',
    date: '06.07.25',
    cover: { src: '/noticias/noticia3-portada.webp', w: 868, h: 556 },
    cardTitle: {
      es: 'Voces de barrio: Lo que cuentan las fachadas de Aluche.',
      en: 'Neighbourhood voices: what the façades of Aluche tell us.',
      it: 'Voci di quartiere: cosa raccontano le facciate di Aluche.',
    },
    title: {
      es: 'Voces de barrio: Lo que cuentan las fachadas de Aluche.',
      en: 'Neighbourhood voices: what the façades of Aluche tell us.',
      it: 'Voci di quartiere: cosa raccontano le facciate di Aluche.',
    },
    subtitle: {
      es: 'Diseño espontáneo, toldos verdes y orgullo de barrio: la arquitectura obrera que aprendió a hablar con acento propio.',
      en: 'Spontaneous design, green awnings and neighbourhood pride: the working-class architecture that learned to speak with its own accent.',
      it: 'Design spontaneo, tende verdi e orgoglio di quartiere: l’architettura operaia che ha imparato a parlare con un accento tutto suo.',
    },
    blocks: [
      {
        img: 'noticia3-1.webp', w: 1562, h: 1163,
        caption: {
          es: 'Diversas fachadas del barrio de Aluche, en Madrid (ig: conradog.ph)',
          en: 'Various façades in the Aluche neighbourhood, Madrid (ig: conradog.ph)',
          it: 'Diverse facciate del quartiere di Aluche, a Madrid (ig: conradog.ph)',
        },
      },
      {
        p: {
          es: 'El diseño no siempre nace en una cuadrícula pulcra de estudio. A veces surge del barro, del choque cultural y de la necesidad de miles de familias que llegaron a Madrid con una maleta de cartón para inventarse un futuro.',
          en: 'Design is not always born on a neat studio grid. Sometimes it rises from the mud, from cultural clash and from the need of thousands of families who arrived in Madrid with a cardboard suitcase to invent a future for themselves.',
          it: 'Il design non nasce sempre su una griglia ordinata da studio. A volte emerge dal fango, dallo scontro culturale e dal bisogno di migliaia di famiglie arrivate a Madrid con una valigia di cartone per inventarsi un futuro.',
        },
      },
      {
        p: {
          es: 'Aluche no se concibió para salir en revistas de tendencias. Se levantó a contrarreloj entre los años sesenta y setenta, cuando el éxodo rural desbordaba la capital. Hoy, lo que a ojos perezosos parece una masa uniforme de pisos obreros es, en realidad, un tratado vivo de arquitectura popular.',
          en: 'Aluche was not designed to appear in trend magazines. It was built against the clock between the sixties and seventies, when rural exodus was overflowing the capital. Today, what lazy eyes see as a uniform mass of workers’ flats is, in reality, a living treatise on popular architecture.',
          it: 'Aluche non è stato concepito per finire sulle riviste di tendenza. È stato costruito in fretta e furia tra gli anni Sessanta e Settanta, quando l’esodo rurale travolgeva la capitale. Oggi, quella che a occhi pigri sembra una massa uniforme di case operaie è, in realtà, un trattato vivente di architettura popolare.',
        },
      },
      {
        img: 'noticia3-2.webp', w: 1562, h: 864,
        caption: {
          es: 'Ilustración basada en el bloque de la Calle Camarena 228 en Aluche. (Sergio de Isidro)',
          en: 'Illustration based on the block at Calle Camarena 228 in Aluche. (Sergio de Isidro)',
          it: 'Illustrazione basata sul palazzo di Calle Camarena 228 ad Aluche. (Sergio de Isidro)',
        },
      },
      {
        p: {
          es: 'El éxodo rural y el mapa de la nostalgia: hasta finales de los cincuenta, Aluche era campo abierto: huertas, pastos y arroyos en los confines de Carabanchel, tal como recogen Juan Luis y Antonio Javier Roldán Calzado en su crónica sobre el barrio.',
          en: 'Rural exodus and the map of nostalgia: until the late fifties, Aluche was open countryside: vegetable gardens, pastures and streams on the edges of Carabanchel, as Juan Luis and Antonio Javier Roldán Calzado record in their chronicle of the neighbourhood.',
          it: 'L’esodo rurale e la mappa della nostalgia: fino alla fine degli anni Cinquanta, Aluche era aperta campagna: orti, pascoli e ruscelli ai confini di Carabanchel, come raccontano Juan Luis e Antonio Javier Roldán Calzado nella loro cronaca sul quartiere.',
        },
      },
      {
        p: {
          es: 'La llegada masiva de trabajadores desde La Mancha, Extremadura y Andalucía cambió el paisaje para siempre. Aquellas familias no solo ocuparon los bloques; bautizaron su nuevo territorio con los pueblos que acababan de dejar atrás. Camarena, Ocaña, Illescas o Maqueda no son nombres puestos al azar: son un homenaje colectivo, una brújula emocional para no olvidar las raíces mientras se pisaba asfalto nuevo.',
          en: 'The mass arrival of workers from La Mancha, Extremadura and Andalusia changed the landscape forever. Those families did not just move into the blocks; they named their new territory after the villages they had just left behind. Camarena, Ocaña, Illescas or Maqueda are not random names: they are a collective tribute, an emotional compass so as not to forget their roots while treading on new asphalt.',
          it: 'L’arrivo in massa di lavoratori dalla Mancia, dall’Estremadura e dall’Andalusia cambiò il paesaggio per sempre. Quelle famiglie non si limitarono ad abitare i palazzi; battezzarono il loro nuovo territorio con i paesi che avevano appena lasciato. Camarena, Ocaña, Illescas o Maqueda non sono nomi scelti a caso: sono un omaggio collettivo, una bussola emotiva per non dimenticare le radici mentre si calpestava asfalto nuovo.',
        },
      },
      {
        img: 'noticia3-3.webp', w: 1562, h: 1299,
        caption: {
          es: 'Diversas fachadas del barrio de Aluche, en Madrid (ig: conradog.ph)',
          en: 'Various façades in the Aluche neighbourhood, Madrid (ig: conradog.ph)',
          it: 'Diverse facciate del quartiere di Aluche, a Madrid (ig: conradog.ph)',
        },
      },
      {
        p: {
          es: 'El Plan Parcial trajo la respuesta técnica al déficit de vivienda del desarrollismo, los "Módulos colmena", torres exentas y bloques lineales de escala masiva, levantados con economía de medios.',
          en: 'The Partial Plan brought the technical answer to the housing shortage of the development years: the "beehive modules", free-standing towers and linear blocks on a massive scale, built with economy of means.',
          it: 'Il Piano Parziale portò la risposta tecnica alla carenza di alloggi degli anni dello sviluppo: i "moduli alveare", torri isolate e blocchi lineari su scala massiccia, costruiti con economia di mezzi.',
        },
      },
      {
        p: {
          es: '-Ladrillo caravista: La piel de arcilla roja que cubre el distrito, honesta y dura, pensada para aguantar décadas sin pedir mantenimiento.',
          en: '-Exposed brick: The red clay skin that covers the district, honest and tough, designed to last for decades without asking for maintenance.',
          it: '-Mattone a vista: La pelle di argilla rossa che ricopre il distretto, onesta e dura, pensata per resistere decenni senza chiedere manutenzione.',
        },
      },
      {
        p: {
          es: '-Espacio interbloque: Manzanas abiertas que rompían con el ensanche clásico, pero que nacieron desnudas de aceras, colegios y farolas.',
          en: '-Space between blocks: Open blocks that broke with the classic city extension, but were born bare of pavements, schools and street lamps.',
          it: '-Spazio tra i blocchi: Isolati aperti che rompevano con l’espansione urbana classica, ma che nacquero privi di marciapiedi, scuole e lampioni.',
        },
      },
      {
        p: {
          es: 'El plano entregó una estructura eficiente y fría. El carácter se lo tuvo que poner la gente.',
          en: 'The plan delivered an efficient, cold structure. The character had to be added by the people.',
          it: 'Il progetto consegnò una struttura efficiente e fredda. Il carattere dovette metterlo la gente.',
        },
      },
      {
        img: 'noticia3-4.webp', w: 1562, h: 1296,
        caption: {
          es: 'Fachadas del barrio de Aluche con el icónico Toldo Verde (ig: conradog.ph)',
          en: 'Façades in Aluche with the iconic Green Awning (ig: conradog.ph)',
          it: 'Facciate del quartiere di Aluche con l’iconica Tenda Verde (ig: conradog.ph)',
        },
      },
      {
        p: {
          es: 'La identidad cromática de Aluche no la decidió un director de arte: la fijó el toldo verde botella.',
          en: 'Aluche’s colour identity was not chosen by an art director: it was set by the bottle-green awning.',
          it: 'L’identità cromatica di Aluche non l’ha decisa un direttore artistico: l’ha fissata la tenda verde bottiglia.',
        },
      },
      {
        p: {
          es: 'Más allá de protegernos del verano implacable de la meseta, esa lona funcionó casi como una añoranza poética: un parche verde para recuperar el campo perdido entre tanto ladrillo. Junto al rojo arcilloso, formó el pantone inconfundible de la periferia.',
          en: 'Beyond protecting us from the relentless summer of the Castilian plateau, that canvas worked almost as a poetic longing: a green patch to win back the countryside lost among so much brick. Together with the clay red, it formed the unmistakable Pantone of the outskirts.',
          it: 'Oltre a proteggerci dall’estate implacabile dell’altopiano, quella tela ha funzionato quasi come una nostalgia poetica: una toppa verde per recuperare la campagna perduta tra tanti mattoni. Insieme al rosso argilla, ha formato il Pantone inconfondibile della periferia.',
        },
      },
      {
        p: {
          es: 'A partir de ahí, el barrio transformó la arquitectura original a su medida:',
          en: 'From there, the neighbourhood reshaped the original architecture to fit its needs:',
          it: 'Da lì, il quartiere ha trasformato l’architettura originale a sua misura:',
        },
      },
      {
        p: {
          es: '-Apropiación de la fachada: Cerramientos de aluminio para arañar unos metros al salón, compresores de aire acondicionado anclados al ladrillo y macetas de geranios peleando por luz.',
          en: '-Taking over the façade: Aluminium enclosures to squeeze a few extra metres for the living room, air-conditioning units bolted to the brick and pots of geraniums fighting for light.',
          it: '-Appropriazione della facciata: Verande in alluminio per strappare qualche metro al soggiorno, condizionatori ancorati al mattone e vasi di gerani che lottano per la luce.',
        },
      },
      {
        p: {
          es: '-Textura en movimiento: Tendederos repletos de sábanas y toldos subidos a distintas alturas que rompen la rigidez del edificio y le devuelven pulso humano.',
          en: '-Texture in motion: Washing lines full of sheets and awnings raised to different heights that break the rigidity of the building and give it back a human pulse.',
          it: '-Texture in movimento: Stendini pieni di lenzuola e tende alzate ad altezze diverse che rompono la rigidità dell’edificio e gli restituiscono un battito umano.',
        },
      },
      {
        img: 'noticia3-5.webp', w: 1562, h: 959,
        caption: {
          es: 'Fotografías del barrio de Aluche (ig: conradog.ph)',
          en: 'Photographs of the Aluche neighbourhood (ig: conradog.ph)',
          it: 'Fotografie del quartiere di Aluche (ig: conradog.ph)',
        },
      },
      {
        p: {
          es: 'El diseño urbano de Aluche también se peleó en la calle. Ante la falta absoluta de equipamientos, las asociaciones vecinales se plantaron frente a la especulación. Gracias a esa presión nació el Parque de Aluche, recuperando el trazado del antiguo arroyo Luche para crear un lago y un pulmón verde donde antes solo proyectaban más asfalto.',
          en: 'Aluche’s urban design was also fought for in the street. Faced with a total lack of public facilities, the residents’ associations stood up to speculation. Thanks to that pressure, Aluche Park was born, recovering the course of the old Luche stream to create a lake and a green lung where only more asphalt had been planned.',
          it: 'Il design urbano di Aluche si è combattuto anche per strada. Di fronte alla totale mancanza di servizi, le associazioni di quartiere si opposero alla speculazione. Grazie a quella pressione nacque il Parco di Aluche, che recuperò il tracciato dell’antico ruscello Luche per creare un lago e un polmone verde dove prima si progettava solo altro asfalto.',
        },
      },
      {
        p: {
          es: 'Ese nervio combativo forjó una identidad singular que hoy defienden con orgullo vecinos de toda la vida y creadores criados en sus aceras. La periferia ya no pide permiso.',
          en: 'That fighting spirit forged a unique identity that is proudly defended today by lifelong residents and by creators who grew up on its pavements. The outskirts no longer ask for permission.',
          it: 'Quello spirito combattivo ha forgiato un’identità unica, difesa oggi con orgoglio dagli abitanti di sempre e dai creativi cresciuti sui suoi marciapiedi. La periferia non chiede più il permesso.',
        },
      },
      {
        p: {
          es: 'Las fachadas de Aluche dejan una gran lección para cualquier disciplina visual: el proyecto nunca termina con el plano o el render final; empieza cuando la gente lo habita, lo adapta y lo hace suyo.',
          en: 'The façades of Aluche leave a great lesson for any visual discipline: the project never ends with the final drawing or render; it begins when people live in it, adapt it and make it their own.',
          it: 'Le facciate di Aluche lasciano una grande lezione a qualsiasi disciplina visiva: il progetto non finisce mai con la tavola o il render finale; comincia quando la gente lo abita, lo adatta e lo fa suo.',
        },
      },
    ],
  },
]

export const newsById = Object.fromEntries(newsArticles.map((article) => [article.id, article]))
