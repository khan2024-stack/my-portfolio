import type { IconType } from "react-icons";
import { FiClock, FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { about, contact, identity } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

/**
 * Their "Get in touch" block: a badge, then rows of a black square with
 * a lime glyph beside a small uppercase label and a bold value, with a
 * Google Map filling the right half.
 *
 * The map is deliberately not reproduced — it is a third-party embed
 * that would load Google's trackers on every visit, and this is the only
 * external request the site would make. The right column carries a
 * direct next-step panel instead. Say the word and I'll add the map.
 */
type Row = { icon: IconType; label: string; value: string; href?: string };

const detail = (label: string) => contact.details.find((d) => d.label === label);
const fact = (label: string) => about.facts.find((f) => f.label === label);

const phone = detail("Phone");
/* about.facts lists the same +971 number under both "Phone" and
   "WhatsApp", so one row carries both rather than printing it twice. */
const isWhatsApp = fact("WhatsApp")?.value === phone?.value;

const ROWS: Row[] = [
  { icon: FiMail, label: "Email", value: contact.inbox, href: `mailto:${contact.inbox}` },
  {
    icon: FiPhone,
    label: isWhatsApp ? "Phone / WhatsApp" : "Phone",
    value: phone?.value ?? "",
    href: phone?.href ?? undefined,
  },
  { icon: FiMapPin, label: "Location", value: identity.location },
  { icon: FiGlobe, label: "Works", value: detail("Works")?.value ?? "" },
  { icon: FiClock, label: "Availability", value: fact("Freelance")?.value ?? "" },
].filter((r) => r.value);

const waHref = phone?.value
  ? `https://wa.me/${phone.value.replace(/\D/g, "")}`
  : null;

export default function GetInTouch() {
  return (
    <div className="p2-split">
      <div>
        <SectionHead eyebrow="Get in touch" title="Reach me directly" />
        <ul className="p2-reach">
          {ROWS.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <span className="p2-reach__icon" aria-hidden="true">
                <Icon />
              </span>
              <div className="p2-reach__txt">
                <span className="p2-reach__k">{label}</span>
                {href ? <a href={href}>{value}</a> : <b>{value}</b>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p2-reach__panel">
        <h3>What happens next</h3>
        <ol>
          <li>You send a short description of what you&rsquo;re building.</li>
          <li>
            I come back with how I&rsquo;d approach it, roughly what it takes,
            and when I could start.
          </li>
          <li>Scope and timeline are agreed before any code gets written.</li>
        </ol>
        {isWhatsApp && waHref ? (
          <a
            className="p2-btn p2-btn--lime"
            href={waHref}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp <span aria-hidden="true">&#8599;</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
