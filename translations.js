const TRANSLATIONS = {
  de: {
    // Nav
    nav_deals:          "Angebote",
    nav_how:            "So funktioniert's",
    search_placeholder: "Angebote suchen...",
    lang_switch:        "EN",
    // Hero
    badge:               "Täglich 500+ Angebote erfasst",
    hero_h1_line1:       "Die besten Refurbished-Angebote,",
    hero_h1_line2:       "an einem Ort.",
    hero_sub:            "Wir durchsuchen Back Market, Amazon Renewed, Rebuy, eBay und mehr — und stellen täglich die besten Schnäppchen für Sie zusammen.",
    stat_deals:          "Aktuelle Angebote",
    stat_categories:     "Kategorien",
    stat_savings_num:    "Bis zu 65%",
    stat_savings_label:  "Günstiger",
    stat_retailers:      "Geprüfte Händler",
    // Retailers bar
    deals_from: "Angebote von",
    // Deal filters
    filter_all:        "Alle Angebote",
    filter_phones:     "📱 Smartphones",
    filter_laptops:    "💻 Laptops",
    filter_audio:      "🎧 Audio",
    filter_cameras:    "📷 Kameras",
    filter_gaming:     "🎮 Gaming",
    filter_appliances: "🏠 Haushaltsgeräte",
    // Sort
    sort_savings:   "Beste Ersparnis",
    sort_price_asc: "Preis: aufsteigend",
    sort_price_desc: "Preis: absteigend",
    // Deal card
    hot_deal:      "🔥 Heißes Angebot",
    view_deal:     "Zum Angebot →",
    pct_off:       "% günstiger",
    deal_singular: "Angebot",
    deal_plural:   "Angebote",
    no_results:    "Keine Angebote gefunden. Versuchen Sie eine andere Suche oder Kategorie.",
    // How it works
    how_title:  "So funktioniert Deja Buy",
    how_sub:    "Wir übernehmen die Suche. Sie sparen.",
    how1_title: "Wir tracken",
    how1_body:  "Unser Team überwacht täglich hunderte von Refurbished-Angeboten auf den führenden Wiederverkaufs- und Refurb-Plattformen.",
    how2_title: "Wir filtern",
    how2_body:  "Nur Angebote mit hohen Ersparnissen, seriösen Händlern und klarer Zustandsbeschreibung schaffen es auf die Liste.",
    how3_title: "Sie sparen",
    how3_body:  "Klicken Sie weiter, um direkt beim Händler zu kaufen. Wir wickeln keine Zahlungen ab — nur die Suche.",
    // Footer
    footer_tagline:        "Die besten Refurbished-Angebote von geprüften Händlern.",
    footer_col_categories: "Kategorien",
    footer_col_retailers:  "Händler",
    footer_col_company:    "Unternehmen",
    footer_phones:         "Smartphones",
    footer_laptops:        "Laptops",
    footer_audio:          "Audio",
    footer_cameras:        "Kameras",
    footer_gaming:         "Gaming",
    footer_appliances:     "Haushaltsgeräte",
    footer_about:          "Über uns",
    footer_how:            "So funktioniert's",
    footer_privacy:        "Datenschutz",
    footer_contact:        "Kontakt",
    footer_bottom:         "© 2026 Deja Buy. Wir können eine Provision für qualifizierte Käufe erhalten.",
    // Page title
    page_title: "Deja Buy — Refurbished Schnäppchen aus dem Web",
  },
  en: {
    // Nav
    nav_deals:          "Deals",
    nav_how:            "How It Works",
    search_placeholder: "Search deals...",
    lang_switch:        "DE",
    // Hero
    badge:               "500+ deals tracked daily",
    hero_h1_line1:       "The best refurbished deals,",
    hero_h1_line2:       "all in one place.",
    hero_sub:            "We scan Back Market, Amazon Renewed, Rebuy, eBay and more — curating the top savings so you don't have to.",
    stat_deals:          "Active Deals",
    stat_categories:     "Categories",
    stat_savings_num:    "Up to 65%",
    stat_savings_label:  "Off Retail",
    stat_retailers:      "Trusted Retailers",
    // Retailers bar
    deals_from: "Deals from",
    // Deal filters
    filter_all:        "All Deals",
    filter_phones:     "📱 Phones",
    filter_laptops:    "💻 Laptops",
    filter_audio:      "🎧 Audio",
    filter_cameras:    "📷 Cameras",
    filter_gaming:     "🎮 Gaming",
    filter_appliances: "🏠 Appliances",
    // Sort
    sort_savings:    "Best Savings",
    sort_price_asc:  "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    // Deal card
    hot_deal:      "🔥 Hot Deal",
    view_deal:     "View Deal →",
    pct_off:       "% off",
    deal_singular: "deal",
    deal_plural:   "deals",
    no_results:    "No deals found. Try a different search or category.",
    // How it works
    how_title:  "How Deja Buy Works",
    how_sub:    "We do the legwork. You get the savings.",
    how1_title: "We Track",
    how1_body:  "Our team monitors hundreds of refurbished listings across the web's top resale and refurb platforms every day.",
    how2_title: "We Curate",
    how2_body:  "Only deals with strong savings, reputable sellers, and clear grading make the cut. No junk listings.",
    how3_title: "You Save",
    how3_body:  "Click through to buy directly from the retailer. We never handle payments — just the discovery.",
    // Footer
    footer_tagline:        "Curating the best refurbished deals from trusted retailers.",
    footer_col_categories: "Categories",
    footer_col_retailers:  "Retailers",
    footer_col_company:    "Company",
    footer_phones:         "Phones",
    footer_laptops:        "Laptops",
    footer_audio:          "Audio",
    footer_cameras:        "Cameras",
    footer_gaming:         "Gaming",
    footer_appliances:     "Appliances",
    footer_about:          "About",
    footer_how:            "How It Works",
    footer_privacy:        "Privacy Policy",
    footer_contact:        "Contact",
    footer_bottom:         "© 2026 Deja Buy. We may earn a commission on qualifying purchases.",
    // Page title
    page_title: "Deja Buy — Refurbished Deals Across the Web",
  },
};
let currentLang = localStorage.getItem("dejabuy_lang") || "de";
export function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;
}
export function getCurrentLang() {
  return currentLang;
}
export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("dejabuy_lang", lang);
  document.documentElement.lang = lang;
  document.title = TRANSLATIONS[lang].page_title;
}
export function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  const search = document.getElementById("search");
  if (search) search.placeholder = t("search_placeholder");
  const sort = document.getElementById("sortSelect");
  if (sort) {
    sort.options[0].textContent = t("sort_savings");
    sort.options[1].textContent = t("sort_price_asc");
    sort.options[2].textContent = t("sort_price_desc");
  }
}
