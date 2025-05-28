import { Service } from "@/types/services";
import { card, services, layout } from "@/lib/styles";

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className={`${card.base} ${services.card} group relative h-full`}>
      <div className={services.accentLine} />
      <div className={`${card.contentWrapper} p-4 sm:p-7 `}>
        <div className={`${layout.flex.row} ${layout.flex.alignCenter} ${layout.spacing.mb.sm} w-full`}>
          <div className={services.iconContainer}>
            <span className="text-xl sm:text-2xl">{service.icon}</span>
          </div>
          <h2 className={`${card.title} group-hover:text-gray-900`}>
            {service.title}
          </h2>
        </div>
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
          {service.subheading}
        </h3>
        <p className={`${card.description} mb-4`}>{service.content}</p>
        <ul className={`space-y-2 ${layout.spacing.mb.md}`}>
          {service.highlights.map((highlight, i) => (
            <li key={i} className={`${layout.flex.row} ${layout.flex.alignStart} text-sm text-gray-700`}>
              <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-gray-900 flex-shrink-0 animate-pulse" />
              <span className="ml-3">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={services.cardHoverGlow}>
        <div className={services.cardBlurGlow}></div>
      </div>
    </div>
  );
};