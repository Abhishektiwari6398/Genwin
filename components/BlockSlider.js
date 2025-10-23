'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const BlockSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden max-w-5xl mx-auto">
      {/* Slider Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)`, width: `${slides.length * (100 / 3)}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 p-4">
            {/* Block Content */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-4">
              {/* First Row */}
              <div className="flex items-start gap-4 mb-4">
                {/* Circular Image */}
                <div className="w-16 h-16 flex-shrink-0">
                  <Image
                    src={slide.imageUrl}
                    alt="Profile"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>

              {/* Second Row */}
              <div>
                {/* Stars */}
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="text-yellow-500 w-5 h-5" />
                    ))}
                </div>
                {/* Additional Content */}
                <p className="text-sm text-gray-500">{slide.additionalContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full z-10"
        onClick={prevSlide}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full z-10"
        onClick={nextSlide}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default BlockSlider;
