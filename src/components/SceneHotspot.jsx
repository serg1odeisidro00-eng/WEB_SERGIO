export default function SceneHotspot({
  dialogueStyle,
  forceDialogue = false,
  isVisible = false,
  label,
  onClick,
  onPointerEnter,
  onPointerLeave,
  regions,
}) {
  return (
    <div className={`scene-hotspot absolute inset-0${forceDialogue ? ' scene-hotspot--forced' : ''}`}>
      {regions.map((region, index) => (
        <div
          key={`${label ?? 'hotspot'}-${index}`}
          className={`scene-hotspot-region${isVisible ? ' scene-hotspot-region--visible' : ''}`}
          onClick={onClick}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          style={region}
        />
      ))}
      {label ? (
        <div className="scene-hotspot-dialogue" style={dialogueStyle}>
          {label}
        </div>
      ) : null}
    </div>
  )
}
