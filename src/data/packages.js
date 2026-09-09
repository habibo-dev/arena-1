/**
 * Demo packages — prices and details are editable placeholders.
 * No official quotas, licenses, or government claims.
 */

export const umrahPackages = [
  {
    id: 'omra-essentielle',
    slug: 'omra-essentielle',
    category: 'omra',
    tier: 'essential',
    featured: true,
    name: {
      ar: 'عمرة أساسية',
      fr: 'Omra Essentielle',
    },
    shortDescription: {
      ar: 'برنامج عملي ومنظم يشمل الرحلة الجوية، الإقامة، والنقل الأساسي مع مرافقة الوكالة.',
      fr: 'Programme clair et organisé : vol, hébergement et transport de base avec accompagnement de l’agence.',
    },
    description: {
      ar: 'برنامج العمرة الأساسية مناسب للمسافرين الذين يبحثون عن تنظيم موثوق بتكلفة متوازنة. يشمل الرحلة، الفندق، النقل بين المطار والإقامة، والمساعدة قبل وأثناء الرحلة.',
      fr: 'Le programme Omra Essentielle convient aux voyageurs recherchant une organisation fiable à budget maîtrisé. Il inclut le vol, l’hôtel, les transferts et l’assistance avant et pendant le séjour.',
    },
    duration: {
      ar: '10 أيام / 9 ليالٍ',
      fr: '10 jours / 9 nuits',
    },
    durationDays: 10,
    departureCity: {
      ar: 'الجزائر العاصمة',
      fr: 'Alger',
    },
    hotel: {
      name: {
        ar: 'فندق قريب من الحرم (فئة اقتصادية)',
        fr: 'Hôtel proche du Haram (catégorie économique)',
      },
      category: '3★',
      distanceFromHaram: {
        ar: 'حسب التوفر — يُحدَّد عند الحجز',
        fr: 'Selon disponibilité — précisé à la réservation',
      },
    },
    price: {
      from: null,
      display: {
        ar: 'السعر عند الطلب',
        fr: 'Prix sur demande',
      },
      currency: 'DZD',
      note: {
        ar: 'الأسعار تختلف حسب الموسم وعدد المسافرين وتواريخ المغادرة.',
        fr: 'Les tarifs varient selon la saison, le nombre de voyageurs et les dates.',
      },
    },
    image: '/images/omra-essentielle.jpg',
    gallery: [
      '/images/omra-essentielle.jpg',
      '/images/kaaba-night.jpg',
      '/images/medina-mosque.jpg',
    ],
    included: {
      ar: [
        'تذكرة الطيران ذهابًا وإيابًا',
        'الإقامة الفندقية حسب البرنامج',
        'النقل من وإلى المطار',
        'المساعدة في إجراءات السفر',
        'مرافقة وإرشاد أساسي',
        'متابعة من فريق الوكالة',
      ],
      fr: [
        'Billet d’avion aller-retour',
        'Hébergement hôtelier selon le programme',
        'Transferts aéroport',
        'Assistance administrative voyage',
        'Accompagnement de base',
        'Suivi par l’équipe de l’agence',
      ],
    },
    excluded: {
      ar: [
        'التأشيرة (إن لزم الأمر — حسب الحالة)',
        'المصروفات الشخصية',
        'الوجبات غير المذكورة في البرنامج',
        'التأمين الاختياري',
        'أي خدمات إضافية غير مذكورة',
      ],
      fr: [
        'Visa (si requis — selon le dossier)',
        'Dépenses personnelles',
        'Repas non mentionnés',
        'Assurance optionnelle',
        'Toute prestation non listée',
      ],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'المغادرة من الجزائر', detail: 'التجمع في المطار، إجراءات السفر، والوصول إلى المملكة العربية السعودية.' },
        { day: 'اليوم 2–4', title: 'مكة المكرمة', detail: 'الإقامة وأداء مناسك العمرة مع تنظيم الزيارات الأساسية حسب البرنامج.' },
        { day: 'اليوم 5–8', title: 'المدينة المنورة', detail: 'الانتقال إلى المدينة، زيارة المسجد النبوي والمعالم المرتبطة بالبرنامج.' },
        { day: 'اليوم 9–10', title: 'العودة', detail: 'التجهيز للمغادرة والعودة إلى الجزائر.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Départ d’Alger', detail: 'Rendez-vous aéroport, formalités et arrivée en Arabie Saoudite.' },
        { day: 'Jours 2–4', title: 'La Mecque', detail: 'Séjour et accomplissement des rites d’Omra, visites selon le programme.' },
        { day: 'Jours 5–8', title: 'Médine', detail: 'Transfert vers Médine, mosquée du Prophète et sites du programme.' },
        { day: 'Jours 9–10', title: 'Retour', detail: 'Préparation du départ et retour en Algérie.' },
      ],
    },
    highlights: {
      ar: ['تنظيم واضح', 'سعر متوازن', 'مرافقة أساسية'],
      fr: ['Organisation claire', 'Budget maîtrisé', 'Accompagnement de base'],
    },
    transport: {
      ar: 'نقل جماعي منظم حسب البرنامج',
      fr: 'Transport collectif organisé selon le programme',
    },
    importantInfo: {
      ar: [
        'التفاصيل النهائية (الفندق، المواعيد، الرحلات) تُؤكَّد عند الحجز حسب التوفر.',
        'يُنصح بالتواصل مبكرًا لضمان الأماكن في المواسم المطلوبة.',
        'الوثائق المطلوبة تختلف حسب جنسية المسافر وحالته.',
      ],
      fr: [
        'Les détails finaux (hôtel, horaires, vols) sont confirmés à la réservation selon disponibilité.',
        'Il est conseillé de réserver tôt pour les saisons demandées.',
        'Les documents requis varient selon la nationalité et le dossier du voyageur.',
      ],
    },
  },
  {
    id: 'omra-confort',
    slug: 'omra-confort',
    category: 'omra',
    tier: 'comfort',
    featured: true,
    name: {
      ar: 'عمرة مريحة',
      fr: 'Omra Confort',
    },
    shortDescription: {
      ar: 'توازن بين الراحة والتنظيم: فنادق أفضل، نقل منظم، ومرافقة دينية وإرشادية أوضح.',
      fr: 'Équilibre confort / organisation : meilleurs hôtels, transport fluide et accompagnement religieux renforcé.',
    },
    description: {
      ar: 'برنامج العمرة المريحة موجّه لمن يرغب بإقامة أجمل وتنقل أسهل، مع متابعة أقرب من فريق الوكالة وإرشاد يساعد على أداء المناسك بطمأنينة.',
      fr: 'Le programme Omra Confort s’adresse à ceux qui souhaitent un hébergement plus confortable, des déplacements fluides et un suivi plus attentif pour vivre les rites sereinement.',
    },
    duration: {
      ar: '12 يومًا / 11 ليلة',
      fr: '12 jours / 11 nuits',
    },
    durationDays: 12,
    departureCity: {
      ar: 'الجزائر العاصمة',
      fr: 'Alger',
    },
    hotel: {
      name: {
        ar: 'فنادق فئة متوسطة إلى جيدة قرب الحرمين',
        fr: 'Hôtels milieu de gamme à proximité des deux Harams',
      },
      category: '4★',
      distanceFromHaram: {
        ar: 'مسافة مريحة — تُحدَّد حسب التوفر',
        fr: 'Distance confortable — selon disponibilité',
      },
    },
    price: {
      from: null,
      display: {
        ar: 'السعر عند الطلب',
        fr: 'Prix sur demande',
      },
      currency: 'DZD',
      note: {
        ar: 'عرض مخصص حسب عدد الأفراد وتواريخ السفر.',
        fr: 'Devis personnalisé selon le nombre de voyageurs et les dates.',
      },
    },
    image: '/images/omra-confort.jpg',
    gallery: [
      '/images/omra-confort.jpg',
      '/images/kaaba-day.jpg',
      '/images/hotel-premium.jpg',
    ],
    included: {
      ar: [
        'تذكرة الطيران ذهابًا وإيابًا',
        'إقامة فندقية محسّنة',
        'نقل منظم طوال البرنامج',
        'مساعدة إدارية',
        'مرافقة وإرشاد ديني',
        'متابعة قبل وأثناء الرحلة',
        'برنامج زيارات منظم',
      ],
      fr: [
        'Vol aller-retour',
        'Hébergement hôtelier amélioré',
        'Transport organisé pendant le séjour',
        'Assistance administrative',
        'Accompagnement et guidance religieuse',
        'Suivi avant et pendant le voyage',
        'Programme de visites organisé',
      ],
    },
    excluded: {
      ar: [
        'التأشيرة عند الاقتضاء',
        'المصروفات الشخصية والتسوق',
        'الوجبات غير المدرجة',
        'الخدمات الإضافية الخاصة',
      ],
      fr: [
        'Visa le cas échéant',
        'Dépenses personnelles et shopping',
        'Repas non inclus',
        'Services additionnels à la carte',
      ],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'الانطلاق', detail: 'التجمع والمغادرة نحو المملكة مع استقبال منظم عند الوصول.' },
        { day: 'اليوم 2–5', title: 'مكة المكرمة', detail: 'أداء العمرة، الإقامة المريحة، وزيارات مختارة حسب البرنامج.' },
        { day: 'اليوم 6–10', title: 'المدينة المنورة', detail: 'الإقامة قرب المسجد النبوي وبرنامج زيارات هادئ.' },
        { day: 'اليوم 11–12', title: 'الختام والعودة', detail: 'وقت حر خفيف ثم إجراءات العودة إلى الجزائر.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Départ', detail: 'Rassemblement et vol vers le Royaume, accueil organisé à l’arrivée.' },
        { day: 'Jours 2–5', title: 'La Mecque', detail: 'Rites d’Omra, séjour confortable et visites sélectionnées.' },
        { day: 'Jours 6–10', title: 'Médine', detail: 'Séjour près de la mosquée du Prophète et programme de visites serein.' },
        { day: 'Jours 11–12', title: 'Retour', detail: 'Temps libre léger puis formalités de retour vers l’Algérie.' },
      ],
    },
    highlights: {
      ar: ['راحة أفضل', 'مرافقة دينية', 'برنامج متوازن'],
      fr: ['Plus de confort', 'Guidance religieuse', 'Programme équilibré'],
    },
    transport: {
      ar: 'نقل مريح ومنظم للمجموعة',
      fr: 'Transport confortable et organisé pour le groupe',
    },
    importantInfo: {
      ar: [
        'يمكن طلب غرف عائلية أو ترتيبات خاصة حسب التوفر.',
        'نوصي بمناقشة أي احتياجات طبية أو خاصة قبل السفر.',
      ],
      fr: [
        'Chambres familiales ou arrangements spéciaux possibles selon disponibilité.',
        'Signalez tout besoin médical ou particulier avant le départ.',
      ],
    },
  },
  {
    id: 'omra-premium',
    slug: 'omra-premium',
    category: 'omra',
    tier: 'premium',
    featured: true,
    name: {
      ar: 'عمرة مميزة',
      fr: 'Omra Premium',
    },
    shortDescription: {
      ar: 'تجربة راقية: إقامة أقرب وأجود، خدمة شخصية، ونقل مميز مع اهتمام دقيق بالتفاصيل.',
      fr: 'Expérience haut de gamme : hébergement soigné, service personnalisé et transport premium.',
    },
    description: {
      ar: 'برنامج العمرة المميزة لمن يبحث عن أقصى درجات الراحة والتنظيم الشخصي. اختيار فنادق أعلى فئة، متابعة أقرب، وترتيبات مرنة قدر الإمكان حسب الموسم.',
      fr: 'Le programme Omra Premium s’adresse à ceux qui recherchent un confort maximal et un suivi personnalisé : hôtels de catégorie supérieure, assistance rapprochée et arrangements flexibles selon la saison.',
    },
    duration: {
      ar: '14 يومًا / 13 ليلة',
      fr: '14 jours / 13 nuits',
    },
    durationDays: 14,
    departureCity: {
      ar: 'الجزائر العاصمة (أو حسب الاتفاق)',
      fr: 'Alger (ou selon accord)',
    },
    hotel: {
      name: {
        ar: 'فنادق فئة عليا قرب الحرمين',
        fr: 'Hôtels haut de gamme près des Harams',
      },
      category: '5★',
      distanceFromHaram: {
        ar: 'أولوية للقرب — حسب التوفر والموسم',
        fr: 'Priorité à la proximité — selon saison et disponibilité',
      },
    },
    price: {
      from: null,
      display: {
        ar: 'عرض مخصص',
        fr: 'Devis personnalisé',
      },
      currency: 'DZD',
      note: {
        ar: 'يُعد عرض سعر مفصل بعد تحديد التواريخ وعدد المسافرين.',
        fr: 'Devis détaillé après confirmation des dates et du nombre de voyageurs.',
      },
    },
    image: '/images/omra-premium.jpg',
    gallery: [
      '/images/omra-premium.jpg',
      '/images/kaaba-night.jpg',
      '/images/hotel-premium.jpg',
      '/images/medina-mosque.jpg',
    ],
    included: {
      ar: [
        'رحلة جوية مختارة',
        'إقامة فندقية راقية',
        'نقل مميز',
        'مساعدة شخصية',
        'مرافقة وإرشاد متخصص',
        'متابعة مستمرة طوال الرحلة',
        'مرونة أكبر في الترتيبات (حسب الإمكان)',
      ],
      fr: [
        'Vol sélectionné',
        'Hébergement haut de gamme',
        'Transport premium',
        'Assistance personnalisée',
        'Accompagnement spécialisé',
        'Suivi continu pendant le séjour',
        'Plus de flexibilité dans les arrangements (selon possibilités)',
      ],
    },
    excluded: {
      ar: [
        'التأشيرة عند الاقتضاء',
        'المصروفات الشخصية',
        'الخدمات غير المذكورة صراحة في العرض',
      ],
      fr: [
        'Visa le cas échéant',
        'Dépenses personnelles',
        'Prestations non explicitement listées dans le devis',
      ],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'انطلاق مريح', detail: 'تنسيق شخصي للمغادرة واستقبال مميز عند الوصول.' },
        { day: 'اليوم 2–6', title: 'مكة المكرمة', detail: 'إقامة راقية وأداء المناسك بإيقاع مريح ومتابعة قريبة.' },
        { day: 'اليوم 7–12', title: 'المدينة المنورة', detail: 'إقامة مختارة وزيارات منظمة بهدوء.' },
        { day: 'اليوم 13–14', title: 'العودة', detail: 'ترتيبات العودة مع دعم حتى المطار.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Départ premium', detail: 'Coordination personnalisée et accueil soigné à l’arrivée.' },
        { day: 'Jours 2–6', title: 'La Mecque', detail: 'Séjour raffiné et rites à un rythme confortable.' },
        { day: 'Jours 7–12', title: 'Médine', detail: 'Hébergement sélectionné et visites sereines.' },
        { day: 'Jours 13–14', title: 'Retour', detail: 'Organisation du retour avec assistance jusqu’à l’aéroport.' },
      ],
    },
    highlights: {
      ar: ['خدمة شخصية', 'إقامة راقية', 'راحة قصوى'],
      fr: ['Service personnalisé', 'Hébergement raffiné', 'Confort maximal'],
    },
    transport: {
      ar: 'نقل مميز للمجموعة أو حسب الاتفاق',
      fr: 'Transport premium de groupe ou selon arrangement',
    },
    importantInfo: {
      ar: [
        'العروض المميزة تُبنى حسب طلبكم — تواصلوا معنا لتصميم برنامجكم.',
        'التوفر في المواسم الكبرى محدود ويُفضَّل الحجز المبكر.',
      ],
      fr: [
        'Les formules premium sont construites sur mesure — contactez-nous pour concevoir votre programme.',
        'Disponibilité limitée en haute saison : réservation anticipée recommandée.',
      ],
    },
  },
]

export const hajjPackages = [
  {
    id: 'hajj-standard',
    slug: 'hajj-standard',
    category: 'hajj',
    tier: 'standard',
    featured: true,
    name: {
      ar: 'برنامج الحج — تنظيم أساسي',
      fr: 'Programme Hajj — formule standard',
    },
    shortDescription: {
      ar: 'تنظيم شامل لرحلة الحج مع الإقامة، النقل، والمرافقة. التفاصيل الدقيقة تُحدَّث حسب الموسم والتعليمات الرسمية.',
      fr: 'Organisation complète du Hajj : hébergement, transport et accompagnement. Détails actualisés selon la saison et les consignes officielles.',
    },
    description: {
      ar: 'نقدّم إطارًا منظمًا لرحلة الحج يشمل المتابعة الإدارية، الإقامة، النقل بين المشاعر قدر الإمكان، والمرافقة. نظرًا لطبيعة موسم الحج، تُحدَّد التفاصيل النهائية (التواريخ، الأماكن، الشروط) عند فتح التسجيلات الرسمية وتأكيد التوفر.',
      fr: 'Nous proposons un cadre organisé pour le Hajj : suivi administratif, hébergement, transport entre les sites dans la mesure du possible, et accompagnement. Les détails finaux (dates, lieux, conditions) sont précisés à l’ouverture des inscriptions officielles.',
    },
    duration: {
      ar: 'حسب موسم الحج',
      fr: 'Selon la saison du Hajj',
    },
    durationDays: null,
    departureCity: {
      ar: 'الجزائر — يُحدَّد لاحقًا',
      fr: 'Algérie — à confirmer',
    },
    hotel: {
      name: {
        ar: 'إقامة حسب الفئة المختارة',
        fr: 'Hébergement selon la formule choisie',
      },
      category: 'متعدد',
      distanceFromHaram: {
        ar: 'يُبلَّغ عند تأكيد البرنامج',
        fr: 'Communiqué à la confirmation du programme',
      },
    },
    price: {
      from: null,
      display: {
        ar: 'يُعلن عند فتح التسجيل',
        fr: 'Annoncé à l’ouverture des inscriptions',
      },
      currency: 'DZD',
      note: {
        ar: 'لا نعرض أسعارًا تقديرية مضللة. تواصلوا معنا للاطلاع على آخر المستجدات.',
        fr: 'Nous n’affichons pas de tarifs approximatifs trompeurs. Contactez-nous pour les dernières informations.',
      },
    },
    image: '/images/hajj-hero.jpg',
    gallery: ['/images/hajj-hero.jpg', '/images/kaaba-day.jpg', '/images/medina-mosque.jpg'],
    included: {
      ar: [
        'المتابعة والتنظيم حسب البرنامج المعتمد',
        'الإقامة وفق الفئة',
        'النقل ضمن البرنامج',
        'المرافقة والإرشاد',
        'التوجيه قبل السفر',
      ],
      fr: [
        'Organisation et suivi selon le programme retenu',
        'Hébergement selon la formule',
        'Transport inclus dans le programme',
        'Accompagnement et guidance',
        'Briefing avant le départ',
      ],
    },
    excluded: {
      ar: [
        'أي رسوم رسمية غير مدرجة في العرض النهائي',
        'المصروفات الشخصية',
        'خدمات إضافية خارج البرنامج',
      ],
      fr: [
        'Frais officiels non inclus dans l’offre finale',
        'Dépenses personnelles',
        'Services hors programme',
      ],
    },
    itinerary: {
      ar: [
        { day: 'قبل السفر', title: 'التحضير', detail: 'جلسة توجيه، مراجعة الوثائق، وتأكيد الترتيبات.' },
        { day: 'أيام الحج', title: 'المناسك', detail: 'تنظيم الإقامة والتنقلات وفق البرنامج والتعليمات الميدانية.' },
        { day: 'بعد المناسك', title: 'الختام', detail: 'ترتيب العودة والمتابعة حتى الوصول.' },
      ],
      fr: [
        { day: 'Avant le départ', title: 'Préparation', detail: 'Briefing, contrôle des documents et confirmation des arrangements.' },
        { day: 'Jours du Hajj', title: 'Rites', detail: 'Organisation du séjour et des déplacements selon le programme.' },
        { day: 'Après les rites', title: 'Clôture', detail: 'Organisation du retour et suivi jusqu’à l’arrivée.' },
      ],
    },
    highlights: {
      ar: ['تنظيم موثوق', 'مرافقة', 'شفافية'],
      fr: ['Organisation fiable', 'Accompagnement', 'Transparence'],
    },
    transport: {
      ar: 'حسب البرنامج المعتمد لكل موسم',
      fr: 'Selon le programme retenu chaque saison',
    },
    importantInfo: {
      ar: [
        'الحج يخضع لإجراءات رسمية ومتطلبات تتغير من موسم لآخر.',
        'وكالة التوارس لا تدّعي حصصًا أو موافقات غير مؤكدة على هذا الموقع.',
        'للاطلاع على إمكانية التسجيل والشروط الحالية، تواصلوا مباشرة مع الفريق.',
      ],
      fr: [
        'Le Hajj est soumis à des procédures officielles qui évoluent chaque saison.',
        'Agence Tawars n’affiche aucune quote-part ou agrément non vérifié sur ce site.',
        'Pour connaître les conditions actuelles d’inscription, contactez directement l’équipe.',
      ],
    },
  },
]

export const destinations = [
  {
    id: 'turkey',
    slug: 'turquie',
    name: { ar: 'تركيا', fr: 'Turquie' },
    shortDescription: {
      ar: 'إسطنبول وكابادوكيا وبورصة — ثقافة، تاريخ ومناظر خلابة في رحلة منظمة.',
      fr: 'Istanbul, Cappadoce, Bursa — culture, histoire et paysages dans un circuit organisé.',
    },
    description: {
      ar: 'اكتشفوا جمال تركيا بين أسواق إسطنبول التاريخية، معالمها الحضارية، وإطلالات كابادوكيا الفريدة. برامجنا قابلة للتخصيص حسب عدد الأيام والفنادق.',
      fr: 'Découvrez la Turquie entre les bazars d’Istanbul, son patrimoine et les paysages uniques de Cappadoce. Programmes modulables selon durée et hôtels.',
    },
    duration: { ar: 'من 7 أيام', fr: 'À partir de 7 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-turkey.jpg',
    gallery: ['/images/dest-turkey.jpg'],
    hotel: { ar: 'فنادق 4★ / 5★ حسب العرض', fr: 'Hôtels 4★ / 5★ selon offre' },
    flight: { ar: 'رحلة ذهاب وإياب (حسب التوفر)', fr: 'Vol A/R (selon disponibilité)' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران حسب العرض', 'الإقامة', 'النقل الداخلي للبرنامج', 'مرشد / مرافقة', 'بعض الوجبات حسب الباقة'],
      fr: ['Vol selon offre', 'Hébergement', 'Transport du circuit', 'Guide / accompagnement', 'Repas selon formule'],
    },
    excluded: {
      ar: ['التأشيرة إن لزم', 'المصروفات الشخصية', 'الوجبات غير المذكورة'],
      fr: ['Visa si requis', 'Dépenses personnelles', 'Repas non inclus'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1–3', title: 'إسطنبول', detail: 'المعالم التاريخية، البوسفور، والأسواق.' },
        { day: 'اليوم 4–5', title: 'كابادوكيا أو بورصة', detail: 'حسب البرنامج المختار.' },
        { day: 'اليوم 6–7', title: 'العودة', detail: 'وقت حر خفيف والمغادرة.' },
      ],
      fr: [
        { day: 'Jours 1–3', title: 'Istanbul', detail: 'Sites historiques, Bosphore et bazars.' },
        { day: 'Jours 4–5', title: 'Cappadoce ou Bursa', detail: 'Selon le circuit choisi.' },
        { day: 'Jours 6–7', title: 'Retour', detail: 'Temps libre et départ.' },
      ],
    },
  },
  {
    id: 'azerbaijan',
    slug: 'azerbaidjan',
    name: { ar: 'أذربيجان', fr: 'Azerbaïdjan' },
    shortDescription: {
      ar: 'باكو الحديثة وروح القوقاز — وجهة مميزة للعائلات والأصدقاء.',
      fr: 'Bakou moderne et esprit du Caucase — destination idéale en famille ou entre amis.',
    },
    description: {
      ar: 'رحلة إلى أذربيجان تجمع بين عمارة باكو المعاصرة والتراث المحلي. إقامة مريحة وبرنامج زيارات متوازن.',
      fr: 'Un séjour en Azerbaïdjan alliant l’architecture contemporaine de Bakou et le patrimoine local. Hébergement confortable et programme équilibré.',
    },
    duration: { ar: 'من 6 أيام', fr: 'À partir de 6 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-azerbaijan.jpg',
    gallery: ['/images/dest-azerbaijan.jpg'],
    hotel: { ar: 'فنادق مختارة في باكو', fr: 'Hôtels sélectionnés à Bakou' },
    flight: { ar: 'رحلة ذهاب وإياب', fr: 'Vol A/R' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران', 'الإقامة', 'التنقلات الأساسية', 'المرافقة'],
      fr: ['Vol', 'Hébergement', 'Transferts de base', 'Accompagnement'],
    },
    excluded: {
      ar: ['التأشيرة / التصاريح', 'المصروفات الشخصية'],
      fr: ['Visa / autorisations', 'Dépenses personnelles'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'الوصول', detail: 'الاستقبال ونقل إلى الفندق.' },
        { day: 'اليوم 2–4', title: 'باكو والمناطق', detail: 'جولات في المدينة والمعالم حسب البرنامج.' },
        { day: 'اليوم 5–6', title: 'الختام', detail: 'وقت حر والعودة.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Arrivée', detail: 'Accueil et transfert hôtel.' },
        { day: 'Jours 2–4', title: 'Bakou et environs', detail: 'Visites selon le programme.' },
        { day: 'Jours 5–6', title: 'Clôture', detail: 'Temps libre et retour.' },
      ],
    },
  },
  {
    id: 'dubai',
    slug: 'dubai',
    name: { ar: 'دبي', fr: 'Dubaï' },
    shortDescription: {
      ar: 'مدينة الأضواء والتسوق والمعالم الحديثة — عطلة قصيرة مميزة.',
      fr: 'Ville des lumières, shopping et attractions modernes — escapade premium.',
    },
    description: {
      ar: 'برنامج دبي يجمع بين المعالم الشهيرة، التسوق، والتجارب الترفيهية مع إقامة فندقية مناسبة للعائلات والأزواج.',
      fr: 'Le programme Dubaï combine attractions phares, shopping et loisirs, avec un hébergement adapté aux familles et couples.',
    },
    duration: { ar: 'من 5 أيام', fr: 'À partir de 5 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-dubai.jpg',
    gallery: ['/images/dest-dubai.jpg'],
    hotel: { ar: 'فنادق 4★ / 5★', fr: 'Hôtels 4★ / 5★' },
    flight: { ar: 'رحلة ذهاب وإياب', fr: 'Vol A/R' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران', 'الإقامة', 'نقل المطار', 'بعض الجولات حسب الباقة'],
      fr: ['Vol', 'Hébergement', 'Transfert aéroport', 'Certaines excursions selon formule'],
    },
    excluded: {
      ar: ['التأشيرة', 'التذاكر الترفيهية غير المدرجة', 'المصروفات الشخصية'],
      fr: ['Visa', 'Tickets attractions non inclus', 'Dépenses personnelles'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'الوصول', detail: 'نقل إلى الفندق ووقت للراحة.' },
        { day: 'اليوم 2–4', title: 'استكشاف دبي', detail: 'معالم المدينة، المولات، والاختيار الحر.' },
        { day: 'اليوم 5', title: 'العودة', detail: 'المغادرة حسب موعد الرحلة.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Arrivée', detail: 'Transfert hôtel et repos.' },
        { day: 'Jours 2–4', title: 'Découverte', detail: 'Sites, malls et temps libre.' },
        { day: 'Jour 5', title: 'Retour', detail: 'Départ selon l’horaire du vol.' },
      ],
    },
  },
  {
    id: 'malaysia',
    slug: 'malaisie',
    name: { ar: 'ماليزيا', fr: 'Malaisie' },
    shortDescription: {
      ar: 'كوالالمبور والجزر — طبيعة، مدن حديثة، وتجربة آسيوية مميزة.',
      fr: 'Kuala Lumpur et les îles — nature, villes modernes et expérience asiatique.',
    },
    description: {
      ar: 'رحلة إلى ماليزيا تجمع بين ناطحات كوالالمبور والشواطئ الاستوائية. مناسبة للعائلات وللباحثين عن تجربة مختلفة.',
      fr: 'Un voyage en Malaisie entre les gratte-ciel de Kuala Lumpur et les plages tropicales. Idéal en famille ou pour une expérience différente.',
    },
    duration: { ar: 'من 8 أيام', fr: 'À partir de 8 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-malaysia.jpg',
    gallery: ['/images/dest-malaysia.jpg'],
    hotel: { ar: 'فنادق مختارة', fr: 'Hôtels sélectionnés' },
    flight: { ar: 'رحلة دولية ذهاب وإياب', fr: 'Vol international A/R' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران', 'الإقامة', 'بعض التنقلات', 'المرافقة حسب العرض'],
      fr: ['Vol', 'Hébergement', 'Certains transferts', 'Accompagnement selon offre'],
    },
    excluded: {
      ar: ['التأشيرة إن لزم', 'المصروفات الشخصية'],
      fr: ['Visa si requis', 'Dépenses personnelles'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1–3', title: 'كوالالمبور', detail: 'معالم العاصمة والجولات الحضرية.' },
        { day: 'اليوم 4–6', title: 'جزيرة / طبيعة', detail: 'حسب الباقة المختارة.' },
        { day: 'اليوم 7–8', title: 'العودة', detail: 'الانتقال والمغادرة.' },
      ],
      fr: [
        { day: 'Jours 1–3', title: 'Kuala Lumpur', detail: 'Sites de la capitale.' },
        { day: 'Jours 4–6', title: 'Île / nature', detail: 'Selon la formule.' },
        { day: 'Jours 7–8', title: 'Retour', detail: 'Transfert et départ.' },
      ],
    },
  },
  {
    id: 'europe',
    slug: 'europe',
    name: { ar: 'أوروبا', fr: 'Europe' },
    shortDescription: {
      ar: 'باريس، إسطنبول الأوروبية، أو جولات متعددة المدن — حسب الموسم والطلب.',
      fr: 'Paris, circuits multi-villes — selon saison et demande.',
    },
    description: {
      ar: 'نساعدكم في تنظيم رحلات أوروبية فردية أو جماعية: مدن كلاسيكية، إقامات مختارة، وبرامج مرنة. التفاصيل تُبنى حسب وجهتكم.',
      fr: 'Nous organisons des voyages européens individuels ou en groupe : villes classiques, hébergements sélectionnés et programmes flexibles selon votre destination.',
    },
    duration: { ar: 'حسب البرنامج', fr: 'Selon le programme' },
    price: {
      display: { ar: 'عرض مخصص', fr: 'Devis sur mesure' },
    },
    image: '/images/dest-europe.jpg',
    gallery: ['/images/dest-europe.jpg'],
    hotel: { ar: 'حسب الوجهة والفئة', fr: 'Selon destination et catégorie' },
    flight: { ar: 'حسب الوجهة', fr: 'Selon destination' },
    departure: { ar: 'الجزائر / حسب الاتفاق', fr: 'Alger / selon accord' },
    included: {
      ar: ['حسب العرض المفصل'],
      fr: ['Selon devis détaillé'],
    },
    excluded: {
      ar: ['حسب العرض المفصل'],
      fr: ['Selon devis détaillé'],
    },
    itinerary: {
      ar: [
        { day: '—', title: 'برنامج مخصص', detail: 'يُصمَّم حسب المدن المختارة وعدد الأيام.' },
      ],
      fr: [
        { day: '—', title: 'Programme sur mesure', detail: 'Conçu selon les villes et la durée choisies.' },
      ],
    },
  },
  {
    id: 'tunisia',
    slug: 'tunisie',
    name: { ar: 'تونس', fr: 'Tunisie' },
    shortDescription: {
      ar: 'شواطئ، ثقافة وتقارب — وجهة مريحة للعائلات.',
      fr: 'Plages, culture et proximité — destination familiale confortable.',
    },
    description: {
      ar: 'رحلة إلى تونس تجمع بين الراحة الشاطئية والمعالم الثقافية. مناسبة لعطلة قصيرة أو أسبوع عائلي.',
      fr: 'Un séjour en Tunisie entre plages et patrimoine. Idéal pour une courte escapade ou une semaine en famille.',
    },
    duration: { ar: 'من 5 أيام', fr: 'À partir de 5 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-tunisia.jpg',
    gallery: ['/images/dest-tunisia.jpg'],
    hotel: { ar: 'منتجعات / فنادق شاطئية', fr: 'Résorts / hôtels balnéaires' },
    flight: { ar: 'رحلة ذهاب وإياب', fr: 'Vol A/R' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران', 'الإقامة', 'نقل المطار'],
      fr: ['Vol', 'Hébergement', 'Transfert aéroport'],
    },
    excluded: {
      ar: ['المصروفات الشخصية', 'الرحلات الاختيارية'],
      fr: ['Dépenses personnelles', 'Excursions optionnelles'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1', title: 'الوصول', detail: 'نقل إلى المنتجع.' },
        { day: 'اليوم 2–4', title: 'إقامة واستكشاف', detail: 'شاطئ وزيارات اختيارية.' },
        { day: 'اليوم 5', title: 'العودة', detail: 'المغادرة.' },
      ],
      fr: [
        { day: 'Jour 1', title: 'Arrivée', detail: 'Transfert vers le resort.' },
        { day: 'Jours 2–4', title: 'Séjour', detail: 'Plage et excursions optionnelles.' },
        { day: 'Jour 5', title: 'Retour', detail: 'Départ.' },
      ],
    },
  },
  {
    id: 'morocco',
    slug: 'maroc',
    name: { ar: 'المغرب', fr: 'Maroc' },
    shortDescription: {
      ar: 'مراكش، الدار البيضاء، فاس — أصالة المغرب في رحلة منظمة.',
      fr: 'Marrakech, Casablanca, Fès — l’authenticité marocaine en circuit.',
    },
    description: {
      ar: 'اكتشفوا أسواق مراكش وأزقة فاس وروح المدن المغربية. برامج مرنة للعائلات والمجموعات.',
      fr: 'Explorez les souks de Marrakech, les ruelles de Fès et l’âme des villes marocaines. Formules flexibles pour familles et groupes.',
    },
    duration: { ar: 'من 6 أيام', fr: 'À partir de 6 jours' },
    price: {
      display: { ar: 'من — دج (عند الطلب)', fr: 'À partir de — DZD (sur demande)' },
    },
    image: '/images/dest-morocco.jpg',
    gallery: ['/images/dest-morocco.jpg'],
    hotel: { ar: 'رياضات / فنادق حسب العرض', fr: 'Riad / hôtels selon offre' },
    flight: { ar: 'رحلة ذهاب وإياب', fr: 'Vol A/R' },
    departure: { ar: 'الجزائر العاصمة', fr: 'Alger' },
    included: {
      ar: ['الطيران', 'الإقامة', 'بعض الجولات', 'المرافقة'],
      fr: ['Vol', 'Hébergement', 'Certaines visites', 'Accompagnement'],
    },
    excluded: {
      ar: ['المصروفات الشخصية', 'الوجبات غير المذكورة'],
      fr: ['Dépenses personnelles', 'Repas non inclus'],
    },
    itinerary: {
      ar: [
        { day: 'اليوم 1–2', title: 'الدار البيضاء / مراكش', detail: 'حسب خط السير.' },
        { day: 'اليوم 3–5', title: 'فاس أو الصحراء', detail: 'حسب الباقة.' },
        { day: 'اليوم 6', title: 'العودة', detail: 'المغادرة.' },
      ],
      fr: [
        { day: 'Jours 1–2', title: 'Casablanca / Marrakech', detail: 'Selon l’itinéraire.' },
        { day: 'Jours 3–5', title: 'Fès ou désert', detail: 'Selon la formule.' },
        { day: 'Jour 6', title: 'Retour', detail: 'Départ.' },
      ],
    },
  },
]

export const faqs = [
  {
    id: 'faq-1',
    category: 'booking',
    question: {
      ar: 'كيف يمكنني حجز العمرة؟',
      fr: 'Comment réserver une Omra ?',
    },
    answer: {
      ar: 'يمكنكم اختيار البرنامج المناسب من صفحة العمرة، ثم إرسال طلب عبر النموذج أو التواصل مباشرة عبر WhatsApp. يقوم فريق التوارس بالرد عليكم لتأكيد التفاصيل والتواريخ والتوفر.',
      fr: 'Choisissez le programme sur la page Omra, puis envoyez une demande via le formulaire ou WhatsApp. L’équipe Tawars vous répond pour confirmer détails, dates et disponibilité.',
    },
  },
  {
    id: 'faq-2',
    category: 'documents',
    question: {
      ar: 'ما الوثائق المطلوبة للعمرة؟',
      fr: 'Quels documents pour l’Omra ?',
    },
    answer: {
      ar: 'عمومًا يُطلب جواز سفر ساري المفعول وصور شخصية ومستندات إضافية حسب الحالة. القائمة الدقيقة تُبلَّغ عند بدء إجراءات ملفكم، لأنها قد تختلف.',
      fr: 'En général : passeport valide, photos d’identité et documents complémentaires selon le dossier. La liste exacte est communiquée au démarrage de votre dossier.',
    },
  },
  {
    id: 'faq-3',
    category: 'contact',
    question: {
      ar: 'هل يمكنني التواصل عبر WhatsApp؟',
      fr: 'Puis-je vous contacter sur WhatsApp ?',
    },
    answer: {
      ar: 'نعم. WhatsApp من أسرع طرق التواصل معنا. يمكنكم إرسال استفساركم مع اسم البرنامج أو الوجهة المطلوبة وسنرد عليكم في أقرب وقت.',
      fr: 'Oui. WhatsApp est l’un des moyens les plus rapides. Indiquez le programme ou la destination souhaitée et nous vous répondrons rapidement.',
    },
  },
  {
    id: 'faq-4',
    category: 'omra',
    question: {
      ar: 'ماذا يشمل برنامج العمرة عادةً؟',
      fr: 'Que comprend généralement un programme Omra ?',
    },
    answer: {
      ar: 'غالبًا يشمل الطيران، الإقامة، النقل الأساسي، والمساعدة/المرافقة. كل باقة توضح بوضوح ما هو مشمول وما هو غير مشمول قبل التأكيد.',
      fr: 'En général : vol, hébergement, transferts de base et assistance. Chaque formule détaille clairement le inclus / non inclus avant confirmation.',
    },
  },
  {
    id: 'faq-5',
    category: 'omra',
    question: {
      ar: 'هل يمكن اختيار الفندق؟',
      fr: 'Peut-on choisir l’hôtel ?',
    },
    answer: {
      ar: 'نعم ضمن الإمكان والتوفر. نعرض خيارات حسب الميزانية والقرب من الحرم، ونؤكد الفندق النهائي عند الحجز.',
      fr: 'Oui dans la mesure du possible. Nous proposons des options selon budget et proximité du Haram, et confirmons l’hôtel à la réservation.',
    },
  },
  {
    id: 'faq-6',
    category: 'payment',
    question: {
      ar: 'كيف يتم الدفع؟',
      fr: 'Comment se passe le paiement ?',
    },
    answer: {
      ar: 'تُوضَّح طرق ومراحل الدفع عند تأكيد العرض مع الوكالة. لا تتم عمليات دفع عبر هذا الموقع مباشرة — التواصل مع الفريق يضمن الشفافية.',
      fr: 'Les modalités de paiement sont expliquées à la confirmation du devis. Aucun paiement en ligne sur ce site — le contact direct garantit la transparence.',
    },
  },
  {
    id: 'faq-7',
    category: 'services',
    question: {
      ar: 'هل توفرون النقل؟',
      fr: 'Proposez-vous le transport ?',
    },
    answer: {
      ar: 'نعم، النقل يكون ضمن البرامج المنظمة حسب الباقة (من وإلى المطار، وبين المدن عند الحاجة). التفاصيل تُذكر في كل عرض.',
      fr: 'Oui, le transport est inclus dans les programmes organisés selon la formule (aéroport et inter-villes si prévu). Les détails figurent dans chaque offre.',
    },
  },
  {
    id: 'faq-8',
    category: 'booking',
    question: {
      ar: 'كيف أعرف تفاصيل رحلتي؟',
      fr: 'Comment connaître les détails de mon voyage ?',
    },
    answer: {
      ar: 'بعد تأكيد الحجز، يصلكم ملخص واضح: المواعيد، الفندق، ما يشمله العرض، والتعليمات قبل السفر. ويبقى فريقنا متاحًا لأي استفسار.',
      fr: 'Après confirmation, vous recevez un récapitulatif clair : horaires, hôtel, inclusions et consignes avant départ. Notre équipe reste disponible.',
    },
  },
  {
    id: 'faq-9',
    category: 'booking',
    question: {
      ar: 'كيف يمكنني طلب عرض خاص؟',
      fr: 'Comment demander un devis personnalisé ?',
    },
    answer: {
      ar: 'عبر نموذج الحجز/الطلب أو WhatsApp: اذكروا الوجهة أو نوع البرنامج، عدد المسافرين، والتواريخ المفضلة. نعدّ عرضًا يناسب احتياجكم.',
      fr: 'Via le formulaire ou WhatsApp : indiquez destination ou type de programme, nombre de voyageurs et dates souhaitées. Nous préparons une offre adaptée.',
    },
  },
  {
    id: 'faq-10',
    category: 'hajj',
    question: {
      ar: 'هل يمكن التسجيل في الحج عبر الموقع؟',
      fr: 'Peut-on s’inscrire au Hajj via le site ?',
    },
    answer: {
      ar: 'الموقع يعرض إطار الخدمات ويتيح طلب معلومات. إجراءات الحج الفعلية تخضع للشروط الرسمية لكل موسم، ويُفضَّل التواصل المباشر مع الوكالة لمعرفة الوضع الحالي.',
      fr: 'Le site présente le cadre des services et permet une demande d’information. Les démarches Hajj dépendent des conditions officielles de chaque saison — contactez l’agence pour le statut actuel.',
    },
  },
  {
    id: 'faq-11',
    category: 'travel',
    question: {
      ar: 'هل تنظمون رحلات لوجهات غير المعروضة؟',
      fr: 'Organisez-vous d’autres destinations ?',
    },
    answer: {
      ar: 'نعم. الوجهات المعروضة نماذج قابلة للتعديل. أخبرونا بوجهتكم وميزانيتكم وسنرى الإمكانية.',
      fr: 'Oui. Les destinations affichées sont des exemples modulables. Indiquez votre projet et budget, nous étudions la faisabilité.',
    },
  },
  {
    id: 'faq-12',
    category: 'contact',
    question: {
      ar: 'أين تقع وكالة التوارس؟',
      fr: 'Où se trouve Agence Tawars ?',
    },
    answer: {
      ar: 'الوكالة في مدينة البليدة، الجزائر. يمكنكم العثور على تفاصيل الاتصال وخريطة الموقع في صفحة اتصل بنا.',
      fr: 'L’agence est située à Blida, Algérie. Coordonnées et carte sont disponibles sur la page Contact.',
    },
  },
]

export const testimonials = [
  {
    id: 'demo-1',
    isDemo: true,
    name: { ar: 'أمينة ر.', fr: 'Amina R.' },
    location: { ar: 'البليدة', fr: 'Blida' },
    text: {
      ar: 'تجربة رائعة والتنظيم كان ممتازًا. التواصل كان واضحًا من البداية حتى العودة.',
      fr: 'Excellente expérience, organisation soignée. Communication claire du début jusqu’au retour.',
    },
    service: { ar: 'عمرة', fr: 'Omra' },
  },
  {
    id: 'demo-2',
    isDemo: true,
    name: { ar: 'كريم ب.', fr: 'Karim B.' },
    location: { ar: 'الجزائر', fr: 'Alger' },
    text: {
      ar: 'ساعدونا في اختيار برنامج يناسب العائلة. الإقامة كانت مريحة والمتابعة مطمئنة.',
      fr: 'Ils nous ont aidés à choisir une formule adaptée à la famille. Séjour confortable et suivi rassurant.',
    },
    service: { ar: 'عمرة مريحة', fr: 'Omra Confort' },
  },
  {
    id: 'demo-3',
    isDemo: true,
    name: { ar: 'سارة م.', fr: 'Sara M.' },
    location: { ar: 'البليدة', fr: 'Blida' },
    text: {
      ar: 'رحلة تركيا كانت منظمة والبرنامج واضح. أنصح بالتواصل عبر WhatsApp للرد السريع.',
      fr: 'Voyage en Turquie bien organisé, programme clair. WhatsApp très pratique pour les réponses rapides.',
    },
    service: { ar: 'رحلة تركيا', fr: 'Voyage Turquie' },
  },
]

export const whyTawars = [
  {
    id: 'w1',
    icon: 'compass',
    title: { ar: 'خبرة وتنظيم', fr: 'Organisation maîtrisée' },
    text: {
      ar: 'نرتّب تفاصيل الرحلة بوضوح: المواعيد، الإقامة، والتنقلات — لتسافروا وأنتم مطمئنون.',
      fr: 'Nous organisons clairement horaires, hébergement et déplacements — pour voyager l’esprit tranquille.',
    },
  },
  {
    id: 'w2',
    icon: 'map',
    title: { ar: 'برامج مدروسة', fr: 'Programmes réfléchis' },
    text: {
      ar: 'باقات عملية من الأساسية إلى المميزة، مع إمكانية تكييف العرض حسب احتياجكم.',
      fr: 'Des formules de l’essentielle au premium, adaptables selon vos besoins.',
    },
  },
  {
    id: 'w3',
    icon: 'headset',
    title: { ar: 'متابعة قبل وأثناء الرحلة', fr: 'Suivi avant et pendant' },
    text: {
      ar: 'فريق متاح للرد على استفساراتكم ومساعدتكم في المراحل المهمة من التحضير حتى التنفيذ.',
      fr: 'Une équipe disponible pour vous accompagner de la préparation jusqu’au déroulement du séjour.',
    },
  },
  {
    id: 'w4',
    icon: 'heart',
    title: { ar: 'خدمة عملاء قريبة', fr: 'Relation client de proximité' },
    text: {
      ar: 'تواصل مباشر عبر الهاتف وWhatsApp من البليدة — بدون تعقيد وبأسلوب واضح.',
      fr: 'Contact direct téléphone et WhatsApp depuis Blida — simple et transparent.',
    },
  },
  {
    id: 'w5',
    icon: 'building',
    title: { ar: 'إقامة وخيارات متعددة', fr: 'Hébergement & options' },
    text: {
      ar: 'نساعدكم في اختيار مستوى الإقامة المناسب لميزانيتكم وتفضيلاتكم.',
      fr: 'Nous vous aidons à choisir le niveau d’hébergement adapté à votre budget.',
    },
  },
  {
    id: 'w6',
    icon: 'sparkles',
    title: { ar: 'اهتمام بالتفاصيل', fr: 'Attention aux détails' },
    text: {
      ar: 'من الوثائق إلى التنقلات — نحرص على أن تكون الصورة كاملة قبل تأكيدكم.',
      fr: 'Des documents aux transferts — une vision claire avant votre confirmation.',
    },
  },
]

export const hajjServices = [
  {
    id: 'hs1',
    title: { ar: 'التوجيه والتحضير', fr: 'Orientation & préparation' },
    text: {
      ar: 'شرح خطوات الملف، الوثائق المطلوبة، وما تحتاجونه قبل السفر — بوضوح وبلا وعود مبالغ فيها.',
      fr: 'Explication des étapes du dossier et des documents — avec clarté, sans promesses excessives.',
    },
  },
  {
    id: 'hs2',
    title: { ar: 'الإقامة', fr: 'Hébergement' },
    text: {
      ar: 'خيارات إقامة حسب الفئة والتوفر الموسمي، مع توضيح المسافات والخدمات قدر الإمكان.',
      fr: 'Options d’hébergement selon formule et disponibilité saisonnière, avec distances et services précisés autant que possible.',
    },
  },
  {
    id: 'hs3',
    title: { ar: 'النقل', fr: 'Transport' },
    text: {
      ar: 'تنظيم التنقلات ضمن البرنامج المعتمد، مع مراعاة طبيعة موسم الحج والظروف الميدانية.',
      fr: 'Organisation des déplacements inclus dans le programme, en tenant compte des conditions du Hajj.',
    },
  },
  {
    id: 'hs4',
    title: { ar: 'المرافقة والإرشاد', fr: 'Accompagnement & guidance' },
    text: {
      ar: 'مرافقة تساعد المجموعة على متابعة البرنامج والمناسك بطمأنينة أكبر.',
      fr: 'Un accompagnement pour suivre le programme et les rites avec plus de sérénité.',
    },
  },
]

export const bookingProcess = [
  {
    step: 1,
    title: { ar: 'الاستفسار', fr: 'Demande' },
    text: {
      ar: 'أرسلوا طلبكم عبر النموذج أو WhatsApp مع عدد المسافرين والتواريخ المفضلة.',
      fr: 'Envoyez votre demande via le formulaire ou WhatsApp avec le nombre de voyageurs et les dates.',
    },
  },
  {
    step: 2,
    title: { ar: 'العرض', fr: 'Proposition' },
    text: {
      ar: 'نراجع التوفر ونقدّم عرضًا واضحًا: ما يشمله السعر وما لا يشمله.',
      fr: 'Nous vérifions les disponibilités et proposons une offre claire : inclus et non inclus.',
    },
  },
  {
    step: 3,
    title: { ar: 'التأكيد', fr: 'Confirmation' },
    text: {
      ar: 'بعد موافقتكم، نؤكد الترتيبات ونشارككم تفاصيل الرحلة والتعليمات.',
      fr: 'Après votre accord, nous confirmons les arrangements et partageons les détails du voyage.',
    },
  },
  {
    step: 4,
    title: { ar: 'السفر والمتابعة', fr: 'Voyage & suivi' },
    text: {
      ar: 'نبقى على تواصل للمتابعة قبل المغادرة وأثناء البرنامج حسب الاتفاق.',
      fr: 'Nous restons en contact avant le départ et pendant le programme selon l’accord.',
    },
  },
]

export function getUmrahBySlug(slug) {
  return umrahPackages.find((p) => p.slug === slug)
}

export function getHajjBySlug(slug) {
  return hajjPackages.find((p) => p.slug === slug)
}

export function getDestinationBySlug(slug) {
  return destinations.find((d) => d.slug === slug)
}

export function getPackageBySlug(slug) {
  return getUmrahBySlug(slug) || getHajjBySlug(slug) || getDestinationBySlug(slug)
}
