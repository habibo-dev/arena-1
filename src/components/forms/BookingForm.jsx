import { useState } from 'react'
import { CheckCircle2, MessageCircle, Loader2 } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { emptyBookingForm, validateBookingForm } from '../../utils/validation'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Field, Input, Textarea, Select } from '../ui/Input'
import Button from '../ui/Button'

/**
 * Client-side inquiry form.
 * Stores submissions in localStorage as a demo backend stand-in.
 * Does not process payments.
 */
export function BookingForm({
  initialValues = {},
  compact = false,
  onSuccess,
  className = '',
}) {
  const { t, lang } = useLanguage()
  const { company, umrahPackages, destinations } = useCompany()
  const L = useLocalized()
  const [values, setValues] = useState({ ...emptyBookingForm, ...initialValues })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const packageOptions = [
    ...umrahPackages.map((p) => ({ value: L(p.name), id: p.slug })),
    ...destinations.map((d) => ({ value: L(d.name), id: d.slug })),
  ]

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validateBookingForm(values, t)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      // Simulate network + persist demo inquiry
      await new Promise((r) => setTimeout(r, 700))
      const inquiry = {
        id: `inq_${Date.now()}`,
        ...values,
        lang,
        createdAt: new Date().toISOString(),
        status: 'new',
      }
      const key = 'tawars_inquiries'
      const prev = JSON.parse(window.localStorage.getItem(key) || '[]')
      prev.unshift(inquiry)
      window.localStorage.setItem(key, JSON.stringify(prev.slice(0, 50)))
      setSuccess(true)
      onSuccess?.(inquiry)
    } catch {
      setErrors({ form: t.common.error })
    } finally {
      setSubmitting(false)
    }
  }

  function reset() {
    setValues({ ...emptyBookingForm, ...initialValues })
    setErrors({})
    setSuccess(false)
  }

  const waMessage =
    lang === 'ar'
      ? `السلام عليكم، أرسلت طلبًا عبر الموقع.\nالاسم: ${values.fullName}\nالخدمة: ${values.service}\nالوجهة: ${values.destination || '—'}`
      : `Bonjour, j’ai envoyé une demande via le site.\nNom : ${values.fullName}\nService : ${values.service}\nDestination : ${values.destination || '—'}`

  const waHref = buildWhatsAppUrl(company.contact.whatsapp.number, waMessage)

  if (success) {
    return (
      <div
        className={`rounded-2xl border border-forest-100 bg-forest-50 p-8 text-center ${className}`}
        role="status"
      >
        <CheckCircle2 className="size-14 text-forest-700 mx-auto mb-4" aria-hidden />
        <h3 className="font-display text-2xl text-forest-900 mb-2">{t.booking.successTitle}</h3>
        <p className="text-ink-muted mb-6 max-w-md mx-auto">{t.booking.successText}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={waHref} external variant="whatsapp">
            <MessageCircle className="size-5" />
            {t.booking.successWhatsapp}
          </Button>
          <Button variant="outline" onClick={reset}>
            {t.booking.another}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-2xl border border-border bg-surface p-5 md:p-8 shadow-soft ${className}`}
    >
      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        <Field label={t.form.fullName} htmlFor="fullName" required error={errors.fullName}>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder={t.form.placeholderName}
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            error={errors.fullName}
          />
        </Field>

        <Field label={t.form.phone} htmlFor="phone" required error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={t.form.placeholderPhone}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            error={errors.phone}
          />
        </Field>

        <Field label={t.form.whatsapp} htmlFor="whatsapp" error={errors.whatsapp}>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder={t.form.placeholderPhone}
            value={values.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
          />
        </Field>

        <Field label={t.form.email} htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.form.placeholderEmail}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            error={errors.email}
          />
        </Field>

        <Field label={t.form.service} htmlFor="service" required error={errors.service}>
          <Select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
            error={errors.service}
          >
            <option value="">—</option>
            <option value="omra">{t.form.serviceOptions.omra}</option>
            <option value="hajj">{t.form.serviceOptions.hajj}</option>
            <option value="voyage">{t.form.serviceOptions.voyage}</option>
            <option value="other">{t.form.serviceOptions.other}</option>
          </Select>
        </Field>

        <Field label={t.form.destination} htmlFor="destination">
          <Input
            id="destination"
            name="destination"
            list="destination-suggestions"
            placeholder={t.form.placeholderDestination}
            value={values.destination}
            onChange={(e) => update('destination', e.target.value)}
          />
          <datalist id="destination-suggestions">
            {packageOptions.map((o) => (
              <option key={o.id} value={o.value} />
            ))}
          </datalist>
        </Field>

        <Field label={t.form.travelers} htmlFor="travelers" required error={errors.travelers}>
          <Input
            id="travelers"
            name="travelers"
            type="number"
            min={1}
            max={50}
            value={values.travelers}
            onChange={(e) => update('travelers', e.target.value)}
            error={errors.travelers}
          />
        </Field>

        <Field label={t.form.date} htmlFor="date">
          <Input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </Field>

        <Field
          label={t.form.message}
          htmlFor="message"
          className={compact ? '' : 'md:col-span-2'}
        >
          <Textarea
            id="message"
            name="message"
            placeholder={t.form.placeholderMessage}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            rows={4}
          />
        </Field>
      </div>

      {errors.form && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {errors.form}
        </p>
      )}

      <p className="mt-4 text-xs text-ink-soft leading-relaxed">{t.form.privacy}</p>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <Button type="submit" variant="gold" size="lg" disabled={submitting} className="sm:min-w-[12rem]">
          {submitting ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden />
              {t.common.loading}
            </>
          ) : (
            t.common.sendRequest
          )}
        </Button>
        <Button href={waHref} external variant="whatsapp" size="lg">
          <MessageCircle className="size-5" />
          WhatsApp
        </Button>
      </div>
    </form>
  )
}

export default BookingForm
