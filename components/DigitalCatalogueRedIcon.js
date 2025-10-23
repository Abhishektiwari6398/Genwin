// DigitalCatalogueRedIcon.jsx  (filled / active style)
// Note: uses fill="currentColor" for main surfaces so you can control color via CSS (e.g., text-[#E52D38] or text-white)
export default function DigitalCatalogueRedIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      viewBox="0 0 17 18"
      className={className}
      fill="none"
    >
      {/* cover (filled) */}
      <rect x="1" y="1" width="10.5" height="16" rx="1.2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" />
      {/* inner page (slightly lighter look by using stroke + fill none) */}
      <rect x="3.2" y="2.6" width="7" height="12.8" rx="0.8" stroke="white" strokeWidth="0.9" fill="none" />
      {/* thumbnails (filled white to pop on colored background) */}
      <rect x="3.9" y="3.6" width="2" height="2" rx="0.3" fill="white" />
      <rect x="6.5" y="3.6" width="3" height="2" rx="0.3" fill="white" />
      <rect x="3.9" y="6.2" width="5.6" height="1.1" rx="0.3" fill="white" />
      <rect x="3.9" y="8.2" width="5.6" height="1.1" rx="0.3" fill="white" />
      {/* spine / tabs */}
      <path d="M11.8 3.2 L15.2 3.2 L15.2 15.2 L11.8 15.2" fill="currentColor" />
      {/* small digital sparkle in white for contrast */}
      <circle cx="13.6" cy="11.6" r="0.45" fill="white" />
      <path d="M13.6 10.2 L13.6 9.3" stroke="white" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  );
}
