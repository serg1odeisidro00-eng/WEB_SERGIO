export default function SceneHotspot({
  ariaLabel,
  dialogueStyle,
  forceDialogue = false,
  isVisible = false,
  label,
  onClick,
  onPointerEnter,
  onPointerLeave,
  regions,
}) {
  // La primera zona de cada grupo tambien se puede usar con el teclado
  // (Tab para llegar, Intro o espacio para entrar).
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.(event)
    }
  }

  return (
    <div className={`scene-hotspot absolute inset-0${forceDialogue ? ' scene-hotspot--forced' : ''}`}>
      {regions.map((region, index) => (
        <div
          key={`${label ?? 'hotspot'}-${index}`}
          className={`scene-hotspot-region${isVisible ? ' scene-hotspot-region--visible' : ''}`}
          onClick={onClick}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          {...(index === 0 && onClick
            ? {
                role: 'link',
                tabIndex: 0,
                'aria-label': ariaLabel ?? label,
                onKeyDown: handleKeyDown,
                onFocus: onPointerEnter,
                onBlur: onPointerLeave,
              }
            : { 'aria-hidden': true })}
          style={region}
        />
      ))}
      {label ? (
        <div className="scene-hotspot-dialogue" style={dialogueStyle} aria-hidden="true">
          {label}
        </div>
      ) : null}
    </div>
  )
}
