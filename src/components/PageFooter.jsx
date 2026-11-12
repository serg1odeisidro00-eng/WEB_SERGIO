import { useLanguage } from '../context/LanguageContext'
import { useProjectNavigation } from '../context/ProjectNavigationContext'
import { pathForState } from '../lib/routes'

function FooterLegalLink({ pageId, label }) {
  const { navigateToPage } = useProjectNavigation()
  return (
    <a
      className="projects-page-footer-link is-muted"
      href={pathForState({ pageId })}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey) return
        event.preventDefault()
        navigateToPage(pageId)
      }}
    >
      {label}
    </a>
  )
}

export default function PageFooter() {
  const { language } = useLanguage()
  const copy = language === 'es' ? { location: '28047, Madrid, Espa\u00f1a', legal: 'Aviso legal', privacy: 'Pol\u00edtica de privacidad', cookies: 'Pol\u00edtica de cookies' } : language === 'it' ? { location: '28047, Madrid, Spagna', legal: 'Note legali', privacy: 'Informativa sulla privacy', cookies: 'Informativa sui cookie' } : { location: '28047, Madrid, Spain', legal: 'Legal notice', privacy: 'Privacy policy', cookies: 'Cookie policy' }
  return <footer className="projects-page-footer"><div className="projects-page-footer-left"><p className="projects-page-footer-title">ESTUDIO M047</p><p>{copy.location}</p><p><a className="projects-page-footer-link" href="tel:+34633878755">(+34) 633 878 755</a></p></div><div className="projects-page-footer-right"><a className="projects-page-footer-link" href="https://www.instagram.com/m047.studio/" target="_blank" rel="noreferrer">Instagram</a><a className="projects-page-footer-link" href="https://www.linkedin.com/in/m047/" target="_blank" rel="noreferrer">LinkedIn</a><a className="projects-page-footer-link" href="https://www.behance.net/M047" target="_blank" rel="noreferrer">Behance</a><FooterLegalLink pageId="legal" label={copy.legal} /><FooterLegalLink pageId="privacy" label={copy.privacy} /><FooterLegalLink pageId="cookies" label={copy.cookies} /></div></footer>
}
