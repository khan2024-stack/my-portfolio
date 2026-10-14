import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/app/portfolio-content/site-content";

/**
 * Floating "chat on WhatsApp" button, on every page.
 *
 * A plain link — no script. The message is pre-filled so a visitor only
 * has to press send; the number comes from `contact.whatsapp`, the same
 * single source the Contact page uses, so the two can never disagree.
 *
 * Icon-only circle on phones (it must not cover content), icon + label
 * pill from tablet up.
 */
export default function WhatsAppFab() {
  const { digits, message } = contact.whatsapp;
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="p2-wa"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sajjad on WhatsApp"
    >
      <span className="p2-wa__icon" aria-hidden="true">
        <FaWhatsapp />
      </span>
      <span className="p2-wa__label">Chat on WhatsApp</span>
    </a>
  );
}
