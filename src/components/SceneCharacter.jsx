import { forwardRef } from 'react'

function SceneCharacter(
  {
    alt,
    anchorClassName,
    bubbleClassName = 'character-dialogue',
    bubbleRef = null,
    bubbleText = '',
    className = '',
    extra = null,
    imageClassName,
    imageRef,
    src,
    style,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`${anchorClassName}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {bubbleText ? (
        <div ref={bubbleRef} className={bubbleClassName}>
          {bubbleText}
        </div>
      ) : null}
      <img ref={imageRef} src={src} alt={alt} className={imageClassName} />
      {extra}
    </div>
  )
}

const ForwardedSceneCharacter = forwardRef(SceneCharacter)

export default ForwardedSceneCharacter
