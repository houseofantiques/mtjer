"use strict";
/* products.js - AUTO-REBUILT
   Cloudinary helper + PRODUCTS array.
   NOTE: Some Arabic descriptions in the source were truncated with '...'.
*/
"use strict";
const CLOUD_NAME = "dyqdfbaln";
function cld(id, width = 1200) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${id}`;
}

const PRODUCTS = [
 {
  id: "HOA-FINE-001",

  name: {
    ar: "عمل فني حجري للفنان الراحل منعم فرات — 20 سم",
    en: "Stone Artwork by the late Iraqi artist Mun'em Furat — 20 cm",
    ku: "کاری هونەری بەردی لەلایەن هونەرمەندی عێراقی (مۆنعم فُرات) — 20 سم"
  },

  desc: {
    ar: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي. قطعة نادرة للعرض في المكتبات أو الواجهات. مكسور من الرأس.",
    en: "A stone sculpture (kola) with a height of 50 cm, over 75 years old. By an Iraqi artist. A rare piece suitable for display in libraries or showcases. The head is damaged/broken.",
    ku: "پەیکەری بەردی (کۆلە) بە بەرزی 50 سم، زیاتر لە 75 ساڵ کۆنە. کاری هونەرییە لە هونەرمەندێکی عێراقیە. دانەیەکی دەگمەنە بۆ پیشاندانی لە کتێبخانەکان یان شووکەکان. سەری شکاوە."
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کارە هونەرییەکان"
  },

  priceNumber: 7500000,
  price: "7,500,000 د.ع",
  status: "available",
  featured: true,
  auction: true,
  image: cld("hoa-01-stone_suqyho"),
  images: [cld("hoa-01-stone_suqyho")],
},

 {
  id: "HOA-WOOD-002",

  name: {
    ar: "كرسي خشب قابل للطي — ارتفاع 80 سم",
    en: "Foldable Wooden Chair — Height 80 cm",
    ku: "کورسی دارەوەی هەڵکێشراو — بەرزی 80 سم"
  },

  desc: {
    ar: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف.",
    en: "A foldable wooden chair with a height of 80 cm. Practical and suitable for heritage-style décor or light use.",
    ku: "کورسی دارەوەی هەڵکێشراو بە بەرزی 80 سم. گونجاوە بۆ دیکۆری میراثی یان بەکارهێنانی سووک."
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دار"
  },

  priceNumber: 280000,
  price: "280,000 د.ع",
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-02-chair_iuorog"),
  images: [cld("hoa-02-chair_iuorog")],
},

 {
  id: "HOA-slv-003",

  name: {
    ar: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
    en: "Antique Women's Vanity Set (3 Pieces)",
    ku: "سێتی فرەج + مێرایەی ژنانەی ئانتیک (3 دانە)"
  },

  desc: {
    ar: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. مناسب لغرفة نوم فخمة أو ركن تصوير.",
    en: "An antique women's set (3 pieces): vanity tray + mirror + accompanying piece. Ideal for a luxury bedroom or a styling/photo corner.",
    ku: "سێتێکی ژنانەی ئانتیک (3 دانە): فرەج + مێرایە + پارچەی هاوڕێ. گونجاوە بۆ ژووری نوستنێکی لوکس یان شوێنی وێنەگرتن."
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  priceNumber: 1250000,
  price: "1,250,000 د.ع",
  status: "reserved",
  featured: true,
  auction: false,
  image: cld("hoa-03-vanity-set_udalhc"),
  images: [cld("hoa-03-vanity-set_udalhc")],
},

 {
  id: "HOA-WOOD-004",

  name: {
    ar: "باب خشبي مع مدكة نحاس — عمر 120 سنة",
    en: "Wooden Door with Copper Knocker — 120 Years Old",
    ku: "دەرگای دارەوە لەگەڵ دەمکەی مس — تەمەنی 120 ساڵ"
  },

  desc: {
    ar: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم.",
    en: "A historic wooden door with a copper knocker. Approximately 120 years old. Dimensions: 2 meters in height, 120 cm in width.",
    ku: "دەرگایەکی دارەوەی مێژوویی لەگەڵ دەمکەی مس. نزیکەی 120 ساڵ تەمەنەکەیە. قەبارەکان: بەرزی 2 مەتر، پانی 120 سم."
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دار"
  },

  priceNumber: 3800000,
  price: "3,800,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-04-door_qyvgut"),
  images: [cld("hoa-04-door_qyvgut")],
},

  {
  id: "HOA-FINE-005",

  name: {
    ar: "سيت فازات فخارية مرسومة يدوياً (3 قطع) — عمر 60 سنة",
    en: "Hand-Painted Pottery Vase Set (3 Pieces) — 60 Years Old",
    ku: "سێتی فازەی خەزفی دەست‌نێوەرانە وێنەکراو (3 دانە) — تەمەنی 60 ساڵ"
  },

  desc: {
    ar: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض.",
    en: "Three pottery vases with original hand-painted designs, approximately 60 years old. Ideal for a reception table or display shelf.",
    ku: "سێ فازەی خەزفی بە وێنەکاری دەستی ڕەسەن، نزیکەی 60 ساڵ تەمەنەکەیانە. گونجاو بۆ مێزی پێشوازی یان ڕەفی پیشاندان."
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کارە هونەرییەکان"
  },

  priceNumber: 620000,
  price: "620,000 د.ع",
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-05-pottery-set_nsyybt"),
  images: [cld("hoa-05-pottery-set_nsyybt")],
},

 {
  id: "HOA-FINE-006",

  name: {
    ar: "عمل أفريقي من المعجون — ارتفاع 30 سم",
    en: "African Paste Artwork — Height 30 cm",
    ku: "کاری ئەفریقی لە معجون — بەرزی 30 سم"
  },

  desc: {
    ar: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة.",
    en: "An African figurine/artwork made from paste with high precision, 30 cm in height, over 25 years old.",
    ku: "پەیکەرێک/کاری هونەری ئەفریقی لە معجون دروستکراو بە وردەکاری بەرز، بەرزی 30 سم، زیاتر لە 25 ساڵ تەمەنەکەیە."
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کارە هونەرییەکان"
  },

  priceNumber: 390000,
  price: "390,000 د.ع",
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-06-african-art_yalmqs"),
  images: [cld("hoa-06-african-art_yalmqs")],
},

  {
    id: "HOA-COP-007",
    name: {
      ar: "شيشة نحاس تراثية – عمر 120 سنة",
      en: "Heritage Copper Hookah — 120 Years Old",
      ku: "نەرجیلەی مسی میراثی — تەمەنی 120 ساڵ"
    },
    desc: {
      ar: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة)، قطعة مميزة للعرض التراثي أكثر من الاستخدام.",
      en: "A very old copper hookah (approximately 120 years old), intended mainly for heritage display rather than use.",
      ku: "نەرجیلەیەکی زۆر کۆنی مسی (نزیکەی 120 ساڵ)، گونجاوە بۆ پیشاندانی میراثی زیاتر لە بەکارهێنان."
    },
    category: { ar:"نحاس", en:"Copper", ku:"مس" },
    priceNumber: 1900000,
    price: "1,900,000 د.ع",
    status: "sold",
    featured: true,
    auction: false,
    image: cld("hoa-07-hookah_qilfmy"),
    images: [cld("hoa-07-hookah_qilfmy")]
  },

  {
    id: "HOA-CRY-008",
    name: {
      ar: "قطعة كريستال مرسوم عليها ملك عثماني — عمر 150 سنة",
      en: "Crystal Piece Featuring an Ottoman King — 150 Years Old",
      ku: "پارچەی کریستال بە وێنەی پاشای عوسمانی — تەمەنی 150 ساڵ"
    },
    desc: {
      ar: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة.",
      en: "A rare crystal piece featuring an Ottoman king illustration, dating back around 150 years to the Ottoman era.",
      ku: "پارچەیەکی دەگمەنەی کریستال بە وێنەی پاشای عوسمانی، نزیکەی 150 ساڵ تەمەنەکەیە."
    },
    category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },
    priceNumber: 200000,
    price: "200,000 د.ع",
    status: "available",
    featured: true,
    auction: true,
    image: cld("hoa-08-ottoman-crystal_cb6h1c"),
    images: [cld("hoa-08-ottoman-crystal_cb6h1c")]
  },

  {
    id: "HOA-COP-009",
    name: {
      ar: "مدكة هاون أعشاب من عمل يهود العراق — نحاس ثقيل (قطعتين)",
      en: "Heavy Copper Herbal Mortar Set — Iraqi Jewish Craft (2 Pieces)",
      ku: "هاوەنی گیای دارویی مسی قورس — کاری جولەکانی عێراق (2 دانە)"
    },
    desc: {
      ar: "مدكة/مدقات نحاس عدد 2، وزن القطعة الواحدة يقارب 900 غرام، عمرها قرابة 70 سنة.",
      en: "A set of two copper mortars, each weighing approximately 900 grams, around 70 years old.",
      ku: "دوو هاوەنی مسی، هەر یەک نزیکەی 900 گرام، تەمەنیان نزیکەی 70 ساڵە."
    },
    category: { ar:"نحاس", en:"Copper", ku:"مس" },
    priceNumber: 450000,
    price: "450,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-09-brass-knockers_ysriwj"),
    images: [cld("hoa-09-brass-knockers_ysriwj")]
  },

  {
    id: "HOA-CRY-010",
    name: {
      ar: "شيشة نركيلة إيرانية — عمل قديم (طول 30 سم)",
      en: "Iranian Crystal Hookah — Antique Work (30 cm)",
      ku: "نەرجیلەی کریستالی ئێرانی — کاری کۆن (درێژی 30 سم)"
    },
    desc: {
      ar: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة.",
      en: "A two-piece crystal set, 30 cm in length, approximately 40 years old. Suitable for décor or hospitality tables.",
      ku: "سێتی دوو پارچەی کریستال، درێژی 30 سم، تەمەنی نزیکەی 40 ساڵ."
    },
    category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },
    priceNumber: 480000,
    price: "480,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-10-crystal-set_axjhxm"),
    images: [cld("hoa-10-crystal-set_axjhxm")]
  },

  {
    id: "HOA-ART-011",
    name: {
      ar: "بورتريه تعبيري — علي نعمة (2014)",
      en: "Expressive Portrait — Ali Naama (2014)",
      ku: "پۆرتریەی دەربڕینی — عەلی نەعمة (2014)"
    },
    desc: {
      ar: "لوحة فنية أصلية من أعمال الفنان العراقي علي نعمة، منفذة عام 2014. الحالة: ممتازة.",
      en: "An original artwork by Iraqi artist Ali Naama, created in 2014. Condition: excellent.",
      ku: "تابلۆیەکی ڕەسەن لە هونەرمەندی عێراقی عەلی نەعمة، ساڵی 2014. دۆخ: زۆر باش."
    },
    category: { ar:"لوحات", en:"Paintings", ku:"تابلۆکان" },
    priceNumber: 2100000,
    price: "2,100,000 د.ع",
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-art-011_ueojpb"),
    images: [cld("hoa-art-011_ueojpb")]
  },

 // ✅ Paste these items inside your PRODUCTS array in products.js
// ✅ Supports Arabic / English / Kurdish for name/desc/category

{
  id: "HOA-CRY-034",
  name: {
    ar: "فازا كريستال زرقاء مرسومة يدويًا",
    en: "Hand-Painted Blue Crystal Vase",
    ku: "فازەی کریستالی شین ـ بە دەست وێنەکراو"
  },
  desc: {
    ar: "فازا كريستال أنيقة بارتفاع 40 سم، تعود لأكثر من 50 عامًا، تتميّز بلون أزرق ناعم وزخارف نباتية مرسومة يدويًا بدقة عالية. قاعدة ثابتة وتصميم كلاسيكي راقٍ يعكس الذوق الفني لتلك الحقبة، ما يجعلها قطعة نادرة مناسبة للعرض المتحفي أو كقطعة ديكور فاخرة ذات قيمة تاريخية.",
    en: "An elegant crystal vase, 40 cm tall, over 50 years old. It features a soft blue tone and finely hand-painted floral motifs. With a stable base and refined classic design, it reflects the artistic taste of its era, making it a rare piece suitable for museum display or luxury décor with historical value.",
    ku: "فازەیەکی جوانی کریستال بە بەرزی 40 سم، لە زیاتر لە 50 ساڵەوە. ڕەنگی شینی نەرم و نەخشەی ڕووەکی بە دەست وێنەکراوی ورد هەیە. بنەمایەکی جێگیر و دیزاینێکی کلاسیکی بەرز هەیە کە سەلیقەی هونەری ئەو قۆناغە دەردەخات؛ پارچەیەکی دەگمەن و گونجاو بۆ پیشاندانی مۆزەیی یان دیکۆری لوکس بە بەهای مێژوویی."
  },
  category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
  priceNumber: 2200000,
  price: "2,200,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-vas-034_bhofoq"),
  images: [cld("hoa-vas-034_bhofoq")],
},

{
  id: "HOA-WPN-033",
  name: {
    ar: "خنجر عثماني تراثي",
    en: "Ottoman Heritage Dagger",
    ku: "خەنجەری میراثی عوسمانی"
  },
  // ✅ Neutral, museum-style description (no selling / no use guidance)
  desc: {
    ar: "قطعة تراثية من الحقبة العثمانية، بطول 40 سم، تتميّز بنصل فولاذي ومقبض مزخرف بتفاصيل تقليدية تعكس الحرفية العثمانية. تُعرض هذه القطعة لأغراض توثيقية/متحفية ضمن المجموعات التراثية.",
    en: "A heritage piece from the Ottoman era, 40 cm in length, featuring a steel blade and an ornamented handle that reflects Ottoman craftsmanship. Presented for documentary/museum display purposes within heritage collections.",
    ku: "پارچەیەکی میراثی لە قۆناغی عوسمانی، بە درێژی 40 سم، نصلێکی فولادی و دەستگرتنێکی ڕازاو هەیە کە پیشەسازی عوسمانی دەردەخات. ئەم پارچەیە بۆ مەبەستی بەڵگەنامەیی/پیشاندانی مۆزەیی لە ناو کۆمەڵە پارچە میراثییەکاندا پیشان دەدرێت."
  },
  category: { ar: "أسلحة تراثية", en: "Heritage Weapons", ku: "چەکە میراثییەکان" },
  price: "800,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-trl-033_hom0i1"),
  images: [cld("hoa-trl-033_hom0i1")],
},

{
  id: "HOA-CER-035",
  name: {
    ar: "بيضات خزفية مزخرفة مع قواعد خشبية (عدد 3)",
    en: "Decorated Ceramic Eggs with Wooden Bases (Set of 3)",
    ku: "هێلکە خزفییە ڕازاوەکان لەگەڵ بنەمای دار (سێ دانە)"
  },
  desc: {
    ar: "مجموعة من ثلاث بيضات خزفية تراثية، مزخرفة برسومات يدوية دقيقة لطيور ونباتات، مثبتة على قواعد خشبية أصلية. يبلغ ارتفاع كل قطعة 3 سم، ويعود عمر المجموعة لأكثر من 60 عامًا. قطع صغيرة الحجم لكنها غنية بالتفاصيل، مناسبة للعرض المتحفي أو لهواة جمع التحف الدقيقة.",
    en: "A set of three heritage ceramic eggs, decorated with precise hand-painted birds and botanical motifs, mounted on original wooden bases. Each piece is 3 cm tall, and the set is over 60 years old. Small in size yet rich in detail—ideal for museum display or collectors of fine mini antiques.",
    ku: "کۆمەڵەیەک لە سێ هێلکەی خزفی میراثی، بە وێنەکاری دەستی وردی باڵندە و ڕووەک ڕازاوە و لەسەر بنەمای دارە ڕەسەنەکان جێگیرکراون. بەرزی هەر دانەیەک 3 سم ـە و تەمەنی کۆمەڵەکە زیاتر لە 60 ساڵە. بچووکە بەڵام پڕ لە وردەکاریە؛ گونجاو بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی پارچەی بچووک."
  },
  category: { ar: "اعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
  price: "100,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-trl-035_nkh634"),
  images: [cld("hoa-trl-035_nkh634")],
},

{
  id: "HOA-ART-027",
  name: {
    ar: "لوحة زيتية أوروبية من القرن الثامن عشر بإطار ذهبي",
    en: "18th-Century European Oil Painting with Gold Frame",
    ku: "تابلۆی نەوتی ئورووپی لە سەدەی 18 ـەوە بە چوارچێوەی زێڕین"
  },
  desc: {
    ar: "لوحة فنية نادرة تعود إلى القرن الثامن عشر، منفّذة بتقنية الزيت على الخشب، تُجسّد مشهدًا كلاسيكيًا غنيًا بالتفاصيل والحركة. مؤطّرة بإطار ذهبي فاخر يعكس أسلوب تلك الحقبة، واللوحة غير موقّعة كما هو شائع في العديد من أعمال تلك الفترة. قطعة متحفية استثنائية ذات قيمة فنية وتاريخية عالية، مناسبة للمجموعات الخاصة أو العرض المتحفي الراقي.",
    en: "A rare 18th-century artwork executed in oil on wood, depicting a classic scene rich in detail and movement. Framed in a luxurious gold frame that reflects the era’s style. The painting is unsigned, as was common for many works of that period. An exceptional museum-grade piece with high artistic and historical value.",
    ku: "تابلۆیەکی دەگمەن لە سەدەی 18 ـەوە، بە تەکنیکی نەوت لەسەر دار درووستکراوە، دیمەنێکی کلاسیکی پڕ لە وردەکاری و جوڵان پیشان دەدات. بە چوارچێوەی زێڕینی لوکس چوارچێوەکراوە کە شێوازی ئەو قۆناغە دەردەخات. تابلۆکە واژۆ نەکراوە وەک زۆر کارەکانی ئەو دەمە. پارچەیەکی مۆزەیی تایبەت بە بەهای هونەری و مێژوویی بەرز."
  },
  category: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
  price: "45,000,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-art-027_nsjyh5"),
  images: [cld("hoa-art-027_nsjyh5")],
},

{
  id: "HOA-ELC-028",
  name: {
    ar: "مروحة كهربائية حديدية تراثية",
    en: "Heritage Iron Electric Fan",
    ku: "پەنکەی کارەبایی ئاسنی میراثی"
  },
  desc: {
    ar: "مروحة كهربائية تراثية صغيرة مصنوعة من الحديد، بارتفاع 60 سم، تعود إلى منتصف القرن العشرين، وما زالت تعمل بكفاءة. تتميّز بتصميم صناعي كلاسيكي وشفرات معدنية مع قفص حماية أصلي، وتحمل آثار الزمن التي تضيف إليها طابعًا تاريخيًا أصيلًا. قطعة نادرة تجمع بين الوظيفة والقيمة التراثية، مناسبة للعرض المتحفي أو لهواة جمع الأجهزة القديمة.",
    en: "A small heritage electric fan made of iron, 60 cm tall, dating to the mid-20th century and still working efficiently. It features a classic industrial design, metal blades, and an original protective cage, with authentic age marks that add historical character. A rare piece combining function and heritage value—ideal for museum display or collectors of vintage devices.",
    ku: "پەنکەیەکی کارەبایی میراثی بچووک لە ئاسن درووستکراوە، بە بەرزی 60 سم، لە ناوەڕاستی سەدەی 20 ـەوە و هێشتا بە باشی کار دەکات. دیزاینێکی پیشەسازی کلاسیکی، پەڕە ئاسنی و قەفەسی پاراستنی ڕەسەن هەیە، بە نیشانەکانی کات کە ڕەنگی مێژوویی دەدەات. پارچەیەکی دەگمەن بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی ئامێرە کۆنەکان."
  },
  category: { ar: "أثاث  تراثي", en: "Heritage Furniture", ku: "کەلوپەلی میراثی" },
  price: "50,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-trl-028_p2js0f"),
  images: [cld("hoa-trl-028_p2js0f")],
},

{
  id: "HOA-GRM-026",
  name: {
    ar: "كراموفون وراديو خشبي فاخر مع خزائن أسطوانات",
    en: "Luxury Wooden Gramophone & Radio with Record Cabinets",
    ku: "گرامافۆن و ڕادیۆی داری لوکس لەگەڵ دۆلابی ئاسطوانەکان"
  },
  desc: {
    ar: "كراموفون وراديو تراثي نادر مصنوع من الخشب الفاخر، يجمع بين جهاز تشغيل الأسطوانات والراديو ضمن تصميم كلاسيكي أنيق. القطعة شغّالة بالكامل، وتضم دولابين جانبيين مخصّصين لخزن الأسطوانات. يبلغ ارتفاعها 130 سم وعرضها 120 سم، وتُعد من القطع الكبيرة والفاخرة التي تعكس ذروة الحرفية والتقنيات الصوتية. قطعة استثنائية مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
    en: "A rare heritage gramophone and radio crafted from luxury wood, combining record playback and radio in an elegant classic design. Fully functional, with two side cabinets for storing records. Measures 130 cm in height and 120 cm in width. A large, refined piece reflecting peak craftsmanship and audio-era design—ideal for museum display or premium private collections.",
    ku: "گرامافۆن و ڕادیۆیەکی میراثی دەگمەن لە دارێکی لوکس درووستکراوە، لە دیزاینێکی کلاسیکی جواندا یەکگرتووەی کارکردی ئاسطوانە و ڕادیۆیە. تەواو کاردەکات و دوو دۆلابی لاوەکی هەیە بۆ خەزنکردنی ئاسطوانەکان. بەرزی 130 سم و پانی 120 سم. پارچەیەکی گەورە و فاخر کە پێشەسازی بەرز و دیزاینی دەمەنگار پیشان دەدات؛ گونجاو بۆ مۆزە یان کۆمەڵە تایبەتی بەرز."
  },
  category: { ar: "كراموفون", en: "Gramophone", ku: "گرامافۆن" },
  price: "500,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-grm-026_xbttfp"),
  images: [cld("hoa-grm-026_xbttfp")],
},

{
  id: "HOA-FINE-029",
  name: {
    ar: "منحوتة حجرية تعبيرية مع قاعدة",
    en: "Expressive Stone Sculpture with Base",
    ku: "پەیکەرەی بەردینی دەربڕینی لەگەڵ بنەما"
  },
  desc: {
    ar: "عمل فني نحتي منفّذ من الحجر بأسلوب تعبيري، يجسّد ملامح إنسانية مجرّدة تحمل طابعًا دراميًا واضحًا. المنحوتة مثبتة على قاعدة، ويبلغ الارتفاع الكلي 30 سم. قطعة فنية قوية بصريًا تعكس حسًّا معاصرًا وتصلح للعرض المتحفي أو ضمن مجموعات الفن التشكيلي الراقية.",
    en: "A stone sculpture executed in an expressive style, presenting abstract human features with a clear dramatic character. Mounted on a base with a total height of 30 cm. A visually powerful piece with a contemporary feel, suitable for museum display or refined art collections.",
    ku: "کارێکی هونەری پەیکەرسازی لە بەرد بە شێوازی دەربڕینی، ملامحی مرۆیی بە شێوەیەکی تەجریدی و درامایی پیشان دەدات. لەسەر بنەمایەک جێگیرکراوە و بەرزی گشتی 30 سم ـە. پارچەیەکی بەهێز بە دیداری، بە هەستی هاوچەرخ و گونجاو بۆ مۆزە یان کۆمەڵە هونەری بەرز."
  },
  category: { ar: "أعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
  priceNumber: 3200000,
  price: "3,200,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-fine-029_whj1lj"),
  images: [cld("hoa-fine-029_whj1lj")],
},

{
  id: "HOA-TRL-032",
  name: {
    ar: "تمثال رأس هيرميس كلاسيكي مع قاعدة",
    en: "Classic Hermes Bust with Base",
    ku: "سەری هێرمێس بە شێوازی کلاسیکی لەگەڵ بنەما"
  },
  desc: {
    ar: "تمثال رأس كلاسيكي مستوحى من الإله الإغريقي هيرميس، منفّذ بأسلوب نحت دقيق يبرز تفاصيل الوجه والشَعر بشكل متقن. مثبت على قاعدة رخامية تحمل اسم HERMES، ويبلغ الارتفاع الكلي 20 سم. قطعة فنية أنيقة تجمع بين الطابع التاريخي والجمالي، مناسبة للعرض المتحفي أو كعنصر ديكور فني راقٍ.",
    en: "A classic bust inspired by the Greek god Hermes, sculpted with fine craftsmanship highlighting facial and hair details. Mounted on a marble base bearing the name “HERMES,” with a total height of 20 cm. An elegant piece combining historical character and aesthetic appeal, ideal for museum display or refined artistic décor.",
    ku: "پەیکەرەی سەری کلاسیکی وەرگرتوو لە هێرمێسی یۆنانی، بە نەخشکاری ورد درووستکراوە کە وردەکاری ڕوو و قژ بە باشی دەردەخات. لەسەر بنەمای مرمەر جێگیرە و ناوی “HERMES” لەسەر بنەما نووسراوە، بەرزی گشتی 20 سم ـە. پارچەیەکی جوان کە تایبەتمەندی مێژوویی و جوانکاری تێکدەگەیەنێت، گونجاو بۆ مۆزە یان دیکۆری هونەری بەرز."
  },
  category: { ar: "اعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
  priceNumber: 2300000,
  price: "2,300,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-trl-032_eitprd"),
  images: [cld("hoa-trl-032_eitprd")],
},

{
  id: "HOA-CRY-036",
  name: {
    ar: "طقم كريستال مرسوم يدويًا بزخارف شرقية (4 قطع)",
    en: "Hand-Painted Crystal Set with Oriental Motifs (4 Pieces)",
    ku: "سێتی کریستالی بە دەست وێنەکراو بە نەخشەی ڕۆژهەڵاتی (4 پارچە)"
  },
  desc: {
    ar: "طقم فاخر من الكريستال/الزجاج الفني يتكوّن من أربع قطع، يشمل قارورتين مزخرفتين وعلبتين بغطاء، جميعها مرسومة يدويًا بزخارف نباتية وشرقية غنية بالألوان. يتميّز الطقم بتناسق التصميم ودقة التنفيذ، ما يجعله قطعة عرض أنيقة ذات قيمة فنية عالية، مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
    en: "A luxurious artistic crystal/glass set of four pieces: two decorated bottles and two lidded containers. All pieces are hand-painted with colorful floral and oriental motifs. Distinguished by design harmony and precise execution, making it an elegant display set with high artistic value—ideal for museum display or premium private collections.",
    ku: "سێتێکی لوکس لە کریستال/زجاجی هونەری پێکهاتوو لە 4 پارچە: دوو قارورەی ڕازاو و دوو قوطی بە گەپ. هەموویان بە دەست وێنەکراون بە نەخشەی ڕووەکی و ڕۆژهەڵاتی بە ڕەنگی دەوڵەمەند. بە یەکگرتوویی دیزاین و وردی جێبەجێکردن ناسراوە؛ گونجاو بۆ مۆزە یان کۆمەڵە تایبەتی بەرز."
  },
  category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
  priceNumber: 4200000,
  price: "4,200,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-vas-036_am75wo"),
  images: [cld("hoa-vas-036_am75wo")],
},

{
  id: "HOA-CRY-037",
  name: {
    ar: "ثريا كريستال فاخرة بـ 8 مصابيح",
    en: "Luxury Crystal Chandelier — 8 Lights",
    ku: "چەندەلیەری کریستالی لوکس — 8 چراغ"
  },
  desc: {
    ar: "ثريا كريستال فاخرة تتكوّن من ثمانية مصابيح، تتميّز بتفاصيل زجاجية وكريستالية دقيقة وتصميم كلاسيكي راقٍ. تعكس القطعة طابع الفخامة والذوق الرفيع، وتُعد عنصرًا معماريًا بارزًا يليق بالصالات التراثية أو القاعات ذات الطابع المتحفي.",
    en: "A luxury crystal chandelier with eight lights, featuring fine glass and crystal details in a refined classic design. It reflects elegance and high taste, serving as a striking architectural piece suitable for heritage halls or museum-style interiors.",
    ku: "چەندەلیەریەکی لوکسی کریستال بە 8 چراغ، بە وردەکاری شفاف و کریستالی و دیزاینێکی کلاسیکی بەرز. پارچەکە فخامة و سەلیقەی بەرز پیشان دەدات و وەک توخمێکی ئەرکیتێکتووری دیار لە هۆڵە میراثییەکان یان شوێنە مۆزەییەکاندا گونجاوە."
  },
  category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
  price: "700,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-cry-037_izuykb"),
  images: [cld("hoa-cry-037_izuykb"), cld("hoa-cry-037-1_tgglcx")],
},

{
  id: "HOA-COP-037",
  name: {
    ar: "إبريق نحاسي تراثي مزخرف يدويًا",
    en: "Hand-Decorated Heritage Copper Pitcher",
    ku: "ئیبریگی مسی میراثی ـ بە دەست ڕازاو"
  },
  desc: {
    ar: "إبريق نحاسي تراثي منفّذ بنقوش يدوية دقيقة تغطي البدن بالكامل، يتميّز بعنق طويل ومصبّ منحني ومقبض جانبي أنيق. يعكس أسلوب الصناعة التقليدية وثراء الزخرفة الشرقية، ما يجعله قطعة عرض متحفية مميّزة أو عنصر ديكور فاخر لهواة التحف النحاسية.",
    en: "A heritage copper pitcher covered with fine hand-made engravings across the body. It features a long neck, curved spout, and an elegant side handle. Reflecting traditional craftsmanship and rich oriental ornamentation, it makes a distinctive museum display piece or a luxury décor element for copper antique collectors.",
    ku: "ئیبریگێکی میراثی مسی بە نەخشکاری دەستی ورد کە تەواوی جەستەکە دەگرێتەوە. گردنی درێژ، دەریچەی خوار و دەستگرتنی لاوەکی جوان هەیە. پیشەسازی نەریتیدا و دەوڵەمەندی ڕازاوکاری ڕۆژهەڵاتی پیشان دەدات؛ پارچەیەکی مۆزەیی تایبەت یان دیکۆری لوکس بۆ هەواڵگری پارچەی مسی."
  },
  category: { ar: "نحاسيات", en: "Copperware", ku: "پارچەی مسی" },
  price: "150,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-cop-037_ohqzfa"),
  images: [cld("hoa-cop-037_ohqzfa")],
},

{
  id: "HOA-BOX-043",
  name: {
    ar: "صندوق هندي خشبي مطعّم بالنحاس اليدوي",
    en: "Indian Wooden Chest Inlaid with Handworked Copper",
    ku: "سندوقی هندی لە دار ـ بە مسی دەستی ڕەنگاو"
  },
  desc: {
    ar: "صندوق تراثي هندي مصنوع من الخشب ومطعّم بالنحاس اليدوي بزخارف هندسية ونباتية دقيقة. يتميّز بواجهة غنية بالتفاصيل مع مقابض وأقفال نحاسية، ومثبت على أرجل خشبية تمنحه حضورًا أنيقًا. يبلغ ارتفاعه 50 سم وعرضه 120 سم، ويصلح للاستخدام كقطعة تخزين تراثية أو كعنصر ديكور فاخر في المساحات الكلاسيكية.",
    en: "A heritage Indian wooden chest inlaid with handworked copper featuring fine geometric and floral motifs. It has a richly detailed front, copper handles and locks, and stands on wooden legs for an elegant presence. Measures 50 cm in height and 120 cm in width—ideal as a heritage storage piece or a luxury décor element in classic interiors.",
    ku: "سندوقێکی میراثی هندی لە دار درووستکراوە و بە مسی دەستی ڕەنگاوە بە نەخشەی هندەسی و ڕووەکی ورد. پێشەوەیەکی پڕ لە وردەکاری هەیە لەگەڵ دەستگرتن و قوفلی مسی، و لەسەر پێی داری جێگیرە بۆ دەرکەوتنی جوان. بەرزی 50 سم و پانی 120 سم ـە؛ گونجاو وەک پارچەی خەزنکردن یان دیکۆری لوکس لە شوێنە کلاسیکییەکان."
  },
  category: { ar: "صندوق", en: "Box / Chest", ku: "سندوق" },
  priceNumber: 500000,
  price: "500,000 د.ع",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-box-043_qiws3e"),
  images: [cld("hoa-box-043_qiws3e")],
},

{
  id: "HOA-ART-044",
  name: {
    ar: "لوحة أهوار العراق مؤطرة بإطار برونزي",
    en: "Iraq Marshlands Painting with Bronze Frame",
    ku: "تابلۆی هۆورەکانی عێراق بە چوارچێوەی برۆنز"
  },
  desc: {
    ar: "لوحة فنية تجسّد مشهدًا من أهوار العراق، تعكس الطابع الهادئ والطبيعة المائية المميّزة للمنطقة مع تفاصيل بصرية شاعرية. اللوحة مؤطّرة بإطار برونزي أنيق يضيف لها حضورًا كلاسيكيًا راقيًا. يبلغ ارتفاعها 100 سم وعرضها 150 سم، ويعود عمرها إلى نحو 30 عامًا، ما يجعلها قطعة فنية وثائقية وثقافية مناسبة للعرض المتحفي أو للمساحات التراثية الراقية.",
    en: "An artwork portraying a scene from Iraq’s Marshlands, capturing the calm atmosphere and the region’s distinctive watery nature with poetic visual details. Framed in an elegant bronze frame that adds a refined classic presence. Size: 100 cm (H) × 150 cm (W), approximately 30 years old—making it a documentary and cultural piece suitable for museum display or refined heritage spaces.",
    ku: "تابلۆیەکی هونەری کە دیمەنێک لە هۆورەکانی عێراق پیشان دەدات، ئارامی و سروشتی ئاویەتی تایبەتی ناوچەکە لەگەڵ وردەکاری شاعیرانە دەگرێتەوە. بە چوارچێوەی برۆنزی جوان چوارچێوەکراوە کە دەرکەوتنی کلاسیکی بەرز دەدات. قەبارە: 100 سم بەرزی × 150 سم پانی، تەمەنی نزیکەی 30 ساڵ؛ پارچەیەکی بەڵگەنامەیی و کەلتووری گونجاو بۆ مۆزە یان شوێنە میراثییەکان."
  },
  category: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
  price: "—",
  status: "available",
  featured: true,
  auction: false,
  image: cld("hoa-art-044_twyquf"),
  images: [cld("hoa-art-044_twyquf")],
},

{
  id: "HOA-WOD-045",
  name: {
    ar: "طقم طاولات خشبية (3 قطع)",
    en: "Wooden Table Set (3 Pieces)",
    ku: "سێتی مێزی دار (٣ پارچە)"
  },
  desc: {
    ar: "طقم عملي مكوّن من ثلاث طاولات...",
    en: "A practical wooden table set consisting of three pieces...",
    ku: "سێتێکی کارامە..."
  },
  category: { ar: "خشب", en: "Wood", ku: "دار" },
  priceNumber: 200000,
  price: "200,000 د.ع",
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoh-wood-045_czwfh"),
  images: [cld("hoh-wood-045_czwfh")],
}

]; 

window.PRODUCTS = PRODUCTS;
console.log("✅ products.js loaded:", PRODUCTS.length);
