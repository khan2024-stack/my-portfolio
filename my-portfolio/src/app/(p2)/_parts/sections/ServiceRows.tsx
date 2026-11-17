import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { services } from "@/app/portfolio-content/site-content";
import webPlatforms from "@/assets/services/web-platforms.jpg";
import aiVoice from "@/assets/services/ai-voice.jpg";
import automation from "@/assets/services/automation.jpg";
import management from "@/assets/services/management.jpg";
import webPlatformsDark from "@/assets/services/web-platforms-dark.jpg";
import aiVoiceDark from "@/assets/services/ai-voice-dark.jpg";
import automationDark from "@/assets/services/automation-dark.jpg";
import managementDark from "@/assets/services/management-dark.jpg";

/* ── Services page: compact cards (2026-11-15) ───────────────────────
   Two to a row: a small real-screen thumbnail on the left (built by
   E:\sales-media-library\tools\selling\build_service_thumbs.py), and on
   the right only the essentials: title, one short line, four key
   items as tags and an enquiry link. The full capability lists stay in
   site-content for other pages. */
/* `dark` and `ticks` feed the home page showcase cards: the same screens on a
   dark backdrop with its own glow, and three short points taken from the
   capability lists in site-content. */
const cards: Record<string, { src: StaticImageData; dark: StaticImageData; alt: string; line: string; keys: string[]; ticks: string[] }> = {
  "Web Platforms": {
    src: webPlatforms,
    dark: webPlatformsDark,
    ticks: ["Storefronts and admin panels", "Payment and shipping APIs", "SEO-optimised performance"],
    alt: "ZuShap online store on a laptop and a phone",
    line: "Commerce sites and custom platforms, from design file to a live store.",
    keys: ["Storefronts", "Admin panels", "Payments", "SEO"],
  },
  "AI & Voice Systems": {
    src: aiVoice,
    dark: aiVoiceDark,
    ticks: ["Real-time voice calls", "Answers from your own data", "In-call memory"],
    alt: "Sara voice agent analytics on a laptop and a live call on a phone",
    line: "Phone and chat agents that answer from your own data and remember the call.",
    keys: ["Voice calls", "Two languages", "Bookings", "Call memory"],
  },
  "Automation & Infrastructure": {
    src: automation,
    dark: automationDark,
    ticks: ["Scheduled reporting", "API connectors", "Zero-downtime releases"],
    alt: "Store admin product desk on a laptop and call logs on a tablet",
    line: "Systems that remove the manual step and release without downtime.",
    keys: ["Reports", "Integrations", "CI/CD", "Cloud"],
  },
  "Management & Support": {
    src: management,
    dark: managementDark,
    ticks: ["Uptime monitoring", "Updates and bug fixes", "Managed backups"],
    alt: "Store admin home page blocks on a laptop and bookings on a tablet",
    line: "One accountable person looking after what is already live.",
    keys: ["Monitoring", "Updates", "Fixes", "Backups"],
  },
};

/* `home` is the cleaner preview on the home page: a small label, the
   title, one line and the link. The tags stay on the Services page. */
export function ServiceRows({ home = false }: { home?: boolean }) {
  return (
    <div className={home ? "t-svc-rows t-svc-rows--home" : "t-svc-rows"}>
      {services.map((s) => {
        const c = cards[s.title];
        if (!c) return null;
        return (
          <Reveal as="article" dir="up" className={`t-svc-row t-svc-row--${s.title.split(" ")[0].toLowerCase()}`} key={s.title}>
            <div className="t-svc-row__media">
              {/* No blur placeholder on the dark set: it is screened onto the card,
                  where a blurred preview shows as a white smear while loading. */}
              <Image src={home ? c.dark : c.src} alt={c.alt} placeholder={home ? "empty" : "blur"} sizes="(max-width: 640px) 100vw, 420px" />
            </div>
            <div className="t-svc-row__body">
              {home ? <span className="t-svc-row__sub">{s.sub}</span> : null}
              <h2>{s.title}</h2>
              <p className="t-svc-row__text">{c.line}</p>
              {home ? (
                <ul className="t-svc-row__ticks">
                  {c.ticks.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              ) : (
                <ul className="t-svc-row__tags">
                  {c.keys.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              )}
              {/* The link stretches over the whole card (CSS), so a tap anywhere opens it. */}
              <Link className="t-svc-row__more" href={`/contact?service=${encodeURIComponent(s.title)}#message`}>
                Discuss your project <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
