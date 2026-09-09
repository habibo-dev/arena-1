# Agence Tawars — حج، عمرة ورحلات

Premium bilingual (Arabic / French) website for **Agence Tawars**, a travel agency in Blida, Algeria specializing in Hajj, Umrah and organized travel.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- Lucide icons

## Features

- Arabic (RTL) primary + French (LTR) with live language switcher
- Umrah packages, Hajj page, travel destinations
- Package / destination detail pages
- Inquiry booking form (no fake checkout) — stores demo inquiries in `localStorage`
- WhatsApp CTAs with pre-filled contextual messages
- SEO meta, Open Graph helpers, LocalBusiness JSON-LD, sitemap & robots
- Fully data-driven content in `src/data/`

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (bound to `0.0.0.0:5173`).

```bash
npm run build
npm run preview
```

## Editing content

| What | File |
|------|------|
| Company name, phone, WhatsApp, email, address | `src/data/company.js` |
| Umrah / Hajj packages, destinations, FAQs, testimonials | `src/data/packages.js` |
| UI strings (AR / FR) | `src/data/translations.js` |
| Images | `public/images/` — keep the same filenames |

### WhatsApp number

Set `company.contact.whatsapp.number` to international digits without `+` (example: `213555000000`).

## Image assets

Place replaceable JPEGs in `public/images/`:

- `hero-kaaba.jpg`, `omra-hero.jpg`, `hajj-hero.jpg`
- `omra-essentielle.jpg`, `omra-confort.jpg`, `omra-premium.jpg`
- `kaaba-day.jpg`, `kaaba-night.jpg`, `medina-mosque.jpg`, `hotel-premium.jpg`
- `dest-turkey.jpg`, `dest-azerbaijan.jpg`, `dest-dubai.jpg`, `dest-malaysia.jpg`
- `dest-europe.jpg`, `dest-tunisia.jpg`, `dest-morocco.jpg`
- `about-agency.jpg`

Missing images fall back to a branded gradient placeholder.

## Honesty policy

Demo prices, testimonials, and contact placeholders are clearly structured for the agency to replace. The site does **not** invent licenses, quotas, awards, or real customer reviews.
