import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Orden acordado con Sergio (17-nov-2026).
const primaryItems = [
  { label: '1. DISEÑO DE INTERIORES', pageId: 'projects', filterId: 'interiors' },
  { label: '2. DIRECCIÓN DE ARTE', pageId: 'projects', filterId: 'art-direction' },
  { label: '3. DISEÑO GRÁFICO', pageId: 'projects', filterId: 'graphic' },
  { label: '4. PAISAJISMO', pageId: 'projects', filterId: 'landscape' },
  { label: '5. ACADEMIA', pageId: 'academy' },
  { label: '6. ESCENOGRAFÍA', pageId: 'projects', filterId: 'scenography' },
]

const secondaryItems = [
  { label: 'SERVICIOS', pageId: 'services' },
  { label: 'ESTUDIO', pageId: 'studio' },
  { label: 'NOTICIAS', pageId: 'news' },
  { label: 'CONTACTO', pageId: 'contact' },
  // { label: 'TIENDA ONLINE', pageId: 'shop' }, // fuera del menu hasta que abra la tienda
]

const menuTranslations = {
  es: ['1. DISEÑO DE INTERIORES', '2. DIRECCIÓN DE ARTE', '3. DISEÑO GRÁFICO', '4. PAISAJISMO', '5. ACADEMIA', '6. ESCENOGRAFÍA', 'SERVICIOS', 'ESTUDIO', 'NOTICIAS', 'CONTACTO'],
  en: ['1. INTERIOR DESIGN', '2. ART DIRECTION', '3. GRAPHIC DESIGN', '4. LANDSCAPE DESIGN', '5. ACADEMY', '6. SCENOGRAPHY', 'SERVICES', 'STUDIO', 'NEWS', 'CONTACT'],
  it: ['1. DESIGN DEGLI INTERNI', '2. DIREZIONE ARTISTICA', '3. DESIGN GRAFICO', '4. PAESAGGISTICA', '5. ACCADEMIA', '6. SCENOGRAFIA', 'SERVIZI', 'STUDIO', 'NOTIZIE', 'CONTATTI'],
}

const MENU_REFERENCE_WIDTH = 1387

export default function SceneMenu({ onNavigate, onSetSoundEnabled, soundEnabled = false, mobile = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [menuScale, setMenuScale] = useState(1)
  const rootRef = useRef(null)

  // El panel se dibuja a un tamano de referencia (dibujo de 1387 px de ancho)
  // y se escala igual que el dibujo, para que siempre case con la cartela.
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || mobile) return undefined
    const update = () => setMenuScale(root.clientWidth / MENU_REFERENCE_WIDTH)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(root)
    return () => observer.disconnect()
  }, [mobile])
  const { language, setLanguage } = useLanguage()

  // Esc cierra el menu; en movil (pantalla completa) la pagina de detras no se mueve.
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (event) => { if (event.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onKey)
    if (mobile) document.documentElement.classList.add('is-menu-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('is-menu-open')
    }
  }, [isOpen, mobile])
  const labels = menuTranslations[language]
  const soundCopy = {
    es: { label: 'SONIDO', on: 'SI', off: 'NO' },
    en: { label: 'SOUND', on: 'ON', off: 'OFF' },
    it: { label: 'AUDIO', on: 'ATTIVO', off: 'DISATTIVO' },
  }[language] ?? { label: 'SONIDO', on: 'SI', off: 'NO' }

  const handleNavigate = (item) => {
    if (!item.pageId) return

    onNavigate?.(
      item.filterId
        ? { pageId: item.pageId, filterId: item.filterId }
        : item.pageId,
    )
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className={`scene-menu${mobile ? ' is-mobile' : ''}`}>
      <button
        type="button"
        className={`scene-menu-button${isOpen ? ' is-open' : ''}`}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen ? (
        <div className={`scene-menu-panel${mobile ? ' is-fullscreen' : ''}`} style={mobile ? undefined : { '--menu-scale': menuScale }} role={mobile ? 'dialog' : undefined} aria-modal={mobile ? 'true' : undefined}>
          <button
            type="button"
            className="scene-menu-close"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
          >
            <span></span>
            <span></span>
          </button>

          <div className="scene-menu-group scene-menu-group-primary">
            {primaryItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className="scene-menu-item"
                onClick={() => handleNavigate(item)}
              >
                <span>{labels[index]}</span>
              </button>
            ))}
          </div>

          <div className="scene-menu-group scene-menu-group-secondary">
            {secondaryItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className="scene-menu-item"
                onClick={() => handleNavigate(item)}
              >
                <span>{labels[index + primaryItems.length]}</span>
              </button>
            ))}

            {onSetSoundEnabled ? <div className="scene-menu-switch-row">
              <span className="scene-menu-switch-label">{soundCopy.label}</span>
              <div className="scene-menu-switch" role="group" aria-label={soundCopy.label}>
                <button
                  type="button"
                  className={`scene-menu-switch-option${soundEnabled ? ' is-active' : ''}`}
                  aria-pressed={soundEnabled}
                  onClick={() => onSetSoundEnabled?.(true)}
                >
                  {soundCopy.on}
                </button>
                <span className="scene-menu-switch-separator">/</span>
                <button
                  type="button"
                  className={`scene-menu-switch-option${!soundEnabled ? ' is-active' : ''}`}
                  aria-pressed={!soundEnabled}
                  onClick={() => onSetSoundEnabled?.(false)}
                >
                  {soundCopy.off}
                </button>
              </div>
            </div> : null}
          </div>

          <div className="scene-menu-footer">
            <div className="scene-menu-socials">
              <a
                className="scene-menu-social-link"
                href="https://www.linkedin.com/in/m047/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de M047"
              >
                <img src="/linkedin.png" alt="" aria-hidden="true" />
              </a>
              <a
                className="scene-menu-social-link"
                href="https://www.instagram.com/m047.studio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de M047"
              >
                <img src="/instagram.png" alt="" aria-hidden="true" />
              </a>
              <a
                className="scene-menu-social-behance"
                href="https://www.behance.net/M047"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance de M047"
              >
                <img src="/behance.png" alt="" aria-hidden="true" />
              </a>
              <div
                className="scene-menu-switch scene-menu-footer-switch"
                role="group"
                aria-label="Idioma"
              >
                <button
                  type="button"
                  className={`scene-menu-switch-option${language === 'en' ? ' is-active' : ''}`}
                  aria-pressed={language === 'en'}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </button>
                <span className="scene-menu-switch-separator">/</span>
                <button
                  type="button"
                  className={`scene-menu-switch-option${language === 'it' ? ' is-active' : ''}`}
                  aria-pressed={language === 'it'}
                  onClick={() => setLanguage('it')}
                >
                  IT
                </button>
                <span className="scene-menu-switch-separator">/</span>
                <button
                  type="button"
                  className={`scene-menu-switch-option${language === 'es' ? ' is-active' : ''}`}
                  aria-pressed={language === 'es'}
                  onClick={() => setLanguage('es')}
                >
                  ES
                </button>
              </div>
            </div>
            <span className="scene-menu-code">M047</span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
