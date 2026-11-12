// Motor de sonido de la portada (Web Audio API).
//
// Por que asi y no con <audio>:
// - Los navegadores no dejan sonar nada hasta que el visitante toca, hace clic
//   o pulsa una tecla. Antes, si el primer intento fallaba, la musica no volvia
//   a intentarlo nunca. Aqui el contexto se "desbloquea" en la primera
//   interaccion y la musica arranca entonces.
// - El bucle de la musica es continuo (sin el pequeno corte de <audio loop>).
// - El timbre suena en el mismo reloj que la animacion, sin retrasos.

const AMBIENT_URL = '/sounds/ambiente_m047.mp3'
const RING_URL = '/sounds/telefono_timbre.mp3'
const AMBIENT_VOLUME = 0.18
const RING_VOLUME = 0.225
const UNLOCK_EVENTS = ['pointerdown', 'touchstart', 'touchend', 'keydown', 'click']
const SILENT_URL = '/sounds/silencio.mp3'
let silentElement = null

// iPhone: el sonido de la web (Web Audio) se calla con el interruptor de
// silencio del lateral. Reproducir un audio mudo con <audio> y marcar la sesion
// como "playback" hace que suene como un video, aunque el movil este en silencio.
function keepIosAudioSession() {
  try {
    if (navigator.audioSession) navigator.audioSession.type = 'playback'
  } catch {
    // navegador sin audioSession
  }
  if (silentElement) {
    if (silentElement.paused) silentElement.play().catch(() => {})
    return
  }
  silentElement = document.createElement('audio')
  silentElement.setAttribute('x-webkit-airplay', 'deny')
  silentElement.setAttribute('playsinline', '')
  silentElement.preload = 'auto'
  silentElement.loop = true
  silentElement.src = SILENT_URL
  silentElement.play().catch(() => {})
}

let context = null
let ambientGain = null
let ringGain = null
let ambientBuffer = null
let ringBuffer = null
let ambientSource = null
let ringSource = null
let wantsAmbient = false
let loadPromise = null
let ambientStartedAt = 0
let ambientLoopLength = 0

function getContext() {
  if (context) return context
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  context = new AudioContextClass()
  ambientGain = context.createGain()
  ambientGain.gain.value = 0
  ambientGain.connect(context.destination)
  ringGain = context.createGain()
  ringGain.gain.value = RING_VOLUME
  ringGain.connect(context.destination)
  return context
}

async function decode(url) {
  const ctx = getContext()
  const response = await fetch(url)
  const data = await response.arrayBuffer()
  return new Promise((resolve, reject) => {
    // Forma con callbacks: compatible con Safari antiguo.
    ctx.decodeAudioData(data, resolve, reject)
  })
}

// Recorta el silencio que el formato MP3 anade al principio y al final,
// para que el bucle empalme justo donde termina la musica.
function getLoopBounds(buffer) {
  const channel = buffer.getChannelData(0)
  const threshold = 1e-4
  let start = 0
  while (start < channel.length && Math.abs(channel[start]) < threshold) start += 1
  let end = channel.length - 1
  while (end > start && Math.abs(channel[end]) < threshold) end -= 1
  return { loopStart: start / buffer.sampleRate, loopEnd: (end + 1) / buffer.sampleRate }
}

export function loadSceneAudio() {
  if (loadPromise) return loadPromise
  if (!getContext()) return Promise.resolve()
  loadPromise = Promise.all([
    decode(AMBIENT_URL).then((buffer) => { ambientBuffer = buffer }),
    decode(RING_URL).then((buffer) => { ringBuffer = buffer }),
  ])
    .then(() => {
      if (wantsAmbient) startAmbientNow()
    })
    .catch(() => {})
  return loadPromise
}

function isRunning() {
  return context && context.state === 'running'
}

function startAmbientNow() {
  if (!isRunning() || !ambientBuffer || ambientSource) return
  const { loopStart, loopEnd } = getLoopBounds(ambientBuffer)
  ambientSource = context.createBufferSource()
  ambientSource.buffer = ambientBuffer
  ambientSource.loop = true
  ambientSource.loopStart = loopStart
  ambientSource.loopEnd = loopEnd
  ambientSource.connect(ambientGain)
  ambientSource.start(0, loopStart)
  ambientStartedAt = context.currentTime
  ambientLoopLength = loopEnd - loopStart
  const now = context.currentTime
  ambientGain.gain.cancelScheduledValues(now)
  ambientGain.gain.setValueAtTime(ambientGain.gain.value, now)
  ambientGain.gain.linearRampToValueAtTime(AMBIENT_VOLUME, now + 1.2)
}

export function setAmbientPlaying(shouldPlay) {
  wantsAmbient = shouldPlay
  if (!context) return
  if (shouldPlay) {
    if (context.state !== 'running') return // se arrancara al desbloquear
    startAmbientNow()
    return
  }
  if (!ambientSource) return
  const source = ambientSource
  ambientSource = null
  const now = context.currentTime
  ambientGain.gain.cancelScheduledValues(now)
  ambientGain.gain.setValueAtTime(ambientGain.gain.value, now)
  ambientGain.gain.linearRampToValueAtTime(0, now + 0.4)
  try {
    source.stop(now + 0.45)
  } catch {
    // ya parado
  }
}

export function playRing(onEnded) {
  if (!isRunning() || !ringBuffer) return false
  stopRing()
  ringSource = context.createBufferSource()
  ringSource.buffer = ringBuffer
  ringSource.connect(ringGain)
  ringGain.gain.cancelScheduledValues(context.currentTime)
  ringGain.gain.setValueAtTime(RING_VOLUME, context.currentTime)
  const source = ringSource
  source.onended = () => {
    if (ringSource === source) ringSource = null
    onEnded?.()
  }
  source.start()
  return true
}

export function stopRing() {
  if (!ringSource || !context) return
  const source = ringSource
  ringSource = null
  source.onended = null
  const now = context.currentTime
  ringGain.gain.cancelScheduledValues(now)
  ringGain.gain.setValueAtTime(ringGain.gain.value, now)
  ringGain.gain.linearRampToValueAtTime(0, now + 0.15)
  try {
    source.stop(now + 0.2)
  } catch {
    // ya parado
  }
}

function unlock() {
  const ctx = getContext()
  if (!ctx) return
  keepIosAudioSession()
  loadSceneAudio()
  const resumed = ctx.state === 'running' ? Promise.resolve() : ctx.resume()
  resumed
    .then(() => {
      if (ctx.state !== 'running') return
      UNLOCK_EVENTS.forEach((type) => window.removeEventListener(type, unlock, true))
      if (wantsAmbient) startAmbientNow()
    })
    .catch(() => {})
}

let installed = false
export function installAudioUnlock() {
  if (installed || typeof window === 'undefined') return
  installed = true
  UNLOCK_EVENTS.forEach((type) => window.addEventListener(type, unlock, true))
  // Si el navegador ya lo permite (por ejemplo, al volver de otra pagina), arranca solo.
  unlock()
  // Pausa el sonido si la pestana se oculta y lo retoma al volver.
  document.addEventListener('visibilitychange', () => {
    if (!context) return
    if (document.hidden) {
      context.suspend().catch(() => {})
      silentElement?.pause()
    } else {
      silentElement?.play().catch(() => {})
      context.resume().then(() => { if (wantsAmbient) startAmbientNow() }).catch(() => {})
    }
  })
}

// Solo en desarrollo: permite comprobar el estado del sonido en las pruebas.
if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.__m047Audio = () => ({
    state: context?.state ?? 'none',
    ambientLoaded: Boolean(ambientBuffer),
    ambientPlaying: Boolean(ambientSource),
    ringPlaying: Boolean(ringSource),
  })
}

// Segundo de la pista ambiente que esta sonando ahora (null si no suena).
export function getAmbientPosition() {
  if (!isRunning() || !ambientSource || !ambientLoopLength) return null
  return (context.currentTime - ambientStartedAt) % ambientLoopLength
}

// true si el navegador ya deja sonar audio (no hace falta el boton Entrar).
export function isAudioUnlocked() {
  return Boolean(context && context.state === 'running')
}
