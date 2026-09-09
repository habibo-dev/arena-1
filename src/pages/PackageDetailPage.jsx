import { useMemo, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  Clock,
  MapPin,
  Building2,
  Bus,
  Check,
  X,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import {
  getUmrahBySlug,
  getHajjBySlug,
  getDestinationBySlug,
} from '../data/packages'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Image from '../components/ui/Image'
import Accordion from '../components/ui/Accordion'
import BookingForm from '../components/forms/BookingForm'
import CtaBand from '../components/sections/CtaBand'

export default function PackageDetailPage({ type = 'omra' }) {
  const { slug } = useParams()
  const { t, lang, isRTL } = useLanguage()
  const { company, faqs } = useCompany()
  const L = useLocalized()

  const pkg = useMemo(() => {
    if (type === 'omra') return getUmrahBySlug(slug)
    if (type === 'hajj') return getHajjBySlug(slug)
    return getDestinationBySlug(slug)
  }, [slug, type])

  const [activeImage, setActiveImage] = useState(0)

  usePageMeta({
    title: pkg ? L(pkg.name) : t.notFound.title,
    description: pkg ? L(pkg.shortDescription || pkg.description) : '',
    path:
      type === 'omra'
        ? `/omra/${slug}`
        : type === 'hajj'
          ? `/hajj/${slug}`
          : `/voyages/${slug}`,
  })

  if (!pkg) return <Navigate to={type === 'voyage' ? '/voyages' : `/${type}`} replace />

  const gallery = pkg.gallery?.length ? pkg.gallery : [pkg.image]
  const included = L(pkg.included) || []
  const excluded = L(pkg.excluded) || []
  const itinerary = L(pkg.itinerary) || []
  const important = L(pkg.importantInfo) || []

  const parentLabel =
    type === 'omra' ? t.nav.omra : type === 'hajj' ? t.nav.hajj : t.nav.voyages
  const parentPath = type === 'voyage' || type === 'voyages' ? '/voyages' : `/${type}`

  const waMsg =
    typeof t.whatsapp.package === 'function'
      ? t.whatsapp.package(L(pkg.name))
      : t.whatsapp.default
  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, waMsg)

  const relatedFaqs = faqs
    .filter((f) =>
      type === 'omra'
        ? ['omra', 'booking', 'documents'].includes(f.category)
        : type === 'hajj'
          ? ['hajj', 'booking'].includes(f.category)
          : ['travel', 'booking'].includes(f.category),
    )
    .slice(0, 4)
    .map((f) => ({ id: f.id, question: L(f.question), answer: L(f.answer) }))

  const serviceValue = type === 'omra' ? 'omra' : type === 'hajj' ? 'hajj' : 'voyage'
  const Chevron = isRTL ? ChevronRight : ChevronLeft

  return (
    <>
      <PageHero
        title={L(pkg.name)}
        subtitle={L(pkg.shortDescription)}
        image={pkg.image}
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: parentLabel, to: parentPath },
          { label: L(pkg.name) },
        ]}
      >
        <Button
          type="button"
          variant="gold"
          size="lg"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {type === 'voyage' || type === 'voyages' ? t.common.requestQuote : t.common.requestPackage}
        </Button>
        <Button href={wa} external variant="outlineLight" size="lg">
          <MessageCircle className="size-5" />
          WhatsApp
        </Button>
      </PageHero>

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-card">
                <Image
                  src={gallery[activeImage]}
                  alt={`${L(pkg.name)} — ${activeImage + 1}`}
                  aspect="aspect-[16/10]"
                  priority
                />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        i === activeImage ? 'border-gold-500' : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                      aria-label={`${t.common.gallery} ${i + 1}`}
                    >
                      <Image src={src} alt="" aspect="aspect-auto absolute inset-0 size-full" className="!absolute inset-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="prose-tawars">
              <h2 className="font-display text-2xl text-forest-900 mb-3">
                {lang === 'ar' ? 'عن البرنامج' : 'À propos du programme'}
              </h2>
              <p className="text-ink-muted leading-relaxed">{L(pkg.description)}</p>
            </div>

            {/* Specs grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {pkg.duration && (
                <Spec icon={Clock} label={t.common.duration} value={L(pkg.duration)} />
              )}
              {(pkg.departureCity || pkg.departure) && (
                <Spec
                  icon={MapPin}
                  label={t.common.departure}
                  value={L(pkg.departureCity || pkg.departure)}
                />
              )}
              {pkg.hotel && (
                <Spec
                  icon={Building2}
                  label={t.common.hotel}
                  value={typeof pkg.hotel === 'object' && pkg.hotel.name ? L(pkg.hotel.name) : L(pkg.hotel)}
                />
              )}
              {(pkg.transport || pkg.flight) && (
                <Spec
                  icon={Bus}
                  label={t.common.transport}
                  value={L(pkg.transport || pkg.flight)}
                />
              )}
              {pkg.hotel?.distanceFromHaram && (
                <Spec
                  icon={MapPin}
                  label={t.common.distanceHaram}
                  value={L(pkg.hotel.distanceFromHaram)}
                  className="sm:col-span-2"
                />
              )}
            </div>

            {/* Included / Excluded */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-forest-100 bg-forest-50/50 p-5">
                <h3 className="font-semibold text-forest-900 mb-3 flex items-center gap-2">
                  <Check className="size-5 text-forest-700" aria-hidden />
                  {t.common.included}
                </h3>
                <ul className="space-y-2">
                  {(Array.isArray(included) ? included : []).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-muted">
                      <Check className="size-4 text-forest-600 shrink-0 mt-0.5" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-sand-100/60 p-5">
                <h3 className="font-semibold text-forest-900 mb-3 flex items-center gap-2">
                  <X className="size-5 text-ink-soft" aria-hidden />
                  {t.common.excluded}
                </h3>
                <ul className="space-y-2">
                  {(Array.isArray(excluded) ? excluded : []).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-muted">
                      <X className="size-4 text-ink-soft shrink-0 mt-0.5" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            {Array.isArray(itinerary) && itinerary.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-forest-900 mb-5">{t.common.itinerary}</h2>
                <ol className="relative space-y-0 border-s-2 border-gold-200 ms-3">
                  {itinerary.map((step, i) => (
                    <li key={i} className="relative ps-8 pb-8 last:pb-0">
                      <span className="absolute start-0 top-1 -translate-x-1/2 rtl:translate-x-1/2 size-3.5 rounded-full bg-gold-500 ring-4 ring-sand-50" />
                      <p className="text-xs font-bold tracking-wide text-gold-600 uppercase mb-1">
                        {step.day}
                      </p>
                      <h3 className="font-semibold text-forest-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Important */}
            {Array.isArray(important) && important.length > 0 && (
              <div className="rounded-2xl border border-gold-200 bg-gold-50/60 p-5 md:p-6">
                <h2 className="font-display text-xl text-forest-900 mb-3">{t.common.importantInfo}</h2>
                <ul className="space-y-2">
                  {important.map((item) => (
                    <li key={item} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                      <span className="text-gold-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedFaqs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-forest-900 mb-5">{t.nav.faq}</h2>
                <Accordion items={relatedFaqs} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                <p className="text-xs uppercase tracking-wide text-ink-soft mb-1">{t.common.price}</p>
                <p className="font-display text-3xl text-forest-900 mb-1">
                  {L(pkg.price?.display)}
                </p>
                {pkg.price?.note && (
                  <p className="text-xs text-ink-muted leading-relaxed mb-5">{L(pkg.price.note)}</p>
                )}
                {pkg.hotel?.category && (
                  <div className="mb-4">
                    <Badge tone="forest">{pkg.hotel.category}</Badge>
                  </div>
                )}
                <div className="flex flex-col gap-2.5">
                  <Button
                    type="button"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    onClick={() =>
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    {type === 'voyage' || type === 'voyages'
                      ? t.common.requestQuote
                      : t.common.requestPackage}
                  </Button>
                  <Button href={wa} external variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="size-5" />
                    WhatsApp
                  </Button>
                  <Button to={parentPath} variant="ghost" size="md" className="w-full">
                    <Chevron className="size-4" />
                    {t.common.back}
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="cream" id="booking">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-forest-900 text-center mb-2">
            {t.common.requestPackage}
          </h2>
          <p className="text-center text-ink-muted mb-8">{t.booking.subtitle}</p>
          <BookingForm
            initialValues={{
              service: serviceValue,
              destination: L(pkg.name),
            }}
          />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

function Spec({ icon: Icon, label, value, className = '' }) {
  return (
    <div className={`flex gap-3 rounded-xl border border-border bg-surface p-4 ${className}`}>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-800">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-ink-soft">{label}</p>
        <p className="text-sm font-semibold text-forest-900 leading-snug">{value}</p>
      </div>
    </div>
  )
}
