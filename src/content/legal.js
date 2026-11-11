// Textos legales (aviso legal, privacidad y cookies). Solo en espanol.
// Sergio no quiere publicar sus datos personales (la web es un portfolio con
// contacto y no guarda datos): solo aparecen el estudio y su email.
// Si algun dia vende por la web (tienda, academia de pago), anadir nombre y NIF.

export const legalData = {
  brand: 'Estudio M047',
  address: 'Madrid (España)',
  email: 'info@m047.es',
  phone: '(+34) 633 878 755',
  updated: 'noviembre de 2026',
}

const d = legalData

export const legalPages = {
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
