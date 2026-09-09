import { MessageCircle } from 'lucide-react'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import CtaBand from '../components/sections/CtaBand'

export default function FaqPage() {
  const { t } = useLanguage()
  const { company, faqs } = useCompany()
  const L = useLocalized()

  usePageMeta({
    title: t.faq.title,
    description: t.faq.subtitle,
    path: '/faq',
  })

  const items = faqs.map((f) => ({
    id: f.id,
    question: L(f.question),
    answer: L(f.answer),
  }))

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)

  return (
    <>
      <PageHero
        title={t.faq.title}
        subtitle={t.faq.subtitle}
        image="/images/hero-kaaba.jpg"
        compact
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.faq },
        ]}
      />

      <Section tone="default">
        <div className="max-w-3xl mx-auto">
          <Accordion items={items} />
        </div>
      </Section>

      <Section tone="cream">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-forest-900 mb-2">
            {t.faq.stillTitle}
          </h2>
          <p className="text-ink-muted mb-6">{t.faq.stillText}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href={wa} external variant="whatsapp" size="lg">
              <MessageCircle className="size-5" />
              WhatsApp
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              {t.nav.contact}
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
