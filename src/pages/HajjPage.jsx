import { MessageCircle, AlertTriangle } from 'lucide-react'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import PageHero from '../components/sections/PageHero'
import { Section, SectionHeader } from '../components/ui/Section'
import PackageCard from '../components/packages/PackageCard'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import CtaBand from '../components/sections/CtaBand'
import BookingForm from '../components/forms/BookingForm'

export default function HajjPage() {
  const { t, lang } = useLanguage()
  const { company, hajjPackages, hajjServices, bookingProcess, faqs } = useCompany()
  const L = useLocalized()

  usePageMeta({
    title: t.hajj.title,
    description: t.hajj.subtitle,
    path: '/hajj',
  })

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.hajj)
  const hajjFaqs = faqs
    .filter((f) => ['hajj', 'booking', 'documents', 'payment'].includes(f.category))
    .map((f) => ({ id: f.id, question: L(f.question), answer: L(f.answer) }))

  return (
    <>
      <PageHero
        title={t.hajj.title}
        subtitle={t.hajj.subtitle}
        badge={t.hajj.heroBadge}
        image="/images/hajj-hero.jpg"
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.hajj },
        ]}
      >
        <Button to="/booking?service=hajj" variant="gold" size="lg">
          {t.common.requestInfo}
        </Button>
        <Button href={wa} external variant="outlineLight" size="lg">
          <MessageCircle className="size-5" />
          WhatsApp
        </Button>
      </PageHero>

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <SectionHeader
              title={t.hajj.introTitle}
              subtitle={t.hajj.introText}
              align="start"
              className="mb-0"
            />
          </div>
          <div
            className="rounded-2xl border border-gold-200 bg-gold-50 p-6 md:p-8 flex gap-4"
            role="note"
          >
            <AlertTriangle className="size-7 text-gold-600 shrink-0 mt-0.5" aria-hidden />
            <div>
              <h3 className="font-semibold text-forest-900 mb-2">{t.hajj.importantTitle}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{t.hajj.importantText}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader title={t.hajj.servicesTitle} />
        <div className="grid gap-5 sm:grid-cols-2">
          {hajjServices.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
            >
              <h3 className="font-display text-xl text-forest-900 mb-2">{L(s.title)}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{L(s.text)}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader title={t.hajj.packagesTitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {hajjPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} basePath="/hajj" />
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader title={t.hajj.processTitle} />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {bookingProcess.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-border bg-surface p-5 shadow-soft"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full gradient-gold text-forest-950 font-bold mb-3">
                {step.step}
              </span>
              <h3 className="font-semibold text-forest-900 mb-1">{L(step.title)}</h3>
              <p className="text-sm text-ink-muted">{L(step.text)}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <SectionHeader title={t.hajj.faqTitle} />
        <div className="max-w-3xl mx-auto">
          <Accordion items={hajjFaqs} />
        </div>
      </Section>

      <Section tone="cream" id="inquiry">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-forest-900 text-center mb-2">
            {t.common.requestInfo}
          </h2>
          <p className="text-center text-ink-muted mb-8">
            {lang === 'ar'
              ? 'اطلبوا معلومات حول موسم الحج الحالي — بدون التزام.'
              : 'Demandez des informations sur la saison en cours — sans engagement.'}
          </p>
          <BookingForm initialValues={{ service: 'hajj', destination: lang === 'ar' ? 'الحج' : 'Hajj' }} />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
