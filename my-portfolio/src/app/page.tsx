

import HomePage from "@/components/HomePage";
import Services from "./page/services/page";
import Resume from "./page/resume/page";
import Work from "./page/work/page";
import Contact from "./page/contact/page";
import Test from "@/components/test";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Services/>
      <Resume/>
      <Work/>
      <Contact/>
      <Test/>
    </div>
  );
}
