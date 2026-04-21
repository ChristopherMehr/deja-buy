// Affiliate ID config — replace empty strings with your IDs once approved.
// These will move to server-side env vars when a backend is added.
const AFFILIATE_CONFIG = {
  amazon:     { tag: "" },
  ebay:       { campaignId: "", customId: "dejabuy" },
  backmarket: { affiliateId: "" },
  rakuten:    { publisherId: "" }, // covers Newegg
  reebelo:    { affiliateId: "" },
};

// Returns true if this source has a configured affiliate ID
function isConfigured(source) {
  const c = AFFILIATE_CONFIG;
  switch (source) {
    case "Amazon Renewed":   return !!c.amazon.tag;
    case "eBay Refurbished": return !!c.ebay.campaignId;
    case "Back Market":      return !!c.backmarket.affiliateId;
    case "Newegg":           return !!c.rakuten.publisherId;
    case "Reebelo":          return !!c.reebelo.affiliateId;
    default:                 return false;
  }
}

// Builds a tracked affiliate URL for a given product URL + source retailer.
// Falls back to the raw URL if the affiliate ID isn't configured yet.
export function buildAffiliateUrl(rawUrl, source) {
  if (!isConfigured(source)) return rawUrl;

  const url = new URL(rawUrl);

  switch (source) {
    case "Amazon Renewed": {
      url.searchParams.set("tag", AFFILIATE_CONFIG.amazon.tag);
      return url.toString();
    }

    case "eBay Refurbished": {
      // eBay rover link format for affiliate tracking
      const { campaignId, customId } = AFFILIATE_CONFIG.ebay;
      const rover = new URL("https://rover.ebay.com/rover/1/711-53200-19255-0/1");
      rover.searchParams.set("campid", campaignId);
      rover.searchParams.set("customid", customId);
      rover.searchParams.set("toolid", "10001");
      rover.searchParams.set("mpre", rawUrl);
      return rover.toString();
    }

    case "Back Market": {
      // Impact affiliate tracking — format confirmed once you have your ID
      url.searchParams.set("utm_source", "dejabuy");
      url.searchParams.set("utm_medium", "affiliate");
      url.searchParams.set("irclickid", AFFILIATE_CONFIG.backmarket.affiliateId);
      return url.toString();
    }

    case "Newegg": {
      // Rakuten affiliate link wrapper
      const rakuten = new URL("https://click.linksynergy.com/deeplink");
      rakuten.searchParams.set("id", AFFILIATE_CONFIG.rakuten.publisherId);
      rakuten.searchParams.set("mid", "35589"); // Newegg's Rakuten merchant ID
      rakuten.searchParams.set("murl", rawUrl);
      return rakuten.toString();
    }

    case "Reebelo": {
      url.searchParams.set("aff_id", AFFILIATE_CONFIG.reebelo.affiliateId);
      return url.toString();
    }

    default:
      return rawUrl;
  }
}
