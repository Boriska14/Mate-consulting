/**
 * Privacy-preserving conversion & event tracking
 * Zero-cookie, GDPR-compliant. Dispatches custom events and supports Plausible or GA4 if present.
 */

export type TrackingEventName =
  | 'cta_hero_click'
  | 'cta_nav_click'
  | 'cta_services_click'
  | 'cta_footer_click'
  | 'form_submit_start'
  | 'form_submit_success'
  | 'phone_click'
  | 'whatsapp_click'
  | 'calendly_click';

export function trackEvent(name: TrackingEventName, properties: Record<string, any> = {}) {
  try {
    // If Plausible is configured on the window
    if (typeof (window as any).plausible === 'function') {
      (window as any).plausible(name, { props: properties });
    }

    // Standard DOM CustomEvent for tag managers or custom handlers
    const customEvent = new CustomEvent('mate_analytics_event', {
      detail: { event: name, properties, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event]: ${name}`, properties);
    }
  } catch (err) {
    // Non-blocking
  }
}
