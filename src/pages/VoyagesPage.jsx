import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import DestinationCard from '../components/packages/DestinationCard'
import Button from '../components/ui/Button'
import CtaBand from '../components/sections/CtaBand'

export default function VoyagesPage() {
  const { t } = useLanguage()
  const { company, destinations } = useCompany()

  usePageMeta({
    title: t.voyages.title,
    description: t.voyages.subtitle,
    path: '/voyages',
  })

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.voyage)

  return (
    <>
      <PageHero
        title={t.voyages.title}
        subtitle={t.voyages.subtitle}
        badge={t.voyages.heroBadge}
        image="/images/dest-turkey.jpg"
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.voyages },
        ]}
      >
        <Button to="/booking?service=voyage" variant="gold" size="lg">
          {t.common.requestQuote}
        </Button>
        <Button href={wa} external variant="outlineLight" size="lg">
          <MessageCircle className="size-5" />
          WhatsApp
        </Button>
      </PageHero>

      <Section tone="default" tight>
        <p className="text-center text-sm text-ink-muted max-w-2xl mx-auto border border-dashed border-border rounded-xl px-5 py-3 bg-surface">
          {t.voyages.note}
        </p>
      </Section>

      <Section tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
