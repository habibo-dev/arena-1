import { MessageCircle } from 'lucide-react'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import PackageCard from '../components/packages/PackageCard'
import Button from '../components/ui/Button'
import ProcessSection from '../components/sections/ProcessSection'
import CtaBand from '../components/sections/CtaBand'
import Accordion from '../components/ui/Accordion'

export default function OmraPage() {
  const { t, lang } = useLanguage()
  const { company, umrahPackages, faqs } = useCompany()
  const L = useLocalized()

  usePageMeta({
    title: t.omra.title,
    description: t.omra.subtitle,
    path: '/omra',
  })

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.omra)
  const omraFaqs = faqs
    .filter((f) => ['omra', 'booking', 'documents', 'payment'].includes(f.category))
    .slice(0, 6)
    .map((f) => ({ id: f.id, question: L(f.question), answer: L(f.answer) }))

  return (
    <>
      <PageHero
        title={t.omra.title}
        subtitle={t.omra.subtitle}
        badge={t.omra.heroBadge}
        image="/images/omra-hero.jpg"
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.omra },
        ]}
      >
        <Button to="/booking?service=omra" variant="gold" size="lg">
          {t.common.bookNow}
        </Button>
        <Button href={wa} external variant="outlineLight" size="lg">
          <MessageCircle className="size-5" />
          WhatsApp
        </Button>
      </PageHero>

      <Section tone="default" tight>
        <p className="text-center text-sm md:text-base text-ink-muted max-w-3xl mx-auto leading-relaxed border border-border rounded-xl bg-surface px-5 py-4 shadow-soft">
          {t.omra.compareNote}
        </p>
      </Section>

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} basePath="/omra" />
          ))}
        </div>
      </Section>

      <ProcessSection />

      <Section tone="white">
        <h2 className="font-display text-3xl text-forest-900 text-center mb-8">
          {lang === 'ar' ? 'أسئلة حول العمرة' : 'Questions sur l’Omra'}
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion items={omraFaqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
