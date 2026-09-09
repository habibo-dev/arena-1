import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../ui/Button'

export function CtaBand() {
  const { t } = useLanguage()
  const { company } = useCompany()
  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)

  return (
    <section className="relative overflow-hidden">
      <div className="gradient-forest">
        <div className="container-page py-14 md:py-20 relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 30% 50%, #C9A24A 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, #1a7a5c 0%, transparent 40%)',
            }}
            aria-hidden
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="ornament-line w-24 mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sand-50 text-balance">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-4 text-sand-200/90 text-base md:text-lg leading-relaxed">
              {t.home.ctaSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/booking" variant="gold" size="xl">
                {t.home.ctaPrimary}
              </Button>
              <Button href={wa} external variant="outlineLight" size="xl">
                <MessageCircle className="size-5" />
                {t.home.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
