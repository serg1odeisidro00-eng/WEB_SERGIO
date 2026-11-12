import { useLayoutEffect, useState } from 'react'

// Recorte del dibujo (fracciones de su alto): 5 % de cielo vacio arriba y la
// franja blanca de abajo hasta dejar ~22 px de aire bajo el rellano del sotano
// (version E elegida por Sergio, 10-nov-2026).
export const SCENE_CROP_TOP = 0.05
export const SCENE_CROP_BOTTOM = 0.0312
const VISIBLE_FRACTION = 1 - SCENE_CROP_TOP - SCENE_CROP_BOTTOM
const FRAME_BORDER = 2

// Movil: solo el edificio, de borde a borde (fracciones del dibujo completo).
// Elegido por Sergio en la maqueta "Mezcla A + D" (12-nov-2026).
export const MOBILE_CROP = { left: 0.3144, right: 0.678, top: 0, bottom: 0.962 }

export function useSceneSize(sceneShellRef, sceneRatio, isSceneMounted, isMobile = false) {
  const [sizes, setSizes] = useState({ frameStyle: {}, sceneStyle: {} })

  useLayoutEffect(() => {
    if (!isSceneMounted) return undefined

    const updateSceneSize = () => {
      const shell = sceneShellRef.current
      if (!shell) return

      if (isMobile) {
        const frameWidth = shell.clientWidth
        const innerWidth = frameWidth - FRAME_BORDER * 2
        const sceneWidth = Math.round(innerWidth / (MOBILE_CROP.right - MOBILE_CROP.left))
        const sceneHeight = Math.round(sceneWidth / sceneRatio)
        const frameHeight = Math.round(sceneHeight * (MOBILE_CROP.bottom - MOBILE_CROP.top))
        setSizes({
          frameStyle: { width: `${frameWidth}px`, height: `${frameHeight + FRAME_BORDER * 2}px` },
          sceneStyle: {
            position: 'absolute',
            left: `${-Math.round(sceneWidth * MOBILE_CROP.left)}px`,
            top: `${-Math.round(sceneHeight * MOBILE_CROP.top)}px`,
            width: `${sceneWidth}px`,
            height: `${sceneHeight}px`,
          },
        })
        return
      }

      // Encaja la parte visible del dibujo lo mas grande posible en la
      // ventana, limitada por el ancho o por el alto (lo que llegue antes).
      const visibleRatio = sceneRatio / VISIBLE_FRACTION
      const availableWidth = shell.clientWidth - 4 - FRAME_BORDER * 2
      const availableHeight = shell.clientHeight - 4 - FRAME_BORDER * 2
      let visibleHeight = Math.min(availableHeight, availableWidth / visibleRatio)
      // En pantallas muy pequenas mantiene un minimo y se puede desplazar.
      if (visibleHeight * visibleRatio < 800) visibleHeight = 800 / visibleRatio

      const sceneHeight = Math.floor(visibleHeight / VISIBLE_FRACTION)
      const sceneWidth = Math.floor(sceneHeight * sceneRatio)
      const frameHeight = Math.floor(sceneHeight * VISIBLE_FRACTION)

      setSizes({
        frameStyle: {
          width: `${sceneWidth + FRAME_BORDER * 2}px`,
          height: `${frameHeight + FRAME_BORDER * 2}px`,
          marginInline: 'auto',
        },
        sceneStyle: {
          position: 'absolute',
          left: 0,
          top: `${-Math.round(sceneHeight * SCENE_CROP_TOP)}px`,
          width: `${sceneWidth}px`,
          height: `${sceneHeight}px`,
        },
      })
    }

    // The shell is created after the loader, so measure on the next frame too.
    updateSceneSize()
    const frameId = window.requestAnimationFrame(updateSceneSize)
    const resizeObserver = new ResizeObserver(updateSceneSize)
    const shell = sceneShellRef.current
    if (shell) resizeObserver.observe(shell)
    window.addEventListener('resize', updateSceneSize)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateSceneSize)
    }
  }, [isMobile, isSceneMounted, sceneRatio, sceneShellRef])

  return sizes
}
