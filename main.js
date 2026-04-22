import { buildAffiliateUrl } from "./affiliate.js";
import { t, getCurrentLang, setLang, applyTranslations } from "./translations.js";

const DEALS = [
  // SMARTPHONES
  { id: 1,  name: "iPhone 15 Pro 128GB",           category: "phones",     emoji: "📱", originalPrice: 1199, price: 749,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 2,  name: "Samsung Galaxy S24 256GB",      category: "phones",     emoji: "📱", originalPrice: 849,  price: 449,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#533483)" },
  { id: 3,  name: "Google Pixel 8 128GB",          category: "phones",     emoji: "📱", originalPrice: 699,  price: 349,  grade: "Grade B", source: "Refurbed",         sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#0f4c75)" },
  { id: 4,  name: "iPhone 14 128GB",               category: "phones",     emoji: "📱", originalPrice: 849,  price: 399,  grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#2d3436,#0f4c75)" },
  { id: 5,  name: "OnePlus 12 256GB",              category: "phones",     emoji: "📱", originalPrice: 799,  price: 399,  grade: "Grade A", source: "Rebuy",            sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#2d3436)" },
  // LAPTOPS
  { id: 6,  name: "MacBook Pro 14\" M3",           category: "laptops",    emoji: "💻", originalPrice: 2199, price: 1149, grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#2d3436,#1a1a2e)" },
  { id: 7,  name: "Dell XPS 13 Plus i7 16GB",      category: "laptops",    emoji: "💻", originalPrice: 1499, price: 699,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#1a1a2e)" },
  { id: 8,  name: "ThinkPad X1 Carbon Gen 11",     category: "laptops",    emoji: "💻", originalPrice: 1599, price: 699,  grade: "Grade B", source: "Refurbed",         sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#2d3436)" },
  { id: 9,  name: "MacBook Air M2 8GB",            category: "laptops",    emoji: "💻", originalPrice: 1299, price: 799,  grade: "Grade A", source: "Asgoodasnew",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 10, name: "Surface Laptop 5 i5 8GB",       category: "laptops",    emoji: "💻", originalPrice: 1399, price: 649,  grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#533483)" },
  // AUDIO
  { id: 11, name: "Sony WH-1000XM5",               category: "audio",      emoji: "🎧", originalPrice: 359,  price: 189,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#1a1a2e,#2d3436)" },
  { id: 12, name: "AirPods Pro 2. Generation",     category: "audio",      emoji: "🎧", originalPrice: 279,  price: 149,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#16213e,#1a1a2e)" },
  { id: 13, name: "Bose QuietComfort 45",          category: "audio",      emoji: "🎧", originalPrice: 299,  price: 149,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#0f3460)" },
  { id: 14, name: "Samsung Galaxy Buds2 Pro",      category: "audio",      emoji: "🎧", originalPrice: 229,  price: 99,   grade: "Grade A", source: "Rebuy",            sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#533483,#1a1a2e)" },
  // KAMERAS
  { id: 15, name: "Sony A7 IV Body",               category: "cameras",    emoji: "📷", originalPrice: 2599, price: 1599, grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#2d3436,#1b262c)" },
  { id: 16, name: "Canon EOS R6 Mark II Body",     category: "cameras",    emoji: "📷", originalPrice: 2799, price: 1699, grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#0f3460)" },
  { id: 17, name: "Fujifilm X-T5 Body",            category: "cameras",    emoji: "📷", originalPrice: 1799, price: 999,  grade: "Grade B", source: "Refurbed",         sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#16213e,#2d3436)" },
  { id: 18, name: "GoPro Hero 12 Black",           category: "cameras",    emoji: "📷", originalPrice: 399,  price: 229,  grade: "Grade A", source: "Asgoodasnew",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f4c75,#1a1a2e)" },
  // GAMING
  { id: 19, name: "PS5 Slim Digital Edition",      category: "gaming",     emoji: "🎮", originalPrice: 449,  price: 329,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#003087,#1a1a2e)" },
  { id: 20, name: "Nintendo Switch OLED",          category: "gaming",     emoji: "🎮", originalPrice: 349,  price: 229,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#cc0000,#1a1a2e)" },
  { id: 21, name: "Xbox Series S",                 category: "gaming",     emoji: "🎮", originalPrice: 299,  price: 189,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#107c10,#1a1a2e)" },
  { id: 22, name: "Steam Deck OLED 512GB",         category: "gaming",     emoji: "🎮", originalPrice: 649,  price: 449,  grade: "Grade A", source: "Refurbed",         sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b2838,#2d3436)" },
  { id: 23, name: "Meta Quest 3 128GB",            category: "gaming",     emoji: "🎮", originalPrice: 549,  price: 339,  grade: "Grade A", source: "Rebuy",            sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0064e0,#1a1a2e)" },
  // HAUSHALTSGERÄTE
  { id: 24, name: "Dyson V15 Detect",              category: "appliances", emoji: "🏠", originalPrice: 699,  price: 349,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#7b2d8b,#1a1a2e)" },
  { id: 25, name: "Nespresso Vertuo Next",         category: "appliances", emoji: "☕", originalPrice: 199,  price: 89,   grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#2d1b00,#1a1a2e)" },
  { id: 26, name: "KitchenAid Artisan 5KSM175",   category: "appliances", emoji: "🍴", originalPrice: 499,  price: 259,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#2d3436)" },
  { id: 27, name: "iRobot Roomba j7+",             category: "appliances", emoji: "🤖", originalPrice: 799,  price: 369,  grade: "Grade A", source: "Asgoodasnew",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#0f3460)" },
];

const SOURCE_COLORS = {
  "Back Market":      "#22c55e",
  "Amazon Renewed":   "#f59e0b",
  "eBay Refurbished": "#f87171",
  "Rebuy":            "#3b82f6",
  "Refurbed":         "#a855f7",
  "Asgoodasnew":      "#06b6d4",
};

let activeCategory = "all";
let searchQuery = "";

function getSavings(deal) {
  return Math.round((1 - deal.price / deal.originalPrice) * 100);
}

function formatPrice(amount) {
  return `${amount.toLocaleString("de-DE")} €`;
}

function getFilteredDeals() {
  const sortVal = document.getElementById("sortSelect").value;
  return DEALS
    .filter(d => activeCategory === "all" || d.category === activeCategory)
    .filter(d => !searchQuery || d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortVal === "savings")    return getSavings(b) - getSavings(a);
      if (sortVal === "price-asc")  return a.price - b.price;
      if (sortVal === "price-desc") return b.price - a.price;
      return 0;
    });
}

function renderDeals() {
  const grid = document.getElementById("dealGrid");
  const noResults = document.getElementById("noResults");
  const dealCount = document.getElementById("dealCount");
  const deals = getFilteredDeals();

  dealCount.textContent = `${deals.length} ${deals.length !== 1 ? t("deal_plural") : t("deal_singular")}`;

  if (deals.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    noResults.querySelector("p").textContent = t("no_results");
    return;
  }

  noResults.style.display = "none";
  grid.innerHTML = deals.map(deal => {
    const pct = getSavings(deal);
    const srcColor = SOURCE_COLORS[deal.source] || "#8890a6";
    return `
      <div class="deal-card${deal.featured ? " deal-card--featured" : ""}">
        ${deal.featured ? `<div class="deal-hot">${t("hot_deal")}</div>` : ""}
        <div class="deal-card__header">
          <span class="source-badge" style="--src-color:${srcColor}">${deal.source}</span>
          <span class="grade-badge grade-badge--${deal.grade === "Grade A" ? "a" : "b"}">${deal.grade}</span>
        </div>
        <div class="deal-card__img" style="background:${deal.bg}">
          <span class="deal-emoji">${deal.emoji}</span>
        </div>
        <div class="deal-card__body">
          <p class="deal-name">${deal.name}</p>
          <div class="deal-pricing">
            <span class="deal-price">${formatPrice(deal.price)}</span>
            <span class="deal-original">${formatPrice(deal.originalPrice)}</span>
            <span class="deal-savings">${pct}${t("pct_off")}</span>
          </div>
          <a href="${buildAffiliateUrl(deal.sourceUrl, deal.source)}" class="btn btn--deal" target="_blank" rel="noopener noreferrer">${t("view_deal")}</a>
        </div>
      </div>
    `;
  }).join("");
}

document.getElementById("filterTabs").addEventListener("click", e => {
  const btn = e.target.closest(".filter-tab");
  if (!btn) return;
  document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.category;
  renderDeals();
});

document.getElementById("sortSelect").addEventListener("change", renderDeals);

document.getElementById("search").addEventListener("input", e => {
  searchQuery = e.target.value.trim();
  renderDeals();
});

document.getElementById("langToggle").addEventListener("click", () => {
  const newLang = getCurrentLang() === "de" ? "en" : "de";
  setLang(newLang);
  applyTranslations();
  renderDeals();
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => observer.observe(s));

// Init: apply stored language preference, then render
setLang(getCurrentLang());
applyTranslations();
renderDeals();
