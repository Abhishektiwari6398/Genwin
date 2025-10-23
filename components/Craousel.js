// "use client";

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const CustomCarousel = ({partners=[]}) => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4, // Number of slides to show on desktop
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2, // Number of slides to show on tablets
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1, // Number of slides to show on mobile
//     },
//   };

//   const images = partners?.map((partner) => partner.imagePath);




//   return (
//     <div className="w-full mx-auto">
//       <Carousel
//         responsive={responsive}
//         infinite={true} // Enable infinite scrolling
//         autoPlay={true} // Enable autoplay
//         autoPlaySpeed={3000} // Set autoplay speed (3 seconds)
//         keyBoardControl={true} // Allow keyboard controls
//         showDots={false} // Hide dots
//         arrows={true} // Show navigation arrows
//         customTransition="all 0.5s ease" // Smooth transitions
//         transitionDuration={500} // Transition duration
//         containerClass="carousel-container" // Container class for additional styling
//         itemClass="carousel-item-padding-40-px" // Item class for padding
//       >
//         {images.map((image, index) => (
//           <div key={index} className="p-2">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CustomCarousel;


"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const CustomCarousel = ({ partners = [] }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Number of slides to show on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Number of slides to show on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Number of slides to show on mobile
    },
  };

  return (
    <div className="w-full mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true} // Enable infinite scrolling
        autoPlay={true} // Enable autoplay
        autoPlaySpeed={3000} // Set autoplay speed (3 seconds)
        keyBoardControl={true} // Allow keyboard controls
        showDots={false} // Hide dots
        arrows={true} // Show navigation arrows
        customTransition="all 0.5s ease" // Smooth transitions
        transitionDuration={500} // Transition duration
        containerClass="carousel-container" // Container class for additional styling
        itemClass="carousel-item-padding-30-px"
        draggable={false}  
        swipeable={true}   
        pauseOnHover={false}  
        shouldResetAutoplay={true}   // Item class for padding
      >
        {partners.map((partner, index) => (
          <div key={index} className="select-none">
            <Image
              src={partner.imagePath} // ✅ This dynamically applies the images from partners
              alt={partner.name}
              width={0} 
              height={0} 
              sizes="100vw" 
              className="w-full h-auto  rounded-lg object-fit pointer-events-none select-none"
              
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CustomCarousel;





// "use client";
// import React, { useState, useEffect } from "react";

// const Carousel = ({
//   children,
//   showButtons = true,
//   autoRun = false,
//   autoRunInterval = 3000,
// }) => {
//   const slideCount = React.Children.count(children);
//   const [currentIndex, setCurrentIndex] = useState(1); // Start at the first actual slide (index 1)
//   const [isTransitioning, setIsTransitioning] = useState(true); // Controls CSS transitions

//   // Move to a specific slide
//   const moveToSlide = (index) => {
//     setCurrentIndex(index);
//     setIsTransitioning(true); // Enable transition
//   };

//   // Auto-run functionality
//   useEffect(() => {
//     if (autoRun) {
//       const interval = setInterval(() => {
//         moveToSlide(currentIndex + 1); // Automatically move to the next slide
//       }, autoRunInterval);

//       return () => clearInterval(interval); // Cleanup interval on unmount
//     }
//   }, [autoRun, currentIndex, autoRunInterval]);

//   // Handle seamless looping (reset index without animation)
//   useEffect(() => {
//     if (currentIndex === 0) {
//       // Reset to last actual slide
//       setTimeout(() => {
//         setIsTransitioning(false); // Disable transition
//         setCurrentIndex(slideCount);
//       }, 500); // Match the animation duration
//     } else if (currentIndex === slideCount + 1) {
//       // Reset to first actual slide
//       setTimeout(() => {
//         setIsTransitioning(false); // Disable transition
//         setCurrentIndex(1);
//       }, 500); // Match the animation duration
//     }
//   }, [currentIndex, slideCount]);

//   return (
//     <div className="relative w-64 mx-auto overflow-hidden">
//       {/* Slider wrapper */}
//       <div
//         className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${(slideCount + 2) * 100}%`, // Include cloned slides
//         }}
//       >
//         {/* Clone the last slide and put it at the front */}
//         <div className="w-full flex-shrink-0">{children[slideCount - 1]}</div>

//         {/* Render all children slides */}
//         {React.Children.map(children, (child) => (
//           <div className="w-full flex-shrink-0">{child}</div>
//         ))}

//         {/* Clone the first slide and put it at the end */}
//         <div className="w-full flex-shrink-0">{children[0]}</div>
//       </div>

//       {/* Navigation buttons */}
//       {showButtons && (
//         <>
//           <button
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
//             onClick={() => moveToSlide(currentIndex - 1)}
//           >
//             &#10094;
//           </button>
//           <button
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
//             onClick={() => moveToSlide(currentIndex + 1)}
//           >
//             &#10095;
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Carousel;

