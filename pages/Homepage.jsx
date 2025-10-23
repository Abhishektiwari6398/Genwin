'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import ImageSlider from '../components/ImageSlider';
import UsesSlider from '../components/UsesSlider';
import AbuFirst from '../components/AbuFirst';
import ListingSlider from '../components/ListingSlider';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import BlockSlider from '@/components/BlockSlider';
import p1 from '../public/assets/images/p1.png';
import p2 from '../public/assets/images/2.webp';
import p3 from '../public/assets/images/clear3.png';
import p4 from '../public/assets/images/4.webp';
import p5 from '../public/assets/images/5.webp';
import clientsThum from '../public/assets/images/clientThum.webp';
import t1 from '../public/assets/images/t1.webp';
import t2 from '../public/assets/images/t2.webp';
import t3 from '../public/assets/images/t3.webp';
import { PlayIcon, ClockIcon } from '@heroicons/react/24/solid';
import ClockComponent from '@/components/ClockComponent';
import ClockComponentBlack from '@/components/ClockComponentBlack';

import Newsletter from "@/components/Newsletter";
import { Platypi } from 'next/font/google';
import AbuSecond from '@/components/AbuSecond';

export const metadata = {
  title: 'Best Double Sided Tape | Strong, Thin, Transparent double sided tape with Price',
  description: 'Shop transparent double sided tape, thin double sided tape, strong double sided tape & 3M double sided tape alternatives at best double sided tape price.',
};

const platypi = Platypi({
  weight: ['600','400','500'],
  preload: false, 
});


export default function HomePage() {
  const [isHovered, setIsHovered] = useState(null);
  const slides = [
    {
      image: '/assets/images/slide1.webp',
      mobileImage: '/assets/images/slide1-vertical.webp', 
      heading: 'The Perfect Bond for Every Project',
      content: "GENWIN brings you high-quality double-sided tapes designed to deliver strong, durable, and clean bonding solutions. Whether you're working on simple DIY projects or large-scale industrial tasks, our advanced tapes ensure reliable performance with a professional finish.",
      ctaText: 'Ask a 3M Expert',
      ctaLink: '#',
      smallImage: '/assets/images/circleimg.webp',
      smallContentF: '14k Positive Review',
      smallContentS: '99%',
      smallContentT: 'Satisfaction Work Rate',
    },
    {
      image: "/assets/images/clear3.png",
      mobileImage: "/assets/images/clear3copy.png", 
      heading: 'Double Sided Tapes',
      content: 'Whether you’re bonding similar or completely different substrates, our double-sided tapes provide the strength, conformability, adhesion and aesthetic requirements you need to make your project successful.',
      ctaText: 'Ask a 3M Expert',
      ctaLink: '#',
      smallImage: '/assets/images/circleimg.webp',
      smallContentF: '14k Positive Review',
      smallContentS: '99%',
      smallContentT: 'Satisfaction Work Rate',
    },
    // {
    //   image: '/assets/images/slide2.webp',
    //   mobileImage: '/assets/images/slide2-vertical.webp', 
    //   heading: 'Double Sided Tapes',
    //   content: 'Whether you’re bonding similar or completely different substrates, our double-sided tapes provide the strength, conformability, adhesion and aesthetic requirements you need to make your project successful.',
    //   ctaText: 'Ask a 3M Expert',
    //   ctaLink: '#',
    //   smallImage: '/assets/images/circleimg.webp',
    //   smallContentF: '14k Positive Review',
    //   smallContentS: '99%',
    //   smallContentT: 'Satisfaction Work Rate',
    // },
    // Add more slides as needed
  ];
  const products = [
    {
      name: "Clear Tapes",
      imageUrl: p1,
    },
    {
      name: "Double Sided Acrylic Tape",
      imageUrl: p2,
    },
    {
      name: "Clear Tapes",
      imageUrl: p3,
    },
    {
      name: "Double Sided Acrylic Tape",
      imageUrl: p4,
    },
    // {
    //   name: "Polyester Tape",
    //   imageUrl: p5,
    // },
  ];

  const columnsData = [
    { id: 1, heading: "Faster Assembly Time", content: "Save time and effort with double-sided tapes that eliminate the need for traditional fasteners like screws or nails. Whether you’re working on construction, packaging, or crafting, the adhesive allows for quick and efficient assembly while maintaining a strong bond." },
    { id: 2, heading: "Enhanced Aesthetics", content: "Double-sided tapes provide a clean and invisible bond, making them ideal for applications where appearance matters, such as home décor, displays, and product packaging. Say goodbye to bulky fasteners and ensure a sleek, professional finish." },
    { id: 3, heading: "Design Flexibility", content: "Highly adaptable, double-sided tapes bond effortlessly to various materials like metal, wood, glass, and plastic. This versatility makes them suitable for both smooth and uneven surfaces, conforming to unique shapes and sizes for all your project needs." },
    { id: 4, heading: "Vibration Dampening and Shock Absorption", content: "Foam-based tapes not only provide a secure bond but also absorb shocks and reduce noise, making them perfect for automotive, electronics, and industrial applications. They help enhance durability while ensuring a quieter, more efficient performance." },
    { id: 5, heading: "Durable and Multi-Functional Applications", content: "Double-sided tapes are strong enough to handle everything from temporary bonds to permanent fixtures. Whether you’re mounting lightweight objects or securing heavy-duty materials, these tapes offer long-lasting performance, making them indispensable across industries like construction, automotive, and design." },
  ];
  const listBg = 'assets/images/list-bg.webp';
  const csyasBg = 'assets/images/csays-bg.webp';
  const banefitBg = 'assets/images/banefit-bg.webp';
  const slideBg = 'assets/images/slider-bg.webp';
  const  mobileSlideBg ='assets/images/slider-bg-vertical.webp';
  const aboutusBg = 'assets/images/about_us-bg.webp';

  const usesslides = [
    {
      image: 'https://www.team-bhp.com/forum/attachments/modifications-accessories/2443958d1682446729-adhesive-tape-use-fit-dashcam-windshield-screenshot_20230425_234719_chrome.jpg',
      heading: 'Sensor and Camera Mounting',
      description: 'In modern vehicles, double-sided tape is used to mount reversing cameras, parking sensors, and ADAS components without damaging paint or structure.',
    },
    {
      image: '/assets/images/uses3.webp',
      heading: ' Emblem and Badge Mounting',
      description: 'Double-sided tapes are used to securely attach brand emblems, model badges, and trim pieces to the vehicle body without drilling or welding.'
    },
    {
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/40b31034-0e0e-4b7c-9d57-18b27c2468a4.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      heading: 'Weatherstrip and Seal Attachment',
      description: 'They help bond rubber seals and weatherstrips around doors, windows, and trunks to prevent water and air leaks, ensuring better insulation and comfort.',
    },
    {
      image: 'https://i.ebayimg.com/images/g/CKMAAOSwZgJj6bL6/s-l1200.jpg',
      heading: 'Interior Panel Fixing',
      description: 'Used to attach interior trims, dashboard panels, or console components, providing a clean and tool-free installation while reducing rattling and vibration.',
    },
  ];

  

  const video =[{
    name:'Abc',
    videoUrl: 'https://www.globalfpo.com/videos/events/manchester-19-sep-23.mp4',
  }];

  const clientsays = [
    {
      imageUrl: '/path/to/image1.jpg',
      title: 'John Doe',
      description: 'Software Engineer at TechCorp',
      rating: 4,
      additionalContent: 'Great experience using this product!',
    },
    {
      imageUrl: '/path/to/image2.jpg',
      title: 'Jane Smith',
      description: 'Product Manager at InnovateX',
      rating: 5,
      additionalContent: 'Highly recommend this service!',
    },
    {
      imageUrl: '/path/to/image3.jpg',
      title: 'Alice Brown',
      description: 'Designer at Creatify',
      rating: 3,
      additionalContent: 'Good value for the price.',
    },
  ];

  const [bgImage, setBgImage] = useState(slideBg);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBgImage(window.innerWidth <= 768 ? mobileSlideBg : slideBg);
    }
  }, []);

  return (
    <>
      <section
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
          className="bg-cover bg-center"
        >
          <ImageSlider slides={slides} autoPlay={true} autoPlayInterval={3000} />
          <div className="max-w-[94%] xl:ms-auto py-3  bg-[#E52D38] ms-auto ">
            <div className="lg:max-w-[90%]  xl:max-w-[90%] py-3 ">      
                <UsesSlider  slides={usesslides} autoPlay={true} autoPlayInterval={5000}/>
             
            </div>
          </div>
        </section>
         
      <section style={{ backgroundImage: `url(${aboutusBg})` }} className="bg-cover bg-center py-8">
         <AbuSecond />
      </section>
      {/* <section className="py-8" style={{backgroundImage: `url(${listBg})`}}> */}
      <section className="py-8" style={{
            backgroundImage: `linear-gradient(90deg, rgba(36,24,0,1) 0%, rgba(255,234,232,1) 0%, rgba(255,255,255,1) 100%)`, // Replace with your background image path
          }}>
        <div className="max-w-8xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-1 ">
            {/* First Column - Content */}
            <div className="py-4 rounded-lg flex flex-col justify-between">
              <h2 className={` mb-4 text-090909 text-30  lg:text-40 xl:text-40 font-[600] text-center ${platypi.className}`}><span className={`text-primary text-30  lg:text-40 xl:text-40 font-[600] ${platypi.className}`}>Listing</span> of Double Sided Tape</h2>
            </div>
            <ListingSlider slides={products} autoPlay={true} autoPlayInterval={5000} />  
                      
          </div>
          
        </div>
      </section>
      <section className="py-8" style={{
            backgroundImage: `linear-gradient(90deg, rgba(36,24,0,1) 0%, rgba(255,234,232,1) 0%, rgba(255,255,255,1) 100%)`, 
          }}>
        <div className="max-w-7xl mx-auto p-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">    
          {/* First Column */}
          <div className="p-0 rounded-lg ">
            <h2 className={`text-30 lg:text-40 xl:text-40 font-[400] text-start ${platypi.className} text-090909`}><span className={`text-primary text-30  lg:text-40 xl:text-40 font-[400] ${platypi.className}`}>Benefits</span> of Double Sided Tape</h2>
            <p className="text-[#181818] mt-4  text-16  font-[500]">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
            </p>
          </div>

          {/* Other Columns */}
          {columnsData.map((col) => (
            <div
              key={col.id}
              className="group bg-white p-6 rounded-lg hover:rotate-[-6deg] hover:bg-primary transition-transform duration-500 border-[#ee313c33] border"
              onMouseEnter={() => setIsHovered(col.id)}
              onMouseLeave={() => setIsHovered(null)}
            
            >
             <div className="flex items-center space-x-2 flex-row relative">
              <div
                className="group"
              >
                {isHovered === col.id? (
                  <ClockComponent className="w-5 h-5 " />
                ) : (
                  <ClockComponentBlack className="w-5 h-5 " />
                )}
              </div>

              <h3 className="text-16 font-[600] lg:text-20 xl:text-20 text-188118 group-hover:text-white">
                {col.heading}
              </h3>
            </div>


              <p className="text-188118 mt-4 group-hover:text-white text-14 font-[500]  lg:text-16 xl:text-16 ">
                {col.content}
              </p>
              <a
                href="#read-more"
                className="text-188118 mt-4 inline-block hover:border-b group-hover:text-white transition-colors duration-500 text-12 font-[500]  lg:text-14 xl:text-14"
              >
                {/* Read More */}
              </a>
            </div>
          ))}
        </div>  
      </section>
      {/* Fifth Section - Our Partners */}
      <Partners />
      {/* <section className="py-8" style={{
            backgroundImage: `linear-gradient(90deg, rgba(36,24,0,1) 0%, rgba(255,238,237,0.8884803921568627) 0%, rgba(255,255,255,1) 100%)`, // Replace with your background image path
          }}>
        <div
          className="max-w-7xl mx-auto p-5 relative bg-cover bg-center rounded-2xl"
          
        >
          <div className="relative flex flex-col py-10">
            <div>
              <h2 className="text-4xl font-bold text-00">What Says <span className="text-primary">Our Clients</span> About Genwin</h2>
              <p className="text-090909 mt-2">
                A double-sided tape has pressure-sensitive adhesive exposed on both sides,
                allowing two parts to be bonded together by the tape between them. A carrier
                that holds adhesive can range from a film as thin as a fraction of a millimeter
                up to a thick foam that helps damp vibrations. Similarly, adhesives can meet
                specific needs from low-tack that allows for repositioning all the way up to a
                permanent bonding solution. A double-sided tape that has a carrier can be
                produced with the same adhesive on both sides, or with different adhesives to
                meet the bonding requirements of different substrates. Our adhesive experts are
                happy to work with you to determine which of our thousands of tapes best meets
                your needs.
              </p>
            </div>
            <BlockSlider slides={clientsays} />
          </div>  
        </div>
      </section> */}
      
      <section className="py-8" style={{backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(249,232,232,1) 100%)`}}>
        <Testimonials />
      </section>
      <section style={{backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(249,232,232,1) 100%)`}}>
        <Newsletter />
      </section>      
    </>
  );
}
