import {
  education,
  experience,
} from "@/app/portfolio-content/site-content";

/* ── Resume block ─────────────────────────────────────────────────── */
export function ResumeBlock() {
  return (
    <>
      <h3 className="p2-sub">Experience</h3>
      <ul className="p2-tools p2-tools--cv">
        {experience.map((e) => (
          <li key={e.title}>
            <span className="p2-tools__mark" aria-hidden="true" />
            <div>
              <span className="p2-cv__when">{e.period}</span>
              <b>{e.title}</b>
              <p className="p2-cv__org">{e.org}</p>
              <ul>
                {e.points.slice(0, 2).map((pt) => (
                  <li key={pt} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="p2-sub">Education</h3>
      <ul className="p2-tools p2-tools--cv">
        {education.map((e) => (
          <li key={e.title}>
            <span className="p2-tools__mark" aria-hidden="true" />
            <div>
              <span className="p2-cv__when">{e.period}</span>
              <b>{e.title}</b>
              <p className="p2-cv__org">{e.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
