import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export function Footer() {
  const { t } = useLanguage()
  const { company } = useCompany()
  const L = useLocalized()
  const year = new Date().getFullYear()
  const wa = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)

  const explore = [
    { to: '/', label: t.nav.home },
    { to: '/omra', label: t.nav.omra },
    { to: '/hajj', label: t.nav.hajj },
    { to: '/voyages', label: t.nav.voyages },
  ]
  const more = [
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
    { to: '/booking', label: t.nav.bookNow },
  ]

  return (
    <footer className="bg-forest-950 text-sand-100">
      <div className="container-page pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-forest-800 text-gold-400 border border-white/10">
                <span className="font-display text-2xl leading-none">ت</span>
              </span>
              <div>
                <p className="font-display text-xl text-sand-50">{L(company.name)}</p>
                <p className="text-xs text-sand-300/80">{L(company.tagline)}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-sand-200/80 max-w-sm">
              {L(company.shortDescription)}
            </p>
            <p className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[0.7rem] text-gold-300">
              {t.footer.demoBadge}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sand-50 mb-4 text-sm tracking-wide uppercase opacity-90">
              {t.footer.explore}
            </h3>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sand-200/80 hover:text-gold-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sand-50 mb-4 text-sm tracking-wide uppercase opacity-90">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {more.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sand-200/80 hover:text-gold-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sand-50 mb-4 text-sm tracking-wide uppercase opacity-90">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-sand-200/80">
              <li className="flex gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
                <span>{L(company.location.address)}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="size-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
                <a href={`tel:${company.contact.phone.tel}`} className="hover:text-gold-300">
                  {company.contact.phone.display}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MessageCircle className="size-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
                <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                  WhatsApp
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="size-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
                <a href={`mailto:${company.contact.email}`} className="hover:text-gold-300 break-all">
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-sand-300/70">
          <p>
            © {year} {L(company.name)}. {t.footer.rights}.
          </p>
          <p className="text-sand-300/60">{L(company.location.city)} · {L(company.location.country)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
