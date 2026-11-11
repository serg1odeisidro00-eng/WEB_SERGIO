import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AppPageRouter from './components/AppPageRouter'
import AcademyPage from './components/AcademyPage'
import AlbumMusicalProjectPage from './components/AlbumMusicalProjectPage'
import BoatProjectPage from './components/BoatProjectPage'
import VKartingProjectPage from './components/VKartingProjectPage'
import CapillaProjectPage from './components/CapillaProjectPage'
import CartelTeatroProjectPage from './components/CartelTeatroProjectPage'
import ContactPage from './components/ContactPage'
import CrossProjectPage from './components/CrossProjectPage'
import ElBosqueProjectPage from './components/ElBosqueProjectPage'
import EfimeroProjectPage from './components/EfimeroProjectPage'
import ElCirculoProjectPage from './components/ElCirculoProjectPage'
import ElRastroProjectPage from './components/ElRastroProjectPage'
import EneoProjectPage from './components/EneoProjectPage'
import EspacioExpositivoProjectPage from './components/EspacioExpositivoProjectPage'
import FiestasLocalesProjectPage from './components/FiestasLocalesProjectPage'
import HargokProjectPage from './components/HargokProjectPage'
import HazProjectPage from './components/HazProjectPage'
import IlustracionesProjectPage from './components/IlustracionesProjectPage'
import MitecoProjectPage from './components/MitecoProjectPage'
import Nave16ProjectPage from './components/Nave16ProjectPage'
import PlaygroundProjectPage from './components/PlaygroundProjectPage'
import PodcastProjectPage from './components/PodcastProjectPage'
import PackagingProjectPage from './components/PackagingProjectPage'
import PgProjectPage from './components/PgProjectPage'
import ProjectsPage from './components/ProjectsPage'
import SceneArtboard from './components/SceneArtboard'
import { getAmbientPosition, installAudioUnlock, isAudioUnlocked, loadSceneAudio, playRing, setAmbientPlaying, stopRing } from './lib/sceneAudio'
import ShopPage from './components/ShopPage'
import SoldrinkProjectPage from './components/SoldrinkProjectPage'
import TelefonicaProjectPage from './components/TelefonicaProjectPage'
import StudioPage from './components/StudioPage'
import UfvProjectPage from './components/UfvProjectPage'
import {
  arbolFrames,
  banquitoFrames,
  bibliotecarioFrames,
  birdFrames,
  columpioFrames,
  cuadroFrames,
  grafitiFrames,
  hombreSentadoFrames,
  humoFrames,
  jardineraFrames,
  jardineroFrames,
  regaderaFrames,
  lectorFrames,
  mujerSentadaFrames,
  ordenadorFrames,
  parejaFrames,
  personasSillasFrames,
  profeFrames,
  sofaFrames,
  telefonoFrames,
  vanFrames,
} from './data/sceneFrames'
import { CASA_SRC, FONDO_SRC, FONDO_STRETCH, SCENE_IMAGE_RATIO } from './data/sceneImages'
import { SCENE_CROP_BOTTOM, useSceneSize } from './hooks/useSceneSize'
import { useLanguage } from './context/LanguageContext'
import { useProjectNavigation } from './context/ProjectNavigationContext'

function showBubble(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.to(bubbleRef.current, {
    autoAlpha: 1,
    y: 0,
    scale: 1,
    duration: 0.22,
    ease: 'back.out(1.5)',
    overwrite: true,
  })
}

function hideBubble(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.to(bubbleRef.current, {
    autoAlpha: 0,
    y: 10,
    scale: 0.92,
    duration: 0.18,
    ease: 'power2.in',
    overwrite: true,
  })
}

function setBubbleInitialState(bubbleRef) {
  if (!bubbleRef.current) return

  gsap.set(bubbleRef.current, {
    autoAlpha: 0,
    y: 10,
    scale: 0.92,
    transformOrigin: '20% 100%',
  })
}

function setAnimatedFrame(imageRef, frames, frame) {
  if (!imageRef.current) return

  const frameIndex = Math.max(0, Math.min(frames.length - 1, Math.round(frame)))
  imageRef.current.src = frames[frameIndex]
}

function getRandomReversePause() {
  return gsap.utils.random(2, 5, 0.1)
}

function createRandomPausedFrameTween({
  frameDuration,
  onUpdate,
  pauseDuration,
  state,
  totalFrames,
}) {
  const maxFrame = totalFrames - 1
  const frameEase = `steps(${maxFrame})`

  return gsap
    .timeline({ repeat: -1, repeatRefresh: true })
    .to(state, {
      frame: maxFrame,
      duration: frameDuration,
      ease: frameEase,
      onUpdate,
    })
    .to({}, { duration: pauseDuration ?? (() => getRandomReversePause()) })
    .to(state, {
      frame: 0,
      duration: frameDuration,
      ease: frameEase,
      onUpdate,
    })
}

// Pajaros: velocidad y segundos de la pista ambiente en los que se oyen.
const BIRD_FLAP_SEQUENCE = [0, 1, 2, 3, 1]

// Bandada: cada pajaro cruza todo el dibujo de izquierda a derecha con un
// recorrido continuo (sube un poco y ondula) aleteando a ~12 fps. Van en la
// capa de detras de los edificios: cuando pasan por detras simplemente se tapan.
function createBirdFlight(container) {
  let frameId = null
  let birds = []

  const stop = () => {
    if (frameId) window.cancelAnimationFrame(frameId)
    frameId = null
    birds.forEach((bird) => bird.el.remove())
    birds = []
  }

  const restart = () => {
    stop()
    const count = 15
    for (let i = 0; i < count; i += 1) {
      const el = document.createElement('img')
      el.className = 'bird-flock-bird'
      el.alt = ''
      el.src = birdFrames[0]
      const size = 2.1 * gsap.utils.random(0.85, 1.12)
      el.style.width = `${size}%`
      container.appendChild(el)
      // Mas bajos que antes: tambien se ven pasar por delante de las ventanas
      // de los edificios del fondo.
      // Los dos ultimos van mas bajos: pasan por la ventana del ordenador.
      const isLow = i >= count - 2
      const startY = isLow ? gsap.utils.random(36.5, 39) : gsap.utils.random(20, 40)
      birds.push({
        el,
        delay: i * 0.18 + gsap.utils.random(0, 0.35),
        duration: gsap.utils.random(7, 8.2),
        startX: -4 - gsap.utils.random(0, 6),
        endX: 104 + gsap.utils.random(0, 4),
        startY,
        endY: startY - (isLow ? gsap.utils.random(0.3, 1.2) : gsap.utils.random(4, 10)),
        bob: gsap.utils.random(0.4, 0.9),
        bobSpeed: gsap.utils.random(3.6, 4.8),
        bobPhase: gsap.utils.random(0, Math.PI * 2),
        fps: gsap.utils.random(11, 13),
        flapPhase: Math.floor(gsap.utils.random(0, BIRD_FLAP_SEQUENCE.length)),
        lastPose: -1,
      })
    }
    const startedAt = performance.now()
    const step = () => {
      const t = (performance.now() - startedAt) / 1000
      let alive = false
      birds.forEach((bird) => {
        const local = t - bird.delay
        const progress = Math.min(Math.max(local / bird.duration, 0), 1)
        if (progress < 1) alive = true
        const x = bird.startX + (bird.endX - bird.startX) * progress
        const y = bird.startY + (bird.endY - bird.startY) * progress
          + Math.sin(local * bird.bobSpeed + bird.bobPhase) * bird.bob
        bird.el.style.left = `${x}%`
        bird.el.style.top = `${y}%`
        bird.el.style.visibility = local < 0 || progress >= 1 ? 'hidden' : 'visible'
        const pose = BIRD_FLAP_SEQUENCE[(Math.floor(Math.max(local, 0) * bird.fps) + bird.flapPhase) % BIRD_FLAP_SEQUENCE.length]
        if (pose !== bird.lastPose) {
          bird.el.src = birdFrames[pose]
          bird.lastPose = pose
        }
      })
      frameId = alive ? window.requestAnimationFrame(step) : null
      if (!alive) stop()
    }
    frameId = window.requestAnimationFrame(step)
  }

  return { restart, isActive: () => Boolean(frameId), kill: stop }
}
const BIRD_AUDIO_CUES = [1, 27]
const BIRD_FALLBACK_FIRST = 1.5
const BIRD_FALLBACK_EVERY = 28

const staticSceneAssets = [
  FONDO_SRC,
  CASA_SRC,
  '/edificio_izquierda.svg',
  '/cartela.svg',
  '/farola.png',
  '/Frames/imoviles/personaje_escaleras/persona_1.png',
  '/Frames/imoviles/personajes_fiesta/Fiesta.png',
  '/Frames/imoviles/personaje_microfono/personaje.png',
  '/Frames/imoviles/spray/spray.png',
  '/Frames/imoviles/cartela/cartela.png',
]

const sceneAssetUrls = [
  ...birdFrames,
  ...vanFrames,
  ...grafitiFrames,
  ...jardineroFrames,
  ...jardineraFrames,
  ...regaderaFrames,
  ...arbolFrames,
  ...ordenadorFrames,
  ...banquitoFrames,
  ...sofaFrames,
  ...bibliotecarioFrames,
  ...cuadroFrames,
  ...telefonoFrames,
  ...parejaFrames,
  ...personasSillasFrames,
  ...lectorFrames,
  ...columpioFrames,
  ...staticSceneAssets,
]

const loadingScreenAssets = [
  FONDO_SRC,
  CASA_SRC,
  '/andamio.webp',
  '/edificio_izquierda.svg',
  '/cartela.svg',
  '/farola.png',
  ...birdFrames,
  ...arbolFrames,
]

const criticalSceneAssets = [
  ...staticSceneAssets,
  birdFrames[0], vanFrames[0], grafitiFrames[0], jardineroFrames[0], jardineraFrames[0],
  arbolFrames[0], ordenadorFrames[0], banquitoFrames[0], sofaFrames[0], bibliotecarioFrames[0],
  cuadroFrames[0], telefonoFrames[0], parejaFrames[0], personasSillasFrames[0], lectorFrames[0],
  columpioFrames[0],
]

// Lineas de vibracion del telefono (se ven mientras suena, incluso sin sonido).
function PhoneVibration() {
  const zigzag = 'M2 6 L8 2.5 L13 7 L19 2 L25 6.5 L31 3.5'
  return (
    <span className="telefono-vibration" aria-hidden="true">
      <svg className="telefono-vibration-side telefono-vibration-side--left" viewBox="0 0 34 30">
        <path d={zigzag} transform="translate(0 0)" />
        <path d={zigzag} transform="translate(-1 10.5)" />
        <path d={zigzag} transform="translate(1 21)" />
      </svg>
      <svg className="telefono-vibration-side telefono-vibration-side--right" viewBox="0 0 34 30">
        <path d={zigzag} transform="translate(0 0)" />
        <path d={zigzag} transform="translate(1 10.5)" />
        <path d={zigzag} transform="translate(-1 21)" />
      </svg>
    </span>
  )
}

export default function App() {
  const { language } = useLanguage()
  const { registerNavigate } = useProjectNavigation()
  const sceneCopy = language === 'en'
    ? {
        landscape: 'LANDSCAPE DESIGN',
        academy: 'ACADEMY',
        interiors: 'INTERIOR DESIGN',
        scenography: 'SCENOGRAPHY',
        graphic: 'GRAPHIC DESIGN',
        artDirection: 'ART DIRECTION',
        landscapeDetail: 'Landscape design',
        contact: 'Contact',
        contactSign: 'CONTACT',
        phoneRinging: 'PHONE RINGING',
      }
    : language === 'it'
      ? {
          landscape: 'PAESAGGISMO',
          academy: 'ACCADEMIA',
          interiors: 'DESIGN DEGLI INTERNI',
          scenography: 'SCENOGRAFIA',
          graphic: 'DESIGN GRAFICO',
          artDirection: 'DIREZIONE ARTISTICA',
          landscapeDetail: 'Paesaggismo',
          contact: 'Contatti',
          contactSign: 'CONTATTI',
          phoneRinging: 'TELEFONO IN SQUILLO',
        }
    : {
        landscape: 'PAISAJISMO',
        academy: 'ACADEMIA',
        interiors: 'DISEÑO DE INTERIORES',
        scenography: 'ESCENOGRAFÍA',
        graphic: 'DISEÑO GRÁFICO',
        artDirection: 'DIRECCIÓN DE ARTE',
        landscapeDetail: 'Paisajismo',
        contact: 'Contactar',
        contactSign: 'CONTACTO',
        phoneRinging: 'TELÉFONO SONANDO',
      }
  const [sceneRatio, setSceneRatio] = useState(SCENE_IMAGE_RATIO)
  const [isAssetsReady, setIsAssetsReady] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  // Los navegadores (sobre todo Safari) no dejan sonar nada hasta que el
  // visitante pulsa. Cuando todo ha cargado se muestra ENTRAR: ese clic
  // desbloquea el sonido. Si el navegador ya lo permite, se entra directo.
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  // Pantalla de carga: la portada se ve con el andamio delante del edificio
  // hasta que todo ha cargado y el visitante pulsa (ese clic activa el sonido).
  const [hasEntered, setHasEntered] = useState(false)
  const [isScaffoldLeaving, setIsScaffoldLeaving] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [projectsFilter, setProjectsFilter] = useState('all')
  const [projectsSearch, setProjectsSearch] = useState('')
  const [isBusinessCardOpen, setIsBusinessCardOpen] = useState(false)
  const [hasOpenedBusinessCard, setHasOpenedBusinessCard] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isPhoneAlertActive, setIsPhoneAlertActive] = useState(false)
  const rootRef = useRef(null)
  const sceneShellRef = useRef(null)
  const soundEnabledRef = useRef(true)

  const birdRef = useRef(null)
  const birdImageRef = useRef(null)
  const birdFlightRef = useRef(null)

  const vanRef = useRef(null)
  const vanImageRef = useRef(null)
  const vanBubbleRef = useRef(null)
  const vanMoveTweenRef = useRef(null)
  const vanFramesTweenRef = useRef(null)
  const isVanMovingRef = useRef(false)
  const vanCartelaRef = useRef(null)

  const grafitiRef = useRef(null)
  const grafitiImageRef = useRef(null)
  const grafitiTweenRef = useRef(null)

  const jardineroRef = useRef(null)
  const jardineroImageRef = useRef(null)
  const jardineroBubbleRef = useRef(null)
  const jardineroTweenRef = useRef(null)

  const regaderaImageRef = useRef(null)
  const regaderaTweenRef = useRef(null)
  const jardineraRef = useRef(null)
  const jardineraImageRef = useRef(null)
  const jardineraBubbleRef = useRef(null)
  const jardineraTweenRef = useRef(null)

  const arbolRef = useRef(null)
  const arbolImageRef = useRef(null)
  const arbolTweenRef = useRef(null)

  const ordenadorRef = useRef(null)
  const ordenadorImageRef = useRef(null)
  const ordenadorTweenRef = useRef(null)
  const ordenadorBubbleRef = useRef(null)

  const banquitoRef = useRef(null)
  const banquitoImageRef = useRef(null)
  const banquitoTweenRef = useRef(null)
  const banquitoBubbleRef = useRef(null)

  const sofaRef = useRef(null)
  const sofaImageRef = useRef(null)
  const sofaTweenRef = useRef(null)
  const sofaMoveTweenRef = useRef(null)

  const bibliotecarioRef = useRef(null)
  const bibliotecarioImageRef = useRef(null)
  const bibliotecarioTweenRef = useRef(null)
  const cuadroRef = useRef(null)
  const cuadroImageRef = useRef(null)
  const cuadroTweenRef = useRef(null)
  const telefonoRef = useRef(null)
  const telefonoImageRef = useRef(null)
  const telefonoTweenRef = useRef(null)
  const telefonoMoveTweenRef = useRef(null)
  const telefonoAlertTweenRef = useRef(null)
  const telefonoAlertTimeoutRef = useRef(null)
  const telefonoBubbleRef = useRef(null)
  const parejaRef = useRef(null)
  const parejaImageRef = useRef(null)
  const parejaTweenRef = useRef(null)
  const personasSillasRef = useRef(null)
  const personasSillasImageRef = useRef(null)
  const personasSillasTweenRef = useRef(null)
  const lectorRef = useRef(null)
  const lectorImageRef = useRef(null)
  const lectorTweenRef = useRef(null)
  const humoRef = useRef(null)
  const humoImageRef = useRef(null)
  const humoTweenRef = useRef(null)
  const hombreSentadoRef = useRef(null)
  const hombreSentadoImageRef = useRef(null)
  const hombreSentadoTweenRef = useRef(null)
  const hombreSentadoBubbleRef = useRef(null)
  const mujerSentadaRef = useRef(null)
  const mujerSentadaImageRef = useRef(null)
  const mujerSentadaTweenRef = useRef(null)
  const mujerSentadaBubbleRef = useRef(null)
  const profeRef = useRef(null)
  const profeImageRef = useRef(null)
  const profeTweenRef = useRef(null)
  const profeBubbleRef = useRef(null)
  const columpioRef = useRef(null)
  const columpioImageRef = useRef(null)
  const columpioTweenRef = useRef(null)
  const columpioBubbleRef = useRef(null)

  const { frameStyle: sceneFrameStyle, sceneStyle } = useSceneSize(sceneShellRef, sceneRatio, isAssetsReady && activePage === 'home')

  // Safari calcula mal la altura de las cajas de los personajes (aspect-ratio
  // en elementos posicionados) y los dibujos quedan "flotando". Se fija la
  // altura en px a partir del ancho y la misma proporcion; en Chrome no cambia.
  useLayoutEffect(() => {
    if (!isAssetsReady || activePage !== 'home') return undefined
    const fixAnchorHeights = () => {
      document.querySelectorAll('.scene-artboard [class*="-anchor"]').forEach((anchor) => {
        const ratioText = getComputedStyle(anchor).aspectRatio
        if (!ratioText || ratioText === 'auto') return
        const parts = ratioText.replace('auto', '').trim().split('/').map((part) => parseFloat(part))
        const ratio = parts.length === 2 && parts[1] ? parts[0] / parts[1] : parts[0]
        if (!ratio || !anchor.offsetWidth) return
        anchor.style.height = `${anchor.offsetWidth / ratio}px`
      })
    }
    fixAnchorHeights()
    const frameId = window.requestAnimationFrame(fixAnchorHeights)
    return () => window.cancelAnimationFrame(frameId)
  }, [activePage, isAssetsReady, sceneStyle.width, sceneStyle.height])

  const applyNavigationState = ({ filterId = 'all', pageId = 'home', searchQuery = '' }) => {
    setActivePage(pageId)

    if (pageId === 'projects') {
      setProjectsFilter(filterId)
      setProjectsSearch(searchQuery)
    }
  }

  const handleNavigate = (nextSection) => {
    const nextState = typeof nextSection === 'object' && nextSection !== null
      ? {
          pageId: nextSection.pageId ?? 'home',
          filterId: nextSection.filterId ?? 'all',
          searchQuery: nextSection.searchQuery ?? '',
        }
      : {
          pageId: nextSection ?? 'home',
          filterId: 'all',
          searchQuery: '',
        }

    window.history.pushState({ app: 'm047', ...nextState }, '', window.location.href)
    applyNavigationState(nextState)
  }

  useEffect(() => {
    const savedState = window.history.state

    if (savedState?.app === 'm047') {
      applyNavigationState(savedState)
    } else {
      window.history.replaceState({ app: 'm047', pageId: 'home', filterId: 'all', searchQuery: '' }, '', window.location.href)
    }

    const handlePopState = (event) => {
      if (event.state?.app === 'm047') {
        applyNavigationState(event.state)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    registerNavigate(handleNavigate)
  }, [handleNavigate, registerNavigate])

  const stopPhoneAlert = () => {
    window.clearTimeout(telefonoAlertTimeoutRef.current)
    setIsPhoneAlertActive(false)
    hideBubble(telefonoBubbleRef)
    telefonoAlertTweenRef.current?.kill()
    telefonoAlertTweenRef.current = null
    stopRing()

    telefonoTweenRef.current?.pause(0)
    telefonoMoveTweenRef.current?.pause(0)
    setAnimatedFrame(telefonoImageRef, telefonoFrames, 0)
  }

  const playPhoneAlert = () => {
    if (hasOpenedBusinessCard) return

    setIsPhoneAlertActive(true)
    showBubble(telefonoBubbleRef)
    telefonoTweenRef.current?.restart()
    telefonoMoveTweenRef.current?.restart()
    telefonoAlertTweenRef.current?.kill()
    telefonoAlertTweenRef.current = gsap.to(telefonoRef.current, {
      scale: 1.16,
      duration: 0.22,
      repeat: 5,
      yoyo: true,
      ease: 'power1.inOut',
    })

    // Cada aviso son dos timbres (~8,5 s; se corta en el silencio entre el
    // segundo y el tercer timbre del audio), con o sin sonido.
    window.clearTimeout(telefonoAlertTimeoutRef.current)
    telefonoAlertTimeoutRef.current = window.setTimeout(stopPhoneAlert, 8_500)

    // El timbre usa el mismo reloj de audio que la musica: arranca a la vez
    // que la animacion. soundEnabledRef evita usar un valor antiguo.
    if (soundEnabledRef.current) playRing()
  }

  const handleOpenBusinessCard = () => {
    stopPhoneAlert()
    setHasOpenedBusinessCard(true)
    setIsBusinessCardOpen(true)
  }

  // Pajaros: vuelan cuando en la pista ambiente se oyen pajaros. Sin sonido,
  // al poco de entrar y despues cada BIRD_FALLBACK_EVERY segundos.
  useEffect(() => {
    if (!isAssetsReady || !hasEntered || activePage !== 'home') return undefined
    let lastPosition = null
    let lastFlight = -Infinity
    const startedAt = performance.now()
    const fly = () => {
      const now = performance.now() / 1000
      if (now - lastFlight < 12 || birdFlightRef.current?.isActive()) return
      lastFlight = now
      birdFlightRef.current?.restart()
    }
    const tick = () => {
      const position = getAmbientPosition()
      if (position !== null) {
        if (lastPosition === null) {
          // Al entrar la musica ya lleva un poco: si acabamos de pasar una
          // senal (menos de 2,5 s), vuelan ya.
          if (BIRD_AUDIO_CUES.some((cue) => position >= cue && position - cue < 2.5)) fly()
        } else {
          const crossed = BIRD_AUDIO_CUES.some((cue) =>
            lastPosition <= position ? lastPosition < cue && cue <= position : cue <= position || cue > lastPosition,
          )
          if (crossed) fly()
        }
        lastPosition = position
        return
      }
      lastPosition = null
      const elapsed = (performance.now() - startedAt) / 1000
      if (elapsed >= BIRD_FALLBACK_FIRST && performance.now() / 1000 - lastFlight >= BIRD_FALLBACK_EVERY) fly()
    }
    const id = window.setInterval(tick, 200)
    return () => window.clearInterval(id)
  }, [activePage, hasEntered, isAssetsReady])

  useEffect(() => {
    installAudioUnlock()
    loadSceneAudio()
  }, [])

  useEffect(() => {
    soundEnabledRef.current = soundEnabled
    if (!soundEnabled) stopRing()
  }, [soundEnabled])

  useEffect(() => {
    setAmbientPlaying(isAssetsReady && activePage === 'home' && soundEnabled)
  }, [activePage, isAssetsReady, soundEnabled])

  useEffect(() => {
    if (
      !isAssetsReady ||
      !hasEntered ||
      activePage !== 'home' ||
      hasOpenedBusinessCard
    ) {
      return undefined
    }

    // Primer aviso a los 10 s de entrar; despues, uno cada 40 s.
    const firstRing = window.setTimeout(() => playPhoneAlert(), 10_000)
    const phoneInterval = window.setInterval(() => {
      playPhoneAlert()
    }, 40_000)

    return () => {
      window.clearTimeout(firstRing)
      window.clearInterval(phoneInterval)
    }
  }, [activePage, hasEntered, hasOpenedBusinessCard, isAssetsReady])

  useEffect(() => {
    if (!isAssetsReady || activePage !== 'home') return

    const shell = sceneShellRef.current
    if (!shell) return

    const centerSceneScroll = () => {
      const maxScrollLeft = shell.scrollWidth - shell.clientWidth
      shell.scrollLeft = Math.max(maxScrollLeft / 2, 0)
    }

    const frameId = window.requestAnimationFrame(centerSceneScroll)

    return () => window.cancelAnimationFrame(frameId)
  }, [activePage, isAssetsReady, sceneStyle.height, sceneStyle.width])

  const handleVanEnter = () => {
    if (isVanMovingRef.current) vanFramesTweenRef.current?.pause()
    vanMoveTweenRef.current?.pause()
    showBubble(vanBubbleRef)
  }

  const handleVanLeave = () => {
    if (isVanMovingRef.current) vanFramesTweenRef.current?.resume()
    vanMoveTweenRef.current?.resume()
    hideBubble(vanBubbleRef)
  }

  const handleArtDirectionZoneEnter = () => {
    if (vanMoveTweenRef.current?.isActive()) return

    vanMoveTweenRef.current?.restart()
  }

  const handleStudioZoneEnter = () => {
    grafitiTweenRef.current?.resume()
  }

  const handleStudioZoneLeave = () => {
    grafitiTweenRef.current?.pause()
  }

  const handleLandscapeZoneEnter = () => {
    jardineroTweenRef.current?.resume()
    jardineraTweenRef.current?.resume()
    regaderaTweenRef.current?.play()
  }

  const handleLandscapeZoneLeave = () => {
    jardineroTweenRef.current?.pause()
    jardineraTweenRef.current?.pause()
    // La chica de la regadera termina la vuelta y se queda en reposo (fotograma 0).
    regaderaTweenRef.current?.pause()
    if (regaderaImageRef.current) regaderaImageRef.current.src = regaderaFrames[0]
  }

  const handleAcademyZoneEnter = () => {
    hombreSentadoTweenRef.current?.resume()
    mujerSentadaTweenRef.current?.resume()
    profeTweenRef.current?.resume()
  }

  const handleAcademyZoneLeave = () => {
    hombreSentadoTweenRef.current?.pause()
    mujerSentadaTweenRef.current?.pause()
    profeTweenRef.current?.pause()
  }

  const handlePhoneZoneEnter = () => {
    stopPhoneAlert()
  }

  const handlePhoneZoneLeave = () => {}

  const handleDesignZoneEnter = () => {
    bibliotecarioTweenRef.current?.resume()
    cuadroTweenRef.current?.resume()
    sofaTweenRef.current?.resume()
    ordenadorTweenRef.current?.resume()
    banquitoTweenRef.current?.resume()
  }

  const handleDesignZoneLeave = () => {
    bibliotecarioTweenRef.current?.pause()
    cuadroTweenRef.current?.pause()
    sofaTweenRef.current?.pause()
    ordenadorTweenRef.current?.pause()
    banquitoTweenRef.current?.pause()
  }

  const handleScenographyZoneEnter = () => {
    lectorTweenRef.current?.resume()
    personasSillasTweenRef.current?.resume()
    parejaTweenRef.current?.resume()
    columpioTweenRef.current?.resume()
  }

  const handleScenographyZoneLeave = () => {
    lectorTweenRef.current?.pause()
    personasSillasTweenRef.current?.pause()
    parejaTweenRef.current?.pause()
    columpioTweenRef.current?.pause()
  }

  const handleJardineroEnter = () => {
    jardineroTweenRef.current?.pause()
    showBubble(jardineroBubbleRef)
  }

  const handleJardineroLeave = () => {
    jardineroTweenRef.current?.resume()
    hideBubble(jardineroBubbleRef)
  }

  const handleJardineraEnter = () => {
    jardineraTweenRef.current?.pause()
    showBubble(jardineraBubbleRef)
  }

  const handleJardineraLeave = () => {
    jardineraTweenRef.current?.resume()
    hideBubble(jardineraBubbleRef)
  }

  const handleOrdenadorEnter = () => {
    ordenadorTweenRef.current?.pause()
    showBubble(ordenadorBubbleRef)
  }

  const handleOrdenadorLeave = () => {
    ordenadorTweenRef.current?.resume()
    hideBubble(ordenadorBubbleRef)
  }

  const handleBanquitoEnter = () => {
    banquitoTweenRef.current?.pause()
    showBubble(banquitoBubbleRef)
  }

  const handleBanquitoLeave = () => {
    banquitoTweenRef.current?.resume()
    hideBubble(banquitoBubbleRef)
  }

  const handleTelefonoEnter = () => {
    stopPhoneAlert()
    showBubble(telefonoBubbleRef)
  }

  const handleTelefonoLeave = () => {
    hideBubble(telefonoBubbleRef)
  }

  const handleColumpioEnter = () => {
    columpioTweenRef.current?.pause()
    showBubble(columpioBubbleRef)
  }

  const handleColumpioLeave = () => {
    columpioTweenRef.current?.resume()
    hideBubble(columpioBubbleRef)
  }

  const handleHombreSentadoEnter = () => {
    hombreSentadoTweenRef.current?.pause()
    showBubble(hombreSentadoBubbleRef)
  }

  const handleHombreSentadoLeave = () => {
    hombreSentadoTweenRef.current?.resume()
    hideBubble(hombreSentadoBubbleRef)
  }

  const handleMujerSentadaEnter = () => {
    mujerSentadaTweenRef.current?.pause()
    showBubble(mujerSentadaBubbleRef)
  }

  const handleMujerSentadaLeave = () => {
    mujerSentadaTweenRef.current?.resume()
    hideBubble(mujerSentadaBubbleRef)
  }

  const handleProfeEnter = () => {
    profeTweenRef.current?.pause()
    showBubble(profeBubbleRef)
  }

  const handleProfeLeave = () => {
    profeTweenRef.current?.resume()
    hideBubble(profeBubbleRef)
  }

  const handleBackgroundLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget

    if (naturalWidth && naturalHeight) {
      setSceneRatio(SCENE_IMAGE_RATIO)
    }
  }

  useEffect(() => {
    let isCancelled = false
    const uniqueAssets = [...new Set(criticalSceneAssets)]

    const loadImage = (src) =>
      new Promise((resolve) => {
        const image = new Image()
        let hasSettled = false
        const settle = () => {
          if (hasSettled) return
          hasSettled = true
          window.clearTimeout(timeoutId)
          resolve()
        }
        const timeoutId = window.setTimeout(settle, 12_000)
        image.onload = settle
        image.onerror = settle
        image.src = src
      })

    const preloadAssets = async () => {
      // 1) Lo minimo para pintar la pantalla de carga (fondo, casa, andamio y
      //    las animaciones continuas). 2) El resto, con el porcentaje en el cartel.
      const firstAssets = [...new Set(loadingScreenAssets)]
      const restAssets = uniqueAssets.filter((src) => !firstAssets.includes(src))
      const total = firstAssets.length + restAssets.length
      let loadedAssets = 0
      const track = (promise) => promise.then(() => {
        loadedAssets += 1
        if (!isCancelled) setLoadingProgress(Math.min(100, Math.round((loadedAssets / total) * 100)))
      })

      await Promise.all(firstAssets.map((src) => track(loadImage(src))))
      if (isCancelled) return
      setSceneRatio(SCENE_IMAGE_RATIO)
      setIsAssetsReady(true)

      await Promise.all(restAssets.map((src) => track(loadImage(src))))
      if (isCancelled) return
      setAssetsLoaded(true)

      // Keep non-critical animation frames warm without delaying first paint.
      sceneAssetUrls
        .filter((src) => !uniqueAssets.includes(src))
        .forEach((src) => {
          const image = new Image()
          image.src = src
        })
    }

    preloadAssets()

    return () => {
      isCancelled = true
    }
  }, [])

  useEffect(() => {
    if (!isAssetsReady || activePage !== 'home') return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
      })

      timeline.from('[data-animate="frame"]', {
        opacity: 0,
        scale: 0.985,
        duration: 0.9,
      })

      if (birdRef.current) {
        birdFlightRef.current = createBirdFlight(birdRef.current)
      }

      if (vanRef.current && vanImageRef.current) {
        const vanState = { frame: 0 }
        const totalFrames = vanFrames.length
        const maxMovingFrame = totalFrames - 1
        const frameDuration = maxMovingFrame / 11
        const travelDuration = 4.2
        const stopDuration = 1.5

        gsap.set(vanRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        setBubbleInitialState(vanBubbleRef)

        // Frame 0 is reserved for the van at rest. The moving sequence loops at 11 FPS.
        vanState.frame = 1
        vanFramesTweenRef.current = gsap.to(vanState, {
          frame: maxMovingFrame,
          duration: frameDuration,
          ease: `steps(${maxMovingFrame - 1})`,
          repeat: -1,
          paused: true,
          onUpdate: () => setAnimatedFrame(vanImageRef, vanFrames, vanState.frame),
        })

        const startVanFrames = () => {
          isVanMovingRef.current = true
          gsap.set(vanCartelaRef.current, { autoAlpha: 0 })
          vanState.frame = 1
          setAnimatedFrame(vanImageRef, vanFrames, vanState.frame)
          vanFramesTweenRef.current?.restart()
        }

        const stopVanFrames = (atInitialPosition = false) => {
          isVanMovingRef.current = false
          vanFramesTweenRef.current?.pause()
          vanState.frame = 0
          setAnimatedFrame(vanImageRef, vanFrames, vanState.frame)
          gsap.set(vanCartelaRef.current, { autoAlpha: atInitialPosition ? 1 : 0 })
        }

        stopVanFrames(true)

        gsap.from(vanRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          delay: 0.35,
        })

        vanMoveTweenRef.current = gsap
          .timeline({ paused: true })
          .call(startVanFrames)
          .to(vanRef.current, {
            left: '-8%',
            duration: travelDuration,
            ease: 'power1.inOut',
          })
          .call(stopVanFrames)
          .to({}, { duration: stopDuration })
          .call(startVanFrames)
          .to(vanRef.current, {
            left: '18%',
            duration: travelDuration,
            ease: 'power1.inOut',
          })
          .call(() => stopVanFrames(true))
      }

      if (grafitiRef.current && grafitiImageRef.current) {
        const grafitiState = { frame: 0 }
        const totalFrames = grafitiFrames.length
        const frameDuration = totalFrames / 4.4

        gsap.set(grafitiRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(grafitiRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.25,
        })

        grafitiTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(grafitiImageRef, grafitiFrames, grafitiState.frame)
          },
          state: grafitiState,
          totalFrames,
          pauseDuration: 1,
        })
        grafitiTweenRef.current.pause()
      }

      if (jardineroRef.current && jardineroImageRef.current) {
        const jardineroState = { frame: 0 }
        const totalFrames = jardineroFrames.length
        const frameDuration = totalFrames / 6

        gsap.set(jardineroRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(jardineroRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.3,
        })

        setBubbleInitialState(jardineroBubbleRef)

        jardineroTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(jardineroImageRef, jardineroFrames, jardineroState.frame)
          },
          state: jardineroState,
          totalFrames,
        })
        jardineroTweenRef.current.pause()
      }

      // Chica de la regadera: 1-6 y vuelta 6-1 (12 fotogramas) a 5 fps, con una
      // pausa muy corta entre vueltas. En reposo, fotograma 0.
      if (regaderaImageRef.current) {
        const sequence = [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1]
        const regaderaState = { step: 0 }
        regaderaTweenRef.current = gsap.to(regaderaState, {
          step: sequence.length - 1,
          duration: (sequence.length - 1) / 5,
          ease: `steps(${sequence.length - 1})`,
          repeat: -1,
          repeatDelay: 0.15,
          paused: true,
          onUpdate: () => {
            if (regaderaImageRef.current) {
              regaderaImageRef.current.src = regaderaFrames[sequence[Math.round(regaderaState.step)]]
            }
          },
        })
      }

      if (jardineraRef.current && jardineraImageRef.current) {
        const jardineraState = { frame: 0 }
        const totalFrames = jardineraFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(jardineraRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(jardineraRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.34,
        })

        setBubbleInitialState(jardineraBubbleRef)

        // Animacion corta: pausa pequena arriba y otra antes de repetir.
        jardineraTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(jardineraImageRef, jardineraFrames, jardineraState.frame)
          },
          pauseDuration: 0.6,
          state: jardineraState,
          totalFrames,
        })
        jardineraTweenRef.current.to({}, { duration: 0.8 })
        jardineraTweenRef.current.pause()
      }

      if (arbolRef.current && arbolImageRef.current) {
        const arbolState = { frame: 0 }
        const totalFrames = arbolFrames.length

        gsap.from(arbolRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.22,
        })

        // Animacion continua: 6 fps en bucle con una pausa corta (0,5 s) entre vueltas.
        arbolTweenRef.current = gsap.to(arbolState, {
          frame: totalFrames - 1,
          duration: (totalFrames - 1) / 6,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          repeatDelay: 0.5,
          onUpdate: () => {
            setAnimatedFrame(arbolImageRef, arbolFrames, arbolState.frame)
          },
        })
      }

      if (ordenadorRef.current && ordenadorImageRef.current) {
        const ordenadorState = { frame: 0 }
        const totalFrames = ordenadorFrames.length
        const frameDuration = (totalFrames - 1) / 3

        gsap.set(ordenadorRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(ordenadorRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.24,
        })

        setBubbleInitialState(ordenadorBubbleRef)

        ordenadorTweenRef.current = gsap.to(ordenadorState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          repeatDelay: 0,
          onUpdate: () => {
            setAnimatedFrame(ordenadorImageRef, ordenadorFrames, ordenadorState.frame)
          },
        })
        ordenadorTweenRef.current.pause()
      }

      if (banquitoRef.current && banquitoImageRef.current) {
        const banquitoState = { frame: 0 }
        const totalFrames = banquitoFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(banquitoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(banquitoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.26,
        })

        setBubbleInitialState(banquitoBubbleRef)

        banquitoTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(banquitoImageRef, banquitoFrames, banquitoState.frame)
          },
          state: banquitoState,
          totalFrames,
        })
        banquitoTweenRef.current.pause()
      }

        if (sofaRef.current && sofaImageRef.current) {
          // Fotograma 2.png = reposo; 3.png-14.png = un ciclo de pasos.
          // El avance va a velocidad constante y al mismo ritmo que los pasos
          // (unos 0,68 % por fotograma) para que los pies no resbalen.
          const sofaRestFrame = 1 // Frame 2.png
          const sofaFirstWalk = 2 // Frame 3.png
          const sofaLastWalk = sofaFrames.length - 1 // Frame 14.png
          const sofaFps = 6
          const sofaStartLeft = '41.8%'
          const sofaEndLeft = '50%'
          const sofaState = { frame: sofaRestFrame }
          const walkDuration = (sofaLastWalk - sofaFirstWalk + 1) / sofaFps
          const showSofaFrame = () => setAnimatedFrame(sofaImageRef, sofaFrames, sofaState.frame)
          const sofaPauseDuration = () => getRandomReversePause()

          gsap.set(sofaRef.current, {
            xPercent: -50,
            yPercent: -50,
            left: sofaStartLeft,
            willChange: 'transform',
          })

          gsap.from(sofaRef.current, {
            opacity: 0,
            duration: 0.55,
            ease: 'power2.out',
            delay: 0.28,
          })

          sofaTweenRef.current = gsap
            .timeline({ repeat: -1, repeatRefresh: true })
            // Ida: un fotograma de arranque y el ciclo de pasos.
            .set(sofaState, { frame: sofaFirstWalk - 0.49, onComplete: showSofaFrame })
            .to(sofaState, {
              frame: sofaLastWalk + 0.49,
              duration: walkDuration,
              ease: 'none',
              onUpdate: showSofaFrame,
            })
            .to(sofaRef.current, {
              left: sofaEndLeft,
              duration: walkDuration,
              ease: 'none',
            }, '<')
            // Vuelta: los mismos pasos al reves (caminan hacia atras).
            .to(sofaState, {
              frame: sofaFirstWalk - 0.49,
              duration: walkDuration,
              ease: 'none',
              onUpdate: showSofaFrame,
            })
            .to(sofaRef.current, {
              left: sofaStartLeft,
              duration: walkDuration,
              ease: 'none',
            }, '<')
            .set(sofaState, { frame: sofaRestFrame, onComplete: showSofaFrame })
            // Descansan en 2.png en el punto de partida.
            .to({}, { duration: sofaPauseDuration })

          sofaMoveTweenRef.current = sofaTweenRef.current
          sofaTweenRef.current.pause()
        }

      if (bibliotecarioRef.current && bibliotecarioImageRef.current) {
        const bibliotecarioState = { frame: 0 }
        const totalFrames = bibliotecarioFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(bibliotecarioRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(bibliotecarioRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.3,
        })

        bibliotecarioTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(
              bibliotecarioImageRef,
              bibliotecarioFrames,
              bibliotecarioState.frame,
            )
          },
          state: bibliotecarioState,
          totalFrames,
        })
        bibliotecarioTweenRef.current.pause()
      }

      if (cuadroRef.current && cuadroImageRef.current) {
        const cuadroState = { frame: 0 }
        const totalFrames = cuadroFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(cuadroRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(cuadroRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.32,
        })

        cuadroTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(cuadroImageRef, cuadroFrames, cuadroState.frame)
          },
          state: cuadroState,
          totalFrames,
        })
        cuadroTweenRef.current.pause()
      }

      if (telefonoRef.current && telefonoImageRef.current) {
        const telefonoState = { frame: 0 }
        const totalFrames = telefonoFrames.length

        gsap.set(telefonoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(telefonoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.34,
        })

        setBubbleInitialState(telefonoBubbleRef)

        // Mientras suena, los fotogramas pasan de corrido a 12 fps en bucle.
        telefonoTweenRef.current = gsap.to(telefonoState, {
          frame: totalFrames - 1,
          duration: (totalFrames - 1) / 12,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          paused: true,
          onUpdate: () => {
            setAnimatedFrame(telefonoImageRef, telefonoFrames, telefonoState.frame)
          },
        })

        telefonoMoveTweenRef.current = gsap.to(telefonoRef.current, {
          yPercent: -54,
          xPercent: -48.5,
          duration: 0.42,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatDelay: 10,
        })
        telefonoMoveTweenRef.current.pause()
      }

      if (parejaRef.current && parejaImageRef.current) {
        const parejaState = { frame: 0 }
        const totalFrames = parejaFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(parejaRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(parejaRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.36,
        })

        parejaTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(parejaImageRef, parejaFrames, parejaState.frame)
          },
          state: parejaState,
          totalFrames,
        })
        parejaTweenRef.current.pause()
      }

      if (personasSillasRef.current && personasSillasImageRef.current) {
        const personasSillasState = { frame: 0 }
        const totalFrames = personasSillasFrames.length
        const frameDuration = (totalFrames - 1) / 6

        gsap.set(personasSillasRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(personasSillasRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.38,
        })

        personasSillasTweenRef.current = gsap.to(personasSillasState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          repeatDelay: 0,
          onUpdate: () => {
            setAnimatedFrame(
              personasSillasImageRef,
              personasSillasFrames,
              personasSillasState.frame,
            )
          },
        })
        personasSillasTweenRef.current.pause()
      }

      if (lectorRef.current && lectorImageRef.current) {
        const lectorState = { frame: 0 }
        const totalFrames = lectorFrames.length
        const frameDuration = totalFrames / 1

        gsap.set(lectorRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(lectorRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.4,
        })

        lectorTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(lectorImageRef, lectorFrames, lectorState.frame)
          },
          state: lectorState,
          totalFrames,
        })
        lectorTweenRef.current.pause()
      }

      if (humoRef.current && humoImageRef.current) {
        const humoState = { frame: 0 }
        const totalFrames = humoFrames.length
        // Animacion continua: 12 fps en bucle (antes 4 fps, iba a saltos).
        const frameDuration = (totalFrames - 1) / 12

        gsap.set(humoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(humoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.403,
        })

        humoTweenRef.current = gsap.to(humoState, {
          frame: totalFrames - 1,
          duration: frameDuration,
          ease: `steps(${totalFrames - 1})`,
          repeat: -1,
          repeatDelay: 0,
          onUpdate: () => {
            setAnimatedFrame(humoImageRef, humoFrames, humoState.frame)
          },
        })
      }

      if (hombreSentadoRef.current && hombreSentadoImageRef.current) {
        const hombreSentadoState = { frame: 0 }
        const totalFrames = hombreSentadoFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(hombreSentadoRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(hombreSentadoRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.405,
        })

        setBubbleInitialState(hombreSentadoBubbleRef)

        hombreSentadoTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(
              hombreSentadoImageRef,
              hombreSentadoFrames,
              hombreSentadoState.frame,
            )
          },
          state: hombreSentadoState,
          totalFrames,
        })
        hombreSentadoTweenRef.current.pause()
      }

      if (mujerSentadaRef.current && mujerSentadaImageRef.current) {
        const mujerSentadaState = { frame: 0 }
        const totalFrames = mujerSentadaFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(mujerSentadaRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(mujerSentadaRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.408,
        })

        setBubbleInitialState(mujerSentadaBubbleRef)

        mujerSentadaTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(
              mujerSentadaImageRef,
              mujerSentadaFrames,
              mujerSentadaState.frame,
            )
          },
          state: mujerSentadaState,
          totalFrames,
        })
        mujerSentadaTweenRef.current.pause()
      }

      if (profeRef.current && profeImageRef.current) {
        const profeState = { frame: 0 }
        const totalFrames = profeFrames.length
        const frameDuration = totalFrames / 3

        gsap.set(profeRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(profeRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.41,
        })

        setBubbleInitialState(profeBubbleRef)

        profeTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(profeImageRef, profeFrames, profeState.frame)
          },
          state: profeState,
          totalFrames,
        })
        profeTweenRef.current.pause()
      }

      if (columpioRef.current && columpioImageRef.current) {
        const columpioState = { frame: 0 }
        const totalFrames = columpioFrames.length
        const frameDuration = totalFrames / 4

        gsap.set(columpioRef.current, {
          xPercent: -50,
          yPercent: -50,
          willChange: 'transform',
        })

        gsap.from(columpioRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          delay: 0.42,
        })

        setBubbleInitialState(columpioBubbleRef)

        columpioTweenRef.current = createRandomPausedFrameTween({
          frameDuration,
          onUpdate: () => {
            setAnimatedFrame(columpioImageRef, columpioFrames, columpioState.frame)
          },
          state: columpioState,
          totalFrames,
        })
        columpioTweenRef.current.pause()
      }
    }, rootRef)

    return () => {
      vanMoveTweenRef.current = null
      vanFramesTweenRef.current = null
      isVanMovingRef.current = false
      grafitiTweenRef.current = null
      jardineroTweenRef.current = null
      jardineraTweenRef.current = null
      arbolTweenRef.current = null
      ordenadorTweenRef.current = null
      banquitoTweenRef.current = null
      sofaTweenRef.current = null
      sofaMoveTweenRef.current = null
      bibliotecarioTweenRef.current = null
      cuadroTweenRef.current = null
      telefonoTweenRef.current = null
      telefonoMoveTweenRef.current = null
      parejaTweenRef.current = null
      personasSillasTweenRef.current = null
      lectorTweenRef.current = null
      humoTweenRef.current = null
      birdFlightRef.current?.kill()
      birdFlightRef.current = null
      hombreSentadoTweenRef.current = null
      mujerSentadaTweenRef.current = null
      profeTweenRef.current = null
      columpioTweenRef.current = null
      ctx.revert()
    }
  }, [activePage, isAssetsReady])

  const bubbleInteriorText = 'Dise\u00f1o de interiores'

  // El arbol va por detras de la capa de la casa (poste, cartel de escenografia
  // y linea de tierra quedan delante) y por delante del fondo.
  const treeCharacter = {
      id: 'arbol',
      ref: arbolRef,
      anchorClassName: 'arbol-anchor',
      imageClassName: 'arbol-frame',
      imageRef: arbolImageRef,
      src: arbolFrames[0],
      alt: 'Arbol animado',
      // Arbol 07 (con raices): tronco en el mismo sitio y apoyado en la misma
      // linea de suelo que el arbol anterior. Medidas en la capa del edificio.
      style: {
        left: '77.65%',
        top: '47.1%',
        width: '22.56%',
        aspectRatio: '515 / 685',
      },
    }

  const overlayCharacters = [
    {
      id: 'banquito',
      ref: banquitoRef,
      anchorClassName: 'banquito-anchor',
      bubbleRef: banquitoBubbleRef,
      bubbleText: bubbleInteriorText,
      imageClassName: 'banquito-frame',
      imageRef: banquitoImageRef,
      interactive: true,
      onPointerEnter: handleBanquitoEnter,
      onPointerLeave: handleBanquitoLeave,
      src: banquitoFrames[0],
      alt: 'Banquito animado',
      style: { left: '63%', top: '53.3%', width: '6.1%' },
    },
    {
      id: 'ordenador',
      ref: ordenadorRef,
      anchorClassName: 'ordenador-anchor',
      bubbleRef: ordenadorBubbleRef,
      bubbleText: bubbleInteriorText,
      imageClassName: 'ordenador-frame',
      imageRef: ordenadorImageRef,
      interactive: true,
      onPointerEnter: handleOrdenadorEnter,
      onPointerLeave: handleOrdenadorLeave,
      src: ordenadorFrames[0],
      alt: 'Ordenador animado',
      style: { left: '57%', top: '53%', width: '6.5%' },
    },
    {
      id: 'grafiti',
      ref: grafitiRef,
      anchorClassName: 'grafiti-anchor',
      imageClassName: 'grafiti-frame',
      imageRef: grafitiImageRef,
      src: grafitiFrames[0],
      alt: 'Grafiti animado',
      style: { left: '45.2%', top: '17.1%', width: '9%' },
    },
    {
      id: 'bibliotecario',
      ref: bibliotecarioRef,
      anchorClassName: 'bibliotecario-anchor',
      imageClassName: 'bibliotecario-frame',
      imageRef: bibliotecarioImageRef,
      src: bibliotecarioFrames[0],
      alt: 'Bibliotecario animado',
      style: { left: '42.8%', top: '40.2%', width: '8.9%' },
    },
    {
      id: 'cuadro',
      ref: cuadroRef,
      anchorClassName: 'cuadro-anchor',
      imageClassName: 'cuadro-frame',
      imageRef: cuadroImageRef,
      src: cuadroFrames[0],
      alt: 'Cuadro animado',
      style: { left: '48%', top: '43.9%', width: '11%' },
    },
    {
      id: 'sofa',
      ref: sofaRef,
      anchorClassName: 'sofa-anchor',
      imageClassName: 'sofa-frame',
      imageRef: sofaImageRef,
      src: sofaFrames[1],
      alt: 'Sofa animado',
      style: { left: '41.8%', top: '56.4%', width: '10%' },
    },
    {
      id: 'jardinero',
      ref: jardineroRef,
      anchorClassName: 'jardinero-anchor',
      bubbleRef: jardineroBubbleRef,
      bubbleText: sceneCopy.landscapeDetail,
      imageClassName: 'jardinero-frame',
      imageRef: jardineroImageRef,
      interactive: true,
      onPointerEnter: handleJardineroEnter,
      onPointerLeave: handleJardineroLeave,
      src: jardineroFrames[0],
      alt: 'Jardinero animado',
      style: { left: '63.3%', top: '24.8%', width: '12.4%' },
    },
    {
      id: 'jardinera',
      ref: jardineraRef,
      anchorClassName: 'jardinera-anchor',
      bubbleRef: jardineraBubbleRef,
      bubbleText: sceneCopy.landscapeDetail,
      imageClassName: 'jardinera-frame',
      imageRef: jardineraImageRef,
      interactive: true,
      onPointerEnter: handleJardineraEnter,
      onPointerLeave: handleJardineraLeave,
      src: jardineraFrames[0],
      alt: 'Jardinera animada',
      style: { left: '59%', top: '29.2%', width: '7.3%' },
    },
  ]

  const topCharacters = [
    {
      id: 'cartela-personaje',
      ref: vanCartelaRef,
      anchorClassName: 'cartela-personaje-anchor',
      imageClassName: 'cartela-personaje-frame',
      src: '/Frames/imoviles/cartela/cartela.png',
      alt: 'Cartela junto a la furgo',
      // Keep this overlay aligned with the van below it.
      style: { left: '-7%', top: '74%', width: '38%' },
    },
    {
      id: 'spray',
      anchorClassName: 'spray-anchor',
      imageClassName: 'spray-frame',
      src: '/Frames/imoviles/spray/spray.png',
      alt: 'Spray',
      style: { left: '37.5%', top: '15.9%', width: '9%' },
    },
    {
      id: 'persona-escaleras',
      anchorClassName: 'persona-escaleras-anchor',
      imageClassName: 'persona-escaleras-frame',
      src: '/Frames/imoviles/personaje_escaleras/persona_1.png',
      alt: 'Persona en las escaleras',
      style: { left: '67%', top: '93.3%', width: '4%' },
    },
    {
      id: 'personajes-fiesta',
      anchorClassName: 'personajes-fiesta-anchor',
      imageClassName: 'personajes-fiesta-frame',
      src: '/Frames/imoviles/personajes_fiesta/Fiesta.png',
      alt: 'Personajes de fiesta',
      style: { left: '29%', top: '64.5%', width: '7%' },
    },
    {
      id: 'maleta',
      anchorClassName: 'maleta-anchor',
      imageClassName: 'maleta-frame',
      src: '/Frames/imoviles/maleta/maleta.png',
      alt: 'Maleta',
      style: { left: '25.7%', top: '73.6%', width: '3.1%' },
    },
    {
      id: 'fumador',
      anchorClassName: 'fumador-anchor',
      imageClassName: 'fumador-frame',
      src: '/Frames/imoviles/fumador/fumador.png',
      alt: 'Fumador',
      style: { left: '29%', top: '28.8%', width: '4%' },
    },
    {
      id: 'telefono',
      ref: telefonoRef,
      anchorClassName: 'telefono-anchor',
      className: isPhoneAlertActive ? 'is-ringing' : '',
      extra: <PhoneVibration />,
      imageClassName: 'telefono-frame',
      imageRef: telefonoImageRef,
      interactive: true,
      onPointerEnter: handleTelefonoEnter,
      onPointerLeave: handleTelefonoLeave,
      src: telefonoFrames[0],
      alt: 'Telefono animado',
      style: { left: '66.2%', top: '99.5%', width: '2.7%' },
    },
  ]

  const superTopCharacters = [
    {
      id: 'pareja',
      ref: parejaRef,
      anchorClassName: 'pareja-anchor',
      imageClassName: 'pareja-frame',
      imageRef: parejaImageRef,
      src: parejaFrames[0],
      alt: 'Pareja animada',
      style: { left: '66%', top: '68.9%', width: '8%' },
    },
    {
      id: 'personaje-microfono',
      anchorClassName: 'personaje-microfono-anchor',
      imageClassName: 'personaje-microfono-frame',
      src: '/Frames/imoviles/personaje_microfono/personaje.png',
      alt: 'Personaje con microfono',
      style: { left: '54%', top: '60.5%', width: '5.3%' },
    },
    {
      id: 'tablero',
      anchorClassName: 'tablero-anchor',
      imageClassName: 'tablero-frame',
      src: '/Frames/imoviles/tablero/tablero.png',
      alt: 'Tablero',
      style: { left: '33.4%', top: '71.7%', width: '4.8%', zIndex: 120 },
    },
    {
      id: 'humo',
      ref: humoRef,
      anchorClassName: 'humo-anchor',
      imageClassName: 'humo-frame',
      imageRef: humoImageRef,
      src: humoFrames[0],
      alt: 'Humo animado',
      style: { left: '35%', top: '27%', width: '3%' },
    },
    {
      id: 'personas-sillas',
      ref: personasSillasRef,
      anchorClassName: 'personas-sillas-anchor',
      imageClassName: 'personas-sillas-frame',
      imageRef: personasSillasImageRef,
      src: personasSillasFrames[0],
      alt: 'Personas en sillas animadas',
      style: { left: '55.5%', top: '70%', width: '6%' },
    },
    {
      id: 'lector',
      ref: lectorRef,
      anchorClassName: 'lector-anchor',
      imageClassName: 'lector-frame',
      imageRef: lectorImageRef,
      src: lectorFrames[0],
      alt: 'Lector animado',
      style: { left: '51.5%', top: '67.4%', width: '3.8%' },
    },
    {
      id: 'hombre-sentado',
      ref: hombreSentadoRef,
      anchorClassName: 'hombre-sentado-anchor',
      bubbleRef: hombreSentadoBubbleRef,
      bubbleText: sceneCopy.academy,
      imageClassName: 'hombre-sentado-frame',
      imageRef: hombreSentadoImageRef,
      interactive: true,
      onPointerEnter: handleHombreSentadoEnter,
      onPointerLeave: handleHombreSentadoLeave,
      src: hombreSentadoFrames[0],
      alt: 'Hombre sentado animado',
      style: { left: '38.2%', top: '77.7%', width: '6.6%' },
    },
    {
      id: 'mujer-sentada',
      ref: mujerSentadaRef,
      anchorClassName: 'mujer-sentada-anchor',
      bubbleRef: mujerSentadaBubbleRef,
      bubbleText: sceneCopy.academy,
      imageClassName: 'mujer-sentada-frame',
      imageRef: mujerSentadaImageRef,
      interactive: true,
      onPointerEnter: handleMujerSentadaEnter,
      onPointerLeave: handleMujerSentadaLeave,
      src: mujerSentadaFrames[0],
      alt: 'Mujer sentada animada',
      style: { left: '34%', top: '77.9%', width: '6.3%', zIndex: 130 },
    },
    {
      id: 'profe',
      ref: profeRef,
      anchorClassName: 'profe-anchor',
      bubbleRef: profeBubbleRef,
      bubbleText: sceneCopy.academy,
      imageClassName: 'profe-frame',
      imageRef: profeImageRef,
      interactive: true,
      onPointerEnter: handleProfeEnter,
      onPointerLeave: handleProfeLeave,
      src: profeFrames[0],
      alt: 'Profe animado',
      style: { left: '46%', top: '76.6%', width: '7.9%' },
    },
    {
      id: 'columpio',
      ref: columpioRef,
      anchorClassName: 'columpio-anchor',
      bubbleRef: columpioBubbleRef,
      bubbleText: sceneCopy.scenography,
      imageClassName: 'columpio-frame',
      imageRef: columpioImageRef,
      interactive: true,
      onPointerEnter: handleColumpioEnter,
      onPointerLeave: handleColumpioLeave,
      src: columpioFrames[0],
      alt: 'Columpio animado',
      style: { left: '69.2%', top: '54.4%', width: '21.3%' },
    },
  ]

  const vanCharacter = {
    ref: vanRef,
    anchorClassName: 'van-anchor',
    bubbleClassName: 'van-dialogue',
    bubbleRef: vanBubbleRef,
    bubbleText: sceneCopy.artDirection,
    imageClassName: 'van-frame',
    imageRef: vanImageRef,
    interactive: true,
    onPointerEnter: handleVanEnter,
    onPointerLeave: handleVanLeave,
    src: vanFrames[0],
    alt: 'Furgo animada',
    style: { left: '17%', top: '73.8%', width: '24%' },
  }

  const birdCharacter = {
    ref: birdRef,
    anchorClassName: 'bird-anchor',
    imageClassName: 'bird-frame',
    imageRef: birdImageRef,
    src: birdFrames[0],
    alt: 'Pajaro animado',
    // Los fotogramas se dibujaron sobre un A4: se estiran en horizontal para
    // el 16:9 y se colocan para que el hueco donde los pajaros "desaparecen"
    // (40-66 % de la hoja) caiga justo detras del edificio principal.
    style: { left: '0.6%', top: '-7%', width: '96%', aspectRatio: '3178 / 1000' },
  }

  // Add one or more rectangular regions per department to compose irregular rooms.
  const sceneHotspots = [
    {
      id: 'm047-estudio',
      label: sceneCopy.graphic,
      dialogueStyle: { left: '40.2%', top: '20.5%' },
      onClick: () => handleNavigate({ pageId: 'projects', filterId: 'graphic' }),
      onPointerEnter: handleStudioZoneEnter,
      onPointerLeave: handleStudioZoneLeave,
      regions: [
        {
          left: '39%',
          top: '10%',
          width: '10%',
          height: '12%',
        },
      ],
    },
    {
      id: 'paisajismo',
      label: sceneCopy.landscape,
      dialogueStyle: { left: '53.2%', top: '29.4%' },
      onClick: () => handleNavigate({ pageId: 'projects', filterId: 'landscape' }),
      onPointerEnter: handleLandscapeZoneEnter,
      onPointerLeave: handleLandscapeZoneLeave,
      regions: [
        {
          left: '49%',
          top: '10%',
          width: '15%',
          height: '21%',
        },
      ],
    },
    {
      id: 'academia',
      label: sceneCopy.academy,
      dialogueStyle: { left: '37%', top: '82.2%' },
      onClick: () => handleNavigate('academy'),
      onPointerEnter: handleAcademyZoneEnter,
      onPointerLeave: handleAcademyZoneLeave,
      regions: [
        {
          left: '32%',
          top: '68%',
          width: '16.6%',
          height: '16%',
        },
      ],
    },
    {
      id: 'telefono',
      label: sceneCopy.contactSign,
      forceDialogue: isPhoneAlertActive,
      dialogueStyle: { left: '55.9%', top: '92.55%' },
      onClick: handleOpenBusinessCard,
      onPointerEnter: handlePhoneZoneEnter,
      onPointerLeave: handlePhoneZoneLeave,
      // Toda la habitacion del sotano (maniquies + escalera; sin el piquito).
      regions: [
        {
          left: '48.6%',
          top: '75.4%',
          width: '20.3%',
          height: '18.4%',
        },
      ],
    },
    {
      id: 'diseno',
      label: sceneCopy.interiors,
      dialogueStyle: { left: '41.2%', top: '54.9%' },
      onClick: () => handleNavigate({ pageId: 'projects', filterId: 'interiors' }),
      onPointerEnter: handleDesignZoneEnter,
      onPointerLeave: handleDesignZoneLeave,
      regions: [
        {
          left: '39%',
          top: '22%',
          width: '10%',
          height: '34%',
        },
        {
          left: '49%',
          top: '31%',
          width: '4%',
          height: '25%',
        },
        {
          left: '53%',
          top: '31%',
          width: '10.6%',
          height: '20%',
        },
      ],
    },
    {
      id: 'escenografia',
      label: sceneCopy.scenography,
      dialogueStyle: { left: '52.5%', top: '74%' },
      onClick: () => handleNavigate({ pageId: 'projects', filterId: 'scenography' }),
      onPointerEnter: handleScenographyZoneEnter,
      onPointerLeave: handleScenographyZoneLeave,
      regions: [
        {
          left: '48.7%',
          top: '57%',
          width: '4.4%',
          height: '18%',
        },
        {
          left: '53%',
          top: '51.3%',
          width: '10.6%',
          height: '23.7%',
        },
        {
          left: '63.6%',
          top: '27%',
          // Hasta la mitad de la persona que tira de la cuerda.
          width: '9.5%',
          height: '48%',
        },
      ],
    },
    {
      id: 'direccion-de-arte',
      label: sceneCopy.artDirection,
      dialogueStyle: { left: '13%', top: '82.2%' },
      onClick: () => handleNavigate({ pageId: 'projects', filterId: 'art-direction' }),
      onPointerEnter: handleArtDirectionZoneEnter,
      regions: [
        {
          left: '7%',
          top: '62%',
          width: '20%',
          height: '22%',
        },
      ],
    },
  ]

  const houseLayer = {
    src: CASA_SRC,
    alt: 'Capa central de la casa',
    className: 'absolute left-1/2 top-1/2 w-full object-contain',
    style: {
      left: '50%',
      top: '60.8%',
      width: '97%',
      transform: 'translate(-50%, -50%) scale(1.2)',
    },
  }

  const leftBuildingLayer = {
    src: '/edificio_izquierda.svg',
    alt: 'Edificio izquierdo',
    className: 'absolute left-1/2 top-1/2 h-full w-full object-contain',
    style: {
      left: '21.8%',
      top: '57.4%',
      width: '61%',
      transform: 'translate(-50%, -50%)',
    },
  }

  // Farola de la calle: recortada de fondo.jpg para que quede por encima del
  // edificio izquierdo (que la tapaba) y por detras de la furgo.
  const streetLampLayer = {
    src: '/farola.png',
    alt: 'Farola',
    className: 'absolute block',
    style: {
      left: `${15.4969 * FONDO_STRETCH}%`,
      top: '52%',
      width: `${16.0807 * FONDO_STRETCH}%`,
    },
  }

  const cartelaLayer = {
    src: '/cartela.svg',
    alt: 'Cartela',
    className: 'cartela-layer absolute bottom-0 right-0 object-contain',
    style: {
      right: '-0.2%',
      // Sube con el recorte inferior del dibujo para seguir en la esquina.
      bottom: `${(SCENE_CROP_BOTTOM * 100 - 1).toFixed(2)}%`,
      width: '18.3%',
    },
  }

  return (
    <main
      ref={rootRef}
      className={
        activePage === 'home'
          ? 'flex h-screen items-center justify-center overflow-hidden bg-white p-2'
          : 'min-h-screen bg-white px-8 py-6 text-stone-950'
      }
    >
      {isAssetsReady && activePage !== 'home' ? (
        <AppPageRouter
          activePage={activePage}
          projectsFilter={projectsFilter}
          projectsSearch={projectsSearch}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'projects' ? (
        <ProjectsPage
          activePage={activePage}
          initialFilter={projectsFilter}
          initialSearch={projectsSearch}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
          onOpenProject={(projectId) => {
            if (projectId === 'telefonica') {
              setActivePage('project-telefonica')
            }

            if (projectId === 'el-bosque') {
              setActivePage('project-el-bosque')
            }

            if (projectId === 'capilla') {
              setActivePage('project-capilla')
            }

            if (projectId === 'nave-16') {
              setActivePage('project-nave-16')
            }

            if (projectId === 'ufv') {
              setActivePage('project-ufv')
            }

            if (projectId === 'efimero') {
              setActivePage('project-efimero')
            }

            if (projectId === 'espacio-expositivo') {
              setActivePage('project-espacio-expositivo')
            }

            if (projectId === 'playground') {
              setActivePage('project-playground')
            }

            if (projectId === 'el-circulo') {
              setActivePage('project-el-circulo')
            }

            if (projectId === 'cartel-teatro') {
              setActivePage('project-cartel-teatro')
            }

            if (projectId === 'el-rastro') {
              setActivePage('project-el-rastro')
            }

            if (projectId === 'hargok') {
              setActivePage('project-hargok')
            }

            if (projectId === 'haz') {
              setActivePage('project-haz')
            }

            if (projectId === 'podcast') {
              setActivePage('project-podcast')
            }

            if (projectId === 'eneo') {
              setActivePage('project-eneo')
            }

            if (projectId === 'fiestas-locales') {
              setActivePage('project-fiestas-locales')
            }

            if (projectId === 'packaging') {
              setActivePage('project-packaging')
            }

            if (projectId === 'ilustraciones') {
              setActivePage('project-ilustraciones')
            }

            if (projectId === 'cross') {
              setActivePage('project-cross')
            }

            if (projectId === 'pg') {
              setActivePage('project-pg')
            }

            if (projectId === 'boat') {
              setActivePage('project-boat')
            }

            if (projectId === 'album-musical') {
              setActivePage('project-album-musical')
            }

            if (projectId === 'v-karting') {
              setActivePage('project-v-karting')
            }

            if (projectId === 'soldrink') {
              setActivePage('project-soldrink')
            }

            if (projectId === 'miteco') {
              setActivePage('project-miteco')
            }

            if (projectId === 'miteco-2') {
              setActivePage('project-miteco')
            }
          }}
        />
      ) : isAssetsReady && activePage === 'project-telefonica' ? (
        <TelefonicaProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-el-bosque' ? (
        <ElBosqueProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-capilla' ? (
        <CapillaProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-nave-16' ? (
        <Nave16ProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-ufv' ? (
        <UfvProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-efimero' ? (
        <EfimeroProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-espacio-expositivo' ? (
        <EspacioExpositivoProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-playground' ? (
        <PlaygroundProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-el-circulo' ? (
        <ElCirculoProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-cartel-teatro' ? (
        <CartelTeatroProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-el-rastro' ? (
        <ElRastroProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-hargok' ? (
        <HargokProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-haz' ? (
        <HazProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-podcast' ? (
        <PodcastProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-eneo' ? (
        <EneoProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-fiestas-locales' ? (
        <FiestasLocalesProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-packaging' ? (
        <PackagingProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-ilustraciones' ? (
        <IlustracionesProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-cross' ? (
        <CrossProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-pg' ? (
        <PgProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-boat' ? (
        <BoatProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-album-musical' ? (
        <AlbumMusicalProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-v-karting' ? (
        <VKartingProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-soldrink' ? (
        <SoldrinkProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'project-miteco' ? (
        <MitecoProjectPage
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'studio' ? (
        <StudioPage
          activePage={activePage}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'contact' ? (
        <ContactPage
          activePage={activePage}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'shop' ? (
        <ShopPage
          activePage={activePage}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady && activePage === 'academy' ? (
        <AcademyPage
          activePage={activePage}
          onBack={() => setActivePage('home')}
          onNavigate={handleNavigate}
        />
      ) : isAssetsReady ? (
        <section ref={sceneShellRef} className="scene-shell">
          <div className="scene-shell-content">
            <SceneArtboard
              backgroundSrc={FONDO_SRC}
              backgroundStretch={FONDO_STRETCH}
              bird={birdCharacter}
              building={leftBuildingLayer}
              cartela={cartelaLayer}
              streetLamp={streetLampLayer}
              businessCardOpen={isBusinessCardOpen}
              house={houseLayer}
              houseExtras={
                <img
                  ref={regaderaImageRef}
                  src={regaderaFrames[0]}
                  alt="Chica regando"
                  style={{ position: 'absolute', left: '50.8875%', top: '14.5111%', width: '3.575%', height: 'auto', maxWidth: 'none' }}
                />
              }
              hotspots={sceneHotspots}
              onNavigate={handleNavigate}
              onBackgroundLoad={handleBackgroundLoad}
              onCloseBusinessCard={() => setIsBusinessCardOpen(false)}
              onOpenContact={() => {
                setIsBusinessCardOpen(false)
                handleNavigate('contact')
              }}
              overlayCharacters={overlayCharacters}
              sceneStyle={sceneStyle}
              tree={treeCharacter}
              scaffold={hasEntered ? null : {
                ready: assetsLoaded,
                leaving: isScaffoldLeaving,
                label: assetsLoaded
                  ? (language === 'en' ? 'CLICK TO ENTER' : language === 'it' ? 'CLICCA PER ENTRARE' : 'PULSA PARA ENTRAR')
                  : `${language === 'en' ? 'LOADING' : language === 'it' ? 'CARICAMENTO' : 'CARGANDO'} ${loadingProgress} %`,
                onEnter: () => {
                  if (!assetsLoaded || isScaffoldLeaving) return
                  setIsScaffoldLeaving(true)
                  window.setTimeout(() => setHasEntered(true), 1500)
                },
              }}
              frameStyle={sceneFrameStyle}
              soundEnabled={soundEnabled}
              superTopCharacters={superTopCharacters}
              topCharacters={topCharacters}
              van={vanCharacter}
              onSetSoundEnabled={setSoundEnabled}
            />
          </div>
        </section>
      ) : (
        <div className="scene-loader" aria-live="polite">
          <div className="scene-loader-frame">
            <p className="scene-loader-kicker">M047</p>
            <div className="scene-loader-track">
              <div
                className="scene-loader-bar"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

