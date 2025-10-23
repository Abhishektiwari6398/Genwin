import React from "react";
import { useState } from 'react';
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const CustomCarouselUsesSlider = ({ slides = [] }) => {
    const [isDropdownOpen, setIsOpen] = useState(false);
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <div className="py-10">
      <Carousel
        responsive={responsive}
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        keyBoardControl={true} 
        showDots={false} 
        arrows={false} 
        customTransition="all 0.5s ease" 
        transitionDuration={500} 
        containerClass="carousel-container" 
        itemClass="carousel-item-padding-30-px"
        draggable={false}  
        swipeable={true}   
        pauseOnHover={false}  
        shouldResetAutoplay={true}    
      >
        {slides.map((slide, index) => (
          <div key={index} className="group relative space-x-6 select-none">
            {/* Slide Image */}
            <div className="relative h-[340px] overflow-hidden rounded-xl ml-[50px] lg:mr-0 xl:mr-0  mr-12 select-none">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                className="h-full object-fill object-center transition-transform  duration-500 group-hover:scale-105 rounded-xl pointer-events-none select-none"
              />
            </div>

            {/* Description Box */}
            <div className="absolute bottom-4 right-14 lg:right-6 bg-white bg-opacity-70 cursor-pointer text-black p-3 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 group-hover:bg-opacity-90">
              <h3 className="text-xs font-semibold group-hover:text-[#E52D38]">
                {slide.heading}
              </h3>
              <p className="text-xs font-medium">{slide.description}</p>  
              <div className="group rounded-full flex justify-end mt-2">
               


                <Link
                 href="/"
                 onClick={() => setIsOpen(false)}>
                  <svg
                      className="w-8 h-8 transition-colors duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                    >
                      <path
                        d="M17.4492 3.65039C11.2476 3.65039 5.71479 8.10793 4.41749 14.1779C3.76935 17.2108 4.20597 20.4359 5.65198 23.1802C7.04367 25.8213 9.32523 27.9559 12.055 29.1656C14.8944 30.4242 18.1541 30.6435 21.1385 29.7852C24.0176 28.9574 26.5704 27.1407 28.3084 24.7019C31.9423 19.6034 31.4564 12.4416 27.1812 7.87299C24.6756 5.19554 21.1167 3.65039 17.4492 3.65039ZM23.842 17.6885L20.2092 21.4089C19.2894 22.3511 17.8356 20.9238 18.7516 19.986L20.5847 18.1088H11.8978C11.2809 18.1088 10.7662 17.5938 10.7662 16.9772C10.7662 16.3606 11.2812 15.8456 11.8978 15.8456H20.5412L18.6719 13.9765C17.7429 13.0476 19.1832 11.607 20.1121 12.5359L23.8336 16.2571C24.2281 16.6512 24.2318 17.2895 23.842 17.6885Z"
                        className="fill-black group-hover:fill-[#E52D38] transition-colors duration-300"
                      />
                    </svg>
              </Link>
              </div>

              </div>
            </div>
          
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarouselUsesSlider;
