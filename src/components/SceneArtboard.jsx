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
  houseExtras = null,
  onNavigate,
  onBackgroundLoad,
  onCloseBusinessCard,
  onOpenContact,
  overlayCharacters,
  onSetSoundEnabled,
  hotspots = [],
  superTopCharacters = [],
  topCharacters = [],
  tree,
  scaffold,
  sceneStyle,
  soundEnabled,
  streetLamp,
  van,
}) {
  return (
    <div
      data-animate="frame"
      className={`scene-frame relative overflow-hidden border-2 border-black${scaffold && !scaffold.leaving ? ' is-loading' : ''}`}
      style={frameStyle}
    >
    <div className="scene-artboard overflow-hidden" style={sceneStyle}>
      <img
        src={backgroundSrc}
        alt="Fondo base de la composicion"
        onLoad={onBackgroundLoad}
        className="scene-background absolute inset-0 h-full w-full object-fill"
        style={{ width: `${backgroundStretch * 100}%`, maxWidth: "none", right: "auto" }}
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

      <div className="scene-menu-layer pointer-events-none absolute inset-0 z-[110]">
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
        <div ref={bird.ref} className="bird-flock" aria-hidden="true" />
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

      {scaffold ? (
        <>
          {/* Pantalla de carga: linea de tierra (en la portada va dentro de
              Casa.png, que esta oculta). Se mete por detras del andamio. */}
          <div className={`scene-loading-ground pointer-events-none absolute inset-0${scaffold.leaving ? ' is-leaving' : ''}`} style={{ zIndex: 51 }} aria-hidden="true">
            <div className="slg-line" style={{ left: 0, width: '45%', top: '83.15%', height: '0.14%' }} />
            <div className="slg-line" style={{ left: '60%', right: 0, top: '74.75%', height: '0.2%' }} />
          </div>
          <div className="scene-overlay pointer-events-none absolute z-[52]">
            <div className={`scene-scaffold${scaffold.leaving ? ' is-leaving' : ''}`}>
              <img className="scene-scaffold-img" src="/andamio.webp" alt="Fachada en obras con andamio: esta empresa no funciona pero es muy creativa" />
              <div className={`scene-scaffold-label${scaffold.ready ? ' is-ready' : ''}`}>{scaffold.label}</div>
            </div>
          </div>
          <button
            type="button"
            className={`scene-scaffold-catcher${scaffold.ready ? ' is-ready' : ''}`}
            aria-label={scaffold.label}
            onClick={scaffold.onEnter}
          />
        </>
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

          {tree ? (
            <div className="scene-character-layer scene-keep pointer-events-none absolute inset-0 z-[8] overflow-hidden">
              <SceneCharacter {...tree} />
            </div>
          ) : null}

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

          <div className="scene-house-layer pointer-events-none absolute inset-0 z-10">
            <img
              src={house.src}
              alt={house.alt}
              className={house.className}
              style={house.style}
            />
            {houseExtras ? (
              <div className={house.className} style={{ ...house.style, aspectRatio: '8000 / 4500' }}>
                {houseExtras}
              </div>
            ) : null}
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
