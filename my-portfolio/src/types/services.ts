import { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  subheading: string;
  content: string;
  highlights: string[];
}

export interface ServicesSliderProps {
  services: Service[];
}