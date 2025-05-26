

import HomePage from "@/components/HomePage";
import Services from "./page/services/page";
import Resume from "./page/resume/page";
import Work from "./page/work/page";
import Contact from "./page/contact/page";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Services/>
      <Work/>
      <Resume/>
      <Contact/>
    </div>
  );
}
