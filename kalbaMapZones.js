/* ============================================================================
   kalbaMapZones.js — the single source of truth for the interactive map.
   Every hotspot lives here: adjust x / y (percentages of the map image) and the
   UI repositions itself — no need to touch map.html.

   Tip: open map.html?calibrate=1, click anywhere on the map, and the exact
   x / y percentages are shown and copied for you.

   status: 'open' | 'live' | 'soon'
   ========================================================================== */
window.KALBA_MAP = {

  /* The official illustrated master plan — the untouched hero of the page. */
  imageSrc: 'portals/festival-map.jpg',
  imageFallback: 'portals/festival-map.webp',

  venueGeo: '25.0757,56.3620',   /* for the Directions button */

  categories: [
    { id: 'sports',        ar: 'الرياضات',          en: 'Sports',            color: '#4cc276' },
    { id: 'event',         ar: 'الفعاليات',          en: 'Events',            color: '#4da3ff' },
    { id: 'entertainment', ar: 'الترفيه والألعاب',   en: 'Entertainment',     color: '#ff5c8a' },
    { id: 'services',      ar: 'الخدمات والمرافق',   en: 'Services',          color: '#ff9138' },
    { id: 'access',        ar: 'المداخل والمواقف',   en: 'Access & Parking',  color: '#b07cff' }
  ],

  /* Zones the quick-jump bar offers, in order. */
  quickJump: ['stage', 'football', 'restaurants', 'gate-1', 'boxing'],

  zones: [

    /* ---------------- sports ---------------- */
    { id: 'beach-volleyball', nameAr: 'ملعب كرة طائرة شاطئية', nameEn: 'Beach Volleyball Court',
      x: 16.5, y: 17.5, category: 'sports', icon: 'volleyball',
      descAr: 'الملعب الرملي الرئيسي لبطولة الكرة الطائرة الشاطئية بجوار مدرجات الجمهور.',
      descEn: 'The main sand court of the beach volleyball championship, beside the public stands.',
      hours: '16:00–22:00', status: 'live', capacity: 400,
      schedule: [{ t: '16:30', ar: 'دور المجموعات', en: 'Group stage' }, { t: '20:00', ar: 'مباراة استعراضية', en: 'Exhibition match' }] },

    { id: 'ground-challenge', nameAr: 'حلبة التحدي الأرضي', nameEn: 'Ground Challenge Arena',
      x: 12.8, y: 33.4, category: 'sports', icon: 'flag',
      descAr: 'تحديات لياقة أرضية أمام الجمهور على مدار اليوم.',
      descEn: 'Open-floor fitness challenges running throughout the day.',
      hours: '16:00–21:00', status: 'open', capacity: 150,
      schedule: [{ t: '17:00', ar: 'تصفيات التحدي', en: 'Challenge heats' }] },

    { id: 'jetski', nameAr: 'حلبة الجتسكي', nameEn: 'Jet Ski Arena',
      x: 22.3, y: 35.5, category: 'sports', icon: 'wave',
      descAr: 'عروض وسباقات الجتسكي — تُتابع من الحلبة المخصصة.',
      descEn: 'Jet ski shows and races, followed from the dedicated arena.',
      hours: '16:30–20:30', status: 'open', capacity: 200,
      schedule: [{ t: '18:00', ar: 'سباق السرعة', en: 'Speed race' }] },

    { id: 'taekwondo', nameAr: 'حلبة التايكوندو', nameEn: 'Taekwondo Arena',
      x: 30.9, y: 36.0, category: 'sports', icon: 'martial',
      descAr: 'منافسات التايكوندو للفئات العمرية المعتمدة.',
      descEn: 'Taekwondo competition across the accredited age groups.',
      hours: '16:00–21:00', status: 'open', capacity: 180,
      schedule: [{ t: '16:30', ar: 'الأشبال والناشئون', en: 'Cubs & juniors' }, { t: '19:00', ar: 'الكبار', en: 'Seniors' }] },

    { id: 'football', nameAr: 'كرة القدم', nameEn: 'Football',
      x: 20.0, y: 51.0, category: 'sports', icon: 'football',
      descAr: 'الملعب الرئيسي لبطولة كرة القدم المجتمعية.',
      descEn: 'The main pitch of the community football championship.',
      hours: '16:00–22:00', status: 'live', capacity: 600,
      schedule: [{ t: '17:00', ar: 'دور المجموعات', en: 'Group stage' }, { t: '20:30', ar: 'مباراة الختام اليومية', en: 'Daily closing match' }] },

    { id: 'boxing', nameAr: 'حلبة الملاكمة', nameEn: 'Boxing Ring',
      x: 95.4, y: 57.5, category: 'sports', icon: 'boxing',
      descAr: 'نزالات الملاكمة على الحلبة المكشوفة شرق أرض المهرجان.',
      descEn: 'Boxing bouts on the open ring at the east side of the grounds.',
      hours: '17:00–21:30', status: 'soon', capacity: 250,
      schedule: [{ t: '19:00', ar: 'النزالات الرسمية', en: 'Official bouts' }] },

    { id: 'barriers', nameAr: 'الحواجز والموانع', nameEn: 'Obstacles Course',
      x: 8.6, y: 45.5, category: 'sports', icon: 'barrier',
      descAr: 'مسار الحواجز والموانع لسباق التحدي.',
      descEn: 'The barriers and obstacles course of the challenge race.',
      hours: '16:00–20:00', status: 'open', capacity: 120,
      schedule: [{ t: '17:30', ar: 'انطلاق المجموعات', en: 'Wave starts' }] },

    { id: 'basketball-stands', nameAr: 'مدرجات كرة السلة', nameEn: 'Basketball Stands',
      x: 93.0, y: 31.0, category: 'sports', icon: 'basketball',
      descAr: 'مدرجات ملعب كرة السلة 3×3 في الركن الشرقي.',
      descEn: 'The stands of the 3x3 basketball court in the east corner.',
      hours: '16:00–22:00', status: 'open', capacity: 350,
      schedule: [{ t: '18:30', ar: 'مباريات 3×3', en: '3x3 games' }] },

    /* ---------------- events ---------------- */
    { id: 'stage', nameAr: 'المسرح', nameEn: 'Main Stage',
      x: 50.2, y: 37.5, category: 'event', icon: 'stage',
      descAr: 'المسرح الرئيسي: حفل الافتتاح، التتويج والعروض اليومية.',
      descEn: 'The main stage: opening ceremony, podiums and the daily shows.',
      hours: '17:00–22:00', status: 'live', capacity: 900,
      schedule: [{ t: '18:00', ar: 'عرض الافتتاح اليومي', en: 'Daily opening show' }, { t: '21:00', ar: 'تتويج الأبطال', en: 'Champions podium' }] },

    { id: 'vip-majlis', nameAr: 'جلسات الشخصيات المهمة', nameEn: 'VIP Majlis',
      x: 47.8, y: 50.9, category: 'event', icon: 'star',
      descAr: 'جلسات مخصصة لكبار الضيوف قبالة المسرح الرئيسي.',
      descEn: 'Reserved seating for honoured guests, facing the main stage.',
      hours: '17:00–22:00', status: 'open', capacity: 120,
      schedule: [{ t: '20:45', ar: 'حضور التتويج', en: 'Podium attendance' }] },

    { id: 'tv', nameAr: 'التلفزيون', nameEn: 'TV Compound',
      x: 42.6, y: 30.4, category: 'event', icon: 'tv',
      descAr: 'مجمّع البث التلفزيوني والتغطية الإعلامية.',
      descEn: 'The broadcast compound and media coverage point.',
      hours: '15:00–23:00', status: 'open', capacity: 40,
      schedule: [{ t: '17:45', ar: 'بث مباشر', en: 'Live broadcast' }] },

    { id: 'police-arena', nameAr: 'حلبة الشرطة', nameEn: 'Police Show Arena',
      x: 58.9, y: 36.0, category: 'event', icon: 'shield',
      descAr: 'عروض شرطة الشارقة التفاعلية للجمهور.',
      descEn: 'Sharjah Police interactive shows for the public.',
      hours: '16:30–20:30', status: 'open', capacity: 200,
      schedule: [{ t: '18:15', ar: 'العرض التفاعلي', en: 'Interactive show' }] },

    { id: 'stands-public', nameAr: 'مدرجات الجمهور', nameEn: 'Public Stands',
      x: 19.0, y: 11.5, category: 'event', icon: 'stands',
      descAr: 'مدرجات متابعة الكرة الطائرة الشاطئية.',
      descEn: 'Spectator stands overlooking the beach volleyball court.',
      hours: '16:00–22:00', status: 'open', capacity: 500,
      schedule: [{ t: '16:30', ar: 'فتح الأبواب', en: 'Gates open' }] },

    /* ---------------- entertainment ---------------- */
    { id: 'egames-west', nameAr: 'الألعاب الإلكترونية', nameEn: 'E-Games Zone (West)',
      x: 43.2, y: 58.1, category: 'entertainment', icon: 'gamepad',
      descAr: 'منطقة الألعاب الإلكترونية الغربية — بطولات وتحديات مفتوحة.',
      descEn: 'The west e-games zone — open tournaments and challenges.',
      hours: '16:00–22:00', status: 'open', capacity: 80,
      schedule: [{ t: '19:00', ar: 'تصفيات البطولة', en: 'Tournament heats' }] },

    { id: 'egames-east', nameAr: 'الألعاب الإلكترونية', nameEn: 'E-Games Zone (East)',
      x: 59.0, y: 58.1, category: 'entertainment', icon: 'gamepad',
      descAr: 'منطقة الألعاب الإلكترونية الشرقية بجوار ورشة الأطفال.',
      descEn: 'The east e-games zone, next to the kids workshop.',
      hours: '16:00–22:00', status: 'open', capacity: 80,
      schedule: [{ t: '20:00', ar: 'نهائيات اليوم', en: 'Daily finals' }] },

    { id: 'paintball', nameAr: 'بينت بول', nameEn: 'Paintball',
      x: 30.5, y: 52.2, category: 'entertainment', icon: 'paint',
      descAr: 'ساحة البينت بول — جولات جماعية بمعدات كاملة.',
      descEn: 'The paintball field — team rounds with full gear provided.',
      hours: '16:00–21:00', status: 'open', capacity: 60,
      schedule: [{ t: '17:00', ar: 'جولات مفتوحة', en: 'Open rounds' }] },

    { id: 'kids-workshop', nameAr: 'ورشة أطفال', nameEn: 'Kids Workshop',
      x: 70.6, y: 59.1, category: 'entertainment', icon: 'kids',
      descAr: 'ورش إبداعية يومية للأطفال بإشراف مختصين.',
      descEn: 'Daily creative workshops for children, run by specialists.',
      hours: '16:00–20:00', status: 'open', capacity: 50,
      schedule: [{ t: '16:30', ar: 'ورشة الرسم', en: 'Painting workshop' }, { t: '18:30', ar: 'ورشة الأشغال', en: 'Crafts workshop' }] },

    { id: 'side-games', nameAr: 'ألعاب مصاحبة', nameEn: 'Side Games',
      x: 80.3, y: 59.1, category: 'entertainment', icon: 'games',
      descAr: 'ألعاب عائلية مصاحبة بجوار قسم المطاعم.',
      descEn: 'Family side games, right beside the food court.',
      hours: '16:00–22:00', status: 'open', capacity: 100,
      schedule: [{ t: '16:00', ar: 'مفتوحة طوال اليوم', en: 'Open all day' }] },

    /* ---------------- services ---------------- */
    { id: 'restaurants', nameAr: 'قسم المطاعم', nameEn: 'Food Court',
      x: 78.8, y: 38.8, category: 'services', icon: 'food',
      descAr: 'قسم المطاعم والمقاهي بجلسات خارجية مطلة على الفعاليات.',
      descEn: 'Restaurants and cafés with outdoor seating over the grounds.',
      hours: '15:00–23:00', status: 'open', capacity: 300,
      schedule: [{ t: '15:00', ar: 'يفتح يومياً', en: 'Opens daily' }] },

    { id: 'wc-men', nameAr: 'دورات مياه الرجال', nameEn: 'Men’s Toilets',
      x: 67.5, y: 39.0, category: 'services', icon: 'wc',
      descAr: 'دورات مياه الرجال — شمال شرق أرض المهرجان.',
      descEn: 'Men’s toilets — north-east of the grounds.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'wc-women', nameAr: 'دورات مياه النساء', nameEn: 'Women’s Toilets',
      x: 64.8, y: 47.1, category: 'services', icon: 'wc',
      descAr: 'دورات مياه النساء — وسط أرض المهرجان.',
      descEn: 'Women’s toilets — centre of the grounds.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'wc-family', nameAr: 'دورات مياه', nameEn: 'Toilets',
      x: 72.5, y: 47.1, category: 'services', icon: 'wc',
      descAr: 'دورات مياه عامة بجوار قسم المطاعم.',
      descEn: 'Public toilets beside the food court.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'community-police', nameAr: 'الشرطة المجتمعية', nameEn: 'Community Police',
      x: 36.8, y: 47.1, category: 'services', icon: 'shield',
      descAr: 'نقطة الشرطة المجتمعية للمساعدة والمفقودات.',
      descEn: 'The community police point for assistance and lost & found.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'parking-police', nameAr: 'مواقف الشرطة', nameEn: 'Police Parking',
      x: 49.3, y: 27.3, category: 'services', icon: 'shield',
      descAr: 'مواقف مخصصة لآليات الشرطة.',
      descEn: 'Reserved parking for police vehicles.',
      hours: '24/7', status: 'open', capacity: 30, schedule: [] },

    { id: 'parking-civil-defense', nameAr: 'مواقف الدفاع المدني', nameEn: 'Civil Defence Parking',
      x: 58.1, y: 27.3, category: 'services', icon: 'siren',
      descAr: 'مواقف مخصصة لآليات الدفاع المدني.',
      descEn: 'Reserved parking for civil defence vehicles.',
      hours: '24/7', status: 'open', capacity: 20, schedule: [] },

    /* ---------------- access & parking ---------------- */
    { id: 'gate-1', nameAr: 'مدخل 01', nameEn: 'Entrance 01',
      x: 50.5, y: 73.6, category: 'access', icon: 'gate', gate: '01',
      descAr: 'المدخل الرئيسي الجنوبي من شارع الكورنيش.',
      descEn: 'The main south entrance from the corniche road.',
      hours: '15:00–23:00', status: 'open', capacity: null,
      schedule: [{ t: '15:00', ar: 'فتح الأبواب', en: 'Gates open' }] },

    { id: 'gate-2', nameAr: 'مدخل 02', nameEn: 'Entrance 02',
      x: 89.5, y: 55.0, category: 'access', icon: 'gate', gate: '02',
      descAr: 'المدخل الشرقي — الأقرب لحلبة الملاكمة وقسم المطاعم.',
      descEn: 'The east entrance — closest to the boxing ring and food court.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'gate-3', nameAr: 'مدخل 03', nameEn: 'Entrance 03',
      x: 2.8, y: 54.0, category: 'access', icon: 'gate', gate: '03',
      descAr: 'المدخل الغربي — الأقرب لملعب كرة القدم وحلبة التحدي.',
      descEn: 'The west entrance — closest to the football pitch and challenge arena.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'parking-visitors-west', nameAr: 'مواقف زوار', nameEn: 'Visitor Parking (West)',
      x: 30.7, y: 15.5, category: 'access', icon: 'parking',
      descAr: 'مواقف الزوار الغربية أمام المبنى الرئيسي.',
      descEn: 'The west visitor parking, in front of the main building.',
      hours: '24/7', status: 'open', capacity: 220, schedule: [] },

    { id: 'parking-visitors-east', nameAr: 'مواقف زوار', nameEn: 'Visitor Parking (East)',
      x: 76.2, y: 21.5, category: 'access', icon: 'parking',
      descAr: 'مواقف الزوار الشرقية بجوار مدرجات كرة السلة.',
      descEn: 'The east visitor parking, near the basketball stands.',
      hours: '24/7', status: 'open', capacity: 180, schedule: [] },

    { id: 'parking-vip', nameAr: 'مواقف VIP', nameEn: 'VIP Parking',
      x: 22.9, y: 67.8, category: 'access', icon: 'parking',
      descAr: 'مواقف مظللة لكبار الضيوف على الواجهة الجنوبية.',
      descEn: 'Shaded parking for honoured guests along the south frontage.',
      hours: '15:00–23:00', status: 'open', capacity: 60, schedule: [] },

    { id: 'parking-classic', nameAr: 'مواقف السيارات القديمة', nameEn: 'Classic Cars Parking',
      x: 60.0, y: 82.9, category: 'access', icon: 'car',
      descAr: 'معرض ومواقف السيارات الكلاسيكية على الرصيف البحري.',
      descEn: 'The classic car display and parking on the sea-side deck.',
      hours: '16:00–22:00', status: 'open', capacity: 40,
      schedule: [{ t: '16:00', ar: 'عرض مفتوح', en: 'Open display' }] }
  ]
};
