/* ============================================================================
   kalbaMapZones.js — the single source of truth for the interactive map.
   Every hotspot lives here: adjust x / y (percentages of the map image) and the
   UI repositions itself — no need to touch map.html.

   Coordinates target the plan's own label pills, read off the official
   illustrated master plan (the corniche edition with named pills, no numbers).

   Tip: open map.html?calibrate=1, click anywhere on the map, and the exact
   x / y percentages are shown and copied for you.

   status: 'open' | 'live' | 'soon'
   ========================================================================== */
window.KALBA_MAP = {

  /* The official illustrated master plan — the untouched hero of the page. */
  imageSrc: 'portals/festival-map.webp',
  imageFallback: 'portals/festival-map.jpg',

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
      x: 18.1, y: 27.5, category: 'sports', icon: 'volleyball',
      descAr: 'الملعب الرملي الرئيسي لبطولة الكرة الطائرة الشاطئية بجوار مدرجات الجمهور.',
      descEn: 'The main sand court of the beach volleyball championship, beside the public stands.',
      hours: '16:00–22:00', status: 'live', capacity: 400,
      schedule: [{ t: '16:30', ar: 'دور المجموعات', en: 'Group stage' }, { t: '20:00', ar: 'مباراة استعراضية', en: 'Exhibition match' }] },

    { id: 'ground-challenge', nameAr: 'حلبة التحدي الأرضي', nameEn: 'Ground Challenge Arena',
      x: 23.6, y: 41.5, category: 'sports', icon: 'flag',
      descAr: 'تحديات لياقة أرضية أمام الجمهور على مدار اليوم.',
      descEn: 'Open-floor fitness challenges running throughout the day.',
      hours: '16:00–21:00', status: 'open', capacity: 150,
      schedule: [{ t: '17:00', ar: 'تصفيات التحدي', en: 'Challenge heats' }] },

    { id: 'jetski', nameAr: 'حلبة الجتسكي', nameEn: 'Jet Ski Arena',
      x: 30.1, y: 42.0, category: 'sports', icon: 'wave',
      descAr: 'عروض الجتسكي في الحوض المخصص وسط أرض المهرجان.',
      descEn: 'Jet ski shows in the dedicated basin at the heart of the grounds.',
      hours: '16:30–20:30', status: 'open', capacity: 200,
      schedule: [{ t: '18:00', ar: 'عرض السرعة', en: 'Speed show' }] },

    { id: 'taekwondo', nameAr: 'حلبة التايكوندو', nameEn: 'Taekwondo Arena',
      x: 35.3, y: 41.8, category: 'sports', icon: 'martial',
      descAr: 'منافسات التايكوندو للفئات العمرية المعتمدة.',
      descEn: 'Taekwondo competition across the accredited age groups.',
      hours: '16:00–21:00', status: 'open', capacity: 180,
      schedule: [{ t: '16:30', ar: 'الأشبال والناشئون', en: 'Cubs & juniors' }, { t: '19:00', ar: 'الكبار', en: 'Seniors' }] },

    { id: 'football', nameAr: 'كرة القدم', nameEn: 'Football',
      x: 21.5, y: 56.7, category: 'sports', icon: 'football',
      descAr: 'الملعب الرئيسي لبطولة كرة القدم المجتمعية.',
      descEn: 'The main pitch of the community football championship.',
      hours: '16:00–22:00', status: 'live', capacity: 600,
      schedule: [{ t: '17:00', ar: 'دور المجموعات', en: 'Group stage' }, { t: '20:30', ar: 'مباراة الختام اليومية', en: 'Daily closing match' }] },

    { id: 'boxing', nameAr: 'حلبة الملاكمة', nameEn: 'Boxing Ring',
      x: 93.4, y: 60.0, category: 'sports', icon: 'boxing',
      descAr: 'نزالات الملاكمة على الحلبة المكشوفة شرق أرض المهرجان.',
      descEn: 'Boxing bouts on the open ring at the east side of the grounds.',
      hours: '17:00–21:30', status: 'soon', capacity: 250,
      schedule: [{ t: '19:00', ar: 'النزالات الرسمية', en: 'Official bouts' }] },

    { id: 'barriers', nameAr: 'الحواجز والموانع', nameEn: 'Obstacles Course',
      x: 12.2, y: 51.0, category: 'sports', icon: 'barrier',
      descAr: 'مسار الحواجز والموانع لسباق التحدي غرب ملعب كرة القدم.',
      descEn: 'The barriers and obstacles course, west of the football pitch.',
      hours: '16:00–20:00', status: 'open', capacity: 120,
      schedule: [{ t: '17:30', ar: 'انطلاق المجموعات', en: 'Wave starts' }] },

    { id: 'basketball-stands', nameAr: 'مدرجات كرة السلة', nameEn: 'Basketball Stands',
      x: 95.5, y: 44.0, category: 'sports', icon: 'basketball',
      descAr: 'مدرجات ملعب كرة السلة في الركن الشرقي المطل على البحر.',
      descEn: 'The stands of the basketball court in the sea-side east corner.',
      hours: '16:00–22:00', status: 'open', capacity: 350,
      schedule: [{ t: '18:30', ar: 'مباريات 3×3', en: '3x3 games' }] },

    /* ---------------- events ---------------- */
    { id: 'stage', nameAr: 'المسرح', nameEn: 'Main Stage',
      x: 48.9, y: 41.0, category: 'event', icon: 'stage',
      descAr: 'المسرح الرئيسي: حفل الافتتاح، التتويج والعروض اليومية.',
      descEn: 'The main stage: opening ceremony, podiums and the daily shows.',
      hours: '17:00–22:00', status: 'live', capacity: 900,
      schedule: [{ t: '18:00', ar: 'عرض الافتتاح اليومي', en: 'Daily opening show' }, { t: '21:00', ar: 'تتويج الأبطال', en: 'Champions podium' }] },

    { id: 'vip-majlis', nameAr: 'جلسات الشخصيات المهمة', nameEn: 'VIP Majlis',
      x: 51.4, y: 58.5, category: 'event', icon: 'star',
      descAr: 'جلسات مخصصة لكبار الضيوف قبالة المسرح الرئيسي.',
      descEn: 'Reserved seating for honoured guests, facing the main stage.',
      hours: '17:00–22:00', status: 'open', capacity: 120,
      schedule: [{ t: '20:45', ar: 'حضور التتويج', en: 'Podium attendance' }] },

    { id: 'tv', nameAr: 'التلفزيون', nameEn: 'TV Broadcast Unit',
      x: 41.6, y: 41.5, category: 'event', icon: 'tv',
      descAr: 'عربة البث التلفزيوني والتغطية الإعلامية بجوار المسرح.',
      descEn: 'The outside-broadcast truck and media point, beside the stage.',
      hours: '15:00–23:00', status: 'open', capacity: 40,
      schedule: [{ t: '17:45', ar: 'بث مباشر', en: 'Live broadcast' }] },

    { id: 'stands-public', nameAr: 'مدرجات الجمهور', nameEn: 'Public Stands (Volleyball)',
      x: 17.8, y: 16.5, category: 'event', icon: 'stands',
      descAr: 'مدرجات متابعة الكرة الطائرة الشاطئية.',
      descEn: 'Spectator stands overlooking the beach volleyball court.',
      hours: '16:00–22:00', status: 'open', capacity: 500,
      schedule: [{ t: '16:30', ar: 'فتح الأبواب', en: 'Gates open' }] },

    { id: 'stands-football', nameAr: 'مدرجات الجمهور', nameEn: 'Public Stands (Football)',
      x: 21.2, y: 63.6, category: 'event', icon: 'stands',
      descAr: 'مدرجات متابعة مباريات كرة القدم.',
      descEn: 'Spectator stands for the football matches.',
      hours: '16:00–22:00', status: 'open', capacity: 400,
      schedule: [{ t: '16:30', ar: 'فتح الأبواب', en: 'Gates open' }] },

    /* ---------------- entertainment ---------------- */
    { id: 'egames', nameAr: 'الألعاب الإلكترونية', nameEn: 'E-Games Zone',
      x: 60.9, y: 65.0, category: 'entertainment', icon: 'gamepad',
      descAr: 'خيمة الألعاب الإلكترونية — بطولات وتحديات مفتوحة.',
      descEn: 'The e-games tent — open tournaments and challenges.',
      hours: '16:00–22:00', status: 'open', capacity: 80,
      schedule: [{ t: '19:00', ar: 'تصفيات البطولة', en: 'Tournament heats' }, { t: '20:30', ar: 'نهائيات اليوم', en: 'Daily finals' }] },

    { id: 'paintball', nameAr: 'بينت بول', nameEn: 'Paintball',
      x: 32.0, y: 58.0, category: 'entertainment', icon: 'paint',
      descAr: 'ساحة البينت بول — جولات جماعية بمعدات كاملة.',
      descEn: 'The paintball field — team rounds with full gear provided.',
      hours: '16:00–21:00', status: 'open', capacity: 60,
      schedule: [{ t: '17:00', ar: 'جولات مفتوحة', en: 'Open rounds' }] },

    { id: 'kids-workshop', nameAr: 'ورشة أطفال', nameEn: 'Kids Workshop',
      x: 69.3, y: 66.5, category: 'entertainment', icon: 'kids',
      descAr: 'ورش إبداعية يومية للأطفال بإشراف مختصين.',
      descEn: 'Daily creative workshops for children, run by specialists.',
      hours: '16:00–20:00', status: 'open', capacity: 50,
      schedule: [{ t: '16:30', ar: 'ورشة الرسم', en: 'Painting workshop' }, { t: '18:30', ar: 'ورشة الأشغال', en: 'Crafts workshop' }] },

    { id: 'side-games', nameAr: 'ألعاب مصاحبة', nameEn: 'Side Games',
      x: 77.6, y: 67.0, category: 'entertainment', icon: 'games',
      descAr: 'ألعاب عائلية مصاحبة شرق منطقة الترفيه.',
      descEn: 'Family side games at the east end of the entertainment strip.',
      hours: '16:00–22:00', status: 'open', capacity: 100,
      schedule: [{ t: '16:00', ar: 'مفتوحة طوال اليوم', en: 'Open all day' }] },

    /* ---------------- services ---------------- */
    { id: 'restaurants', nameAr: 'قسم المطاعم', nameEn: 'Food Court',
      x: 76.3, y: 44.5, category: 'services', icon: 'food',
      descAr: 'قسم المطاعم والمقاهي بجلسات خارجية مظللة.',
      descEn: 'Restaurants and cafés with shaded outdoor seating.',
      hours: '15:00–23:00', status: 'open', capacity: 300,
      schedule: [{ t: '15:00', ar: 'يفتح يومياً', en: 'Opens daily' }] },

    { id: 'prayer-men', nameAr: 'مصلى الرجال', nameEn: 'Men’s Prayer Room',
      x: 60.2, y: 47.0, category: 'services', icon: 'mosque',
      descAr: 'مصلى الرجال — وسط أرض المهرجان بجوار دورات المياه.',
      descEn: 'The men’s prayer room — mid-grounds, beside the toilets.',
      hours: '15:00–23:00', status: 'open', capacity: 80, schedule: [] },

    { id: 'prayer-women', nameAr: 'مصلى النساء', nameEn: 'Women’s Prayer Room',
      x: 64.5, y: 47.5, category: 'services', icon: 'mosque',
      descAr: 'مصلى النساء — وسط أرض المهرجان بجوار دورات المياه.',
      descEn: 'The women’s prayer room — mid-grounds, beside the toilets.',
      hours: '15:00–23:00', status: 'open', capacity: 80, schedule: [] },

    { id: 'wc', nameAr: 'دورات مياه', nameEn: 'Toilets',
      x: 69.3, y: 48.5, category: 'services', icon: 'wc',
      descAr: 'دورات المياه العامة بين المصليات وقسم المطاعم.',
      descEn: 'Public toilets between the prayer rooms and the food court.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'community-police', nameAr: 'الشرطة الاجتماعية', nameEn: 'Community Police',
      x: 39.5, y: 53.5, category: 'services', icon: 'shield',
      descAr: 'نقطة الشرطة الاجتماعية للمساعدة والمفقودات.',
      descEn: 'The community police point for assistance and lost & found.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'info', nameAr: 'الاستعلامات', nameEn: 'Information Desk',
      x: 48.7, y: 66.5, category: 'services', icon: 'info',
      descAr: 'مكتب الاستعلامات عند المدخل الرئيسي 01.',
      descEn: 'The information desk at main entrance 01.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'medical-tent', nameAr: 'خيمة فريق طبي', nameEn: 'Medical Team Tent',
      x: 14.6, y: 45.5, category: 'services', icon: 'medic',
      descAr: 'الخيمة الطبية والإسعافات الأولية غرب أرض المهرجان.',
      descEn: 'The medical and first-aid tent at the west of the grounds.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'storage', nameAr: 'مخزن', nameEn: 'Storage',
      x: 14.9, y: 39.0, category: 'services', icon: 'box',
      descAr: 'مخزن التجهيزات والمعدات — للعاملين فقط.',
      descEn: 'Equipment storage — staff only.',
      hours: '24/7', status: 'open', capacity: null, schedule: [] },

    { id: 'parking-police', nameAr: 'مواقف الشرطة', nameEn: 'Police Parking',
      x: 44.3, y: 33.3, category: 'services', icon: 'shield',
      descAr: 'مواقف مخصصة لآليات الشرطة.',
      descEn: 'Reserved parking for police vehicles.',
      hours: '24/7', status: 'open', capacity: 30, schedule: [] },

    { id: 'parking-civil-defense', nameAr: 'مواقف الدفاع المدني', nameEn: 'Civil Defence Parking',
      x: 54.3, y: 33.8, category: 'services', icon: 'siren',
      descAr: 'مواقف مخصصة لآليات الدفاع المدني.',
      descEn: 'Reserved parking for civil defence vehicles.',
      hours: '24/7', status: 'open', capacity: 20, schedule: [] },

    /* ---------------- access & parking ---------------- */
    { id: 'gate-1', nameAr: 'مدخل 01', nameEn: 'Entrance 01',
      x: 47.9, y: 73.6, category: 'access', icon: 'gate', gate: '01',
      descAr: 'المدخل الرئيسي الجنوبي من شارع الكورنيش — بجوار الاستعلامات.',
      descEn: 'The main south entrance from the corniche road — beside the information desk.',
      hours: '15:00–23:00', status: 'open', capacity: null,
      schedule: [{ t: '15:00', ar: 'فتح الأبواب', en: 'Gates open' }] },

    { id: 'gate-2', nameAr: 'مدخل 02', nameEn: 'Entrance 02',
      x: 84.1, y: 57.2, category: 'access', icon: 'gate', gate: '02',
      descAr: 'المدخل الشرقي — الأقرب لحلبة الملاكمة وقسم المطاعم.',
      descEn: 'The east entrance — closest to the boxing ring and food court.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'gate-3', nameAr: 'مدخل 03', nameEn: 'Entrance 03',
      x: 7.1, y: 56.3, category: 'access', icon: 'gate', gate: '03',
      descAr: 'المدخل الغربي — الأقرب لملعب كرة القدم وحلبة التحدي.',
      descEn: 'The west entrance — closest to the football pitch and challenge arena.',
      hours: '15:00–23:00', status: 'open', capacity: null, schedule: [] },

    { id: 'parking-visitors-west', nameAr: 'مواقف زوار', nameEn: 'Visitor Parking (West)',
      x: 27.8, y: 23.3, category: 'access', icon: 'parking',
      descAr: 'مواقف الزوار الغربية أمام المبنى الرئيسي.',
      descEn: 'The west visitor parking, in front of the main building.',
      hours: '24/7', status: 'open', capacity: 220, schedule: [] },

    { id: 'parking-visitors-center', nameAr: 'مواقف زوار', nameEn: 'Visitor Parking (Centre)',
      x: 47.7, y: 28.6, category: 'access', icon: 'parking',
      descAr: 'مواقف الزوار الوسطى أمام المبنى الرئيسي.',
      descEn: 'The central visitor parking, in front of the main building.',
      hours: '24/7', status: 'open', capacity: 260, schedule: [] },

    { id: 'parking-visitors-east', nameAr: 'مواقف زوار', nameEn: 'Visitor Parking (East)',
      x: 70.7, y: 27.7, category: 'access', icon: 'parking',
      descAr: 'مواقف الزوار الشرقية قرب مدرجات كرة السلة.',
      descEn: 'The east visitor parking, near the basketball stands.',
      hours: '24/7', status: 'open', capacity: 180, schedule: [] },

    { id: 'parking-vip', nameAr: 'مواقف VIP', nameEn: 'VIP Parking',
      x: 35.7, y: 72.4, category: 'access', icon: 'parking',
      descAr: 'مواقف مظللة لكبار الضيوف على الواجهة الجنوبية.',
      descEn: 'Shaded parking for honoured guests along the south frontage.',
      hours: '15:00–23:00', status: 'open', capacity: 60, schedule: [] },

    { id: 'parking-classic', nameAr: 'مواقف السيارات القديمة', nameEn: 'Classic Cars Parking',
      x: 46.8, y: 83.5, category: 'access', icon: 'car',
      descAr: 'معرض ومواقف السيارات الكلاسيكية على شارع الكورنيش.',
      descEn: 'The classic car display and parking along the corniche road.',
      hours: '16:00–22:00', status: 'open', capacity: 40,
      schedule: [{ t: '16:00', ar: 'عرض مفتوح', en: 'Open display' }] }
  ]
};
