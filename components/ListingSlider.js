'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import CustomCarousel from './CustomCarouselHome';

const ListingSlider = ({ slides, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const containerRef = useRef(null);

  // AutoPlay Effect
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides]);

  return (
    <div className="sticky w-full overflow-hidden">
      {/* CustomCarousel Component (Pass slides array correctly) */}
      <CustomCarousel slides={slides} />

  
    </div>
  );
};

export default ListingSlider;
