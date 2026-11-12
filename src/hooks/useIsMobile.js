import { useEffect, useState } from 'react'

// Version movil de la portada: pantallas estrechas (moviles en vertical).
export const MOBILE_QUERY = '(max-width: 700px)'

export function useIsMobile() {
  const get = () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  const [isMobile, setIsMobile] = useState(get)
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return isMobile
}
