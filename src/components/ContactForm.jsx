import { useState } from 'react'
import { CONTACT_EMAIL, WHATSAPP_NUMBER, contactFormCopy, contactProjectTypes } from '../content/contact'

const emptyForm = { name: '', email: '', phone: '', type: '', message: '' }
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

// Formulario sencillo con el mismo estilo que el de Academia.
export default function ContactForm({ language }) {
  const copy = contactFormCopy[language] ?? contactFormCopy.es
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSent, setIsSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = copy.errors.required
    if (!form.email.trim()) nextErrors.email = copy.errors.required
    else if (!isEmail(form.email)) nextErrors.email = copy.errors.email
    if (!form.message.trim()) nextErrors.message = copy.errors.required
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const type = contactProjectTypes.find((item) => item.id === form.type)
    const t = copy.mail
    const body = [
      t.intro,
      '',
      `${t.name}: ${form.name.trim()}`,
      `${t.email}: ${form.email.trim()}`,
      form.phone.trim() ? `${t.phone}: ${form.phone.trim()}` : null,
      type ? `${t.type}: ${type.es}` : null,
      '',
      `${t.message}:`,
      form.message.trim(),
    ].filter((line) => line !== null).join('\n')
    const subject = `${t.subject}${type ? ` · ${type.es}` : ''} · ${form.name.trim()}`
    setIsSent(true)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.whatsappText)}`

  const field = (name, label, props = {}) => (
    <label className={`academy-field${errors[name] ? ' has-error' : ''}`}>
      <span className="academy-field-label">{label}</span>
      <input value={form[name]} onChange={update(name)} aria-invalid={Boolean(errors[name])} {...props} />
      {errors[name] ? <span className="academy-field-error">{errors[name]}</span> : null}
    </label>
  )

  return (
    <section className="contact-cta academy" aria-labelledby="contact-cta-title">
      <h2 id="contact-cta-title" className="academy-heading">{copy.title}</h2>
      <hr className="academy-dashes" />

      {isSent ? (
        <div className="academy-sent" role="status">
          <p className="academy-sent-title">{copy.sent.title}</p>
          <p>{copy.sent.body}</p>
          <p className="academy-muted">
            {copy.sent.fallback} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <div className="academy-sent-actions">
            <a className="academy-button" href={whatsappHref} target="_blank" rel="noreferrer">{copy.whatsapp}</a>
            <button type="button" className="academy-link-button" onClick={() => setIsSent(false)}>{copy.sent.back}</button>
          </div>
        </div>
      ) : (
        <form className="academy-form" onSubmit={submit} noValidate>
          {field('name', copy.fields.name, { autoComplete: 'name', required: true })}
          {field('email', copy.fields.email, { type: 'email', autoComplete: 'email', required: true })}
          {field('phone', copy.fields.phone, { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}

          <fieldset className="academy-modes">
            <legend className="academy-field-label">{copy.fields.type}</legend>
            <div className="academy-modes-options">
              {contactProjectTypes.map((item) => (
                <label key={item.id} className={`academy-mode${form.type === item.id ? ' is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="contact-type"
                    value={item.id}
                    checked={form.type === item.id}
                    onChange={() => setForm((current) => ({ ...current, type: item.id }))}
                  />
                  {item[language] ?? item.es}
                </label>
              ))}
            </div>
          </fieldset>

          <label className={`academy-message${errors.message ? ' has-error' : ''}`}>
            <span className="academy-field-label">{copy.fields.message}</span>
            <textarea value={form.message} onChange={update('message')} rows={5} aria-invalid={Boolean(errors.message)} />
            {errors.message ? <span className="academy-field-error">{errors.message}</span> : null}
          </label>

          <div className="academy-submit">
            {Object.values(errors).some(Boolean) ? (
              <p className="academy-field-error" role="alert">{copy.errors.summary}</p>
            ) : null}
            <div className="contact-cta-actions">
              <button type="submit" className="academy-button">{copy.submit}</button>
              <a className="academy-button" href={whatsappHref} target="_blank" rel="noreferrer">{copy.whatsapp}</a>
            </div>
            <p className="academy-note">{copy.note}</p>
          </div>
        </form>
      )}
    </section>
  )
}
