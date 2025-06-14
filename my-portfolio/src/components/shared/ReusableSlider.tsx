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
  snap = true
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current || index < 0 || index >= items.length) return;
    
    const container = sliderRef.current;
    const sliderItems = container.querySelectorAll('.slider-item');
    if (!sliderItems[index]) return;
    
    const item = sliderItems[index] as HTMLElement;
    const containerWidth = container.clientWidth;
    const itemWidthValue = item.offsetWidth;
    const containerPadding = (containerWidth - itemWidthValue) / 2;
    const scrollPosition = item.offsetLeft - containerPadding;
    
    container.scrollTo({ 
      left: scrollPosition, 
      behavior: "smooth" 
    });
    setCurrentIndex(index);
  }, [items.length]);

  const scrollLeft = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const scrollRight = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    
    const container = sliderRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setAtStart(scrollLeft < 10);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    
    const sliderItems = container.querySelectorAll('.slider-item');
    let mostVisibleIndex = 0;
    let maxVisibility = 0;
    
    sliderItems.forEach((item, index) => {
      const rect = (item as HTMLElement).getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
      const visibility = Math.max(0, Math.min(1, visibleWidth / rect.width));
      
      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        mostVisibleIndex = index;
      }
    });
    
    setCurrentIndex(mostVisibleIndex);
  }, []);

  return (
    <div className={`relative overflow-hidden  ${className}`}>
      {/* Scrollable Content */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className={`overflow-x-auto scrollbar-hide ${snap ? 'snap-x snap-mandatory' : ''}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className={`flex ${snap ? 'snap-center' : ''} ${
          isMobile && fullWidthOnMobile ? 'space-x-4' : 'space-x-6'
        }`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`slider-item flex-shrink-0 ${
                isMobile && fullWidthOnMobile ? 
                  'w-[calc(100vw-4rem)]' : 
                  `w-[${itemWidth}px]`
              } ${snap ? 'snap-center' : ''}`}
              style={!isMobile || !fullWidthOnMobile ? { width: `${itemWidth}px` } : undefined}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-4 px-4">
        <button
          onClick={scrollLeft}
          disabled={atStart}
          className={`p-2 rounded-full transition ${
            atStart ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-black w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollRight}
          disabled={atEnd}
          className={`p-2 rounded-full transition ${
            atEnd ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};