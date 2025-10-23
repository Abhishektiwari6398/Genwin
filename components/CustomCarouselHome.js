import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const CustomCarouselHome = ({ slides = [] }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full mx-auto">
      <Carousel
       responsive={responsive}
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={3000} 
        keyBoardControl={true} 
        showDots={false} 
        arrows={true} 
        customTransition="all 0.5s ease" 
        transitionDuration={500} 
        containerClass="carousel-container" 
        itemClass="carousel-item-padding-30-px p-2" 
        draggable={false}  
        swipeable={true}   
        pauseOnHover={false}  
        shouldResetAutoplay={true}  
      >
       {slides.map((slide, index) => (
        <div
          key={index}
          className="relative bg-[#FFCACA] group overflow-hidden rounded-xl " 
        >
          {/* Slide Image */}
          <div className="relative overflow-hidden rounded-xl group-hover:border-[#EE313C] group-hover:border transition-all duration-500 ease-in-out select-none">
          {/* Image */}
          <Image
            src={slide.imageUrl}
            alt={`Slide ${index + 1}`}
            layout="responsive"
            width={250}
            height={325}
            className="transition-transform duration-1000 group-hover:scale-125 ease-in-out rounded-xl pointer-events-none select-none" 
          />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 203, 203, 0.10) 33.7%, rgba(149, 41, 47, 0.83) 79.18%, rgba(123, 3, 10, 0.86) 99.45%)",
              }}
            ></div>
          </div>

          {/* Description Box */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-opacity-80 text-black p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/products" className="text-14 font-semibold border-2 border-white/20 rounded-md text-white pl-10 py-3 flex items-center gap-4 lg:w-full xl:w-[400px] w-[350px]">
              {slide.name}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                >
                  <path
                    d="M13.4125 2.70703C8.85292 2.70703 4.78506 5.98433 3.83126 10.4471C3.35473 12.677 3.67574 15.0481 4.73888 17.0658C5.76209 19.0076 7.43955 20.577 9.44652 21.4664C11.5341 22.3918 13.9307 22.553 16.1249 21.922C18.2417 21.3134 20.1186 19.9777 21.3965 18.1846C24.0682 14.436 23.711 9.17051 20.5677 5.81159C18.7255 3.84306 16.1089 2.70703 13.4125 2.70703ZM18.1127 13.0282L15.4417 15.7635C14.7655 16.4562 13.6966 15.4068 14.3701 14.7174L15.7178 13.3372H9.33094C8.87738 13.3372 8.49895 12.9585 8.49895 12.5052C8.49895 12.0519 8.87763 11.6732 9.33094 11.6732H15.6858L14.3114 10.2991C13.6284 9.61609 14.6873 8.55694 15.3703 9.23991L18.1064 11.9758C18.3965 12.2656 18.3992 12.7349 18.1127 13.0282Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link >
          </div>
        </div>
      ))}

      </Carousel>
    </div>
  );
};

export default CustomCarouselHome;
