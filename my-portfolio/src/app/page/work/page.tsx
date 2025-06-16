// Work.tsx
'use client';

import BasicLayout from "@/components/BasicLayout";
import { projectsInfo } from "@/app/portfolio-content/work-content";
import PageHeader from "@/components/pagesHeader/PageHeader";
import { WorkCard } from "@/components/work/WorkCard";
import { workStyle } from "@/components/work/workStyle";
import { Slider } from "@/components/shared/ReusableSlider";

export default function Work() {
  return (
    <BasicLayout>
      <div className={workStyle.workMainWrapper}>
        {/* Page Header */}
        <PageHeader page="recentProjects" />

        {/* Desktop Grid View - Show on lg and above */}
        <div className={`${workStyle.workCards} hidden lg:grid`}>
          {projectsInfo.map((project, index) => (
            <WorkCard key={index} project={project} />
          ))}
        </div>

        {/* Mobile Slider View - Show below lg */}
        <div className="lg:hidden w-full ">
          <Slider
            items={projectsInfo}
            renderItem={(project, index) => <WorkCard key={index} project={project} />}
            itemWidth={320}
            fullWidthOnMobile={true}
          />
        </div>
      </div>
    </BasicLayout>
  );
}