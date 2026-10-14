import type { Metadata } from "next";
import {
  about,
  contact,
  education,
  experience,
  identity,
  skills,
} from "@/app/portfolio-content/site-content";
import { SITE_URL } from "@/app/portfolio-content/site-url";
import PrintButton from "../_parts/PrintButton";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Muhammad Sajjad.",
  robots: { index: false, follow: true },
};

/**
 * A CV built from the same data as the site (experience, education,
 * skills, contact), so it is always current. Press the button and choose
 * "Save as PDF" — print styles hide the site chrome and lay it out as an
 * A4 page.
 */
export default function Cv() {
  const summary = about.paragraphs[0].replace(/<\/?em>/g, "");
  return (
    <div className="p2-cvpage">
      <div className="p2-cv-actions">
        <PrintButton />
        <span>Opens your browser’s print dialog — choose “Save as PDF”.</span>
      </div>

      <article className="p2-cv-sheet">
        <header>
          <h1>{identity.fullName}</h1>
          <p className="p2-cv-role">{identity.role}</p>
          <p className="p2-cv-contact">
            {contact.inbox} · WhatsApp {contact.whatsapp.display} ·{" "}
            {identity.location} · {SITE_URL.replace("https://", "")}
          </p>
        </header>

        <section>
          <h2>Profile</h2>
          <p>{summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((e) => (
            <div className="p2-cv-job" key={e.title + e.period}>
              <div className="p2-cv-row">
                <b>{e.title}</b>
                <span>{e.period}</span>
              </div>
              <p className="p2-cv-org">{e.org}</p>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((e) => (
            <div className="p2-cv-job" key={e.title}>
              <div className="p2-cv-row">
                <b>{e.title}</b>
                <span>{e.period}</span>
              </div>
              <p className="p2-cv-org">{e.org}</p>
              {e.points ? (
                <ul>
                  {e.points.map((pt) => (
                    <li key={pt} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <dl className="p2-cv-skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </div>
  );
}
