'use client';
import { useState ,useEffect } from 'react';
import Image from 'next/image';
import { Platypi } from 'next/font/google';
import CustomCarouselUsesSlider from './CustomCarouselUsesSlider';


const platypi = Platypi({
  weight: ['400'],
  preload: false, 
});

const UsesSlider = ({ slides, autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const totalSlides = slides.length;
  


    // AutoPlay Effect
    useEffect(() => {
      if (!autoPlay) return;
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, autoPlayInterval);
  
      return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, totalSlides]);

  return (
    <div className=" sticky w-full overflow-hidden ">
      <h1 className= {`${platypi.className} text-white text-30 lg:text-40 xl:text-40 lg:w-full sm:text-30 md:text-40 font-400 lg:items-center lg:justify-center   lg:flex xl:flex py-2 text-center  xs:w-[350px] xs:mx-auto`}>Uses of Double Sided Tape</h1>
        {/* Slides Container */}
       <CustomCarouselUsesSlider slides={slides}/>

    </div>
  );
};

export default UsesSlider;
