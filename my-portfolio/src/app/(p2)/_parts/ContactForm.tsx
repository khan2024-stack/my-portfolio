"use client";

import { useState } from "react";
import { emailjsConfig } from "@/app/portfolio-content/emailjs";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * The contact form. Sends through EmailJS exactly as the earlier portfolio
 * did: `name`, `email` and `message` as the template parameters, so the
 * existing EmailJS template needs no change.
 *
 * Differences from the old version, all small:
 *  - validated before sending (no empty or malformed submissions)
 *  - a hidden "company" field that humans never fill, so a bot that does
 *    is dropped silently
 *  - the library's own rate limit (one send per 15 seconds)
 *  - inline status text instead of alert(), with a way out on failure
 *  - the library is loaded only when someone actually sends
 */
export default function ContactForm({
  email,
  whatsappHref,
}: {
  email: string;
  whatsappHref: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");
  const [detail, setDetail] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real visitor never sees this field.
    if (String(data.get("company") ?? "").trim() !== "") {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) return fail("Please tell me your name.");
    if (!EMAIL_RE.test(from)) return fail("That email address doesn’t look right.");
    if (message.length < 10)
      return fail("Add a line or two about what you’re building.");

    setStatus("sending");
    setNote("");
    setDetail("");

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { name, email: from, message },
        {
          publicKey: emailjsConfig.publicKey,
          limitRate: { id: "contact-form", throttle: 15000 },
        },
      );
      setStatus("sent");
      form.reset();
    } catch (err) {
      // EmailJS rejects with { status, text }. Keep the visitor-facing
      // message friendly, but surface the real reason (small, under it and
      // in the console) so a broken template / expired service is obvious
      // instead of a silent "couldn't send".
      const e = err as { status?: number; text?: string } | null;
      const reason = e && (e.status || e.text) ? `${e.status ?? ""} ${e.text ?? ""}`.trim() : String(err);
      console.error("[contact] EmailJS send failed:", err);
      setDetail(reason.slice(0, 220));
      const tooSoon = /limit/i.test(e?.text ?? "");
      fail(
        tooSoon
          ? "Please wait a few seconds before sending again."
          : "Couldn’t send that just now.",
        true,
      );
    }
  }

  function fail(text: string, delivery = false) {
    setStatus("error");
    setNote(delivery ? `${text} Email me directly or use WhatsApp.` : text);
  }

  if (status === "sent") {
    return (
      <div className="p2-form p2-form--done" role="status">
        <span className="p2-form__tick" aria-hidden="true">
          &#10003;
        </span>
        <h3>Message sent</h3>
        <p>Thank you — I’ll reply to you by email.</p>
        <button
          type="button"
          className="p2-form__again"
          onClick={() => {
            setStatus("idle");
            setNote("");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  // method="post": if someone submits before the script has loaded, the
  // browser must not put their message in the URL (a GET would).
  return (
    <form className="p2-form" method="post" onSubmit={onSubmit} noValidate>
      <label className="p2-form__f">
        <span>Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
        />
      </label>
      <label className="p2-form__f">
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          required
        />
      </label>
      <label className="p2-form__f">
        <span>What are you building?</span>
        <textarea
          name="message"
          rows={3}
          placeholder="A short description is plenty."
          required
        />
      </label>

      {/* Honeypot — hidden from people and from assistive tech. */}
      <label className="p2-form__hp" aria-hidden="true">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="p2-form__go"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <span aria-hidden="true">&#8599;</span>
      </button>

      <p
        className={`p2-form__note${status === "error" ? " is-error" : ""}`}
        role={status === "error" ? "alert" : undefined}
      >
        {status === "error" && note ? (
          <>
            {note}{" "}
            {note.includes("directly") ? (
              <>
                <a href={`mailto:${email}`}>{email}</a> ·{" "}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </>
            ) : null}
          </>
        ) : (
          "Goes straight to my inbox. No newsletters, no list."
        )}
      </p>
      {status === "error" && detail ? (
        <p className="p2-form__detail">Details: {detail}</p>
      ) : null}
    </form>
  );
}
