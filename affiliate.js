// Affiliate ID config — replace empty strings with your IDs once approved.
// These will move to server-side env vars when a backend is added.
const AFFILIATE_CONFIG = {
  amazon_de:    { tag: "" },                      // Amazon.de Associates
  ebay_de:      { campaignId: "", customId: "dejabuy" }, // eBay.de Partner Network
  backmarket:   { affiliateId: "" },              // Back Market via Awin
  rebuy:        { affiliateId: "" },              // Rebuy.de via ADCELL
  refurbed:     { affiliateId: "" },              // Refurbed.com direct program
  asgoodasnew:  { affiliateId: "" },              // Asgoodasnew.com via Awin
};

function isConfigured(source) {
  const c = AFFILIATE_CONFIG;
  switch (source) {
    case "Amazon Renewed":   return !!c.amazon_de.tag;
    case "eBay Refurbished": return !!c.ebay_de.campaignId;
    case "Back Market":      return !!c.backmarket.affiliateId;
    case "Rebuy":            return !!c.rebuy.affiliateId;
    case "Refurbed":         return !!c.refurbed.affiliateId;
    case "Asgoodasnew":      return !!c.asgoodasnew.affiliateId;
    default:                 return false;
  }
}

export function buildAffiliateUrl(rawUrl, source) {
  if (!isConfigured(source)) return rawUrl;
  switch (source) {
    case "Amazon Renewed": {
      const url = new URL(rawUrl);
      url.searchParams.set("tag", AFFILIATE_CONFIG.amazon_de.tag);
      return url.toString();
    }
    case "eBay Refurbished": {
      const { campaignId, customId } = AFFILIATE_CONFIG.ebay_de;
      // eBay.de rover endpoint (707-* = German eBay marketplace)
      const rover = new URL("https://rover.ebay.com/rover/1/707-53477-19255-0/1");
      rover.searchParams.set("campid", campaignId);
      rover.searchParams.set("customid", customId);
      rover.searchParams.set("toolid", "10001");
      rover.searchParams.set("mpre", rawUrl);
      return rover.toString();
    }
    case "Back Market": {
      // Back Market Germany uses Awin affiliate network
      const url = new URL(rawUrl);
      url.searchParams.set("utm_source", "dejabuy");
      url.searchParams.set("utm_medium", "affiliate");
      url.searchParams.set("awc", AFFILIATE_CONFIG.backmarket.affiliateId);
      return url.toString();
    }
    case "Rebuy": {
      // Rebuy.de uses ADCELL affiliate network
      const adcell = new URL("https://t.adcell.com/p/click");
      adcell.searchParams.set("promoId", AFFILIATE_CONFIG.rebuy.affiliateId);
      adcell.searchParams.set("slotId", "dejabuy");
      adcell.searchParams.set("param0", rawUrl);
      return adcell.toString();
    }
    case "Refurbed": {
      // Refurbed.com direct affiliate program
      const url = new URL(rawUrl);
      url.searchParams.set("a_aid", AFFILIATE_CONFIG.refurbed.affiliateId);
      url.searchParams.set("a_bid", "dejabuy");
      return url.toString();
    }
    case "Asgoodasnew": {
      // Asgoodasnew.com uses Awin affiliate network
      const url = new URL(rawUrl);
      url.searchParams.set("utm_source", "dejabuy");
      url.searchParams.set("utm_medium", "affiliate");
      url.searchParams.set("awc", AFFILIATE_CONFIG.asgoodasnew.affiliateId);
      return url.toString();
    }
    default:
      return rawUrl;
  }
}
