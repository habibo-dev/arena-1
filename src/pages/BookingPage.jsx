import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { getPackageBySlug } from '../data/packages'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import BookingForm from '../components/forms/BookingForm'
import ProcessSection from '../components/sections/ProcessSection'

export default function BookingPage() {
  const { t } = useLanguage()
  const L = useLocalized()
  const [params] = useSearchParams()

  const service = params.get('service') || ''
  const packageSlug = params.get('package') || ''
  const pkg = packageSlug ? getPackageBySlug(packageSlug) : null

  const initialValues = useMemo(
    () => ({
      service: ['omra', 'hajj', 'voyage', 'other'].includes(service) ? service : '',
      destination: pkg ? L(pkg.name) : '',
    }),
    [service, pkg, L],
  )

  usePageMeta({
    title: t.booking.title,
    description: t.booking.subtitle,
    path: '/booking',
  })

  return (
    <>
      <PageHero
        title={t.booking.title}
        subtitle={t.booking.subtitle}
        image="/images/omra-hero.jpg"
        compact
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.bookNow },
        ]}
      />

      <Section tone="default">
        <div className="max-w-3xl mx-auto">
          {pkg && (
            <p className="mb-6 text-center text-sm rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-forest-900">
              <span className="font-semibold">{L(pkg.name)}</span>
              {' — '}
              {L(pkg.shortDescription)}
            </p>
          )}
          <BookingForm initialValues={initialValues} />
        </div>
      </Section>

      <ProcessSection />
    </>
  )
}
