import { company } from '../data/company'

export function setPageMeta({ title, description, path = '/', lang = 'ar' }) {
  const siteName = lang === 'ar' ? company.name.ar : company.name.fr
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — ${company.tagline[lang]}`
  document.title = fullTitle

  const desc =
    description ||
    company.shortDescription[lang]

  setMeta('name', 'description', desc)
  setMeta('property', 'og:title', fullTitle)
  setMeta('property', 'og:description', desc)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:locale', lang === 'ar' ? 'ar_DZ' : 'fr_FR')
  setMeta('name', 'twitter:title', fullTitle)
  setMeta('name', 'twitter:description', desc)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  canonical.setAttribute('href', `${origin}${path}`)
}

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function injectLocalBusinessJsonLd(companyData, lang = 'ar') {
  const id = 'tawars-jsonld'
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: companyData.name[lang],
    description: companyData.shortDescription[lang],
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyData.location.city[lang],
      addressRegion: companyData.location.region[lang],
      addressCountry: 'DZ',
    },
    url: typeof window !== 'undefined' ? window.location.origin : '',
    email: companyData.contact.email,
    telephone: companyData.contact.phone.tel,
    areaServed: {
      '@type': 'Country',
      name: 'Algeria',
    },
    priceRange: '$$',
  }
  script.textContent = JSON.stringify(data)
}
