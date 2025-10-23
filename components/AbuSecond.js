'use client';
import { Platypi } from 'next/font/google';
import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from '@heroicons/react/24/solid'; // Ensure you have Heroicons installed or replace with your own Play icon.


const platypi = Platypi({
  subsets: ["latin"], 
  preload: false,
});

export default function AbuSecond() {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({ videoUrl: null }); // Placeholder state for video.
  const aboutUs = '/assets/images/about-vd-img.webp'; // Ensure the correct path to your image.

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 p-5">
        {/* First Column: Content */}
        <div className="flex flex-col items-start justify-start">
          {/* <h1 className=" text-4xl font-bold text-[#090909] mb-4">
            <span className="text-primary">About</span> Double Sided Tape
          </h1> */}
          <h1 className={`text-4xl font-bold text-[#090909] mb-4 ${platypi.className}`}>
  <span className="text-primary">About</span> Double Sided Tape
</h1>
          <p className="text-[#090909] mb-4">
            GENWIN brings you high-quality double-sided tapes designed to deliver strong, durable, and clean bonding solutions. Whether you&aposre working on simple DIY projects or large-scale industrial tasks, our advanced tapes ensure reliable performance with a professional finish.
          </p>
          <ul className="list-disc list-inside text-primary mb-3">
            <li><strong>14,000+ Positive Reviews:</strong> <span className="text-gray-700">Trusted by thousands of satisfied customers.</span></li>
            <li><strong>99% Satisfaction Rate:</strong> <span className="text-gray-700">Proven success across diverse applications.</span></li>
            <li><strong>Customized Solutions:</strong> <span className="text-gray-700">Tailored adhesive options for specific projects.</span></li>
            <li><strong>Innovative Technology:</strong> <span className="text-gray-700">From thin films to thick foam carriers, we deliver advanced bonding solutions.</span></li>
          </ul>
          <a href="/about-us" className="bg-[#181818] text-white rounded-md px-5 py-2 hover:bg-primary">
            Know More
          </a>
        </div>

        {/* Second Column: Image */}
        {/* <div className="relative flex justify-center items-center max-[768px]:bg-[url('/assets/images/bg-m.webp')] bg-no-repeat left-[150px] "> */}
        <div className=" relative hidden lg:block max-[768px]:bg-[url('/assets/images/bg-m.webp')] bg-cover bg-left pb-10">


          {/* Image */}
          <div className="z-[2] relative flex justify-center items-center">
            <Image
              src={aboutUs}
              alt="About Us"
              width={200} // Adjust width and height as needed.
              height={300}
              // className={`max-w-full transition-all duration-1000 ease-out  ${isHovered ? 'opacity-0 translate-x-full' : 'opacity-100'}`}
              className={`max-w-full transition-all duration-1000 ease-out ${isHovered ? 'opacity-0 translate-x-full' : 'opacity-100'} 
              sm:w-[200px] md:w-[300px] lg:w-[500px] xl:w-[500px]`}
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            />
            {/* Play Button */}
            {/* <button
              className="absolute bg-[#6b72804f] opacity-90 p-4 rounded-full shadow-lg flex items-center justify-center group"
              style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
            >
              <PlayIcon className="text-white w-10 h-10 group-hover:text-white" />
            </button> */}
          </div>

          {/* Video */}
          {/* <div
            className={`video-container absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out z-[1] ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {video.videoUrl ? (
              <video controls autoPlay loop className="w-full h-full">
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-[100%] bg-transparent flex items-center justify-center">
                <p className="text-gray-500">Video not available</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
