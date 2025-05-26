import myServices from "@/app/portfolio-content/services-content";
import BasicLayout from "@/components/BasicLayout";
import {
  heading,
  paragraph,
  card,
  services,
  layout,
} from "@/lib/styles";

export default function Services() {
  return (
    <BasicLayout>
      <div className={`${layout.container.default} ${layout.spacing.py.lg}`}>
        {/* Section Header */}
        <div
          className={`${layout.flex.col} ${layout.flex.center} text-center m-4`}
        >
          <h1 className={`${heading.sectionWithGradient}`}>
            Digital Solutions
          </h1>
          <p
            className={`${paragraph.base} m-3`}
          >
            Where innovative technology meets exceptional
             user experiences
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className={`${layout.grid.threeCol} ${layout.spacing.px.lg}`}>
          {myServices.map((service, index) => (
            <div
              key={index}
              className={`${card.base} ${services.card} group relative`}
            >
              {/* Accent Line on Hover */}
              <div className={services.accentLine} />

              <div className={`${card.contentWrapper} p-6 sm:p-7`}>
                {/* Icon + Title */}
                <div
                  className={`${layout.flex.row} ${layout.flex.alignCenter} ${layout.spacing.mb.sm}`}
                >
                  <div className={services.iconContainer}>
                    <span className="text-xl sm:text-2xl">{service.icon}</span>
                  </div>
                  <h2 className={`${card.title} group-hover:text-emerald-700`}>
                    {service.title}
                  </h2>
                </div>

                {/* Subheading */}
                <h3 className="text-xs sm:text-sm font-semibold text-emerald-500 mb-3 uppercase tracking-wide">
                  {service.subheading}
                </h3>

                {/* Description */}
                <p className={`${card.description} mb-4`}>{service.content}</p>

                {/* Highlights */}
                <ul className={`space-y-2 ${layout.spacing.mb.md}`}>
                  {service.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className={`${layout.flex.row} ${layout.flex.alignStart} text-sm text-gray-700`}
                    >
                      <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
                      <span className="ml-3">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background Glow Effect */}
              <div className={services.cardHoverGlow}>
                <div className={services.cardBlurGlow}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BasicLayout>
  );
}
