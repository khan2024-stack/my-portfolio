/**
 * EmailJS settings for the contact form.
 *
 * These three values are public by design — EmailJS runs in the browser, so
 * its "public key" is meant to be seen, and the service / template ids are
 * only names. They are what the earlier portfolio used and they still
 * work, so they are the defaults here; set the NEXT_PUBLIC_EMAILJS_*
 * variables in Vercel to override them without touching code.
 *
 * What actually protects the account is on the EmailJS side (Account →
 * Security: allowed domains, rate limits) — add `sajjad-ai-eng.site` there
 * if you restrict origins.
 */
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_ic0bzb5",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_9h4ofh3",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "M5qXOrar-RdGHXDzY",
};
