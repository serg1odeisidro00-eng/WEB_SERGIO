import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import ContactForm from './ContactForm'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const contactGroups = [
  ['28047 Madrid', 'T. (+34) 633 878 755', 'contacto@m047.es'],
  ['CV - Portfolios:', 'info@m047.es'],
  ['Publicaciones y prensa:', 'info@m047.es'],
]

export default function ContactPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const contactCopy = language === 'es' ? contactGroups : language === 'it' ? [
    ['28047 Madrid', 'T. (+34) 633 878 755', 'contacto@m047.es'],
    ['CV - Portfolio:', 'info@m047.es'],
    ['Pubblicazioni e stampa:', 'info@m047.es'],
  ] : [
    ['28047 Madrid', 'T. (+34) 633 878 755', 'contacto@m047.es'],
    ['CV - Portfolios:', 'info@m047.es'],
    ['Publications and press:', 'info@m047.es'],
  ]

  return (
    <section className="projects-page contact-page">
      <PageHeader
        activePage={activePage}
        onBack={onBack}
        onNavigate={onNavigate}
      />

      <div className="contact-page-content">
        <img
          className="contact-page-image"
          src="/pages/img_contacto.png"
          alt=""
          aria-hidden="true"
        />

        <div className="contact-page-copy">
          <h1>Estudio M047</h1>

          <div className="contact-page-groups">
            {contactCopy.map((group, index) => (
              <div key={index} className="contact-page-group">
                {group.map((line) => (
                  line.includes('@') ? (
                    <a key={line} className="contact-page-email" href={`mailto:${line}`}>
                      {line}
                    </a>
                  ) : /633 878 755/.test(line) ? (
                    <a key={line} className="contact-page-email" href="tel:+34633878755">
                      {line}
                    </a>
                  ) : (
                    <p key={line}>{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm language={language} />

      <PageFooter />
    </section>
  )
}
