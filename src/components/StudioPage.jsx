import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const studioGroups = [
  [
    'Todo empez\u00f3 aqu\u00ed, en un piso de la calle Camarena 228, donde un padre le ense\u00f1\u00f3 a su hijo todo lo que sab\u00eda. Desde muy peque\u00f1o aprendi\u00f3 que para todo hab\u00eda una soluci\u00f3n, y que si no exist\u00eda era simplemente porque nadie hab\u00eda sido lo bastante valiente o creativo como para inventarla.',
  ],
  [
    'Le ense\u00f1aron a pensar distinto, a buscar soluciones radicales donde otros solo ve\u00edan algo imposible y a disfrutar del proceso. Aquel ni\u00f1o se pasaba horas ayudando a su padre y a su abuelo a construir cualquier cosa, aprendiendo con las manos y aprovechando su tama\u00f1o para colarse donde ellos no cab\u00edan. Fue as\u00ed como decidi\u00f3 que de mayor ser\u00eda "arquitect\u00f3logo", como \u00e9l lo llamaba.',
  ],
  [
    'Con el tiempo se enamoraron del dise\u00f1o, y padre e hijo acabaron estudiando Arquitectura de Interiores en la ETSAM. Fue, sin duda, una de las mejores decisiones de sus vidas: se abri\u00f3 ante ellos un mundo completamente nuevo.',
  ],
  [
    'Puede que no fueran los mejores, pero destacaban. Donde otros ve\u00edan problemas, ellos ve\u00edan posibilidades. Cada proyecto era un reto, casi un juego: una nueva oportunidad de resolver algo de forma rebelde, creativa y \u00fatil.',
  ],
  [
    'Con el tiempo, todo ese camino compartido los llev\u00f3 a fundar un estudio juntos. Dos miradas distintas que, lejos de chocar, se complementan a la perfecci\u00f3n y encuentran, en esa uni\u00f3n, soluciones \u00fanicas.',
  ],
]

export default function StudioPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const studioCopy = language === 'es' ? studioGroups : language === 'it' ? [
    ['Tutto è cominciato qui, in un appartamento di via Camarena 228, dove un padre insegnò a suo figlio tutto ciò che sapeva. Fin da piccolo imparò che per ogni cosa c’era una soluzione e che, se non esisteva, era semplicemente perché nessuno era stato abbastanza coraggioso o creativo da inventarla.'],
    ['Gli insegnarono a pensare in modo diverso, a cercare soluzioni radicali dove altri vedevano solo l’impossibile e a godersi il processo. Quel bambino passava ore ad aiutare il padre e il nonno a costruire qualsiasi cosa, imparando con le mani e sfruttando la sua statura per infilarsi dove loro non entravano. Fu così che decise che da grande sarebbe diventato “architettologo”, come diceva lui.'],
    ['Con il tempo si innamorarono del design, e padre e figlio finirono per studiare Architettura degli Interni all’ETSAM. Fu senza dubbio una delle decisioni migliori della loro vita: davanti a loro si aprì un mondo completamente nuovo.'],
    ['Forse non erano i migliori, ma si facevano notare. Dove altri vedevano problemi, loro vedevano possibilità. Ogni progetto era una sfida, quasi un gioco: una nuova occasione per risolvere qualcosa in modo ribelle, creativo e utile.'],
    ['Con il tempo, tutto quel cammino condiviso li portò a fondare insieme uno studio. Due sguardi diversi che, invece di scontrarsi, si completano alla perfezione e trovano, in quell’unione, soluzioni uniche.'],
  ] : [
    ['It all started here, in a flat on Camarena 228, where a father taught his son everything he knew. From a very early age, he learned that every problem had a solution, and that if one did not exist, it was simply because nobody had been brave or creative enough to invent it.'],
    ['They taught him to think differently, to look for radical solutions where others only saw the impossible, and to enjoy the process. As a child he spent hours helping his father and grandfather build anything at all, learning with his hands and using his small size to get where they could not. That is how he decided that he would grow up to be an "architectologist", as he called it.'],
    ['Over time, they fell in love with design, and father and son both went on to study Interior Architecture at ETSAM. Without doubt, it was one of the best decisions of their lives: a completely new world opened up before them.'],
    ['They may not have been the best, but they stood out. Where others saw problems, they saw possibilities. Each project was a challenge, almost a game: a new opportunity to solve something in a rebellious, creative and useful way.'],
    ['In time, that shared journey led them to found a studio together. Two different perspectives which, rather than clashing, complement each other perfectly and find unique solutions in that union.'],
  ]

  return (
    <section className="projects-page studio-page">
      <PageHeader
        activePage={activePage}
        onBack={onBack}
        onNavigate={onNavigate}
      />

      <div className="contact-page-content studio-page-content">
        <img
          className="contact-page-image studio-page-image"
          src="/pages/estudio.png"
          alt=""
          aria-hidden="true"
        />

        <div className="contact-page-copy studio-page-copy">
          <h1>M047</h1>

          <div className="contact-page-groups studio-page-groups">
            {studioCopy.map((group, index) => (
              <div key={index} className="contact-page-group studio-page-group">
                {group.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter />
    </section>
  )
}
