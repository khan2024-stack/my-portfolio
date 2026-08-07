import { processSteps, sections } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section className="sec" id="process">
      <SectionHead {...sections.process} />

      <div className="steps">
        {processSteps.map((step) => (
          <div className="step rv" key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
