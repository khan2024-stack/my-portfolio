import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Work from "@/components/site/Work";
import Testimonials from "@/components/site/Testimonials";
import Resume from "@/components/site/Resume";
import Contact from "@/components/site/Contact";

/**
 * Process was removed on purpose. Discovery / Design / Build / Launch is
 * on every agency site alive — it was the thinnest section here and it
 * told a visitor nothing they could not assume. Cutting it makes the
 * sections that carry real evidence louder without adding a pixel.
 *
 * TO RESTORE: re-add `import Process from "@/components/site/Process"`
 * and `<Process />` between Testimonials and Resume, then put the
 * `process` entry back into `navLinks` in site-content.ts. The
 * component, its copy and its CSS are all still in place and untouched.
 */
export default function Home() {
  return (
    <main className="wrap">
      <Hero />
      <Services />
      <Work />
      {/* Renders nothing until there is a real quote or rating to show.
          Sits here on purpose: proof lands hardest straight after the
          work it vouches for. */}
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  );
}
