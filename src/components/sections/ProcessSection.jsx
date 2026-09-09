import { useLanguage, useLocalized } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { Section, SectionHeader } from '../ui/Section'

export function ProcessSection() {
  const { t } = useLanguage()
  const { bookingProcess } = useCompany()
  const L = useLocalized()

  return (
    <Section tone="white">
      <SectionHeader title={t.home.processTitle} subtitle={t.home.processSubtitle} />
      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
        {bookingProcess.map((step, idx) => (
          <li key={step.step} className="relative flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex size-12 items-center justify-center rounded-full gradient-gold text-forest-950 font-bold text-lg shadow-gold">
                {step.step}
              </span>
              {idx < bookingProcess.length - 1 && (
                <span
                  className="hidden lg:block flex-1 h-px bg-gradient-to-l from-transparent to-gold-400 rtl:bg-gradient-to-r"
                  aria-hidden
                />
              )}
            </div>
            <h3 className="font-display text-xl text-forest-900 mb-2">{L(step.title)}</h3>
            <p className="text-sm text-ink-muted leading-relaxed">{L(step.text)}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default ProcessSection
