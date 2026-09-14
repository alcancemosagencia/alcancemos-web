export type LeadAnalyticsEvent =
  | "lead_modal_open"
  | "lead_form_start"
  | "whatsapp_intent"
  | "whatsapp_open"
  | "lead_form_error";

export function trackLeadEvent(event: LeadAnalyticsEvent, properties?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  try {
    const customEvent = new CustomEvent("alcancemos:lead_event", {
      detail: { event, properties, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);

    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log(`[Analytics Event] ${event}`, properties || "");
    }
  } catch {
    // Silently fail if event cannot be dispatched
  }
}
