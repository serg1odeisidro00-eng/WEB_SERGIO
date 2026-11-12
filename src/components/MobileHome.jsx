import { useLanguage } from '../context/LanguageContext'
import SceneMenu from './SceneMenu'

// Version movil de la portada (maqueta "Mezcla A + D" de Sergio):
// cabecera fija, la escena del edificio (en App.jsx) y debajo el recorrido
// planta por planta con un acceso a cada departamento.

const copy = {
  es: { scroll: 'Baja para recorrer el edificio', more: 'VER PROYECTOS', academy: 'VER ACADEMIA', contact: 'IR A CONTACTO', sound: 'Sonido' },
  en: { scroll: 'Scroll down to explore the building', more: 'SEE PROJECTS', academy: 'SEE ACADEMY', contact: 'GO TO CONTACT', sound: 'Sound' },
  it: { scroll: 'Scorri per esplorare l’edificio', more: 'VEDI PROGETTI', academy: 'VEDI ACCADEMIA', contact: 'VAI AI CONTATTI', sound: 'Suono' },
}

const floors = [
  { id: 'interiores', target: { pageId: 'projects', filterId: 'interiors' }, title: { es: 'DISEÑO DE INTERIORES', en: 'INTERIOR DESIGN', it: 'DESIGN DEGLI INTERNI' } },
  { id: 'arte', target: { pageId: 'projects', filterId: 'art-direction' }, title: { es: 'DIRECCIÓN DE ARTE', en: 'ART DIRECTION', it: 'DIREZIONE ARTISTICA' } },
  { id: 'grafico', target: { pageId: 'projects', filterId: 'graphic' }, title: { es: 'DISEÑO GRÁFICO', en: 'GRAPHIC DESIGN', it: 'DESIGN GRAFICO' } },
  { id: 'paisajismo', target: { pageId: 'projects', filterId: 'landscape' }, title: { es: 'PAISAJISMO', en: 'LANDSCAPE DESIGN', it: 'PAESAGGISMO' } },
  { id: 'escenografia', target: { pageId: 'projects', filterId: 'scenography' }, title: { es: 'ESCENOGRAFÍA', en: 'SCENOGRAPHY', it: 'SCENOGRAFIA' } },
  { id: 'academia', target: 'academy', link: 'academy', title: { es: 'ACADEMIA', en: 'ACADEMY', it: 'ACCADEMIA' } },
  { id: 'contacto', target: 'contact', link: 'contact', title: { es: 'CONTACTO', en: 'CONTACT', it: 'CONTATTI' } },
]

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className="mobile-home-lang" role="group" aria-label="Idioma">
      {['en', 'it', 'es'].map((code, index) => (
        <span key={code}>
          {index > 0 ? <span className="mobile-home-lang-sep">/</span> : null}
          <button type="button" className={language === code ? 'is-active' : ''} aria-pressed={language === code} onClick={() => setLanguage(code)}>
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}

export function MobileHeader({ onHome, onNavigate, soundEnabled, onSetSoundEnabled }) {
  const { language } = useLanguage()
  const t = copy[language] ?? copy.es
  return (
    <header className="mobile-home-header">
      <button type="button" className="mobile-home-logo" onClick={onHome}>M047</button>
      <div className="mobile-home-tools">
        <button
          type="button"
          className={`mobile-home-sound${soundEnabled ? '' : ' is-off'}`}
          aria-label={t.sound}
          aria-pressed={soundEnabled}
          onClick={() => onSetSoundEnabled(!soundEnabled)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 9h4l5-4v14l-5-4H4z" />
            {soundEnabled ? <><path d="M16.5 8.5a5 5 0 0 1 0 7" /><path d="M19 6a8.5 8.5 0 0 1 0 12" /></> : <path d="M17 9l5 6M22 9l-5 6" />}
          </svg>
        </button>
        <SceneMenu mobile onNavigate={onNavigate} soundEnabled={soundEnabled} onSetSoundEnabled={onSetSoundEnabled} />
      </div>
    </header>
  )
}

export function MobileHomeBelow({ onNavigate }) {
  const { language } = useLanguage()
  const t = copy[language] ?? copy.es

  const scrollToFloors = () => {
    document.getElementById('mobile-plantas')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="mobile-home-intro">
        <button type="button" className="mobile-home-scroll" onClick={scrollToFloors}>
          {t.scroll} ↓
        </button>
        <LanguageSwitch />
      </div>

      <div id="mobile-plantas" className="mobile-home-floors">
        {floors.map((floor, index) => (
          <section key={floor.id} className="mobile-home-floor">
            <h2>
              <span className="mobile-home-floor-number">{String(index + 1).padStart(2, '0')}</span>
              {floor.title[language] ?? floor.title.es}
            </h2>
            <button type="button" className="mobile-home-floor-image" onClick={() => onNavigate(floor.target)}>
              <img src={`/movil/${floor.id}.webp`} alt={floor.title[language] ?? floor.title.es} loading="lazy" />
            </button>
            <button type="button" className="mobile-home-floor-link" onClick={() => onNavigate(floor.target)}>
              {floor.link === 'academy' ? t.academy : floor.link === 'contact' ? t.contact : t.more} →
            </button>
          </section>
        ))}
      </div>

      <footer className="mobile-home-footer">
        <p className="mobile-home-footer-title">ESTUDIO M047</p>
        <p>28047 Madrid, España</p>
        <p><a href="tel:+34633878755">(+34) 633 878 755</a></p>
        <div className="mobile-home-socials">
          <a href="https://www.instagram.com/m047.studio/" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="" aria-hidden="true" />Instagram</a>
          <a href="https://www.linkedin.com/in/m047/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="" aria-hidden="true" />LinkedIn</a>
          <a href="https://www.behance.net/M047" target="_blank" rel="noreferrer"><img src="/behance.png" alt="" aria-hidden="true" />Behance</a>
        </div>
      </footer>
    </>
  )
}
