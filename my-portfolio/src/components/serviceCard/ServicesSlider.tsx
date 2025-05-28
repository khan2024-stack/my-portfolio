"use client";

import { useRef, useState } from "react";
import { Service } from "@/types/services";
import { ServiceCard } from "./ServiceCard";
import { card, services} from "@/lib/styles"; // Added correct imports

export const ServicesSlider = ({ services: servicesData }: { services: Service[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setAtStart(scrollLeft < 10);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  return (
    <div className="lg:hidden relative bg-gray-50 p-4 rounded-2xl mx-1 shadow-sm overflow-hidden">
      {/* Edge Gradients */}
      {!atStart && (
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
      )}
      {!atEnd && (
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
      )}

      {/* Navigation Arrows */}
      {!atStart && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white transition"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {!atEnd && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white transition"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Scrollable Content */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1 "
      >
        <div className="flex space-x-3 min-w-max  pr-2">
          {servicesData.map((service,index) => (
            <div
              key={index}
              className={`${card.base} ${services.card} group relative w-70 sm:w-80 flex-shrink-0 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};