import { buildAffiliateUrl } from "./affiliate.js";

const DEALS = [
  // PHONES
  { id: 1,  name: "iPhone 14 Pro 128GB",        category: "phones",     emoji: "📱", originalPrice: 999,  price: 549,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 2,  name: "Samsung Galaxy S23 256GB",   category: "phones",     emoji: "📱", originalPrice: 799,  price: 429,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#533483)" },
  { id: 3,  name: "Google Pixel 7 128GB",       category: "phones",     emoji: "📱", originalPrice: 599,  price: 289,  grade: "Grade B", source: "Swappa",           sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#0f4c75)" },
  { id: 4,  name: "iPhone 13 128GB",            category: "phones",     emoji: "📱", originalPrice: 599,  price: 269,  grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#2d3436,#0f4c75)" },
  { id: 5,  name: "OnePlus 11 256GB",           category: "phones",     emoji: "📱", originalPrice: 699,  price: 329,  grade: "Grade A", source: "Reebelo",          sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#2d3436)" },
  // LAPTOPS
  { id: 6,  name: "MacBook Pro 14\" M1 Pro",    category: "laptops",    emoji: "💻", originalPrice: 1999, price: 899,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#2d3436,#1a1a2e)" },
  { id: 7,  name: "Dell XPS 13 i7 16GB",        category: "laptops",    emoji: "💻", originalPrice: 1299, price: 599,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#1a1a2e)" },
  { id: 8,  name: "ThinkPad X1 Carbon Gen 10",  category: "laptops",    emoji: "💻", originalPrice: 1400, price: 529,  grade: "Grade B", source: "Newegg",           sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#2d3436)" },
  { id: 9,  name: "MacBook Air M1 8GB",         category: "laptops",    emoji: "💻", originalPrice: 1099, price: 649,  grade: "Grade A", source: "Swappa",           sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 10, name: "Surface Laptop 4 i5 8GB",    category: "laptops",    emoji: "💻", originalPrice: 1299, price: 579,  grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f3460,#533483)" },
  // AUDIO
  { id: 11, name: "Sony WH-1000XM5",            category: "audio",      emoji: "🎧", originalPrice: 349,  price: 189,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#1a1a2e,#2d3436)" },
  { id: 12, name: "AirPods Pro 2nd Gen",        category: "audio",      emoji: "🎧", originalPrice: 249,  price: 139,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#16213e,#1a1a2e)" },
  { id: 13, name: "Bose QuietComfort 45",       category: "audio",      emoji: "🎧", originalPrice: 329,  price: 149,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#0f3460)" },
  { id: 14, name: "Samsung Galaxy Buds2 Pro",   category: "audio",      emoji: "🎧", originalPrice: 229,  price: 99,   grade: "Grade A", source: "Reebelo",          sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#533483,#1a1a2e)" },
  // CAMERAS
  { id: 15, name: "Sony A7 III Body",           category: "cameras",    emoji: "📷", originalPrice: 1999, price: 1199, grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#2d3436,#1b262c)" },
  { id: 16, name: "Canon EOS R6 Body",          category: "cameras",    emoji: "📷", originalPrice: 2499, price: 1399, grade: "Grade A", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#0f3460)" },
  { id: 17, name: "Fujifilm X-T4 Body",         category: "cameras",    emoji: "📷", originalPrice: 1699, price: 849,  grade: "Grade B", source: "Swappa",           sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#16213e,#2d3436)" },
  { id: 18, name: "GoPro Hero 11 Black",        category: "cameras",    emoji: "📷", originalPrice: 399,  price: 229,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0f4c75,#1a1a2e)" },
  // GAMING
  { id: 19, name: "PS5 Digital Edition",        category: "gaming",     emoji: "🎮", originalPrice: 449,  price: 329,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#003087,#1a1a2e)" },
  { id: 20, name: "Nintendo Switch OLED",       category: "gaming",     emoji: "🎮", originalPrice: 349,  price: 229,  grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#cc0000,#1a1a2e)" },
  { id: 21, name: "Xbox Series S",              category: "gaming",     emoji: "🎮", originalPrice: 299,  price: 189,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#107c10,#1a1a2e)" },
  { id: 22, name: "Steam Deck 512GB",           category: "gaming",     emoji: "🎮", originalPrice: 529,  price: 369,  grade: "Grade A", source: "Swappa",           sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b2838,#2d3436)" },
  { id: 23, name: "Meta Quest 3 128GB",         category: "gaming",     emoji: "🎮", originalPrice: 499,  price: 329,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#0064e0,#1a1a2e)" },
  // APPLIANCES
  { id: 24, name: "Dyson V11 Cordless Vacuum",  category: "appliances", emoji: "🏠", originalPrice: 599,  price: 279,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: true,  bg: "linear-gradient(135deg,#7b2d8b,#1a1a2e)" },
  { id: 25, name: "Nespresso Vertuo Next",      category: "appliances", emoji: "☕", originalPrice: 199,  price: 89,   grade: "Grade A", source: "Back Market",      sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#2d1b00,#1a1a2e)" },
  { id: 26, name: "KitchenAid Stand Mixer",     category: "appliances", emoji: "🍴", originalPrice: 449,  price: 239,  grade: "Grade B", source: "eBay Refurbished", sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1b262c,#2d3436)" },
  { id: 27, name: "iRobot Roomba i7+",          category: "appliances", emoji: "🤖", originalPrice: 799,  price: 349,  grade: "Grade A", source: "Amazon Renewed",   sourceUrl: "#", featured: false, bg: "linear-gradient(135deg,#1a1a2e,#0f3460)" },
];

const SOURCE_COLORS = {
  "Back Market":      "#22c55e",
  "Amazon Renewed":   "#f59e0b",
  "Swappa":           "#3b82f6",
  "eBay Refurbished": "#f87171",
  "Newegg":           "#f97316",
  "Reebelo":          "#06b6d4",
};

let activeCategory = "all";
let activeSort = "savings";
let searchQuery = "";

function savingsPct(deal) {
  return Math.round((1 - deal.price / deal.originalPrice) * 100);
}

function getFilteredDeals() {
  return DEALS
    .filter(d => activeCategory === "all" || d.category === activeCategory)
    .filter(d => !searchQuery || d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (activeSort === "savings")    return savingsPct(b) - savingsPct(a);
      if (activeSort === "price-asc")  return a.price - b.price;
      if (activeSort === "price-desc") return b.price - a.price;
      return 0;
    });
}

function renderDeals() {
  const deals = getFilteredDeals();
  const grid = document.getElementById("dealGrid");
  const noResults = document.getElementById("noResults");
  const dealCount = document.getElementById("dealCount");

  dealCount.textContent = `${deals.length} deal${deals.length !== 1 ? "s" : ""}`;

  if (deals.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";
  grid.innerHTML = deals.map(deal => {
    const pct = savingsPct(deal);
    const srcColor = SOURCE_COLORS[deal.source] || "#8890a6";
    return `
      <div class="deal-card${deal.featured ? " deal-card--featured" : ""}">
        ${deal.featured ? `<div class="deal-hot">🔥 Hot Deal</div>` : ""}
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
            <span class="deal-price">$${deal.price}</span>
            <span class="deal-original">$${deal.originalPrice}</span>
            <span class="deal-savings">${pct}% off</span>
          </div>
          <a href="${buildAffiliateUrl(deal.sourceUrl, deal.source)}" class="btn btn--deal" target="_blank" rel="noopener noreferrer">View Deal →</a>
        </div>
      </div>
    `;
  }).join("");
}

document.getElementById("filterTabs").addEventListener("click", e => {
  const tab = e.target.closest(".filter-tab");
  if (!tab) return;
  document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  activeCategory = tab.dataset.category;
  renderDeals();
});

document.getElementById("sortSelect").addEventListener("change", e => {
  activeSort = e.target.value;
  renderDeals();
});

document.getElementById("search").addEventListener("input", e => {
  searchQuery = e.target.value;
  renderDeals();
});

// Sync nav search with main search behavior
const navSearchInput = document.getElementById("search");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach(s => observer.observe(s));

renderDeals();
