'use client';
import { Platypi } from 'next/font/google';
import { useState } from "react";
import Image from "next/image";
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid'; // Added XMarkIcon for closing modal

const platypi = Platypi({
  subsets: ["latin"],
  preload: false,
});

export default function AbuFirst() {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({ videoUrl: null }); // Placeholder state for video.
  const aboutUs = '/assets/images/about-vd-img.webp'; // Ensure the correct path to your image.

  // --- Lead Capture Form State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // '', 'success', 'error'
  // --- End Lead Capture Form State ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const response = await fetch('/api/inquires', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    setSubmitStatus('');

    await new Promise(resolve => setTimeout(resolve, 1500));
   
    if (formData.email) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);

    // Optionally close modal after a delay on success
    if (formData.email) { // Check success condition again
      setTimeout(() => {
         // Keep modal open to show success message, user closes manually
         // Or uncomment below to close automatically
         // setIsModalOpen(false);
         // setSubmitStatus(''); // Reset status if closing
      }, 2000); // Keep success message for 2 seconds
    }
  };

  const openModal = () => {
    setSubmitStatus(''); // Reset status when opening
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // No need to reset submitStatus here if we reset on open
  };


  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 p-5">
          {/* First Column: Content */}
          <div className="flex flex-col items-start justify-start">
            <h1 className={`text-4xl font-bold text-[#090909] mb-4 ${platypi.className}`}>
              <span className="text-primary">About</span> Genwin
            </h1>
            <p className="text-[#090909] mb-4">
              Since its inception in 2018, GenWin Auto has been at the forefront of innovation in the adhesive solutions industry, specializing in the manufacturing and distribution of high-performance double-sided acrylic tape. With an unwavering commitment to quality, durability, and customer satisfaction, GenWin Auto has carved a niche for itself in a competitive market, providing top-notch adhesive solutions to diverse industries, including automotive, construction, electronics, industrial manufacturing, and DIY enthusiasts.
              {/* Rest of your paragraph text... */}
              <br/><br/>
              At GenWin Auto, we believe that the right adhesive solution can significantly enhance efficiency, safety, and reliability. Our double-sided acrylic tapes are meticulously engineered to deliver unparalleled bonding strength, weather resistance, and durability, making them the preferred choice for professionals and businesses worldwide.
              {/* Rest of your paragraph text... */}
              <br/><br/>
              Our Journey & Commitment to Excellence
               {/* Rest of your paragraph text... */}
              <br/><br/>
              GenWin Auto is not just a company that produces tapes; it is a brand synonymous with trust, reliability, and innovation.
            </p>

            {/* --- Modified Button to Open Modal --- */}
            <button
              onClick={openModal}
              className="bg-[#181818] text-white rounded-md px-5 py-2 hover:bg-primary transition-colors duration-200"
            >
              Request More Info
            </button>
            {/* --- End Modified Button --- */}
          </div>

          {/* Second Column: Image/Video */}
          <div className=" relative hidden md:block max-[768px]:bg-[url('/assets/images/bg-m.webp')] bg-cover bg-left pb-10">
            {/* Image */}
            <div className="z-[2] relative flex justify-center items-center">
              <Image
                src={aboutUs}
                alt="About Us"
                width={500} // Adjusted width for responsiveness
                height={300} // Maintain aspect ratio if needed
                className={`max-w-full transition-all duration-1000 ease-out ${isHovered ? 'opacity-0 translate-x-full' : 'opacity-100'}
                sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]`} // Adjusted sizes
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              />
              {/* Play Button */}
              {/* <button
                className="absolute bg-[#6b72804f] opacity-90 p-4 rounded-full shadow-lg flex items-center justify-center group"
                style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
                // Add onClick handler if this button should play video
                // onClick={() => console.log('Play video clicked')}
              >
                <PlayIcon className="text-white w-10 h-10 group-hover:text-white" />
              </button> */}
            </div>

            {/* Video Placeholder */}
            <div
              className={`video-container absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out z-[1] ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {video.videoUrl ? (
                <video controls autoPlay loop className="w-full h-full object-cover">
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-[100%] bg-gray-200 flex items-center justify-center">
                  {/* Placeholder content if no video */}
                   {/* <p className="text-gray-500">Video preview area</p>  */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- Lead Capture Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center p-4 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md relative z-50">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Form Content */}
            <h2 className={`text-2xl font-semibold mb-5 text-center ${platypi.className}`}>
                Learn More About <span className="text-primary">Genwin</span>
            </h2>

            {submitStatus === 'success' ? (
               <div className="text-center py-4">
                 <p className="text-lg text-green-600 font-medium">Thank You!</p>
                 <p className="text-gray-700 mt-2">We have received your request and will be in touch soon.</p>
                 <button
                   onClick={closeModal}
                   className="mt-4 bg-primary text-white rounded-md px-5 py-2 hover:bg-opacity-90 transition-colors duration-200"
                 >
                   Close
                 </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Tell us what you'd like to know..."
                  />
                </div>

                 {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm mb-4 text-center">
                        Submission failed. Please check your details and try again.
                    </p>
                 )}


                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-white rounded-md px-5 py-2.5 font-semibold hover:bg-opacity-90 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Request'}
                  </button>
                </div>
                 <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy.
                 </p>
              </form>
            )}
          </div>
           <div className="absolute inset-0 z-40" onClick={closeModal}></div>
        </div>
      )}
    </>
  );
}