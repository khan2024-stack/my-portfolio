import Image from "next/image";
import exhibition from "@/assets/exhibition-2019.jpg";
import Reveal from "./Reveal";

/**
 * Recognition — a slim dark band of credentials, between About and Works.
 *
 * Every line is already in the resume data (the Qurtuba 2017–2019 entry,
 * the Master's grade, the bootcamp); this just puts the strongest of them
 * where a prospective client sees them early, with the exhibition photo
 * as proof of the first one.
 */
export default function Recognition() {
  return (
    <section className="p2-rc" aria-label="Recognition">
      <Reveal as="div" dir="up" className="p2-rc__in">
        <figure className="p2-rc__lead">
          <span className="p2-rc__photo">
            <Image
              src={exhibition}
              alt="Receiving a certificate at the university project exhibition, 12 November 2019"
              placeholder="blur"
              sizes="(max-width: 680px) 80vw, 220px"
            />
          </span>
          <figcaption>
            <b>1st position</b>
            <span>University of Qurtuba project exhibition · 2019</span>
          </figcaption>
        </figure>

        <ul className="p2-rc__list">
          <li>
            <b>A1 · 84%</b>
            <span>Master&rsquo;s in Computer Science, Qurtuba University</span>
          </li>
          <li>
            <b>Award-winning</b>
            <span>Academic projects through the degree</span>
          </li>
          <li>
            <b>Full-stack graduate</b>
            <span>CodeCamp bootcamp, Peshawar</span>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
