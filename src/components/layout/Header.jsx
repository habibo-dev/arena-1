import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { useLocalized } from '../../context/LanguageContext'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../ui/Button'

const navItems = [
  { key: 'home', to: '/' },
  { key: 'omra', to: '/omra' },
  { key: 'hajj', to: '/hajj' },
  { key: 'voyages', to: '/voyages' },
  { key: 'about', to: '/about' },
  { key: 'faq', to: '/faq' },
  { key: 'contact', to: '/contact' },
]

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const { company } = useCompany()
  const L = useLocalized()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const whatsappHref = buildWhatsAppUrl(company.contact.whatsapp.number, t.whatsapp.default)

  const linkClass = ({ isActive }) =>
    [
      'relative px-2.5 py-2 text-[0.92rem] font-semibold transition-colors',
      isActive ? 'text-gold-600' : 'text-forest-900/80 hover:text-forest-900',
      isActive
        ? 'after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gold-500'
        : '',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-sand-50/95 backdrop-blur-xl border-b border-border shadow-soft'
          : 'bg-sand-50/80 backdrop-blur-md border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-page">
        <div className="flex h-16 md:h-[4.5rem] items-center justify-between gap-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 min-w-0 group" aria-label={L(company.name)}>
            <span className="relative flex size-10 md:size-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400 shadow-soft overflow-hidden">
              <span className="font-display text-xl md:text-2xl leading-none">ت</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-500" />
            </span>
            <span className="min-w-0 flex flex-col">
              <span className="font-display text-lg md:text-xl text-forest-900 leading-tight truncate group-hover:text-forest-800 transition-colors">
                {L(company.name)}
              </span>
              <span className="text-[0.7rem] md:text-xs text-ink-soft tracking-wide truncate">
                {L(company.tagline)}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
            {navItems.map((item) => (
              <NavLink key={item.key} to={item.to} end={item.to === '/'} className={linkClass}>
                {t.nav[item.key]}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="hidden sm:inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-semibold"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLang('ar')}
                className={`rounded-full px-2.5 py-1.5 transition-colors ${
                  lang === 'ar' ? 'bg-forest-900 text-sand-50' : 'text-ink-muted hover:text-forest-900'
                }`}
                aria-pressed={lang === 'ar'}
              >
                العربية
              </button>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`rounded-full px-2.5 py-1.5 transition-colors ${
                  lang === 'fr' ? 'bg-forest-900 text-sand-50' : 'text-ink-muted hover:text-forest-900'
                }`}
                aria-pressed={lang === 'fr'}
              >
                Français
              </button>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex size-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366]/25 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-5" />
            </a>

            <Button to="/booking" variant="gold" size="sm" className="hidden md:inline-flex">
              {t.nav.bookNow}
            </Button>

            <button
              type="button"
              className="lg:hidden inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-forest-900"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.common.closeMenu : t.common.openMenu}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden border-t border-border bg-sand-50 transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? 'max-h-[min(100vh,40rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-semibold ${
                  isActive ? 'bg-forest-900 text-sand-50' : 'text-forest-900 hover:bg-sand-100'
                }`
              }
            >
              {t.nav[item.key]}
            </NavLink>
          ))}

          <div className="mt-3 flex gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setLang('ar')}
              className={`flex-1 rounded-lg border py-2.5 text-sm font-semibold ${
                lang === 'ar' ? 'bg-forest-900 text-white border-forest-900' : 'border-border'
              }`}
            >
              العربية
            </button>
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`flex-1 rounded-lg border py-2.5 text-sm font-semibold ${
                lang === 'fr' ? 'bg-forest-900 text-white border-forest-900' : 'border-border'
              }`}
            >
              Français
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2">
            <Button to="/booking" variant="gold" size="lg" className="w-full">
              {t.nav.bookNow}
            </Button>
            <Button href={whatsappHref} external variant="whatsapp" size="lg" className="w-full">
              <MessageCircle className="size-5" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
