"use client"
import React, { useState } from 'react';

// Your FAQ data (assuming it's the same as before)
const faqData = [
  {
    id: 1,
    question: "What makes Genwin double-sided tapes different from others?",
    answer: "Genwin tapes are engineered with industrial-grade adhesive that offers strong bonding, easy application, and clean removal. Whether for home, office, or industrial use, our tapes deliver reliable performance on a wide range of surfaces."
  },
  {
    id: 2,
    question: "Can Genwin double-sided tapes be used on rough or uneven surfaces?",
    answer: "Yes! Our tapes are designed to adhere strongly to both smooth and slightly textured surfaces like wood, metal, plastic, glass, and even certain fabrics. For heavily textured surfaces, we recommend testing a small area first."
  },
  {
    id: 3,
    question: "Are Genwin tapes waterproof or weather-resistant?",
    answer: "Some of our tapes are weather-resistant and suitable for light outdoor use. Please refer to the product specifications for each tape to see if it's rated for water and UV resistance."
  },
  {
    id: 4,
    question: "How do I remove the tape without damaging the surface?",
    answer: "Genwin tapes are designed for clean removal. Simply peel them off slowly at a 45° angle. For any adhesive residue, gently use rubbing alcohol or a mild adhesive remover. Always test in an inconspicuous area first, especially on delicate surfaces."
  },
  {
    id: 5,
    question: "What applications are Genwin double-sided tapes ideal for?",
    answer: "Our tapes are perfect for mounting, crafting, signage, packaging, décor, and temporary or permanent installations—both at home and in commercial or industrial settings."
  },
  {
    id: 6,
    question: "Do you offer bulk or custom orders for businesses?",
    answer: "Yes, we do! We offer bulk purchasing options and can customize tape sizes and specifications based on your business needs. Reach out to our sales team for more information."
  },
  {
    id: 7,
    question: "Is Genwin tape safe for indoor use around children or pets?",
    answer: "Absolutely. Our tapes are non-toxic and generally safe for indoor use when applied as directed. However, like any adhesive product, we advise keeping tape rolls and discarded liners out of direct reach of young children or pets to avoid accidental ingestion or misuse."
  },
  {
    id: 11, // Assuming IDs 8,9,10,13 were intentionally skipped
    question: "Does Genwin tape leave any sticky residue behind?",
    answer: "Most of our tapes are designed for clean, residue-free removal from suitable surfaces. For particularly sensitive surfaces or after prolonged application, we recommend testing a small, hidden area first before full application and removal."
  },
  {
    id: 12,
    question: "Can your tape be used for automotive or industrial applications?",
    answer: "Yes, we offer specific high-performance variants engineered for demanding automotive applications like trim and badge bonding, as well as various industrial assembly tasks. Please check product descriptions or contact us to learn more about these specialized solutions."
  },
  {
    id: 14,
    question: "Do you offer eco-friendly or recyclable tape options?",
    answer: "We are committed to sustainability and are actively working on expanding our eco-friendly product offerings, including tapes made with recycled materials or featuring more sustainable adhesive technologies. Stay tuned for updates on our green product line!"
  },
  {
    id: 15,
    question: "Where can I buy Genwin double-sided tapes?",
    answer: "Genwin products are available directly on our official website [Your Website Link Here] and through select authorized online and physical retailers. You can also contact our dedicated sales team for bulk or B2B inquiries." // Replace placeholder
  }
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold font-[Platype] text-gray-900 sm:text-4xl mb-8 md:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-200">
          {faqData.map((item) => (
            <div key={item.id} className="py-6">
              {/* Question Button */}
              <button
                onClick={() => handleToggle(item.id)}
                className="flex justify-between items-start w-full text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 rounded-md p-1 group" // Use items-start if questions wrap, group for potential hover effects
                aria-expanded={openIndex === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {/* +/- Icon */}
                <span className="ml-6 flex-shrink-0"> {/* Added mt-1 for slight alignment adjustment if needed */}
                  {openIndex === item.id ? (
                     <svg className="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                     </svg>
                   ) : (
                     <svg className="h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> {/* Optional: icon hover state */}
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                     </svg>
                   )}
                </span>
              </button>

              {/* Answer Panel - Conditional Rendering with Transition */}
              <div
                id={`faq-answer-${item.id}`}
                // Apply transition classes directly here
                className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === item.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`} // Added opacity transition for smoother feel
                aria-hidden={openIndex !== item.id} // Better accessibility when hidden
              >
                  {/* Add padding within the animated container */}
                  <div className="pb-4 pr-12"> {/* Padding applied here (pb-4 added, pr-12 kept) */}
                      <p className="text-base text-gray-600">
                          {item.answer}
                      </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;