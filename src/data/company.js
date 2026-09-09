/**
 * Central company configuration — edit this file to update all site content.
 * No invented licenses, awards, years of experience, or official quotas.
 */
export const company = {
  name: {
    ar: 'وكالة التوارس',
    fr: 'Agence Tawars',
  },
  legalName: {
    ar: 'وكالة التوارس للسفر والسياحة',
    fr: 'Agence Tawars — Voyages & Tourisme',
  },
  tagline: {
    ar: 'حج، عمرة ورحلات منظمة',
    fr: 'Hajj, Omra & Voyages organisés',
  },
  shortDescription: {
    ar: 'وكالة سفر بالبليدة متخصصة في تنظيم برامج العمرة والحج والرحلات الدولية، مع اهتمام بالتفاصيل وخدمة موثوقة.',
    fr: 'Agence de voyage à Blida spécialisée dans l’organisation de programmes Omra, Hajj et voyages internationaux, avec un service soigné et fiable.',
  },
  longDescription: {
    ar: 'وكالة التوارس وكالة سفر سياحية بمدينة البليدة، متخصصة في تنظيم رحلات العمرة والحج والرحلات السياحية المنظمة. نعمل على تقديم برامج واضحة، إقامة مريحة، ومتابعة مستمرة قبل وأثناء الرحلة، ليتمكّن المسافر من التركيز على روحانية الزيارة أو على متعة الاستكشاف.',
    fr: 'Agence Tawars est une agence de voyage basée à Blida, spécialisée dans l’organisation de séjours Omra, Hajj et voyages touristiques. Nous proposons des programmes clairs, un hébergement confortable et un suivi attentif avant et pendant le voyage, pour que chaque voyageur se concentre sur l’essentiel.',
  },
  philosophy: {
    ar: 'نؤمن بأن رحلة منظمة تبدأ من الشفافية: تفاصيل واضحة، خيارات مناسبة، وتواصل مباشر. هدفنا أن يشعر كل مسافر بالثقة والراحة من أول استفسار حتى العودة.',
    fr: 'Nous croyons qu’un voyage réussi commence par la transparence : détails clairs, options adaptées et communication directe. Notre objectif est que chaque voyageur se sente en confiance, du premier contact jusqu’au retour.',
  },
  location: {
    city: {
      ar: 'البليدة',
      fr: 'Blida',
    },
    region: {
      ar: 'ولاية البليدة',
      fr: 'Wilaya de Blida',
    },
    country: {
      ar: 'الجزائر',
      fr: 'Algérie',
    },
    // Editable address — replace with exact street address
    address: {
      ar: 'البليدة، الجزائر',
      fr: 'Blida, Algérie',
    },
    // Optional precise coords for map embed (Blida center as placeholder)
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51263.8!2d2.827!3d36.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c4c0c0c0c0b%3A0x0!2sBlida!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz',
    mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Blida+Algeria',
  },
  contact: {
    // All contact fields are configurable placeholders
    phone: {
      display: '+213 XX XX XX XX',
      tel: '+213XXXXXXXXX',
    },
    whatsapp: {
      display: '+213 XX XX XX XX',
      // International format without + or spaces — replace with real number
      number: '213555000000',
    },
    email: 'contact@tawars.dz',
    hours: {
      ar: 'السبت — الخميس: 09:00 — 17:00',
      fr: 'Sam — Jeu : 09:00 — 17:00',
    },
    hoursNote: {
      ar: 'أوقات العمل قابلة للتأكيد عند الاتصال. خارج الأوقات يمكنكم مراسلتنا عبر WhatsApp.',
      fr: 'Horaires à confirmer par téléphone. En dehors, contactez-nous via WhatsApp.',
    },
  },
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
  brand: {
    primaryColor: '#0B3D2E',
    accentColor: '#C9A24A',
  },
  seo: {
    keywords: {
      ar: [
        'وكالة سفر البليدة',
        'وكالة عمرة البليدة',
        'عمرة البليدة',
        'حج البليدة',
        'رحلات منظمة الجزائر',
        'وكالة التوارس',
      ],
      fr: [
        'agence voyage Blida',
        'Omra Blida',
        'Hajj Blida',
        'agence Omra Blida',
        'voyage organisé Algérie',
        'Agence Tawars',
      ],
    },
  },
}

export default company
