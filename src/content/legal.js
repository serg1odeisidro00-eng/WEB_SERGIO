// Textos legales (aviso legal, privacidad y cookies) en es / en / it.
// Si hay diferencias, vale la version en espanol (se avisa en en/it).
// Sergio no quiere publicar sus datos personales (la web es un portfolio con
// contacto y no guarda datos): solo aparecen el estudio y su email.
// Si algun dia vende por la web (tienda, academia de pago), anadir nombre y NIF.

export const legalData = {
  brand: 'Estudio M047',
  address: 'Madrid (España)',
  email: 'contacto@m047.es',
  phone: '(+34) 633 878 755',
  updated: { es: 'noviembre de 2026', en: 'November 2026', it: 'novembre 2026' },
}

const d = legalData

const legalPagesEs = {
  legal: {
    title: 'Aviso legal',
    sections: [
      ['Sobre este sitio web', [
        `Este sitio web es el portfolio de ${d.brand}, estudio de diseño con sede en ${d.address}.`,
        `Contacto: ${d.email} · ${d.phone}.`,
      ]],
      ['Objeto', [
        'Este sitio web presenta la actividad del estudio, sus proyectos, noticias, la academia y la tienda online, y ofrece medios para ponerse en contacto con el estudio.',
      ]],
      ['Propiedad intelectual', [
        'Todos los contenidos de la web (dibujos, animaciones, fotografías, textos, logotipos, láminas de proyectos y diseño de la propia web) son obra del estudio o se usan con permiso de sus autores. Queda prohibida su reproducción, distribución o transformación sin autorización expresa, salvo para uso personal y privado.',
      ]],
      ['Responsabilidad', [
        'El estudio procura que la información de la web sea correcta y esté actualizada, pero no se hace responsable de errores puntuales ni de interrupciones del servicio. Los enlaces a otras webs (Instagram, LinkedIn, Behance, WhatsApp) llevan a sitios de terceros sobre los que el estudio no tiene control.',
      ]],
      ['Legislación aplicable', [
        'Este aviso legal se rige por la legislación española.',
      ]],
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    sections: [
      ['Responsable', [
        `${d.brand}, ${d.address}. Contacto: ${d.email}.`,
      ]],
      ['Qué datos tratamos y para qué', [
        'Esta web no tiene registro de usuarios ni guarda los datos de los formularios. Los formularios de Contacto y Academia solo preparan un correo en tu propio programa de correo; si decides enviarlo, recibiremos tu nombre, email, teléfono (si lo indicas) y el mensaje.',
        'También recibimos los datos que nos facilites si nos escribes por correo electrónico, WhatsApp o nos llamas por teléfono.',
        'Usamos esos datos únicamente para responderte y, si llegamos a trabajar juntos, para gestionar el proyecto o la formación.',
      ]],
      ['Base legal', [
        'Tu consentimiento al escribirnos y, en su caso, la ejecución de un encargo o de la formación que solicites.',
      ]],
      ['Conservación', [
        'Conservamos tus mensajes el tiempo necesario para atender tu solicitud y, si hay un encargo, durante los plazos que exija la ley.',
      ]],
      ['Destinatarios', [
        'No cedemos tus datos a terceros. La web se aloja en Vercel Inc. (EE. UU.), que trata datos técnicos de la visita (como la dirección IP) para servir la página, con las garantías del Marco de Privacidad de Datos UE-EE. UU. Para mostrar algunas tipografías, el navegador se conecta a Google Fonts.',
        'Para conocer cuántas visitas recibe la web usamos una estadística anónima sin cookies (Vercel Web Analytics), que no permite identificarte.',
      ]],
      ['Tus derechos', [
        `Puedes pedir el acceso, la rectificación o la supresión de tus datos, oponerte a su uso o limitarlo, escribiendo a ${d.email}. Si crees que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
      ]],
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      ['¿Usa cookies esta web?', [
        'No. Esta web no instala cookies de publicidad ni de seguimiento, propias ni de terceros. Por eso no te pedimos que las aceptes.',
      ]],
      ['Lo que sí se guarda en tu navegador', [
        'Solo el idioma que eliges (español, inglés o italiano), para mostrarte la web en ese idioma la próxima vez. Es un dato técnico que no sirve para identificarte y que puedes borrar desde la configuración de tu navegador.',
      ]],
      ['Estadísticas', [
        'Para saber cuántas personas visitan la web y qué páginas ven usamos Vercel Web Analytics, que funciona sin cookies y con datos anónimos y agregados.',
      ]],
    ],
  },
}

const legalPagesEn = {
  legal: {
    title: 'Legal notice',
    sections: [
      ['About this website', [
        `This website is the portfolio of ${d.brand}, a design studio based in Madrid (Spain).`,
        `Contact: ${d.email} · ${d.phone}.`,
      ]],
      ['Purpose', [
        'This website presents the studio’s work, its projects, news, the academy and the online shop, and offers ways to get in touch with the studio.',
      ]],
      ['Intellectual property', [
        'All the content on this website (drawings, animations, photographs, texts, logos, project boards and the design of the website itself) is the work of the studio or is used with its authors’ permission. Reproducing, distributing or transforming it without express permission is prohibited, except for personal and private use.',
      ]],
      ['Liability', [
        'The studio makes every effort to keep the information on the website accurate and up to date, but is not liable for occasional errors or service interruptions. Links to other websites (Instagram, LinkedIn, Behance, WhatsApp) lead to third-party sites over which the studio has no control.',
      ]],
      ['Applicable law', [
        'This legal notice is governed by Spanish law.',
      ]],
    ],
  },
  privacy: {
    title: 'Privacy policy',
    sections: [
      ['Data controller', [
        `${d.brand}, Madrid (Spain). Contact: ${d.email}.`,
      ]],
      ['What data we process and why', [
        'This website has no user accounts and does not store the data entered in its forms. The Contact and Academy forms only prepare an email in your own email app; if you decide to send it, we will receive your name, email address, phone number (if you include it) and your message.',
        'We also receive any data you give us when you email us, message us on WhatsApp or call us.',
        'We use this data only to reply to you and, if we end up working together, to manage the project or the training.',
      ]],
      ['Legal basis', [
        'Your consent when you contact us and, where applicable, the performance of a commission or of the training you request.',
      ]],
      ['Retention', [
        'We keep your messages for as long as needed to deal with your request and, if there is a commission, for the periods required by law.',
      ]],
      ['Recipients', [
        'We do not share your data with third parties. The website is hosted by Vercel Inc. (USA), which processes technical data about your visit (such as your IP address) to serve the page, under the safeguards of the EU-US Data Privacy Framework. To display some typefaces, your browser connects to Google Fonts.',
        'To know how many visits the website receives we use anonymous, cookie-free statistics (Vercel Web Analytics), which cannot identify you.',
      ]],
      ['Your rights', [
        `You can request access to, rectification or erasure of your data, object to its use or restrict it, by writing to ${d.email}. If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
      ]],
    ],
  },
  cookies: {
    title: 'Cookie policy',
    sections: [
      ['Does this website use cookies?', [
        'No. This website does not install advertising or tracking cookies, either its own or third-party ones. That is why we do not ask you to accept them.',
      ]],
      ['What is stored in your browser', [
        'Only the language you choose (Spanish, English or Italian), so that the website is shown in that language next time. It is a technical setting that cannot identify you and that you can delete from your browser settings.',
      ]],
      ['Statistics', [
        'To know how many people visit the website and which pages they view, we use Vercel Web Analytics, which works without cookies and with anonymous, aggregated data.',
      ]],
    ],
  },
}

const legalPagesIt = {
  legal: {
    title: 'Note legali',
    sections: [
      ['Informazioni su questo sito', [
        `Questo sito web è il portfolio di ${d.brand}, studio di design con sede a Madrid (Spagna).`,
        `Contatti: ${d.email} · ${d.phone}.`,
      ]],
      ['Finalità', [
        'Questo sito presenta l’attività dello studio, i suoi progetti, le notizie, l’accademia e il negozio online, e offre i mezzi per contattare lo studio.',
      ]],
      ['Proprietà intellettuale', [
        'Tutti i contenuti del sito (disegni, animazioni, fotografie, testi, loghi, tavole dei progetti e il design del sito stesso) sono opera dello studio o sono utilizzati con il permesso dei loro autori. Ne è vietata la riproduzione, distribuzione o trasformazione senza autorizzazione espressa, salvo per uso personale e privato.',
      ]],
      ['Responsabilità', [
        'Lo studio si impegna affinché le informazioni del sito siano corrette e aggiornate, ma non è responsabile di eventuali errori o interruzioni del servizio. I link ad altri siti (Instagram, LinkedIn, Behance, WhatsApp) portano a siti di terzi sui quali lo studio non ha alcun controllo.',
      ]],
      ['Legge applicabile', [
        'Le presenti note legali sono regolate dalla legge spagnola.',
      ]],
    ],
  },
  privacy: {
    title: 'Informativa sulla privacy',
    sections: [
      ['Titolare del trattamento', [
        `${d.brand}, Madrid (Spagna). Contatti: ${d.email}.`,
      ]],
      ['Quali dati trattiamo e perché', [
        'Questo sito non prevede la registrazione degli utenti e non conserva i dati dei moduli. I moduli di Contatti e Accademia preparano solo un’email nel tuo programma di posta; se decidi di inviarla, riceveremo il tuo nome, la tua email, il tuo telefono (se lo indichi) e il messaggio.',
        'Riceviamo anche i dati che ci fornisci se ci scrivi via email, su WhatsApp o se ci telefoni.',
        'Usiamo questi dati solo per risponderti e, se lavoreremo insieme, per gestire il progetto o la formazione.',
      ]],
      ['Base giuridica', [
        'Il tuo consenso quando ci scrivi e, se del caso, l’esecuzione di un incarico o della formazione che richiedi.',
      ]],
      ['Conservazione', [
        'Conserviamo i tuoi messaggi per il tempo necessario a gestire la tua richiesta e, in caso di incarico, per i periodi previsti dalla legge.',
      ]],
      ['Destinatari', [
        'Non cediamo i tuoi dati a terzi. Il sito è ospitato da Vercel Inc. (USA), che tratta dati tecnici della visita (come l’indirizzo IP) per mostrare la pagina, con le garanzie del Quadro UE-USA sulla protezione dei dati personali. Per mostrare alcuni caratteri tipografici, il browser si collega a Google Fonts.',
        'Per sapere quante visite riceve il sito usiamo statistiche anonime senza cookie (Vercel Web Analytics), che non permettono di identificarti.',
      ]],
      ['I tuoi diritti', [
        `Puoi chiedere l’accesso, la rettifica o la cancellazione dei tuoi dati, opporti al loro uso o limitarlo, scrivendo a ${d.email}. Se ritieni che non abbiamo gestito correttamente la tua richiesta, puoi presentare un reclamo all’Agenzia spagnola per la protezione dei dati (www.aepd.es).`,
      ]],
    ],
  },
  cookies: {
    title: 'Informativa sui cookie',
    sections: [
      ['Questo sito usa cookie?', [
        'No. Questo sito non installa cookie pubblicitari né di tracciamento, propri o di terzi. Per questo non ti chiediamo di accettarli.',
      ]],
      ['Cosa viene salvato nel tuo browser', [
        'Solo la lingua che scegli (spagnolo, inglese o italiano), per mostrarti il sito in quella lingua la volta successiva. È un dato tecnico che non permette di identificarti e che puoi cancellare dalle impostazioni del browser.',
      ]],
      ['Statistiche', [
        'Per sapere quante persone visitano il sito e quali pagine vedono usiamo Vercel Web Analytics, che funziona senza cookie e con dati anonimi e aggregati.',
      ]],
    ],
  },
}

export const legalPages = { es: legalPagesEs, en: legalPagesEn, it: legalPagesIt }

export const legalCopy = {
  es: { updated: 'Última actualización', prevails: null },
  en: { updated: 'Last updated', prevails: 'Translation provided for convenience; in case of discrepancy, the Spanish version prevails.' },
  it: { updated: 'Ultimo aggiornamento', prevails: 'Traduzione fornita per comodità; in caso di discrepanza prevale la versione in spagnolo.' },
}
