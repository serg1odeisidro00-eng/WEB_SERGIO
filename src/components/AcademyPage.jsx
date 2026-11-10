import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ACADEMY_EMAIL, academyCopy, academyFormats } from '../content/academy'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const emptyForm = { name: '', email: '', area: '', year: '', link: '', mode: '', message: '' }
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

function buildMail(copy, form) {
  const mode = academyFormats.find((format) => format.code === form.mode)
  const t = copy.mail
  const lines = [
    t.intro,
    '',
    `${t.name}: ${form.name.trim()}`,
    `${t.email}: ${form.email.trim()}`,
    form.area.trim() ? `${t.area}: ${form.area.trim()}` : null,
    form.year.trim() ? `${t.year}: ${form.year.trim()}` : null,
    mode ? `${t.mode}: [${mode.code}] ${mode.name.es}` : null,
    form.link.trim() ? `${t.link}: ${form.link.trim()}` : null,
    '',
    `${t.message}:`,
    form.message.trim(),
  ].filter((line) => line !== null)
  const subject = `${t.subject}${mode ? ` · [${mode.code}]` : ''} · ${form.name.trim()}`
  return { subject, body: lines.join('\n') }
}

function AcademyForm({ copy, language }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sentMail, setSentMail] = useState(null)
  const [copied, setCopied] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const chooseMode = (code) => {
    setForm((current) => ({ ...current, mode: code }))
    setErrors((current) => ({ ...current, mode: undefined }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = copy.errors.required
    if (!form.email.trim()) nextErrors.email = copy.errors.required
    else if (!isEmail(form.email)) nextErrors.email = copy.errors.email
    if (!form.mode) nextErrors.mode = copy.errors.mode
    if (!form.message.trim()) nextErrors.message = copy.errors.required
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const mail = buildMail(copy, form)
    setSentMail(mail)
    setCopied(false)
    window.location.href = `mailto:${ACADEMY_EMAIL}?subject=${encodeURIComponent(mail.subject)}&body=${encodeURIComponent(mail.body)}`
  }

  const copyRequest = async () => {
    if (!sentMail) return
    try {
      await navigator.clipboard.writeText(`${sentMail.subject}\n\n${sentMail.body}`)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (sentMail) {
    return (
      <div className="academy-sent" role="status">
        <p className="academy-sent-title">{copy.sent.title}</p>
        <p>{copy.sent.body}</p>
        <p className="academy-muted">
          {copy.sent.fallback} <a href={`mailto:${ACADEMY_EMAIL}`}>{ACADEMY_EMAIL}</a>
        </p>
        <div className="academy-sent-actions">
          <button type="button" className="academy-button" onClick={copyRequest}>
            {copied ? copy.sent.copied : copy.sent.copy}
          </button>
          <button type="button" className="academy-link-button" onClick={() => setSentMail(null)}>
            {copy.sent.back}
          </button>
        </div>
      </div>
    )
  }

  const field = (name, label, props = {}) => (
    <label className={`academy-field academy-field--${name}${errors[name] ? ' has-error' : ''}`}>
      <span className="academy-field-label">{label}</span>
      <input value={form[name]} onChange={update(name)} aria-invalid={Boolean(errors[name])} {...props} />
      {errors[name] ? <span className="academy-field-error">{errors[name]}</span> : null}
    </label>
  )

  return (
    <form className="academy-form" onSubmit={submit} noValidate>
      {field('name', copy.fields.name, { autoComplete: 'name', required: true })}
      {field('email', copy.fields.email, { type: 'email', autoComplete: 'email', required: true })}
      <div className="academy-form-row">
        {field('area', copy.fields.area)}
        {field('year', copy.fields.year)}
      </div>
      {field('link', copy.fields.link, { type: 'url', inputMode: 'url', placeholder: 'https://' })}

      <fieldset className={`academy-modes${errors.mode ? ' has-error' : ''}`}>
        <legend className="academy-field-label">{copy.fields.mode}</legend>
        <div className="academy-modes-options">
          {academyFormats.map((format) => (
            <label key={format.code} className={`academy-mode${form.mode === format.code ? ' is-selected' : ''}`}>
              <input
                type="radio"
                name="academy-mode"
                value={format.code}
                checked={form.mode === format.code}
                onChange={() => chooseMode(format.code)}
              />
              [{format.code}] {format.shortName[language]}
            </label>
          ))}
        </div>
        {errors.mode ? <span className="academy-field-error">{errors.mode}</span> : null}
      </fieldset>

      <label className={`academy-message${errors.message ? ' has-error' : ''}`}>
        <span className="academy-field-label">{copy.fields.message}</span>
        <textarea value={form.message} onChange={update('message')} rows={5} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <span className="academy-field-error">{errors.message}</span> : null}
      </label>

      <div className="academy-submit">
        {Object.keys(errors).some((key) => errors[key]) ? (
          <p className="academy-field-error" role="alert">{copy.errors.summary}</p>
        ) : null}
        <button type="submit" className="academy-button">{copy.submit}</button>
        <p className="academy-note">{copy.note}</p>
      </div>
    </form>
  )
}

export default function AcademyPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const copy = academyCopy[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="projects-page academy-page" lang={language}>
      <PageHeader activePage={activePage} onBack={onBack} onNavigate={onNavigate} />

      <div className="academy">
        <h1 className="academy-section-title">{copy.section}</h1>
        <hr className="academy-rule" />

        <div className="academy-intro">
          <div className="academy-intro-copy">
            <p className="academy-claim">{copy.claim[0]}<br />{copy.claim[1]}</p>
            <p className="academy-claim">{copy.claim2[0]}<br />{copy.claim2[1]}</p>
            {copy.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="academy-justified">{paragraph}</p>
            ))}
          </div>
          <img
            className="academy-intro-image"
            src="/pages/academia_aula.webp"
            width="1800"
            height="1147"
            alt={copy.imageAlt}
          />
        </div>

        <p className="academy-areas">
          <span className="academy-areas-label">{copy.areasLabel}</span>
          {copy.areas.map((area, index) => (
            <span key={area}>
              {index > 0 ? <span className="academy-dot" aria-hidden="true">·</span> : null}
              {area}
            </span>
          ))}
        </p>
        <hr className="academy-rule" />

        <div className="academy-table" role="table">
          <div className="academy-table-head" role="row">
            <span role="columnheader">{copy.table.code}</span>
            <span role="columnheader">{copy.table.format}</span>
            <span role="columnheader">{copy.table.focus}</span>
            <span role="columnheader">{copy.table.time}</span>
          </div>
          {academyFormats.map((format) => (
            <div key={format.code} className="academy-table-row" role="row">
              <span role="cell" className="academy-code">[{format.code}]</span>
              <span role="cell" className="academy-format">{format.name[language]}</span>
              <span role="cell" className="academy-focus">
                {format.focus[language][0]}<br />{format.focus[language][1]}
              </span>
              <span role="cell" className="academy-time">
                {format.time[language][0]}<br />{format.time[language][1]}
              </span>
            </div>
          ))}
        </div>
        <p className="academy-prices">{copy.prices}</p>

        <h2 className="academy-heading">{copy.methodTitle}</h2>
        <hr className="academy-rule" />
        <div className="academy-method">
          {copy.method.map(([title, text]) => (
            <div key={title} className="academy-method-item">
              <p className="academy-method-title">* {title}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <h2 className="academy-heading">{copy.formTitle}</h2>
        <hr className="academy-dashes" />
        <AcademyForm copy={copy} language={language} />
      </div>

      <PageFooter />
    </section>
  )
}
