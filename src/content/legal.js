// Textos legales (aviso legal, privacidad y cookies) en es / en / it.
// Si hay diferencias, vale la version en espanol (se avisa en en/it).
// Sergio no quiere publicar sus datos personales (la web es un portfolio con
// contacto y no guarda datos): solo aparecen el estudio y su contacto.
// Revision 18-nov-2026: textos ampliados (LSSI, RGPD, LOPDGDD) sin datos
// personales. PENDIENTE: cuando el estudio este dado de alta (autonomo o
// sociedad), anadir en legalData el titular (nombre o razon social) y el
// NIF/CIF: la LSSI (art. 10) los exige a quien ofrece servicios por internet.

export const legalData = {
  brand: 'Estudio M047',
  address: 'Madrid (España)',
  email: 'contacto@m047.es',
  phone: '(+34) 633 878 755',
  web: 'www.m047.es',
  updated: { es: '18 de noviembre de 2026', en: '18 November 2026', it: '18 novembre 2026' },
}

const d = legalData

const legalPagesEs = {
  legal: {
    title: 'Aviso legal',
    sections: [
      ['1. Datos identificativos', [
        `En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el sitio web ${d.web} es titularidad de ${d.brand}, estudio de diseño con sede en ${d.address}.`,
        `Correo electrónico: ${d.email} · Teléfono: ${d.phone}.`,
      ]],
      ['2. Objeto', [
        'Este sitio web presenta la actividad del estudio (interiorismo, dirección de arte, diseño gráfico, paisajismo, escenografía y academia), sus proyectos y noticias, y ofrece medios para ponerse en contacto con él. La web no realiza ventas ni contrataciones en línea: cualquier encargo o formación se acuerda directamente con el estudio.',
      ]],
      ['3. Condiciones de uso', [
        'El acceso a la web es gratuito y no requiere registro. Al navegar por ella aceptas este aviso legal. Te comprometes a hacer un uso adecuado de los contenidos, conforme a la ley y a la buena fe, y a no emplearlos para actividades ilícitas ni para dañar la web, sus sistemas o a terceros.',
      ]],
      ['4. Propiedad intelectual e industrial', [
        'Todos los contenidos de la web (dibujos, ilustraciones, animaciones, fotografías, textos, logotipos, marcas, láminas de proyectos, sonido y el diseño y código de la propia web) son obra del estudio o se usan con permiso de sus autores, y están protegidos por la normativa de propiedad intelectual e industrial.',
        'Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización expresa y por escrito del estudio, salvo para uso personal y privado. Se permite compartir enlaces a la web citando su procedencia.',
        'Los proyectos realizados en el ámbito académico o en equipo indican, cuando procede, a sus coautores. Las marcas de terceros que aparecen en algunos proyectos pertenecen a sus titulares.',
      ]],
      ['5. Responsabilidad', [
        'El estudio procura que la información de la web sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad continua del servicio, y no se hace responsable de los daños que pudieran derivarse de interrupciones, fallos técnicos o virus ajenos a su control.',
        'Las imágenes de proyectos son representaciones (planos, ilustraciones, renders o fotografías) y tienen carácter orientativo.',
      ]],
      ['6. Enlaces', [
        'La web incluye enlaces a sitios de terceros (Instagram, LinkedIn, Behance, WhatsApp, Google). El estudio no controla esos sitios ni se responsabiliza de sus contenidos ni de sus políticas de privacidad. Si tienes conocimiento de un enlace a un contenido ilícito, escríbenos y lo retiraremos.',
      ]],
      ['7. Modificaciones', [
        'El estudio puede modificar en cualquier momento los contenidos de la web y este aviso legal. La versión vigente es la publicada en cada momento, con su fecha de actualización.',
      ]],
      ['8. Legislación aplicable y jurisdicción', [
        'Este aviso legal se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la ley; si eres consumidor, los de tu domicilio.',
      ]],
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    sections: [
      ['1. Responsable del tratamiento', [
        `${d.brand}, ${d.address}. Correo electrónico: ${d.email}. Teléfono: ${d.phone}.`,
        'Esta política cumple el Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
      ]],
      ['2. Qué datos tratamos', [
        'Esta web no tiene registro de usuarios ni guarda en ningún servidor los datos que escribes en sus formularios. Los formularios de Contacto y Academia solo preparan un mensaje en tu propio programa de correo (o en WhatsApp); si decides enviarlo, recibiremos tu nombre, tu email, tu teléfono si lo indicas y el contenido del mensaje.',
        'También tratamos los datos que nos facilites si nos escribes por correo electrónico o WhatsApp, o si nos llamas por teléfono.',
        'Te pedimos que no nos envíes datos especialmente protegidos (salud, ideología, etc.) ni datos de otras personas sin su permiso.',
      ]],
      ['3. Para qué los usamos', [
        'Para responder a tu consulta o solicitud de presupuesto o de formación.',
        'Si llegamos a trabajar juntos, para gestionar el encargo o la formación, emitir los documentos correspondientes y cumplir las obligaciones legales que se deriven.',
        'No elaboramos perfiles ni tomamos decisiones automatizadas, y no te enviaremos publicidad si no nos lo pides.',
      ]],
      ['4. Base legal', [
        'Tu consentimiento, que das al escribirnos (art. 6.1.a RGPD) y que puedes retirar en cualquier momento.',
        'La aplicación de medidas precontractuales o la ejecución del contrato cuando nos pides un presupuesto o nos encargas un trabajo o una formación (art. 6.1.b RGPD).',
        'El cumplimiento de obligaciones legales, por ejemplo fiscales (art. 6.1.c RGPD).',
      ]],
      ['5. Cuánto tiempo los conservamos', [
        'Las consultas que no terminan en un encargo, como máximo un año desde la última comunicación.',
        'Los datos de encargos y formaciones, mientras dure la relación y, después, durante los plazos de prescripción de las obligaciones legales (con carácter general, seis años para la documentación contable y fiscal).',
      ]],
      ['6. Destinatarios y transferencias internacionales', [
        'No vendemos ni cedemos tus datos a terceros, salvo obligación legal.',
        'Para que la web y el correo funcionen trabajamos con proveedores que pueden tratar algunos datos por nuestra cuenta: Vercel Inc. (alojamiento de la web y estadística anónima de visitas), que trata datos técnicos como la dirección IP para servir la página, y el proveedor de correo electrónico del dominio. Para mostrar una de las tipografías, tu navegador se conecta a Google Fonts (Google), que recibe tu dirección IP.',
        'Algunos de estos proveedores están en Estados Unidos. Las transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
        'Si nos escribes por WhatsApp, ese servicio es prestado por WhatsApp Ireland Ltd. (Meta), conforme a su propia política de privacidad.',
      ]],
      ['7. Tus derechos', [
        `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a ${d.email} e indicando qué derecho quieres ejercer. Te responderemos en el plazo máximo de un mes.`,
        'Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
      ]],
      ['8. Menores de edad', [
        'Si tienes menos de 14 años, no nos envíes tus datos: necesitamos el consentimiento de tu madre, padre o tutor.',
      ]],
      ['9. Seguridad', [
        'La web funciona con conexión cifrada (HTTPS) y aplicamos medidas técnicas y organizativas razonables para proteger los datos que recibimos frente a pérdidas, accesos no autorizados o usos indebidos.',
      ]],
      ['10. Cambios en esta política', [
        'Podemos actualizar esta política para adaptarla a cambios legales o de funcionamiento de la web. La versión vigente es la publicada aquí, con su fecha de actualización.',
      ]],
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      ['1. ¿Usa cookies esta web?', [
        'No. Esta web no instala cookies de publicidad, de análisis ni de seguimiento, propias ni de terceros. Por eso no te mostramos ningún aviso para aceptarlas.',
      ]],
      ['2. Lo que sí se guarda en tu navegador', [
        'Solo el idioma que eliges (español, inglés o italiano), mediante el almacenamiento local del navegador, para mostrarte la web en ese idioma la próxima vez. Es un dato técnico necesario para darte el servicio que pides, no sirve para identificarte y está exento de consentimiento según el artículo 22.2 de la LSSI-CE.',
      ]],
      ['3. Estadísticas de visitas', [
        'Para saber cuántas personas visitan la web y qué páginas ven usamos Vercel Web Analytics, que funciona sin cookies y con datos anónimos y agregados que no permiten identificarte.',
      ]],
      ['4. Servicios de terceros', [
        'Al cargar la web, tu navegador se conecta a Google Fonts para descargar una tipografía; esa conexión no instala cookies. Si pulsas en los enlaces a Instagram, LinkedIn, Behance, WhatsApp o Google, pasarás a sus sitios, que tienen sus propias políticas de cookies.',
      ]],
      ['5. Cómo borrar los datos de tu navegador', [
        'Puedes borrar el idioma guardado y cualquier otro dato del sitio desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge…), en el apartado de privacidad o datos de sitios web.',
      ]],
    ],
  },
}

const legalPagesEn = {
  legal: {
    title: 'Legal notice',
    sections: [
      ['1. Identification', [
        `In accordance with Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the website ${d.web} is owned by ${d.brand}, a design studio based in Madrid (Spain).`,
        `Email: ${d.email} · Phone: ${d.phone}.`,
      ]],
      ['2. Purpose', [
        'This website presents the studio’s work (interior design, art direction, graphic design, landscape design, scenography and academy), its projects and news, and offers ways to get in touch. The website does not sell or contract anything online: any commission or training is agreed directly with the studio.',
      ]],
      ['3. Terms of use', [
        'Access to the website is free and requires no registration. By browsing it you accept this legal notice. You agree to use its content appropriately, lawfully and in good faith, and not to use it for unlawful purposes or to harm the website, its systems or third parties.',
      ]],
      ['4. Intellectual and industrial property', [
        'All the content on this website (drawings, illustrations, animations, photographs, texts, logos, trademarks, project boards, sound and the design and code of the website itself) is the work of the studio or is used with its authors’ permission, and is protected by intellectual and industrial property law.',
        'Reproducing, distributing, publicly communicating or transforming it, in whole or in part, without the studio’s express written permission is prohibited, except for personal and private use. You may share links to the website citing the source.',
        'Projects carried out in an academic setting or as a team credit their co-authors where applicable. Third-party trademarks shown in some projects belong to their owners.',
      ]],
      ['5. Liability', [
        'The studio makes every effort to keep the information on the website accurate and up to date, but does not guarantee that it is error-free or permanently available, and is not liable for damage arising from interruptions, technical faults or viruses beyond its control.',
        'Project images are representations (drawings, illustrations, renders or photographs) and are for guidance only.',
      ]],
      ['6. Links', [
        'The website includes links to third-party sites (Instagram, LinkedIn, Behance, WhatsApp, Google). The studio does not control those sites and is not responsible for their content or privacy policies. If you become aware of a link to unlawful content, write to us and we will remove it.',
      ]],
      ['7. Changes', [
        'The studio may change the content of the website and this legal notice at any time. The version in force is the one published at any given time, with its update date.',
      ]],
      ['8. Applicable law and jurisdiction', [
        'This legal notice is governed by Spanish law. Any dispute will be heard by the courts that have jurisdiction under the law; if you are a consumer, those of your place of residence.',
      ]],
    ],
  },
  privacy: {
    title: 'Privacy policy',
    sections: [
      ['1. Data controller', [
        `${d.brand}, Madrid (Spain). Email: ${d.email}. Phone: ${d.phone}.`,
        'This policy complies with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), and Spanish Organic Law 3/2018 on Personal Data Protection and the guarantee of digital rights (LOPDGDD).',
      ]],
      ['2. What data we process', [
        'This website has no user accounts and does not store the data you type into its forms on any server. The Contact and Academy forms only prepare a message in your own email app (or in WhatsApp); if you decide to send it, we will receive your name, your email address, your phone number if you include it and the content of your message.',
        'We also process any data you give us when you email us, message us on WhatsApp or call us.',
        'Please do not send us special categories of data (health, beliefs, etc.) or other people’s data without their permission.',
      ]],
      ['3. Why we use it', [
        'To answer your enquiry or your request for a quote or for training.',
        'If we end up working together, to manage the commission or the training, issue the relevant documents and meet the resulting legal obligations.',
        'We do not build profiles or make automated decisions, and we will not send you advertising unless you ask us to.',
      ]],
      ['4. Legal basis', [
        'Your consent, given when you write to us (Art. 6(1)(a) GDPR), which you can withdraw at any time.',
        'Taking pre-contractual steps or performing a contract when you ask for a quote or commission work or training from us (Art. 6(1)(b) GDPR).',
        'Compliance with legal obligations, such as tax obligations (Art. 6(1)(c) GDPR).',
      ]],
      ['5. How long we keep it', [
        'Enquiries that do not lead to a commission: no longer than one year from the last communication.',
        'Data relating to commissions and training: for as long as the relationship lasts and then for the limitation periods of the legal obligations involved (generally six years for accounting and tax records).',
      ]],
      ['6. Recipients and international transfers', [
        'We do not sell or share your data with third parties, unless required by law.',
        'To run the website and email we work with providers that may process some data on our behalf: Vercel Inc. (website hosting and anonymous visit statistics), which processes technical data such as your IP address to serve the page, and the email provider for our domain. To display one of the typefaces, your browser connects to Google Fonts (Google), which receives your IP address.',
        'Some of these providers are in the United States. Transfers are covered by the EU-US Data Privacy Framework or by the standard contractual clauses approved by the European Commission.',
        'If you write to us on WhatsApp, that service is provided by WhatsApp Ireland Ltd. (Meta) under its own privacy policy.',
      ]],
      ['7. Your rights', [
        `You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw your consent, by writing to ${d.email} and stating which right you wish to exercise. We will reply within one month at most.`,
        'If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
      ]],
      ['8. Minors', [
        'If you are under 14, please do not send us your data: we need the consent of your parent or guardian.',
      ]],
      ['9. Security', [
        'The website uses an encrypted connection (HTTPS) and we apply reasonable technical and organisational measures to protect the data we receive against loss, unauthorised access or misuse.',
      ]],
      ['10. Changes to this policy', [
        'We may update this policy to reflect legal changes or changes in how the website works. The version in force is the one published here, with its update date.',
      ]],
    ],
  },
  cookies: {
    title: 'Cookie policy',
    sections: [
      ['1. Does this website use cookies?', [
        'No. This website does not install advertising, analytics or tracking cookies, either its own or third-party ones. That is why we do not show you any notice asking you to accept them.',
      ]],
      ['2. What is stored in your browser', [
        'Only the language you choose (Spanish, English or Italian), using the browser’s local storage, so that the website is shown in that language next time. It is a technical setting needed to provide the service you request, cannot identify you and is exempt from consent under Article 22.2 of the Spanish LSSI-CE.',
      ]],
      ['3. Visit statistics', [
        'To know how many people visit the website and which pages they view, we use Vercel Web Analytics, which works without cookies and with anonymous, aggregated data that cannot identify you.',
      ]],
      ['4. Third-party services', [
        'When the website loads, your browser connects to Google Fonts to download a typeface; this connection does not set cookies. If you click the links to Instagram, LinkedIn, Behance, WhatsApp or Google, you will go to their sites, which have their own cookie policies.',
      ]],
      ['5. How to delete data from your browser', [
        'You can delete the saved language and any other site data from your browser settings (Chrome, Safari, Firefox, Edge…), under privacy or website data.',
      ]],
    ],
  },
}

const legalPagesIt = {
  legal: {
    title: 'Note legali',
    sections: [
      ['1. Dati identificativi', [
        `Ai sensi della legge spagnola 34/2002, dell’11 luglio, sui servizi della società dell’informazione e sul commercio elettronico (LSSI-CE), si informa che il sito web ${d.web} è di titolarità di ${d.brand}, studio di design con sede a Madrid (Spagna).`,
        `Email: ${d.email} · Telefono: ${d.phone}.`,
      ]],
      ['2. Finalità', [
        'Questo sito web presenta l’attività dello studio (interior design, direzione artistica, design grafico, progettazione del paesaggio, scenografia e accademia), i suoi progetti e le sue notizie, e offre modi per mettersi in contatto. Il sito non effettua vendite né contratti online: qualsiasi incarico o formazione si concorda direttamente con lo studio.',
      ]],
      ['3. Condizioni d’uso', [
        'L’accesso al sito è gratuito e non richiede registrazione. Navigando accetti queste note legali. Ti impegni a fare un uso corretto dei contenuti, conforme alla legge e alla buona fede, e a non usarli per attività illecite né per danneggiare il sito, i suoi sistemi o terzi.',
      ]],
      ['4. Proprietà intellettuale e industriale', [
        'Tutti i contenuti del sito (disegni, illustrazioni, animazioni, fotografie, testi, loghi, marchi, tavole dei progetti, suono e il design e il codice del sito stesso) sono opera dello studio o sono usati con il permesso dei loro autori, e sono protetti dalla normativa sulla proprietà intellettuale e industriale.',
        'Ne è vietata la riproduzione, distribuzione, comunicazione pubblica o trasformazione, totale o parziale, senza l’autorizzazione espressa e scritta dello studio, salvo per uso personale e privato. È consentito condividere link al sito citandone la provenienza.',
        'I progetti realizzati in ambito accademico o in gruppo indicano, quando opportuno, i loro coautori. I marchi di terzi presenti in alcuni progetti appartengono ai rispettivi titolari.',
      ]],
      ['5. Responsabilità', [
        'Lo studio si impegna affinché le informazioni del sito siano corrette e aggiornate, ma non garantisce l’assenza di errori né la disponibilità continua del servizio, e non è responsabile dei danni derivanti da interruzioni, guasti tecnici o virus al di fuori del suo controllo.',
        'Le immagini dei progetti sono rappresentazioni (disegni, illustrazioni, render o fotografie) e hanno carattere indicativo.',
      ]],
      ['6. Link', [
        'Il sito include link a siti di terzi (Instagram, LinkedIn, Behance, WhatsApp, Google). Lo studio non controlla tali siti e non è responsabile dei loro contenuti né delle loro politiche sulla privacy. Se vieni a conoscenza di un link a un contenuto illecito, scrivici e lo rimuoveremo.',
      ]],
      ['7. Modifiche', [
        'Lo studio può modificare in qualsiasi momento i contenuti del sito e queste note legali. La versione in vigore è quella pubblicata di volta in volta, con la sua data di aggiornamento.',
      ]],
      ['8. Legge applicabile e foro competente', [
        'Queste note legali sono regolate dalla legge spagnola. Per qualsiasi controversia saranno competenti i tribunali previsti dalla legge; se sei un consumatore, quelli del tuo luogo di residenza.',
      ]],
    ],
  },
  privacy: {
    title: 'Informativa sulla privacy',
    sections: [
      ['1. Titolare del trattamento', [
        `${d.brand}, Madrid (Spagna). Email: ${d.email}. Telefono: ${d.phone}.`,
        'Questa informativa è conforme al Regolamento (UE) 2016/679, Regolamento generale sulla protezione dei dati (GDPR), e alla legge organica spagnola 3/2018 sulla protezione dei dati personali e la garanzia dei diritti digitali (LOPDGDD).',
      ]],
      ['2. Quali dati trattiamo', [
        'Questo sito non ha registrazione utenti e non salva su alcun server i dati che scrivi nei suoi moduli. I moduli di Contatti e Accademia preparano soltanto un messaggio nel tuo programma di posta (o in WhatsApp); se decidi di inviarlo, riceveremo il tuo nome, la tua email, il tuo telefono se lo indichi e il contenuto del messaggio.',
        'Trattiamo anche i dati che ci fornisci se ci scrivi via email o WhatsApp o se ci chiami.',
        'Ti chiediamo di non inviarci categorie particolari di dati (salute, convinzioni, ecc.) né dati di altre persone senza il loro permesso.',
      ]],
      ['3. Per cosa li usiamo', [
        'Per rispondere alla tua richiesta di informazioni, di preventivo o di formazione.',
        'Se arriviamo a lavorare insieme, per gestire l’incarico o la formazione, emettere i documenti relativi e adempiere agli obblighi di legge che ne derivano.',
        'Non creiamo profili né prendiamo decisioni automatizzate, e non ti invieremo pubblicità se non ce lo chiedi.',
      ]],
      ['4. Base giuridica', [
        'Il tuo consenso, che dai scrivendoci (art. 6.1.a GDPR) e che puoi revocare in qualsiasi momento.',
        'L’esecuzione di misure precontrattuali o di un contratto quando ci chiedi un preventivo o ci affidi un lavoro o una formazione (art. 6.1.b GDPR).',
        'L’adempimento di obblighi di legge, ad esempio fiscali (art. 6.1.c GDPR).',
      ]],
      ['5. Per quanto tempo li conserviamo', [
        'Le richieste che non si traducono in un incarico: al massimo un anno dall’ultima comunicazione.',
        'I dati relativi a incarichi e formazioni: per tutta la durata del rapporto e, successivamente, per i termini di prescrizione degli obblighi di legge (in generale sei anni per la documentazione contabile e fiscale).',
      ]],
      ['6. Destinatari e trasferimenti internazionali', [
        'Non vendiamo né cediamo i tuoi dati a terzi, salvo obbligo di legge.',
        'Per il funzionamento del sito e della posta lavoriamo con fornitori che possono trattare alcuni dati per nostro conto: Vercel Inc. (hosting del sito e statistiche anonime delle visite), che tratta dati tecnici come l’indirizzo IP per servire la pagina, e il fornitore di posta elettronica del dominio. Per mostrare uno dei caratteri tipografici, il tuo browser si collega a Google Fonts (Google), che riceve il tuo indirizzo IP.',
        'Alcuni di questi fornitori si trovano negli Stati Uniti. I trasferimenti sono coperti dal Quadro UE-USA per la protezione dei dati o dalle clausole contrattuali tipo approvate dalla Commissione europea.',
        'Se ci scrivi su WhatsApp, il servizio è fornito da WhatsApp Ireland Ltd. (Meta) secondo la propria informativa sulla privacy.',
      ]],
      ['7. I tuoi diritti', [
        `Puoi esercitare i diritti di accesso, rettifica, cancellazione, opposizione, limitazione del trattamento e portabilità, nonché revocare il consenso, scrivendo a ${d.email} e indicando quale diritto vuoi esercitare. Ti risponderemo entro un mese al massimo.`,
        'Se ritieni che non abbiamo gestito correttamente la tua richiesta, puoi presentare un reclamo all’Agenzia spagnola per la protezione dei dati (www.aepd.es).',
      ]],
      ['8. Minori', [
        'Se hai meno di 14 anni, non inviarci i tuoi dati: abbiamo bisogno del consenso di un genitore o tutore.',
      ]],
      ['9. Sicurezza', [
        'Il sito utilizza una connessione cifrata (HTTPS) e applichiamo misure tecniche e organizzative ragionevoli per proteggere i dati che riceviamo da perdite, accessi non autorizzati o usi impropri.',
      ]],
      ['10. Modifiche a questa informativa', [
        'Possiamo aggiornare questa informativa per adeguarla a cambiamenti normativi o del funzionamento del sito. La versione in vigore è quella pubblicata qui, con la sua data di aggiornamento.',
      ]],
    ],
  },
  cookies: {
    title: 'Informativa sui cookie',
    sections: [
      ['1. Questo sito usa cookie?', [
        'No. Questo sito non installa cookie pubblicitari, analitici o di tracciamento, né propri né di terzi. Per questo non ti mostriamo alcun avviso per accettarli.',
      ]],
      ['2. Cosa viene salvato nel tuo browser', [
        'Solo la lingua che scegli (spagnolo, inglese o italiano), tramite la memoria locale del browser, per mostrarti il sito in quella lingua la volta successiva. È un dato tecnico necessario a fornirti il servizio che richiedi, non permette di identificarti ed è esente da consenso ai sensi dell’articolo 22.2 della LSSI-CE spagnola.',
      ]],
      ['3. Statistiche delle visite', [
        'Per sapere quante persone visitano il sito e quali pagine vedono usiamo Vercel Web Analytics, che funziona senza cookie e con dati anonimi e aggregati che non permettono di identificarti.',
      ]],
      ['4. Servizi di terzi', [
        'Quando il sito si carica, il tuo browser si collega a Google Fonts per scaricare un carattere tipografico; questa connessione non installa cookie. Se clicchi sui link a Instagram, LinkedIn, Behance, WhatsApp o Google, passerai ai loro siti, che hanno le proprie politiche sui cookie.',
      ]],
      ['5. Come cancellare i dati dal tuo browser', [
        'Puoi cancellare la lingua salvata e qualsiasi altro dato del sito dalle impostazioni del tuo browser (Chrome, Safari, Firefox, Edge…), nella sezione privacy o dati dei siti web.',
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
