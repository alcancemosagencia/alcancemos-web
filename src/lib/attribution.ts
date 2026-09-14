export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
}

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "alcancemos_attribution";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const stored = getStoredAttribution();
    const current: AttributionData = { ...stored };
    let hasNewData = false;

    for (const key of ATTRIBUTION_KEYS) {
      const val = searchParams.get(key);
      if (val) {
        current[key] = val;
        hasNewData = true;
      }
    }

    if (!current.referrer && document.referrer && !document.referrer.includes(window.location.hostname)) {
      current.referrer = document.referrer;
      hasNewData = true;
    }

    if (!current.landing_page) {
      current.landing_page = window.location.pathname;
      hasNewData = true;
    }

    if (hasNewData || !stored.landing_page) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }
  } catch {
    // Ignore restrictions
  }
}

export function getStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}
