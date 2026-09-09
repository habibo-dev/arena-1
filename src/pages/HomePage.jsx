import { Link } from 'react-router-dom'
import { MessageCircle, Plane, Moon, MapPinned, ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import Button from '../components/ui/Button'
import { Section, SectionHeader } from '../components/ui/Section'
import PackageCard from '../components/packages/PackageCard'
import DestinationCard from '../components/packages/DestinationCard'
import WhySection from '../components/sections/WhySection'
import ProcessSection from '../components/sections/ProcessSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CtaBand from '../components/sections/CtaBand'
import Accordion from '../components/ui/Accordion'
import Image from '../components/ui/Image'
import Badge from '../components/ui/Badge'

export default function HomePage() {
  const { t, isRTL, lang } = useLanguage()
  const { company, umrahPackages, destinations, faqs } = useCompany()
  const L = useLocalized()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  usePageMeta({
    title: lang === 'ar' ? 'الرئيسية' : 'Accueil',
    description: L(company.shortDescription),
    path: '/',
  })

  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)
  const faqPreview = faqs.slice(0, 5).map((f) => ({
    id: f.id,
    question: L(f.question),
    answer: L(f.answer),
  }))

  const services = [
    {
      to: '/omra',
      icon: Moon,
      title: t.home.omraCardTitle,
      text: t.home.omraCardText,
      image: '/images/omra-confort.jpg',
    },
    {
      to: '/hajj',
      icon: Plane,
      title: t.home.hajjCardTitle,
      text: t.home.hajjCardText,
      image: '/images/hajj-hero.jpg',
    },
    {
      to: '/voyages',
      icon: MapPinned,
      title: t.home.travelCardTitle,
      text: t.home.travelCardText,
      image: '/images/dest-turkey.jpg',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[min(92vh,820px)] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-kaaba.jpg"
            alt={lang === 'ar' ? 'المسجد الحرام والكعبة المشرفة' : 'Masjid al-Haram et la Kaaba'}
            aspect="absolute inset-0 size-full"
            className="!absolute inset-0 size-full aspect-auto"
            priority
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at 70% 30%, rgba(201,162,74,0.25) 0%, transparent 50%)',
            }}
            aria-hidden
          />
        </div>

        <div className="relative container-page w-full pb-16 pt-28 md:pb-24 md:pt-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-gold-300 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              <span className="h-px w-8 bg-gold-400" aria-hidden />
              {t.hero.trustLine}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] text-sand-50 leading-[1.15] text-balance">
              {t.hero.title}
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-xl text-sand-100/90 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to="/omra" variant="gold" size="xl">
                {t.hero.ctaPrimary}
                <Arrow className="size-5" />
              </Button>
              <Button href={wa} external variant="outlineLight" size="xl">
                <MessageCircle className="size-5" />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['Omra', 'Hajj', lang === 'ar' ? 'رحلات' : 'Voyages'].map((label) => (
                <Badge key={label} tone="light">
                  {label}
                </Badge>
              ))}
              <Badge tone="light">
                {L(company.location.city)} · {L(company.location.country)}
              </Badge>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 gradient-gold" aria-hidden />
      </section>

      {/* SERVICES */}
      <Section tone="default">
        <SectionHeader title={t.home.servicesTitle} subtitle={t.home.servicesSubtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.to}
                to={s.to}
                className="group relative rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-500 min-h-[280px] flex flex-col justify-end"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  aspect="absolute inset-0 size-full"
                  className="!absolute inset-0 size-full aspect-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10" />
                <div className="relative p-6 md:p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold-300 backdrop-blur mb-4 border border-white/15">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl text-sand-50 mb-2">{s.title}</h3>
                  <p className="text-sm text-sand-200/90 leading-relaxed mb-4">{s.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold-300 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    {t.common.learnMore}
                    <Arrow className="size-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </Section>

      {/* UMRAH PACKAGES */}
      <Section tone="cream">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <SectionHeader
            title={t.home.packagesTitle}
            subtitle={t.home.packagesSubtitle}
            align="start"
            className="mb-0"
          />
          <Button to="/omra" variant="outline" className="self-start md:self-auto shrink-0">
            {t.common.viewAll}
            <Arrow className="size-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {umrahPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} basePath="/omra" />
          ))}
        </div>
      </Section>

      <WhySection />

      {/* DESTINATIONS */}
      <Section tone="default">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <SectionHeader
            title={t.home.destinationsTitle}
            subtitle={t.home.destinationsSubtitle}
            align="start"
            className="mb-0"
          />
          <Button to="/voyages" variant="outline" className="self-start md:self-auto shrink-0">
            {t.common.viewAll}
            <Arrow className="size-4" />
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.slice(0, 4).map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </Section>

      <ProcessSection />
      <TestimonialsSection />

      {/* FAQ preview */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              title={t.home.faqTitle}
              subtitle={t.home.faqSubtitle}
              align="start"
              className="mb-6"
            />
            <Button to="/faq" variant="outline">
              {t.common.viewAll}
              <Arrow className="size-4" />
            </Button>
          </div>
          <div className="lg:col-span-3">
            <Accordion items={faqPreview} />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
