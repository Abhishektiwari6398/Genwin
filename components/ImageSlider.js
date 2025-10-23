'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Platypi } from 'next/font/google';


const platypi = Platypi({
  weight: ['400'], 
  preload: false,
});

const ImageSlider = ({ slides, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", updateMobile);
    updateMobile();
    return () => window.removeEventListener("resize", updateMobile);
  }, []);


  const nextSlide = useCallback(() => {
    if (isTransitioning) return; // Prevent spamming navigation
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 500); // Matches the transition duration
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return; 
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500); // Matches the transition duration
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(nextSlide, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  
  return (
    <div className="relative overflow-hidden max-w-full mx-auto">
      <div
        className="relative w-full h-auto flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="w-full min-h-[65vh] md:h-[60vh] flex-shrink-0 relative flex flex-col-reverse md:flex-row md:items-center justify-center"      
        >
          <div className="w-full md:w-1/2 p-4 md:p-6 order-2 md:order-1">
            <div className="w-full max-w-7xl mx-auto">
              <div className="w-full space-y-4 md:space-y-6">
                <h2
                  className={`${platypi.className} text-[#181818] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[400] mb-2 md:mb-4`}
                >
                  {slide.heading.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-red-500">
                    {slide.heading.split(" ").slice(-1)}
                  </span>
                </h2>

                <p className="text-[#181818] text-sm sm:text-base md:text-lg font-[500] max-w-prose">
                  {slide.content}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <picture className="block w-full h-full relative">
              <source
                media="(max-width: 768px)"
                srcSet={slide.mobileImage}
              />
              <img
                src={isMobile ? slide.mobileImage : slide.image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-contain md:object-cover absolute  inset-0`}
                style={{
                  marginLeft:  isMobile && index=== 0 ? "20vw" : 'auto',
                  maxHeight: isMobile ? '250px' : '100%',
                  objectPosition: isMobile ? 'center' : 'center right'
                }}
              />
            </picture> 
          </div>
        </div>
      ))}
      </div>

      {/* Navigation Buttons */}
      <button
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 px-2 md:px-4 py-1 bg-white/80 text-red-200 rounded-full z-10 text-xl md:text-3xl border-[#EBC3C3] border"
          onClick={prevSlide}
        >
          &#10094;
      </button>
      <button
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 px-2 md:px-4 py-1 bg-white/80 text-red-200 rounded-full z-10 text-xl md:text-3xl border-[#EBC3C3] border"
          onClick={nextSlide}
        >
          &#10095;
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
