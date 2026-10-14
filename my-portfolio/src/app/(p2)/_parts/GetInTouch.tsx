import type { IconType } from "react-icons";
import { FiClock, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { about, contact, identity } from "@/app/portfolio-content/site-content";
import ContactForm from "./ContactForm";
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

const wa = contact.whatsapp;
const waHref = `https://wa.me/${wa.digits}?text=${encodeURIComponent(wa.message)}`;

const ROWS: Row[] = [
  { icon: FiMail, label: "Email", value: contact.inbox, href: `mailto:${contact.inbox}` },
  { icon: FaWhatsapp, label: "WhatsApp", value: wa.display, href: waHref },
  { icon: FiMapPin, label: "Location", value: identity.location },
  { icon: FiGlobe, label: "Works", value: detail("Works")?.value ?? "" },
  { icon: FiClock, label: "Availability", value: fact("Freelance")?.value ?? "" },
].filter((r) => r.value);

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
        <h3>Send me a message</h3>
        <ContactForm email={contact.inbox} whatsappHref={waHref} />
        <p className="p2-reach__steps">
          You send a short brief &rarr; I reply with how I&rsquo;d approach it
          and when I could start &rarr; scope and timeline are agreed before
          any code is written.
        </p>
        <a
          className="p2-btn p2-btn--lime"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prefer WhatsApp? Message me <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </div>
  );
}
