"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemWidth?: number;
  className?: string;
  fullWidthOnMobile?: boolean;
  snap?: boolean;
}

export const Slider = <T,>({
  items,
  renderItem,
  itemWidth = 320,
  className = "",
  fullWidthOnMobile = true,
  snap = true,
}: SliderProps<T>) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!sliderRef.current || index < 0 || index >= items.length) return;

      const container = sliderRef.current;
      const sliderItems = container.querySelectorAll(".slider-item");
      const item = sliderItems[index] as HTMLElement;

      if (!item) return;

      const scrollPosition = item.offsetLeft - 16; // 16px left padding
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrentIndex(index);
    },
    [items.length]
  );

  const scrollLeft = () => scrollToIndex(currentIndex - 1);
  const scrollRight = () => scrollToIndex(currentIndex + 1);

  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const sliderItems = container.querySelectorAll(".slider-item");
    const containerRect = container.getBoundingClientRect();

    let maxVisible = 0;
    let index = 0;

    sliderItems.forEach((item, i) => {
      const rect = (item as HTMLElement).getBoundingClientRect();
      const visible = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
      if (visible > maxVisible) {
        maxVisible = visible;
        index = i;
      }
    });

    setCurrentIndex(index);
    setAtStart(container.scrollLeft <= 8);
    setAtEnd(container.scrollLeft + container.offsetWidth >= container.scrollWidth - 8);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Scroll Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className={`overflow-x-auto scrollbar-hide ${
          snap ? "snap-x snap-mandatory" : ""
        } -mx-4 px-4`}
        style={{
          scrollPaddingLeft: "1rem",
          paddingRight: isMobile ? "25vw" : undefined,
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className={`flex space-x-4`}>
          {items.map((item, index) => {
            const width = isMobile && fullWidthOnMobile
              ? "calc(100vw - 25vw)"
              : `${itemWidth}px`;

            return (
              <div
                key={index}
                className={`slider-item flex-shrink-0 snap-start transition-transform duration-300`}
                style={{
                  width,
                  borderRadius: "1rem",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                {renderItem(item, index)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation + Dots */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          onClick={scrollLeft}
          disabled={atStart}
          className={`p-2 rounded-full transition ${
            atStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black w-5" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          disabled={atEnd}
          className={`p-2 rounded-full transition ${
            atEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
