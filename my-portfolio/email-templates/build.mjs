// Builds every email template from one shared layout so they all match.
// Run:  node email-templates/build.mjs   (writes the .html files next to this one)
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = dirname(fileURLToPath(import.meta.url));
const SITE = "https://www.sajjad-ai-eng.site";
const MAIL = "connect.sajjadaie@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/sajjad-ai-eng/";

const p = (t) => `<p style="margin:0 0 14px;">${t}</p>`;
const muted = (t) => `<span style="color:#3b4048;">${t}</span>`;
const row = (title, body, last) =>
  `<tr><td style="padding:12px 0;border-top:1px solid #e3e0d6;${last ? "border-bottom:1px solid #e3e0d6;" : ""}"><b>${title}</b><br>${muted(body)}</td></tr>`;
const list = (rows) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 14px;">${rows
    .map(([t, b], i) => row(t, b, i === rows.length - 1))
    .join("")}</table>`;
const button = (label, href) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 14px;"><tr><td style="background:#d9ff3f;border:1px solid #14161a;border-radius:24px;"><a href="${href}" style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:bold;color:#14161a;text-decoration:none;">${label}</a></td></tr></table>`;
const work = `<p style="margin:0 0 8px;"><b>Recent work</b></p>
<p style="margin:0 0 6px;">&bull; <b>E-commerce &amp; Shopify automation</b>, USA &mdash; <a href="${SITE}/work" style="color:#14161a;">see the project</a></p>
<p style="margin:0 0 6px;">&bull; <b>E-commerce development</b>, UAE &mdash; <a href="${SITE}/work" style="color:#14161a;">see the project</a></p>
<p style="margin:0 0 14px;">&bull; <b>Web development</b>, UK &mdash; <a href="${SITE}/work" style="color:#14161a;">see the project</a></p>`;

const templates = [
  {
    file: "01-shopify-proposal",
    name: "Shopify proposal",
    use: "Sent to a store owner after you looked at their store.",
    subject: "[Store name] - a few ideas for your Shopify store",
    body: [
      p("Hi [First name],"),
      p("I had a look at [Store name] ([store link]) and noticed [one specific, true observation: slow mobile product pages / extra checkout steps / order updates sent by hand]. A few small changes could help with [goal: more completed orders / less manual work]."),
      p("Here is what I would suggest:"),
      list([
        ["1. [Improvement one]", "[One sentence: what changes and what it means for the store.]"],
        ["2. [Improvement two]", "[One sentence.]"],
        ["3. [Improvement three, e.g. ongoing management and support]", "[One sentence.]"],
      ]),
      work,
      p(`<b>How I work.</b> ${muted("Everything is scoped and quoted in writing before I start. Timeline: [X days/weeks]. Quote: [fixed price / monthly plan].")}`),
      p("If you would like to go ahead, or talk it through first, just reply to this email or message me on WhatsApp [number]. A quick 15-minute call also works."),
      button("Reply to this proposal", `mailto:${MAIL}?subject=Re:%20[Store%20name]`),
    ],
    footer: "You are receiving this because I reached out about [Store name]. If it is not relevant, reply “no thanks” and I will not email again.",
  },
  {
    file: "02-introduction",
    name: "Introduction (first contact)",
    use: "Short first message to a business you think you can help.",
    subject: "Quick idea for [Company name]",
    body: [
      p("Hi [First name],"),
      p("I am Sajjad, a full-stack and AI engineer. I help businesses with [AI voice agents / Shopify and e-commerce / web platforms / ongoing management and support]."),
      p("I came across [Company name] and thought [one specific, true reason it is relevant: e.g. you handle many calls by hand / your store could load faster on mobile]. I would be happy to share a couple of ideas, with no obligation."),
      work,
      p(`More about my work and client reviews: <a href="${SITE}" style="color:#14161a;">sajjad-ai-eng.site</a>`),
      button("Reply if you would like the ideas", `mailto:${MAIL}?subject=Re:%20[Company%20name]`),
    ],
    footer: "Not relevant? Reply “no thanks” and I will not contact you again.",
  },
  {
    file: "03-follow-up",
    name: "Follow-up (no reply)",
    use: "Send 4-5 days after a proposal or introduction, once only.",
    subject: "Re: [Original subject]",
    body: [
      p("Hi [First name],"),
      p("A quick follow-up on my last message about [topic]. I know inboxes get busy, so I will keep this short."),
      p("If it is still of interest, I can send a one-page plan with price and timeline. If the timing is wrong, no problem at all, just tell me and I will check back later."),
      button("Yes, please send the plan", `mailto:${MAIL}?subject=Re:%20[Original%20subject]`),
    ],
    footer: "This is my only follow-up. Reply “no thanks” and I will not email again.",
  },
  {
    file: "04-quote",
    name: "Project quote",
    use: "Formal scope, price and timeline once the client says yes in principle.",
    subject: "Quote: [Project name] - [Client / Store name]",
    body: [
      p("Hi [First name],"),
      p("Thank you for the conversation. Here is the written quote for <b>[Project name]</b>."),
      list([
        ["Scope", "[What is included, in two or three lines.]"],
        ["Not included", "[Anything you want to be clear about.]"],
        ["Timeline", "[Start date] to [delivery date], with updates [weekly / twice a week]."],
        ["Price", "[Fixed price / monthly plan] &mdash; [payment terms, e.g. 50% to start, 50% on delivery]."],
        ["After launch", "[Support period or monthly management plan, if any.]"],
      ]),
      p("To accept, reply “Approved” and I will send the start details. This quote is valid for [7 / 14] days."),
      button("Approve this quote", `mailto:${MAIL}?subject=Approved:%20[Project%20name]`),
    ],
    footer: "Prices in [currency]. Work starts after written approval.",
  },
  {
    file: "05-access-request",
    name: "Access request (Shopify / Meta / hosting)",
    use: "Ask a new client for the access you need, safely and without passwords.",
    subject: "Access I need to get started - [Project name]",
    body: [
      p("Hi [First name],"),
      p("To get started on <b>[Project name]</b> I need access to a few accounts. <b>Please do not send me any passwords.</b> Each one below can be given by invite and removed by you at any time."),
      list([
        ["Shopify", "Settings &rarr; Users &rarr; Add staff, with my email <b>" + MAIL + "</b> (staff permissions: products, orders, themes, apps)."],
        ["Meta (Facebook / Instagram / Ads)", "Meta Business Suite &rarr; Settings &rarr; add me as a partner or person with access to the page, Instagram and ad account."],
        ["Domain / hosting", "[Only if needed: invite as a user, or share the DNS settings screen.]"],
      ]),
      p("If any step is unclear, send me a screenshot of where you are and I will tell you exactly what to press."),
      button("Reply when access is sent", `mailto:${MAIL}?subject=Access%20sent:%20[Project%20name]`),
    ],
    footer: "I only ask for the access needed for this project and it can be removed at any time.",
  },
  {
    file: "06-progress-report",
    name: "Weekly progress report",
    use: "Short update to keep a client confident while work or ads are running.",
    subject: "[Project name] - update for week of [date]",
    body: [
      p("Hi [First name],"),
      p("Here is this week's update on <b>[Project name]</b>."),
      list([
        ["Done this week", "[Two or three short points.]"],
        ["Results", "[Real numbers only: e.g. spend, clicks, add-to-carts, orders.]"],
        ["Next week", "[What happens next.]"],
        ["Needed from you", "[Approval / content / nothing right now.]"],
      ]),
      p("Reply with any questions, or tell me if you would like to adjust anything."),
    ],
    footer: "Sent as part of your [project / monthly management plan].",
  },
  {
    file: "07-review-request",
    name: "Review request (after delivery)",
    use: "Ask a happy client for a review or recommendation.",
    subject: "Thank you - and a small favour",
    body: [
      p("Hi [First name],"),
      p("Thank you for working with me on <b>[Project name]</b>. It was a pleasure, and I am glad it is live."),
      p(`If you were happy with the result, would you write 2-3 lines about your experience? It helps other business owners trust me, and it takes a minute. You can reply to this email, or leave it on <a href="${LINKEDIN}" style="color:#14161a;">LinkedIn</a>.`),
      p("A few things that are helpful to mention: what we built, how communication was, and the result you saw."),
      p("I am also available for ongoing management and support, so reach out any time something needs attention."),
      button("Write my review", `mailto:${MAIL}?subject=My%20review:%20[Project%20name]`),
    ],
    footer: "Thank you again for your trust.",
  },
];

function page(t) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.name}</title>
<style>
  .bar{max-width:600px;margin:0 auto;padding:14px 0;font:13px Arial,sans-serif;color:#3b4048;display:flex;gap:12px;align-items:center;flex-wrap:wrap}
  .bar button{font:bold 13px Arial,sans-serif;padding:9px 16px;border:1px solid #14161a;border-radius:24px;background:#d9ff3f;color:#14161a;cursor:pointer}
  .bar code{background:#fff;border:1px solid #14161a;border-radius:4px;padding:3px 8px;color:#14161a}
</style>
</head>
<body style="margin:0;padding:0;background:#f5f3ec;">
<div class="bar">
  <button type="button" onclick="var r=document.createRange();r.selectNode(document.getElementById('email'));var s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand('copy');s.removeAllRanges();this.textContent='Copied - paste into Gmail'">Copy email</button>
  <span><b>${t.name}.</b> ${t.use}</span>
  <span>Subject: <code>${t.subject}</code></span>
  <span>Replace every [bracket] before copying: click and type on the page.</span>
</div>
<div id="email">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ec;">
<tr><td align="center" style="padding:8px 12px 24px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #14161a;border-radius:4px;font-family:Arial,Helvetica,sans-serif;color:#14161a;">
  <tr><td style="padding:24px 32px 16px;border-bottom:1px solid #14161a;">
    <div style="font-size:18px;font-weight:bold;">Muhammad Sajjad</div>
    <div style="font-size:13px;color:#3b4048;margin-top:2px;">Full-Stack &amp; AI Engineer &middot; Shopify, web apps, automation</div>
  </td></tr>
  <tr><td contenteditable="true" style="padding:24px 32px 8px;font-size:15px;line-height:1.6;">
${t.body.join("\n")}
  </td></tr>
  <tr><td style="padding:8px 32px 28px;font-size:15px;line-height:1.6;">
    <p style="margin:0;">Best regards,<br><b>Muhammad Sajjad</b><br>
    <span style="font-size:13px;color:#3b4048;">Full-Stack &amp; AI Engineer<br>
    ${MAIL} &middot; <a href="${SITE}" style="color:#3b4048;">sajjad-ai-eng.site</a> &middot; <a href="${LINKEDIN}" style="color:#3b4048;">LinkedIn</a></span></p>
  </td></tr>
</table>
<div style="max-width:600px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#6b6f76;padding:12px 8px;text-align:left;">${t.footer}</div>
</td></tr>
</table>
</div>
</body>
</html>
`;
}

for (const t of templates) writeFileSync(join(OUT, `${t.file}.html`), page(t));

const index = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Email templates</title></head>
<body style="margin:0;background:#f5f3ec;font-family:Arial,Helvetica,sans-serif;color:#14161a;">
<div style="max-width:640px;margin:0 auto;padding:32px 18px;">
<h1 style="font-size:24px;margin:0 0 6px;">Email templates</h1>
<p style="margin:0 0 22px;color:#3b4048;">Open one, edit the [brackets] on the page, press &ldquo;Copy email&rdquo;, paste into Gmail.</p>
${templates
  .map(
    (t) =>
      `<a href="${t.file}.html" style="display:block;background:#fff;border:1px solid #14161a;border-radius:4px;padding:16px 18px;margin:0 0 12px;text-decoration:none;color:#14161a;"><b>${t.name}</b><br><span style="font-size:13px;color:#3b4048;">${t.use}</span></a>`,
  )
  .join("\n")}
</div></body></html>
`;
writeFileSync(join(OUT, "index.html"), index);
console.log(`Wrote ${templates.length} templates + index.html`);
