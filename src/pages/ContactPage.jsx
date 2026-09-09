import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import BookingForm from '../components/forms/BookingForm'
import Button from '../components/ui/Button'

export default function ContactPage() {
  const { t } = useLanguage()
  const { company } = useCompany()
  const L = useLocalized()

  usePageMeta({
    title: t.contact.title,
    description: t.contact.subtitle,
    path: '/contact',
  })

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)
  const info = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: L(company.location.address),
      href: company.location.mapsSearchUrl,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: company.contact.phone.display,
      href: `tel:${company.contact.phone.tel}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: company.contact.whatsapp.display,
      href: wa,
      external: true,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: L(company.contact.hours),
      hint: L(company.contact.hoursNote),
    },
  ]

  return (
    <>
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image="/images/about-agency.jpg"
        compact
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.contact },
        ]}
      />

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-2xl text-forest-900 mb-2">{t.contact.infoTitle}</h2>
            <p className="text-xs text-ink-soft mb-4">{t.contact.note}</p>
            {info.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-soft">{item.label}</span>
                    <span className="block text-sm font-semibold text-forest-900 break-words">
                      {item.value}
                    </span>
                    {item.hint && (
                      <span className="block text-xs text-ink-muted mt-1 leading-relaxed">
                        {item.hint}
                      </span>
                    )}
                  </span>
                </>
              )
              const cls =
                'flex gap-3 rounded-xl border border-border bg-surface p-4 shadow-soft transition-colors hover:border-gold-300'
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={cls}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={cls}>
                  {content}
                </div>
              )
            })}

            <div className="pt-2">
              <Button href={wa} external variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="size-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-forest-900 mb-1">{t.contact.formTitle}</h2>
            <p className="text-sm text-ink-muted mb-5">{t.contact.formSubtitle}</p>
            <BookingForm />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <h2 className="font-display text-2xl text-forest-900 mb-5 text-center">{t.contact.map}</h2>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/9] md:aspect-[21/9] bg-sand-200">
          <iframe
            title={t.contact.map}
            src={company.location.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-center text-xs text-ink-soft">
          <a
            href={company.location.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-forest-800"
          >
            {L(company.location.address)} — Google Maps
          </a>
        </p>
      </Section>
    </>
  )
}
