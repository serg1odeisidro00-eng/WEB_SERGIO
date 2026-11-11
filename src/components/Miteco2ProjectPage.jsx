import ProjectDetailPage from './ProjectDetailPage'

export const miteco2Copy = {
  es: {
    title: 'Proyecto Paisajismo MITECO 2',
    location: 'Madrid, España',
    alt: 'Panel del proyecto Paisajismo MITECO 2',
    details: 'DATOS PROYECTO',
    paragraphs: [
      'Esta segunda propuesta para el mismo cliente y concurso explora una dirección diferente, centrada en la relación entre geometría, naturaleza y percepción del espacio. El proyecto utiliza una malla de setos recortados y superficies de tierra para construir un patrón que organiza el vacío y genera una experiencia más contemplativa y sensorial dentro de una arquitectura de carácter monumental.',
      'La composición trabaja con el contraste entre fondo y forma, lleno y vacío, luz y sombra, creando una lectura cambiante según el recorrido y el punto de vista. Más que introducir un objeto en el espacio, la intervención busca activar el lugar a través del ritmo, la repetición y la escala, aportando una presencia ordenada, viva y contemporánea que suaviza la frialdad del entorno arquitectónico sin competir con él.',
    ],
    facts: [
      { label: 'Superficie', value: '250 m2' },
      { label: 'Fecha', value: '2023' },
      { label: 'Estado', value: 'Proyecto' },
      { label: 'Cliente', value: 'MITECO' },
      { label: 'Equipo', value: 'Sergio de Isidro' },
    ],
  },
  en: {
    title: 'MITECO Landscaping Project 2',
    location: 'Madrid, Spain',
    alt: 'MITECO Landscaping Project 2 panel',
    details: 'PROJECT DETAILS',
    paragraphs: [
      'This second proposal for the same client and competition explores a different direction, centred on the relationship between geometry, nature and the perception of space. The project uses a grid of clipped hedges and earth surfaces to create a pattern that organises the void and produces a more contemplative, sensory experience within an architecture of monumental character.',
      'The composition works with the contrast between background and form, solid and void, light and shadow, creating a changing reading according to the route and point of view. Rather than introducing an object into the space, the intervention activates the place through rhythm, repetition and scale, bringing an ordered, lively and contemporary presence that softens the coldness of the architectural setting without competing with it.',
    ],
    facts: [
      { label: 'Area', value: '250 m2' },
      { label: 'Date', value: '2023' },
      { label: 'Status', value: 'Project' },
      { label: 'Client', value: 'MITECO' },
      { label: 'Team', value: 'Sergio de Isidro' },
    ],
  },
}

export default function Miteco2ProjectPage(props) {
  return <ProjectDetailPage {...props} activeFilter="landscape" image="/pages/proyectos/miteco_2.jpg" copy={miteco2Copy} />
}
