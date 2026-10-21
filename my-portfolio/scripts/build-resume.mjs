/**
 * Builds public/Muhammad-Sajjad-Resume.pdf from the same data the website
 * uses (src/app/portfolio-content/site-content.ts), so the PDF and the
 * /resume page cannot drift apart.
 *
 *   npm run resume
 *
 * Re-run it after editing site-content.ts, then commit the PDF.
 * Needs Google Chrome or Microsoft Edge installed (headless print-to-PDF).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const srcFile = path.join(root, "src/app/portfolio-content/site-content.ts");
const outFile = path.join(root, "public/Muhammad-Sajjad-Resume.pdf");

/* site-content.ts imports page images; a resume needs only the text, so
   the imports are replaced with empty stand-ins and the file is loaded
   from a temp copy (Node strips the TypeScript types itself). */
let code = fs.readFileSync(srcFile, "utf8").replace(/\r\n/g, "\n");
code = code.replace(/^import type .*$/gm, "").replace(/^import (\w+) from .*$/gm, "const $1 = null;");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "resume-"));
const tmpData = path.join(tmp, "site-content.mts");
fs.writeFileSync(tmpData, code);
const { identity, about, experience, education, skills, contact, socials } = await import(pathToFileURL(tmpData).href);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
/* The site marks emphasis with <em>; keep it as bold in print. */
const rich = (s) => s.replace(/<em>/g, "<b>").replace(/<\/em>/g, "</b>");
const site = "www.sajjad-ai-eng.site";
const linkedin = socials.find((s) => s.label === "LinkedIn")?.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

const job = (j) => `
  <section class="job">
    <div class="job__top"><h3>${esc(j.title)}</h3><span class="when">${esc(j.period)}</span></div>
    <p class="org">${esc(j.org)}</p>
    <ul>${j.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul>
  </section>`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(identity.fullName)} — Resume</title>
<style>
  @page { size: A4; margin: 13mm 15mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 9.6pt/1.42 "Segoe UI", Arial, sans-serif; color: #1c1f24; }
  header { border-bottom: 2.5px solid #14161a; padding-bottom: 8px; margin-bottom: 10px; }
  h1 { margin: 0; font-size: 24pt; line-height: 1.05; letter-spacing: -.01em; }
  .role { margin: 3px 0 7px; font-size: 11.5pt; font-weight: 600; color: #3b4048; }
  .contact { display: flex; flex-wrap: wrap; gap: 2px 14px; font-size: 9pt; color: #14161a; }
  h2 { margin: 12px 0 5px; padding-bottom: 2px; border-bottom: 1px solid #14161a; font-size: 9.5pt; letter-spacing: .14em; text-transform: uppercase; }
  p { margin: 0 0 4px; }
  .skills { display: grid; grid-template-columns: 70px 1fr; gap: 3px 10px; }
  .skills b { font-size: 9pt; }
  .job { margin-bottom: 8px; break-inside: avoid; }
  .job__top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
  h3 { margin: 0; font-size: 10.5pt; }
  .when { font-size: 9pt; color: #3b4048; white-space: nowrap; }
  .org { margin: 0 0 2px; font-size: 9.2pt; color: #3b4048; font-style: italic; }
  ul { margin: 2px 0 0; padding-left: 15px; }
  li { margin-bottom: 1.5px; }
  b { font-weight: 700; }
</style></head><body>
<header>
  <h1>${esc(identity.fullName)}</h1>
  <p class="role">${esc(identity.role)} · ${esc(identity.location)} · Available for freelance projects</p>
  <div class="contact">
    <span>${esc(contact.inbox)}</span>
    <span>WhatsApp ${esc(contact.whatsapp.display)}</span>
    <span>${site}</span>
    ${linkedin ? `<span>${esc(linkedin)}</span>` : ""}
  </div>
</header>
<h2>Summary</h2>
<p>${rich(about.paragraphs[0])}</p>
<h2>Skills</h2>
<div class="skills">${skills.map((s) => `<b>${esc(s.group)}</b><span>${esc(s.items.join(" · "))}</span>`).join("")}</div>
<h2>Experience</h2>
${experience.map(job).join("")}
<h2>Education</h2>
${education.map(job).join("")}
</body></html>`;

const htmlFile = path.join(tmp, "resume.html");
fs.writeFileSync(htmlFile, html);

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];
const chrome = browsers.find((b) => fs.existsSync(b));
if (!chrome) throw new Error("Chrome or Edge not found — install one to build the PDF.");

execFileSync(chrome, [
  "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
  `--print-to-pdf=${outFile}`, pathToFileURL(htmlFile).href,
], { stdio: "ignore" });
fs.rmSync(tmp, { recursive: true, force: true });
console.log("Wrote", path.relative(root, outFile), `(${Math.round(fs.statSync(outFile).size / 1024)} KB)`);
