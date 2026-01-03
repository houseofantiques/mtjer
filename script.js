"use strict";

/* =========================
   إعدادات عامة
========================= */
const WHATSAPP_NUMBER_INTL = "9647737079079"; // رقم واتساب الطلبات

// الأصناف المطلوبة
const CATEGORIES = ["الكل", "سجاد", "خشب", "نحاس", "فضة", "كريستال", "أعمال فنية", "لوحات"];

/* =========================
   بيانات القطع (10 قطع)
   ملاحظة: الأسعار تقديرية وتكدرين تغيريها بأي وقت
========================= */
const PRODUCTS = [
  // 1) عمل فني حجر (كولة) 50 سم - 75+ سنة
  {
    id: "HOA-FINE-001",
    name: "عمل فني حجري (كولة) — 50 سم",
    category: "أعمال فنية",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي غير معروف. قطعة نادرة للعرض في المكتبات أو الواجهات. (الأهمية: تراث محلي + قدم زمني عالي).",
    image: "images/hoa-01-stone.jpg",
    featured: true,
    createdAt: "2026-01-03"
  },

  // 2) كرسي خشب ينطوي ارتفاع 80
  {
    id: "HOA-WOOD-002",
    name: "كرسي خشب قابل للطي — ارتفاع 80 سم",
    category: "خشب",
    price: "280,000 د.ع",
    priceNumber: 280000,
    desc: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف. (الأهمية: تصميم عملي + حالة جيدة).",
    image: "images/hoa-02-chair.jpg",
    featured: false,
    createdAt: "2026-01-03"
  },

  // 3) سيت فرج ومرايا انتيكة نسائية خشب 3 قطع
  {
    id: "HOA-WOOD-003",
    name: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
    category: "خشب",
    price: "1,250,000 د.ع",
    priceNumber: 1250000,
    desc: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. خشب بتفاصيل كلاسيكية. مناسب لغرفة نوم فخمة أو ركن تصوير. (الأهمية: طقم كامل + قيمة ديكور عالية).",
    image: "images/hoa-03-vanity-set.jpg",
    featured: true,
    createdAt: "2026-01-03"
  },

  // 4) باب خشبية مع مدكة نحاس عمرها 120 سنة ارتفاع 2م عرض 120سم
  {
    id: "HOA-WOOD-004",
    name: "باب خشبي مع مدكة نحاس — عمر 120 سنة",
    category: "خشب",
    price: "3,800,000 د.ع",
    priceNumber: 3800000,
    desc: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم. (الأهمية: قطعة معمارية نادرة + قيمة تراثية عالية).",
    image: "images/hoa-04-door.jpg",
    featured: true,
    createdAt: "2026-01-03"
  },

  // 5) سيت فازات فخارية مرسوم عليها رسم يدوي 3 قطع عمرها 60 سنة
  {
    id: "HOA-FINE-005",
    name: "سيت فازات فخارية مرسومة يدوياً (3 قطع) — عمر 60 سنة",
    category: "أعمال فنية",
    price: "620,000 د.ع",
    priceNumber: 620000,
    desc: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض. (الأهمية: رسم يدوي + طقم 3 قطع).",
    image: "images/hoa-05-pottery-set.jpg",
    featured: false,
    createdAt: "2026-01-03"
  },

  // 6) عمل افريقي من المعجون ارتفاع 30 سم عمره 25+ سنة
  {
    id: "HOA-FINE-006",
    name: "عمل أفريقي من المعجون — ارتفاع 30 سم",
    category: "أعمال فنية",
    price: "390,000 د.ع",
    priceNumber: 390000,
    desc: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة. (الأهمية: طابع عالمي + تفاصيل تنفيذ دقيقة).",
    image: "images/hoa-06-african-art.jpg",
    featured: false,
    createdAt: "2026-01-03"
  },

  // 7) شيشة دخان نحاس عمرها 120 سنة
  {
    id: "HOA-COP-007",
    name: "شيشة نحاس تراثية — عمر 120 سنة",
    category: "نحاس",
    price: "1,900,000 د.ع",
    priceNumber: 1900000,
    desc: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة). قطعة مميزة للعرض التراثي أكثر من الاستخدام. (الأهمية: قدم عالي + مادة نحاس أصلية).",
    image: "images/hoa-07-hookah.jpg",
    featured: true,
    createdAt: "2026-01-03"
  },

  // 8) قطعة كرستال مرسوم عليها ملك عثماني عمر 150 سنة
  {
    id: "HOA-CRY-008",
    name: "قطعة كريستال مرسوم عليها ملك عثماني — عمر 150 سنة",
    category: "كريستال",
    price: "2,750,000 د.ع",
    priceNumber: 2750000,
    desc: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة. (الأهمية: قيمة تاريخية + ندرة عالية).",
    image: "images/hoa-08-ottoman-crystal.jpg",
    featured: true,
    createdAt: "2026-01-03"
  },

  // 9) مدكة نحاس وزن 900 غرام قطعتين عمرها 70 سنة
  {
    id: "HOA-COP-009",
    name: "مدكة نحاس ثقيلة (قطعتين) — وزن 900 غرام",
    category: "نحاس",
    price: "520,000 د.ع",
    priceNumber: 520000,
    desc: "مدكة/مدقات نحاس عدد 2، وزن القطعة 900 غرام تقريباً، عمرها قرابة 70 سنة. (الأهمية: وزن ثقيل + خامة نحاس ممتازة).",
    image: "images/hoa-09-brass-knockers.jpg",
    featured: false,
    createdAt: "2026-01-03"
  },

  // 10) سيت كرستال قطعتين طول 30 سم عمر 40 سنة
  {
    id: "HOA-CRY-010",
    name: "سيت كريستال (قطعتين) — طول 30 سم",
    category: "كريستال",
    price: "480,000 د.ع",
    priceNumber: 480000,
    desc: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة. (الأهمية: طقم مزدوج + حالة عرض ممتازة).",
    image: "images/hoa-10-crystal-set.jpg",
    featured: false,
    createdAt: "2026-01-03"
  }
];

/* =========================
   ربط عناصر الصفحة
========================= */
const els = {
  grid: document.getElementById("productsGrid"),
  chips: document.getElementById("categoryChips"),
  search: document.getElementById("searchInput"),
  sort: document.getElementById("sortSelect"),
  resultsHint: document.getElementById("resultsHint"),
  countItems: document.getElementById("countItems"),

  modal: document.getElementById("productModal"),
  modalImg: document.getElementById("modalImg"),
  modalTitle: document.getElementById("modalTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalCode: document.getElementById("modalCode"),
  modalPrice: document.getElementById("modalPrice"),
  modalDesc: document.getElementById("modalDesc"),

  form: document.getElementById("orderForm"),
  custName: document.getElementById("custName"),
  custPhone: document.getElementById("custPhone"),
  custNote: document.getElementById("custNote"),
  formStatus: document.getElementById("formStatus"),
  copyBtn: document.getElementById("copyDetailsBtn"),

  themeBtn: document.getElementById("themeBtn"),
  year: document.getElementById("year"),
  quickWA: document.getElementById("whatsAppQuick"),
  footerWA: document.getElementById("footerWhatsApp")
};

let state = {
  category: "الكل",
  q: "",
  sort: "featured",
  activeProduct: null
};

/* =========================
   مساعدات
========================= */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, (m)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function getWhatsappUrl(text){
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(text)}`;
}

function parseDate(d){ return new Date(d).getTime(); }

function buildOrderText({product, customer, pageUrl}){
  return [
    "طلب شراء - بيت التحفيات",
    "----------------------",
    `الاسم: ${customer.name}`,
    `الهاتف: ${customer.phone}`,
    `ملاحظات: ${customer.note || "-"}`,
    "",
    `القطعة: ${product.name}`,
    `التصنيف: ${product.category}`,
    `الكود: ${product.id}`,
    `السعر: ${product.price}`,
    `صورة القطعة: ${product.image}`,
    `رابط القطعة: ${pageUrl}`
  ].join("\n");
}

/* =========================
   التصنيفات (Chips)
========================= */
function renderChips(){
  els.chips.innerHTML = "";
  CATEGORIES.forEach(cat=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (state.category === cat ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", ()=>{
      state.category = cat;
      render();
      highlightActiveChip();
    });
    els.chips.appendChild(btn);
  });
}

function highlightActiveChip(){
  [...els.chips.querySelectorAll(".chip")].forEach(ch=>{
    ch.classList.toggle("is-active", ch.textContent === state.category);
  });
}

/* =========================
   فلترة + ترتيب
========================= */
function getFilteredProducts(){
  const q = state.q.trim().toLowerCase();
  return PRODUCTS.filter(p=>{
    const catOK = state.category === "الكل" ? true : p.category === state.category;
    const qOK = !q ? true :
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return catOK && qOK;
  });
}

function sortProducts(list){
  const s = state.sort;
  const copy = [...list];

  if (s === "featured"){
    copy.sort((a,b)=>{
      const af = a.featured ? 1 : 0;
      const bf = b.featured ? 1 : 0;
      if (bf !== af) return bf - af;
      return parseDate(b.createdAt) - parseDate(a.createdAt);
    });
    return copy;
  }

  if (s === "newest"){
    copy.sort((a,b)=> parseDate(b.createdAt) - parseDate(a.createdAt));
    return copy;
  }

  if (s === "priceAsc"){
    copy.sort((a,b)=>{
      const ap = (a.priceNumber ?? Number.POSITIVE_INFINITY);
      const bp = (b.priceNumber ?? Number.POSITIVE_INFINITY);
      return ap - bp;
    });
    return copy;
  }

  if (s === "priceDesc"){
    copy.sort((a,b)=>{
      const ap = (a.priceNumber ?? Number.NEGATIVE_INFINITY);
      const bp = (b.priceNumber ?? Number.NEGATIVE_INFINITY);
      return bp - ap;
    });
    return copy;
  }

  return copy;
}

/* =========================
   عرض الكروت
========================= */
function renderGrid(){
  const filtered = getFilteredProducts();
  const sorted = sortProducts(filtered);

  els.countItems.textContent = String(PRODUCTS.length);
  els.resultsHint.textContent = `${sorted.length} نتيجة` + (state.category !== "الكل" ? ` ضمن "${state.category}"` : "");

  if (sorted.length === 0){
    els.grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; min-height:auto; padding:16px;">
        <div class="card__body">
          <div class="card__name">ماكو نتائج</div>
          <div class="card__meta">جرّبي تبدّلين التصنيف أو تقللين كلمات البحث.</div>
        </div>
      </div>
    `;
    return;
  }

  els.grid.innerHTML = sorted.map(p => `
    <article class="card" tabindex="0" role="button" data-id="${escapeHtml(p.id)}" aria-label="عرض تفاصيل ${escapeHtml(p.name)}">
      <img class="card__img" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">
      <div class="card__body">
        <div class="card__top">
          <div class="card__name">${escapeHtml(p.name)}</div>
          <span class="badge">${escapeHtml(p.category)}</span>
        </div>
        <div class="card__meta">
          <span>${escapeHtml(p.id)}</span>
          <span class="price">${escapeHtml(p.price)}</span>
        </div>
        <div class="card__cta">
          <button class="smallbtn" type="button" data-open="${escapeHtml(p.id)}">تفاصيل</button>
          <button class="smallbtn is-primary" type="button" data-order="${escapeHtml(p.id)}">اطلب</button>
        </div>
      </div>
    </article>
  `).join("");

  // ربط أزرار الكروت
  els.grid.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      openProduct(btn.getAttribute("data-open"));
    });
  });

  els.grid.querySelectorAll("[data-order]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      openProduct(btn.getAttribute("data-order"), {focusOrder:true});
    });
  });

  els.grid.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click", ()=> openProduct(card.getAttribute("data-id")));
    card.addEventListener("keydown", (ev)=>{
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openProduct(card.getAttribute("data-id"));
      }
    });
  });
}

function render(){
  renderGrid();
}

/* =========================
   المودال (تفاصيل القطعة)
========================= */
function openModal(){
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  state.activeProduct = null;
  els.formStatus.textContent = "";
  els.form.reset();
}

function openProduct(id, opts = {}){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  state.activeProduct = p;

  els.modalImg.src = p.image;
  els.modalImg.alt = p.name;
  els.modalTitle.textContent = p.name;
  els.modalCategory.textContent = p.category;
  els.modalCode.textContent = p.id;
  els.modalPrice.textContent = p.price;
  els.modalDesc.textContent = p.desc;

  openModal();
  setTimeout(()=>{
    if (opts.focusOrder) els.custName.focus();
  }, 50);
}

// إغلاق عند الضغط بالخلفية أو زر X أو ESC
els.modal.addEventListener("click", (e)=>{
  if (e.target && e.target.getAttribute("data-close") === "true") closeModal();
});
document.addEventListener("keydown", (e)=>{
  if (e.key === "Escape" && els.modal.classList.contains("is-open")) closeModal();
});

/* =========================
   إرسال الطلب واتساب
========================= */
els.form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const p = state.activeProduct;
  if (!p) return;

  const name = els.custName.value.trim();
  const phone = els.custPhone.value.trim();
  const note = els.custNote.value.trim();

  if (!name || !phone){
    els.formStatus.textContent = "رجاءً اكملي الاسم ورقم الهاتف.";
    return;
  }

  const orderText = buildOrderText({
    product: p,
    customer: { name, phone, note },
    pageUrl: window.location.href
  });

  window.open(getWhatsappUrl(orderText), "_blank");
  els.formStatus.textContent = "تم فتح واتساب بالطلب ✅";
});

// نسخ التفاصيل
els.copyBtn.addEventListener("click", async ()=>{
  const p = state.activeProduct;
  if (!p) return;

  const orderText = buildOrderText({
    product: p,
    customer: {
      name: els.custName.value.trim() || "-",
      phone: els.custPhone.value.trim() || "-",
      note: els.custNote.value.trim() || ""
    },
    pageUrl: window.location.href
  });

  try{
    await navigator.clipboard.writeText(orderText);
    els.formStatus.textContent = "تم نسخ تفاصيل الطلب ✅";
  }catch{
    els.formStatus.textContent = "تعذر النسخ تلقائياً. انسخي النص يدوياً.";
  }
});

/* =========================
   بحث + ترتيب
========================= */
els.search.addEventListener("input", ()=>{
  state.q = els.search.value;
  render();
});
els.sort.addEventListener("change", ()=>{
  state.sort = els.sort.value;
  render();
});

/* =========================
   ثيم (داكن/فاتح)
========================= */
function setTheme(theme){
  if (theme === "light"){
    document.documentElement.setAttribute("data-theme","light");
    localStorage.setItem("hoa_theme","light");
  }else{
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("hoa_theme","dark");
  }
}
els.themeBtn.addEventListener("click", ()=>{
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});
(function initTheme(){
  const saved = localStorage.getItem("hoa_theme");
  if (saved === "light") setTheme("light");
})();

/* =========================
   روابط واتساب السريعة
========================= */
function openQuickWhatsApp(){
  const msg = "مرحبا بيت التحفيات، أود الاستفسار عن القطع المتاحة وطريقة الشراء.";
  window.open(getWhatsappUrl(msg), "_blank");
}
els.quickWA.addEventListener("click", (e)=>{ e.preventDefault(); openQuickWhatsApp(); });
els.footerWA.addEventListener("click", (e)=>{ e.preventDefault(); openQuickWhatsApp(); });

/* =========================
   تهيئة
========================= */
els.year.textContent = String(new Date().getFullYear());
renderChips();
render();
