import { contact } from "@/app/portfolio-content/site-content";
import ContactForm from "./ContactForm";
import { ROWS, waHref } from "./GetInTouch";
import SectionHead from "./SectionHead";

/* What a brief needs to contain for the first reply to be useful. */
const BRIEF = [
  { k: "What you’re building", v: "A paragraph is plenty — the product, who uses it, and what it has to do." },
  { k: "What already exists", v: "A repo, a live site, designs, an old system being replaced, or nothing yet." },
  { k: "The date you’re working to", v: "A launch, a demo, a funding milestone. Even an approximate one shapes the plan." },
  { k: "A budget range", v: "Rough is fine. It decides scope, and it saves us both a round of guessing." },
];

/**
 * Contact page body: every piece of info in the left column, the message
 * form in the right column, which stays in view (sticky) while the left
 * column scrolls.
 */
export default function ContactLayout() {
  return (
    <div className="p2-cx">
      <div className="p2-cx__info">
        <div>
          <SectionHead eyebrow="Let’s talk" title="Have a project in mind?" />
          <p className="p2-lede">
            Email reaches me directly — no agency, no account manager, no
            ticket queue.
          </p>
          <ul className="p2-brief">
            {BRIEF.map((b) => (
              <li key={b.k}>
                <span className="p2-brief__k">{b.k}</span>
                <p>{b.v}</p>
              </li>
            ))}
          </ul>
        </div>

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
      </div>

      <aside className="p2-reach__panel p2-cx__form">
        <h3>Send me a message</h3>
        <ContactForm email={contact.inbox} whatsappHref={waHref} />
        <p className="p2-reach__steps">
          You send a short brief &rarr; I reply with how I&rsquo;d approach it
          and when I could start &rarr; scope and timeline are agreed before
          any code is written.
        </p>
        <a className="p2-btn p2-btn--lime" href={waHref} target="_blank" rel="noopener noreferrer">
          Prefer WhatsApp? Message me <span aria-hidden="true">&#8599;</span>
        </a>
      </aside>
    </div>
  );
}
