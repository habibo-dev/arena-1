import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export function WhatsAppFloat({ message }) {
  const { t } = useLanguage()
  const { company } = useCompany()
  const href = buildWhatsAppUrl(company.contact.whatsapp.number, message || t.whatsapp.default)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-5 end-5 md:bottom-8 md:end-8 group"
      aria-label={t.whatsapp.floating}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:opacity-0" />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-elevated ps-3.5 pe-4 py-3 md:ps-4 md:pe-5 hover:bg-[#1ebe57] transition-colors">
        <MessageCircle className="size-5 md:size-6" aria-hidden />
        <span className="text-sm font-bold tracking-wide hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  )
}

export default WhatsAppFloat
