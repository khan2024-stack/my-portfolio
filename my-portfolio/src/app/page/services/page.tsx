"use client";

import myServices from "@/app/portfolio-content/services-content";
import BasicLayout from "@/components/BasicLayout";
import { heading, paragraph, layout } from "@/lib/styles";
import { ServiceCard } from "@/components/serviceCard/ServiceCard";
import { ServicesSlider } from "@/components/serviceCard/ServicesSlider";

export default function Services() {
  return (
    <BasicLayout>
      <div className={`${layout.container.default} ${layout.spacing.py.lg}`}>
        {/* Section Header */}
        <div className={`${layout.flex.col} ${layout.flex.center} text-center m-4`}>
          <h1 className={`${heading.sectionWithGradient}`}>Digital Solutions</h1>
          <p className={`${paragraph.base} m-3`}>
            Where innovative technology meets exceptional user experiences
          </p>
        </div>

        {/* Desktop Grid */}
        <div className={`${layout.grid.threeCol} ${layout.spacing.px.lg} hidden lg:grid`}>
          {myServices.map((service,index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Mobile Slider */}
        <ServicesSlider services={myServices} />
      </div>
    </BasicLayout>
  );
}