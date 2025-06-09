


import Resume from "./page/resume/page";
import Work from "./page/work/page";
import Contact from "./page/contact/page";
import PortfolioHome from "@/components/home/PortfolioHome";
import MyServices from "./page/services/page";

export default function Home() {
  return (
    <div>
      <PortfolioHome/>
      <MyServices/>
      <Work/>
      <Resume/>
      <Contact/>
    </div>
  );
}
