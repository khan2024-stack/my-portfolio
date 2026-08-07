"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { contact, sections } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

export default function Contact() {
  const [sending, setSending] = useState(false);

  /**
   * No backend yet, so this opens the visitor's mail client with the
   * message pre-filled. Swap for a POST to an API route or a service
   * like Formspree when one is in place.
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${contact.inbox}?subject=${subject}&body=${body}`;

    toast.success("Opening your mail app…");
    setSending(false);
  };

  return (
    <section className="sec" id="contact">
      <SectionHead {...sections.contact} />

      <div className="contact rv">
        <div className="contact__l">
          <p>{contact.body}</p>

          <dl className="details">
            {contact.details.map((d) => (
              <div className="detail" key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contact__r">
          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Your email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you building?"
              />
            </div>
            <button className="btn btn--fill" type="submit" disabled={sending}>
              Send message <span className="arw">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
