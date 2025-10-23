'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '../public/assets/images/logobgremove.png';
import icon from '../public/assets/images/mobile.svg';
import icons from '../public/assets/images/gmail.webp';
// import icons from '../public/assets/images/gmailIcon.svg';
import HomeIcon from '@/components/HomeIcon';
import HomeIconRed from './HomeIconRed';
import AboutIcon from './AboutIcon';
import AboutIconRed from './AboutIconRed';
import ProductsRedIcon from './ProductsRedIcon';
import ProductsIcon from './ProductsIcon';
import SupportIcon from './SupportIcon';
import SupportRedIcon from './SupportRedIcon';
import PhoneRedIcon from './PhoneRedIcon';
import Industries from './Industries';
import DigitalCatalogueIcon from './DigitalCatalogueIcon';
import DigitalCatalogueRedIcon from './DigitalCatalogueRedIcon';


const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpened, setisOpened] = useState(false);
  const isActive = (path) => pathname === path;

  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const toggleIndustries = (e) => {
      // Prevent any default link/button behavior if necessary
      // e.preventDefault();
      setIsIndustriesOpen(!isIndustriesOpen);
  };

  return (    
    <nav className="bg-white shadow-md top-0 z-50 w-full sticky">
      <div className=' hidden max-[768px]:block  bg-red-500 items-end p-4'>
        {/* <div className=' rounded-none container max-w-7xl  px-4 lg:px-8 text-center bg-[#E52D38]'>hrggdg</div>*/}
        <div className='text-[#FFFFFF] text-base w-full gap-2 items-start '> 

          <div className='flex justify-start '>
            <span>Contact Us For More Info:</span>
          </div>
        <div className='flex justify-start gap-2'>
      {/* <div className='text-base ml-5 text-center'> */}

            <div className='flex  items-center '>
            <Image src={icon} alt="mobile.icon"/>
              <span className='whitespace-nowrap text-12 font-[500] gap-1'>+91-9717121626</span>
            
            </div>
            <div className='flex items-center '>
            <Image src={icons} alt="gmail.icon"/> 
            <span className='whitespace-nowrap text-12 w-10 h-auto  font-[500] ml-1'> contact@genwin-auto.com </span>
          </div>
        </div>
        </div>
     
      </div>
    <div className="container max-w-7xl mx-auto px-2">
      <div className="flex justify-between items-center py-2 sticky px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4 text-primary logo md:w-[192px] min-[320px] ">
        <Link
              href="/"
              className={`text-18 text-[#181818]  hover:text-primary transition duration-300 ${
                isActive('/') ? 'text-primary ' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              <Image src={Logo} alt="Logo"  height={55} className="w-[120px] xl:w-[150px] lg:w[150px]" />
            </Link>
         
        </div>
  
        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-gray-700 hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Bars3Icon className="h-6 w-6 text-primary " />
        </button>
        {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-20 backdrop-blur-[0px] transition-all bg-black duration-300 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li
            className={`relative group ${
              isActive('/') ? 'border-b-2 border-primary text-primary' : ''
            }`}
          >
            <Link
              href="/"
              className={`text-18 text-[#181818]  hover:text-primary transition duration-300 ${
                isActive('/') ? 'text-primary ' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>
          </li>
          <li
            className={`relative group ${
              isActive('/about-us') ? 'border-b-2 border-primary text-primary' : ''
            }`}
          >
            <Link
              href="/about-us"
              className={`text-18 text-[#181818] hover:text-primary transition duration-300 ${
                isActive('/about-us') ? 'text-primary' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              About
            </Link>
          </li>
          <li
            className={`relative group ${
              isActive('/products') ? 'border-b-2 border-primary text-primary' : ''
            }`}
          >
            <Link
              href="/products"
              className={`text-18 text-[#181818] hover:text-primary transition duration-300 ${
                isActive('/products') ? 'text-primary' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Products
            </Link>
          </li>
          <li
            className={`relative group ${
              isActive('/contact-us') ? 'border-b-2 border-primary text-primary' : ''
            }`}
          >
            <Link
              href="/contact-us"
              className={`text-18 text-[#181818] hover:text-primary transition duration-300 ${
                isActive('/contact-us') ? 'text-primary' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Support
            </Link>
          </li>
          <li
            className={`relative group ${
              isActive('/genwin') ? 'border-b-2 border-primary text-primary' : ''
            }`}
          >
            <Link
              href="/genwin"
              className={`text-18 text-[#181818] hover:text-primary transition duration-300 ${
                isActive('/genwin') ? 'text-primary' : ''
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              DigitalCatalogue
            </Link>
          </li>
          <li
            className={`relative group `}
            onClick={() => setisOpened(!isOpened)}
          >
                   <div className="relative inline-block"> {/* Container for positioning dropdown */}
            <button
                type="button" // Explicitly set type for button
                onClick={toggleIndustries}
                className={`inline-flex items-center text-18 text-[#181818] hover:text-primary transition duration-300 group focus:outline-none`} // Added inline-flex, items-center, group
                aria-expanded={isIndustriesOpen} // Accessibility attribute
            >
                <span>Industries</span> 
                <svg
                    className={`ml-1 h-5 w-5 text-gray-500 group-hover:text-primary transform transition-transform duration-300 ${
                        isIndustriesOpen ? 'rotate-180' : 'rotate-0' // Conditional rotation
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true" // Hide decorative icon from screen readers
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Conditionally render the dropdown based on the state */}
            {/* Position this absolutely relative to the parent div */}
            {isIndustriesOpen && (
                <div className="absolute left-0 z-20"> {/* Example positioning */}
                    {/* Pass the state down if Industries needs it, or it might just render */}
                    <Industries isOpened={isIndustriesOpen} setisOpened={setIsIndustriesOpen}/>
                </div>
            )}
        </div>

          </li>
        </ul>
        <div className="hidden lg:flex flex-row space-x-2 text-18 font-[500]">
          <PhoneRedIcon className="h-6 w-6 text-18 font-[500]" />
          <div className='flex flex-col'>
            <span className='text-E52D38'>Contact Us For More Info:</span> 
            <span className="ms-1 text-16 font-[500]">+91-9717121626</span>
          </div>
        </div>
      </div>
  
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='h-full w-[70%] fixed top-0 right-0 bg-white z-50 px-5  lg:hidden xl:hidden '>
          <div className="flex items-center space-x-4 text-primary logo py-6">
            <Image src={Logo} alt="Logo" width={120} height={55} className="" />
          </div>
        <ul className=" space-y-4 ">
          <li className="text-[#E52D38] hover:bg-[#E52D38] hover:text-white hover:rounded-md">
              <Link
                href="/"
                className={`group ${isActive('/') ? 'bg-[#E52D38] text-white' : 'bg-[#e52d3808]'} flex flex-row px-4 py-2 text-[16px] font-[600] rounded-md gap-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={`${isActive('/') ? 'block' : 'hidden group-hover:block'}`}>
                  <HomeIcon />
                </span>
                <span className={`${isActive('/') ? 'hidden' : 'block group-hover:hidden'}`}>
                  <HomeIconRed />
                </span>
                Home
              </Link>
          </li>

          <li className="text-[#E52D38] hover:bg-[#E52D38] hover:text-white hover:rounded-md">
            <Link
              href="/about-us"
              className={`group ${isActive('/about-us') ? 'bg-[#E52D38] text-white' : 'bg-[#e52d3808]'} flex flex-row px-4 py-2 text-[16px] font-[600] rounded-md gap-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Icon logic: Show AboutIcon when active or on hover */}
              <span className={`${isActive('/about-us') ? 'block' : 'hidden group-hover:block'}`}>
                <AboutIcon />
              </span>
              <span className={`${isActive('/about-us') ? 'hidden' : 'block group-hover:hidden'}`}>
                <AboutIconRed />
              </span>
              About
            </Link>
          </li>

          <li className="text-[#E52D38] hover:bg-[#E52D38] hover:text-white hover:rounded-md ">
            <Link
              href="/products"
              className={`group ${isActive('/products') ? 'bg-[#E52D38] text-white items-center' : 'bg-[#e52d3808]'} flex flex-row items-center px-4 py-2 text-[16px] font-[600] rounded-md gap-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Icon logic: Show ProductsIcon when active or on hover */}
              <span className={`${isActive('/products') ? 'block' : 'hidden group-hover:block'}`}>
                <ProductsIcon />
              </span>
              <span className={`${isActive('/products') ? 'hidden' : 'block group-hover:hidden'}`}>
                <ProductsRedIcon />
              </span>
              Products
            </Link>
          </li>

         
          {/* <li
            className={`relative group ${
              isActive('/products') ? 'border-b-2 border-primary' : ''
            }`}
          >
            <Link
              href="/products"
              className="text-18 text-gray-700 hover:text-primary transition duration-300"
              onClick={() => setIsDropdownOpen(false)}
            >
              Products
            </Link>
          </li> */}
          <li className="text-[#E52D38] hover:bg-[#E52D38] hover:text-white hover:rounded-md">
            <Link
              href="/contact-us"
              className={`group ${isActive('/contact-us') ? 'bg-[#E52D38] text-white items-center' : 'bg-[#e52d3808]'} flex flex-row items-center px-4 py-2 text-[16px] font-[600] rounded-md gap-2 transition-all duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Icon logic: Show SupportIcon when active or on hover */}
              <span className={`${isActive('/contact-us') ? 'block' : 'hidden group-hover:block'}`}>
                <SupportIcon />
              </span>
              <span className={`${isActive('/contact-us') ? 'hidden' : 'block group-hover:hidden'}`}>
                <SupportRedIcon />
              </span>
              Support
            </Link>
          </li>
           <li className="text-[#E52D38] hover:bg-[#E52D38] hover:text-white hover:rounded-md">
            <Link
              href="/genwin"
              className={`group ${isActive('/genwin') ? 'bg-[#E52D38] text-white items-center' : 'bg-[#e52d3808]'} flex flex-row items-center px-4 py-2 text-[16px] font-[600] rounded-md gap-2 transition-all duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Icon logic: Show SupportIcon when active or on hover */}
              <span className={`${isActive('/genwin') ? 'block' : 'hidden group-hover:block'}`}>
                <DigitalCatalogueIcon />
              </span>
              <span className={`${isActive('/genwin') ? 'hidden' : 'block group-hover:hidden'}`}>
                <DigitalCatalogueRedIcon />
              </span>
              DigitalCatalogue
            </Link>
          </li>

         
        </ul>
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbar;
