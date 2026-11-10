import { useLayoutEffect, useState } from 'react'

export function useSceneSize(sceneShellRef, sceneRatio, isSceneMounted) {
  const [sceneStyle, setSceneStyle] = useState({})

  useLayoutEffect(() => {
    if (!isSceneMounted) return undefined

    const updateSceneSize = () => {
      const shell = sceneShellRef.current
      if (!shell) return

      // Encaja el dibujo lo mas grande posible en la ventana, limitado por el
      // ancho o por el alto (lo que llegue antes), sin recortarlo.
      const availableWidth = shell.clientWidth - 4
      const availableHeight = shell.clientHeight - 4
      let targetHeight = Math.min(availableHeight, availableWidth / sceneRatio)
      // En pantallas muy pequenas mantiene un minimo y se puede desplazar.
      if (targetHeight * sceneRatio < 800) targetHeight = 800 / sceneRatio
      const roundedHeight = Math.max(Math.floor(targetHeight), 0)
      const roundedWidth = Math.floor(roundedHeight * sceneRatio)

      setSceneStyle({
        width: `${roundedWidth}px`,
        height: `${roundedHeight}px`,
        marginInline: 'auto',
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
  }, [isSceneMounted, sceneRatio, sceneShellRef])

  return sceneStyle
}
