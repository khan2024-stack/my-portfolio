import { Service } from "@/types/services";
import { cardStyle } from "./cards-style";

export const Cards = ({ service }: { service: Service }) => {
  return (
    <div className={cardStyle.cardMainWrapper}>

      <div className={cardStyle.header}>
        <span className="text-xl sm:text-2xl">{service.icon}</span>
        <h5 className="ml-2">{service.title}</h5>
      </div>

      <div className={cardStyle.cardTitle}>
        <p>{service.subheading}</p>
      </div>

      <div className={cardStyle.cardBody}>
        {service.content}
        <ul className="pt-4">
          {service.highlights.map((highlight, i) => (
            <li key={i} className={cardStyle.highlightListItem}>
              <div className={cardStyle.highlightIcon} />
              <span className={cardStyle.highlightText}>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};