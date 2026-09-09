/**
 * Build a wa.me URL with optional pre-filled message.
 * number should be international digits without + (e.g. 213555000000)
 */
export function buildWhatsAppUrl(number, message = '') {
  const clean = String(number || '').replace(/\D/g, '')
  const base = `https://wa.me/${clean}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(number, message) {
  const url = buildWhatsAppUrl(number, message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
