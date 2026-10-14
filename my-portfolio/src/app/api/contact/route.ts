import { NextResponse } from "next/server";

/**
 * Contact form endpoint — sends the message by email through Resend, so it
 * does not depend on a Gmail OAuth token that can expire.
 *
 * Needs ONE secret, set in Vercel → Settings → Environment Variables:
 *   RESEND_API_KEY   (from resend.com, free tier is plenty)
 * Optional:
 *   CONTACT_TO       where messages go (default: the inbox below)
 *   CONTACT_FROM     sender, e.g. "Portfolio <hello@your-domain>" once the
 *                    domain is verified in Resend. The default sender can
 *                    only deliver to the Resend account's own address.
 *
 * Without the key it answers 503 "not_configured" and the form falls back
 * to EmailJS, so nothing breaks while this is being set up.
 */
export const runtime = "nodejs";

const INBOX = "sajjadk546@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Light per-instance throttle: 1 message / 20 s / IP. (Serverless instances
// are short-lived, so this is a speed bump, not a guarantee — the honeypot
// and validation do the heavier lifting.)
const lastSeen = new Map<string, number>();

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (String(body.company ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "?";
  const now = Date.now();
  if (now - (lastSeen.get(ip) ?? 0) < 20_000) {
    return NextResponse.json({ error: "too_soon" }, { status: 429 });
  }
  lastSeen.set(ip, now);

  const to = process.env.CONTACT_TO ?? INBOX;
  const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
      }),
    });
    if (!r.ok) {
      const detail = (await r.text()).slice(0, 200);
      console.error("[contact] Resend rejected:", r.status, detail);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Resend unreachable:", e);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
