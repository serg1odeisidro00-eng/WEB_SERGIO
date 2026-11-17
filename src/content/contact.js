// Formulario "Cuentanos tu proyecto" de la pagina Contacto (es / en / it).
// Como el de Academia, no usa servicios externos: abre el correo del visitante
// con el mensaje ya escrito (o WhatsApp con un texto de saludo).

export const CONTACT_EMAIL = 'contacto@m047.es'
export const WHATSAPP_NUMBER = '34633878755'

export const contactProjectTypes = [
  { id: 'interiors', es: 'Interiorismo', en: 'Interior design', it: 'Progettazione d’interni' },
  { id: 'landscape', es: 'Paisajismo', en: 'Landscape design', it: 'Progettazione del paesaggio' },
  { id: 'scenography', es: 'Escenografía', en: 'Scenography', it: 'Scenografia' },
  { id: 'graphic', es: 'Diseño gráfico', en: 'Graphic design', it: 'Progettazione grafica' },
  { id: 'art', es: 'Dirección de arte', en: 'Art direction', it: 'Direzione artistica' },
  { id: 'other', es: 'Otro', en: 'Other', it: 'Altro' },
]

export const contactFormCopy = {
  es: {
    title: 'CUÉNTANOS TU PROYECTO',
    fields: { name: 'Nombre*', email: 'Email*', phone: 'Teléfono', type: 'Tipo de proyecto', message: '¿Qué tienes en mente?*' },
    submit: 'ENVIAR POR EMAIL',
    whatsapp: 'ESCRÍBENOS POR WHATSAPP',
    whatsappText: 'Hola, M047. Me gustaría contaros un proyecto.',
    whatsappParts: { hello: 'Hola, M047. Soy', type: 'Proyecto', email: 'Mi email' },
    noMail: '¿No se abre tu correo? Escríbenos a', copyEmail: 'COPIAR EMAIL', copied: 'COPIADO',
    note: 'Al enviar se abrirá tu programa de correo con el mensaje ya escrito. Esta web no guarda tus datos: solo los usaremos para responderte.',
    errors: { required: 'Campo obligatorio', email: 'Revisa el email', summary: 'Faltan algunos datos.' },
    sent: { title: 'MENSAJE PREPARADO', body: 'Se ha abierto tu correo con el mensaje. Solo tienes que enviarlo.', fallback: 'Si no se ha abierto, escríbenos a', back: 'Volver al formulario' },
    mail: { subject: 'Nuevo proyecto', intro: 'Hola, M047:', name: 'Nombre', email: 'Email', phone: 'Teléfono', type: 'Tipo de proyecto', message: 'Proyecto' },
  },
  en: {
    title: 'TELL US ABOUT YOUR PROJECT',
    fields: { name: 'Name*', email: 'Email*', phone: 'Phone', type: 'Project type', message: 'What do you have in mind?*' },
    submit: 'SEND BY EMAIL',
    whatsapp: 'MESSAGE US ON WHATSAPP',
    whatsappText: 'Hello, M047. I would like to tell you about a project.',
    whatsappParts: { hello: 'Hello, M047. I am', type: 'Project', email: 'My email' },
    noMail: 'Email app didn’t open? Write to us at', copyEmail: 'COPY EMAIL', copied: 'COPIED',
    note: 'Sending opens your email app with the message already written. This website does not store your data: we will only use it to reply to you.',
    errors: { required: 'Required field', email: 'Check the email', summary: 'Some details are missing.' },
    sent: { title: 'MESSAGE READY', body: 'Your email app has opened with the message. Just send it.', fallback: 'If it did not open, write to us at', back: 'Back to the form' },
    mail: { subject: 'New project', intro: 'Hello, M047:', name: 'Name', email: 'Email', phone: 'Phone', type: 'Project type', message: 'Project' },
  },
  it: {
    title: 'RACCONTACI IL TUO PROGETTO',
    fields: { name: 'Nome*', email: 'Email*', phone: 'Telefono', type: 'Tipo di progetto', message: 'Che cosa hai in mente?*' },
    submit: 'INVIA PER EMAIL',
    whatsapp: 'SCRIVICI SU WHATSAPP',
    whatsappText: 'Ciao, M047. Vorrei raccontarvi un progetto.',
    whatsappParts: { hello: 'Ciao, M047. Sono', type: 'Progetto', email: 'La mia email' },
    noMail: 'Non si apre la tua email? Scrivici a', copyEmail: 'COPIA EMAIL', copied: 'COPIATA',
    note: 'Inviando si aprirà il tuo programma di posta con il messaggio già scritto. Questo sito non conserva i tuoi dati: li useremo solo per risponderti.',
    errors: { required: 'Campo obbligatorio', email: 'Controlla l’email', summary: 'Mancano alcuni dati.' },
    sent: { title: 'MESSAGGIO PRONTO', body: 'Si è aperto il tuo programma di posta con il messaggio. Devi solo inviarlo.', fallback: 'Se non si è aperto, scrivici a', back: 'Torna al modulo' },
    mail: { subject: 'Nuovo progetto', intro: 'Ciao, M047:', name: 'Nome', email: 'Email', phone: 'Telefono', type: 'Tipo di progetto', message: 'Progetto' },
  },
}
