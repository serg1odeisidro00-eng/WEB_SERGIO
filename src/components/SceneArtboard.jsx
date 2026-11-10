import SceneCharacter from './SceneCharacter'
import SceneHotspot from './SceneHotspot'
import SceneMenu from './SceneMenu'

export default function SceneArtboard({
  backgroundSrc,
  backgroundStretch = 1,
  building,
  businessCardOpen = false,
  frameStyle,
  bird,
  cartela,
  house,
  onNavigate,
  onBackgroundLoad,
  onCloseBusinessCard,
  onOpenContact,
  overlayCharacters,
  onSetSoundEnabled,
  hotspots = [],
  superTopCharacters = [],
  topCharacters = [],
  sceneStyle,
  soundEnabled,
  streetLamp,
  van,
}) {
  return (
    <div
      data-animate="frame"
      className="scene-frame relative overflow-hidden border-2 border-stone-500"
      style={frameStyle}
    >
    <div className="scene-artboard overflow-hidden" style={sceneStyle}>
      <img
        src={backgroundSrc}
        alt="Fondo base de la composicion"
        onLoad={onBackgroundLoad}
        className="scene-background absolute inset-0 h-full w-full object-fill"
        style={{ width: `${backgroundStretch * 100}%` }}
      />

      {streetLamp ? (
        // Same coordinate space as the background so it lines up with fondo.jpg.
        <div className="pointer-events-none absolute inset-0 z-[6]">
          <img
            src={streetLamp.src}
            alt={streetLamp.alt}
            className={streetLamp.className}
            style={streetLamp.style}
          />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-[110]">
        <SceneMenu
          onNavigate={onNavigate}
          soundEnabled={soundEnabled}
          onSetSoundEnabled={onSetSoundEnabled}
        />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-30 overflow-hidden">
        <SceneCharacter {...van} />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <SceneCharacter {...bird} />
      </div>

      <div className="scene-character-layer pointer-events-none absolute inset-0 z-50 overflow-visible">
        {superTopCharacters.map((character) => (
          <SceneCharacter key={character.id} {...character} />
        ))}
      </div>

      {cartela ? (
        <div className="pointer-events-none absolute inset-0 z-[55] overflow-visible">
          <img
            src={cartela.src}
            alt={cartela.alt}
            className={cartela.className}
            style={cartela.style}
          />
        </div>
      ) : null}

      <div className="scene-hotspots-layer absolute inset-0">
        {hotspots.map((hotspot) => (
          <SceneHotspot key={hotspot.id} {...hotspot} />
        ))}
      </div>

      <div className="scene-overlay absolute inset-0">
        <div className="scene-inner absolute inset-0">
          <div className="absolute inset-0 z-0 overflow-hidden"></div>

          <div className="scene-character-layer pointer-events-none absolute inset-0 z-20 overflow-hidden">
            {overlayCharacters.map((character) => (
              <SceneCharacter key={character.id} {...character} />
            ))}
          </div>

          <div className="scene-character-layer pointer-events-none absolute inset-0 z-40 overflow-visible">
            {topCharacters.map((character) => (
              <SceneCharacter key={character.id} {...character} />
            ))}
          </div>

          {building ? (
            <div className="pointer-events-none absolute inset-0 z-[5]">
              <img
                src={building.src}
                alt={building.alt}
                className={building.className}
                style={building.style}
              />
            </div>
          ) : null}

          <div className="pointer-events-none absolute inset-0 z-10">
            <img
              src={house.src}
              alt={house.alt}
              className={house.className}
              style={house.style}
            />
          </div>
        </div>
      </div>

      {businessCardOpen ? (
        <div
          className="scene-business-card-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Tarjeta de visita de M047"
        >
          <button
            type="button"
            className="scene-business-card-backdrop"
            aria-label="Cerrar tarjeta de visita"
            onClick={onCloseBusinessCard}
          />
          <button
            type="button"
            className="scene-business-card-content"
            aria-label="Ir a la página de contacto"
            onClick={onOpenContact}
          >
            <img src="/tarjeta_contacto.webp" width="2671" height="1027" alt="Tarjeta de contacto de M047: call me +34 633 878 755" />
          </button>
        </div>
      ) : null}
    </div>
    </div>
  )
}
