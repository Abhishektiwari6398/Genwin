// Use "use client" if you anticipate adding client-side interactions later
// or if it's part of a larger component already marked as client component.
// For just a link, it's often not strictly necessary in App Router,
// but doesn't hurt.
"use client";

import React from 'react';
import PropTypes from 'prop-types'; // Optional: for prop type validation

const WhatsAppLink = ({
  phoneNumber,
  message = '', // Optional pre-filled message
  className = '', // Allow passing custom styles
  children     // Content inside the clickable area (text, icon, etc.)
}) => {

  // Basic validation
  if (!phoneNumber) {
    console.error("WhatsAppLink: 'phoneNumber' prop is required.");
    // Return null or some fallback UI if the number is missing
    return null;
  }

  // Remove any non-digit characters (like +, -, spaces, brackets)
  // WhatsApp API needs the number in international format without symbols
  const formattedNumber = phoneNumber.replace(/\D/g, '');

  // Construct the WhatsApp URL
  let url = `https://wa.me/${formattedNumber}`;

  // Add the pre-filled message if provided (needs URL encoding)
  if (message) {
    url += `?text=${encodeURIComponent(message)}`;
  }

  return (
    // Use an anchor tag for navigation - semantically correct
    <a
      href={url}
      target="_blank" // Important: Opens in new tab or WhatsApp app
      rel="noopener noreferrer" // Security best practice for target="_blank"
      // Combine default styles (optional) with passed styles
      className={`inline-block cursor-pointer ${className}`}
    >
      {/* The content you want to display inside the clickable area */}
      {children}
    </a>
  );
};



export default WhatsAppLink;