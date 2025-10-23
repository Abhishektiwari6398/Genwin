'use client';
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Youtube, Instagram } from "lucide-react";
import jsPDF from "jspdf";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
});

export default function Genwin() {
  const bookRef = useRef(null);
  const stageRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [zoomImg, setZoomImg] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [tocOpen, setTocOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 900,
    height: 650,
    isMobile: false
  });

  useEffect(() => {
    setIsMounted(true);
    
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 640;
      setDimensions({
        width: isMobile ? window.innerWidth : 900,
        height: isMobile ? 600 : 650, // Fixed height instead of dynamic
        isMobile
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // ❌ REMOVE THIS - Ye scroll block kar raha tha
  // useEffect(() => {
  //   if (!isMounted) return;
  //   document.body.style.overflow = "hidden";
  //   document.documentElement.style.overflow = "hidden";
  //   document.body.style.touchAction = "none";
  //   document.documentElement.style.touchAction = "none";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.documentElement.style.overflow = "auto";
  //     document.body.style.touchAction = "auto";
  //     document.documentElement.style.touchAction = "auto";
  //   };
  // }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      try {
        const flip = bookRef.current?.pageFlip?.();
        if (flip && typeof flip.setOptions === 'function') {
          flip.setOptions({
            width: dimensions.isMobile ? dimensions.width : 900,
            height: dimensions.isMobile ? dimensions.height : 600,
            size: "stretch",
            showCover: true,
            usePortrait: true,
            useMouseEvents: !dimensions.isMobile,
            useTouchEvents: !dimensions.isMobile,
            clickEventForward: !dimensions.isMobile,
            swipeDistance: dimensions.isMobile ? 9999 : 30,
            mobileScrollSupport: false,
            flippingTime: dimensions.isMobile ? 0 : 1000,
            maxShadowOpacity: dimensions.isMobile ? 0 : 0.5,
          });
        }
      } catch (error) {
        console.log('Flipbook not yet ready:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted, dimensions]);

  const onFlip = (e) => setCurrent(e.data);
  
  const onPrev = () => {
    try {
      bookRef.current?.pageFlip()?.flipPrev();
    } catch (error) {
      console.log('Cannot flip:', error);
    }
  };
  
  const onNext = () => {
    try {
      bookRef.current?.pageFlip()?.flipNext();
    } catch (error) {
      console.log('Cannot flip:', error);
    }
  };

  const goToPage = (index) => {
    try {
      const book = bookRef.current?.pageFlip();
      if (book && typeof book.turnToPage === 'function') {
        book.turnToPage(index);
        setCurrent(index);
      }
    } catch (error) {
      console.log('Cannot go to page:', error);
    }
  };

  const downloadBlob = async (url, filename) => {
    try {
      const driveMatch = url.match(/\/d\/([-.\w]+)\//);
      let dlUrl = url;
      if (driveMatch) dlUrl = `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
      const res = await fetch(dlUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      alert("Unable to download file. It might be blocked by CORS.");
    }
  };

  const handleDownloadPDF = () => {
    if (!pages || pages.length === 0) {
      alert("No pages found.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 15;
    const pageWidth = pdf.internal.pageSize.getWidth() - margin * 2;
    let firstPage = true;

    pages.forEach((p, index) => {
      if (!firstPage) pdf.addPage();
      firstPage = false;

      let y = margin;

      const logoWidth = 25;
      const logoHeight = 25;
      const logoPath = "logo.png";
      try {
        pdf.addImage(logoPath, "PNG", margin, y, logoWidth, logoHeight);
      } catch (err) {
        console.warn("Logo not found:", err);
      }

      pdf.setFontSize(20);
      pdf.setTextColor(220, 0, 0);
      pdf.setFont("helvetica", "bold");
      pdf.text("GENWIN", margin + logoWidth + 5, y + 15);

      y += logoHeight + 5;

      const productText = `
  Page No : ${index + 1}. 

    i)  Product Name: ${p.name}
  
  ii)  Product Size: ${p.size}-

  iii)  Product Code: ${p.code}

  iv)  Packing: ${p.packing}
   `;
      const productLines = pdf.splitTextToSize(productText, pageWidth);
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(0, 0, 0);
      pdf.text(productLines, margin, y);
      y += productLines.length * 7 + 5;

      pdf.setTextColor(100);
      pdf.setFontSize(9);
      pdf.text(`Page ${index + 1} of ${pages.length}`, pdf.internal.pageSize.getWidth() - margin - 20, pdf.internal.pageSize.getHeight() - 10);
    });

    pdf.save("Genwin_Catalog.pdf");
  };

  const pages = [
    { id: 1, images: ["/assets/images/img1.JPG"], videos: ["https://drive.google.com/file/d/1-AxX_wWFKvYokY6gqFa6AOzNh_1iggSt/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "9MM x 1MM x 3MTR", code: "GW*CL*9*1*3", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 44, packing: 36 },
    { id: 2, images: ["/assets/images/img2.JPG"], videos: ["https://drive.google.com/file/d/14WufWbwoDoDI16nVDlzZP98av22qhhfU/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "12MM x 1MM x 3MTR", code: "GW*CL*12*1*3", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 56, packing: 30 },
    { id: 3, images: ["/assets/images/img3.JPG"], videos: ["https://drive.google.com/file/d/1QgNmdPZKywbDxsMzOHfUXtfCeSdTS4te/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "9MM x 1MM x 9MTR", code: "GW*CL*9*1*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 90, packing: 36 },
    { id: 4, images: ["/assets/images/img4.JPG"], videos: ["https://drive.google.com/file/d/101FKG6d27_nOUzPN87NkmZIe5LPIclGm/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "12MM x 1MM x 9MTR", code: "GW*CL*12*1*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 120, packing: 30 },
    { id: 5, images: ["/assets/images/img5.JPG"], videos: ["https://drive.google.com/file/d/1V00dz-CZrIoQTfWKZJ_RcUMkuu9AakCa/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "18MM x 1MM x 9MTR", code: "GW*CL*18*1*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 180, packing: 18 },
    { id: 6, images: ["/assets/images/img6.JPG"], videos: ["https://drive.google.com/file/d/1_HI4zrktUczUXr9PHrt0HlcmqM3CHP9r/preview"], name: "GENWIN ACRYLIC CLEAR TAPE", size: "24MM x 1MM x 9MTR", code: "GW*CL*24*1*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 240, packing: 15 },
    { id: 7, images: ["/assets/images/img7.JPG"], videos: ["https://drive.google.com/file/d/1mgBsVHpEDRVVJQRnXzgj7nvt8LoOtmjy/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "9MM x 0.8MM x 3MTR", code: "GW*GREY*9*0.8*3", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 44, packing: 36 },
    { id: 8, images: ["/assets/images/img8.JPG"], videos: ["https://drive.google.com/file/d/1_8hejTv_apA30kDBn53zvHsKkpMWiklv/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "12MM x 0.8MM x 3MTR", code: "GW*GREY*12*0.8*3", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 56, packing: 30 },
    { id: 9, images: ["/assets/images/img9.JPG"], videos: ["https://drive.google.com/file/d/1OfjwD0veQB2gbboASIhqQi_MyDpYCbko/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "9MM x 0.8MM x 9MTR", code: "GW*GREY*9*0.8*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 90, packing: 36 },
    { id: 10, images: ["/assets/images/img10.JPG"], videos: ["https://drive.google.com/file/d/1Fm_Q8uw7nzbBG-rIQ-P4EAb2uAnZ_yC9/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "12MM x 0.8MM x 9MTR", code: "GW*GREY*12*0.8*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 120, packing: 30 },
    { id: 11, images: ["/assets/images/img11.JPG"], videos: ["https://drive.google.com/file/d/146RKYRzbdecwp4Swsz4KLATDuWCGI5I9/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "18MM x 0.8MM x 9MTR", code: "GW*GREY*18*0.8*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 180, packing: 18 },
    { id: 12, images: ["/assets/images/img12.JPG"], videos: ["https://drive.google.com/file/d/1-GQn4M-MLjA_8NSXS4F36XZCvOzwL_Q4/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "24MM x 0.8MM x 9MTR", code: "GW*GREY*24*0.8*9", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 240, packing: 15 },
    { id: 13, images: ["/assets/images/img13.JPG"], videos: ["https://drive.google.com/file/d/10hh8B03nyVBYXVlCd4I6PrwZE0Usr-SC/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "7MM x 0.8MM x 33MTR", code: "GW*GREY*7*0.8*33", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 170, packing: 50 },
    { id: 14, images: ["/assets/images/img14.JPG"], videos: ["https://drive.google.com/file/d/1DsP59PWd8KxEgyRryu4lrFIQtgZKY264/preview"], name: "GENWIN ACRYLIC FOAM TAPE", size: "8MM x 0.8MM x 33MTR", code: "GW*GREY*8*0.8*33", youtube: "https://www.youtube.com/@genwinauto/", instagram: "https://www.instagram.com/genwin.official?igsh=MThjZnZxNzQwMTdtbw==", website: "https://www.genwinauto.com", price: 190, packing: 50 },
  ];

  /**
   * Magnifier component with controls (magnifier icon + +/-)
   * Replaces the previous simple zoom modal.
   */
  const Magnifier = ({ src, initialZoom = 2, lensSize = 180, onClose }) => {
    const imgRef = useRef(null);
    const wrapperRef = useRef(null);
    const [showLens, setShowLens] = useState(true);
    const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
    const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
    const [isTouch, setIsTouch] = useState(false);

    // zoom level controlled by buttons
    const [zoomLevel, setZoomLevel] = useState(initialZoom);
    const ZOOM_STEP = 0.2;
    const ZOOM_MIN = 1;
    const ZOOM_MAX = 4;

    useEffect(() => {
      setIsTouch(('ontouchstart' in window) || navigator.maxTouchPoints > 0);
    }, []);

    useEffect(() => {
      const imgEl = imgRef.current;
      if (!imgEl) return;
      const update = () => {
        setImgSize({ w: imgEl.clientWidth, h: imgEl.clientHeight });
      };
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, [src]);

    const moveLens = (pageX, pageY) => {
      const rect = imgRef.current.getBoundingClientRect();
      const x = pageX - rect.left;
      const y = pageY - rect.top;

      // clamp so lens stays within image
      const cx = Math.max(0, Math.min(x, rect.width));
      const cy = Math.max(0, Math.min(y, rect.height));
      setLensPos({ x: cx, y: cy });
    };

    const handleMouseMove = (e) => {
      if (!imgRef.current) return;
      moveLens(e.pageX, e.pageY);
    };

    const handleTouch = (e) => {
      if (!imgRef.current) return;
      const touch = e.touches[0];
      if (!touch) return;
      moveLens(touch.pageX, touch.pageY);
    };

    const toggleLens = (e) => {
      // on mobile tap we toggle lens visibility (and move it)
      if (isTouch) {
        const touch = e.touches ? e.touches[0] : null;
        if (touch) moveLens(touch.pageX, touch.pageY);
        setShowLens(s => !s);
      }
    };

    // background position calculation in percent
    const bgPos = () => {
      if (!imgSize.w || !imgSize.h) return "50% 50%";
      const xPercent = (lensPos.x / imgSize.w) * 100;
      const yPercent = (lensPos.y / imgSize.h) * 100;
      return `${xPercent}% ${yPercent}%`;
    };

    const zoomIn = () => setZoomLevel(z => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));
    const zoomOut = () => setZoomLevel(z => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        onClick={() => onClose?.()}
      >
        <div
          className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-3"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-700">Preview</div>

            {/* Controls group (magnifier icon + +/- + zoom value) */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-50 rounded-md p-1 border">
                {/* Magnifier icon */}
                <div title="Magnifier" className="w-8 h-8 flex items-center justify-center">
                  {/* simple SVG magnifier */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21 21l-4.35-4.35" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="11" cy="11" r="6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Zoom out */}
                <button
                  onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                  className="px-2 py-1 text-sm rounded-md"
                  aria-label="Zoom out"
                  title="Zoom out"
                >
                  −
                </button>

                {/* Zoom level display */}
                <div className="text-xs px-2">{zoomLevel}×</div>

                {/* Zoom in */}
                <button
                  onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                  className="px-2 py-1 text-sm rounded-md"
                  aria-label="Zoom in"
                  title="Zoom in"
                >
                  +
                </button>
              </div>

              <button
                className="px-3 py-1 rounded-md bg-red-600 text-white"
                onClick={() => onClose?.()}
              >
                Close
              </button>
            </div>
          </div>

          <div
            ref={wrapperRef}
            className="w-full flex justify-center overflow-auto"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onTouchStart={(e) => { toggleLens(e); handleTouch(e); }}
            onTouchMove={handleTouch}
            style={{ position: "relative" }}
          >
            <img
              ref={imgRef}
              src={src}
              alt="zoom"
              className="max-h-[70vh] object-contain"
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
              draggable={false}
            />

            {/* Lens */}
            {showLens && (
              <div
                style={{
                  position: "absolute",
                  pointerEvents: "none", // allow events to pass to image
                  width: lensSize,
                  height: lensSize,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  transform: `translate(-50%, -50%)`,
                  left: `${lensPos.x}px`,
                  top: `${lensPos.y}px`,
                  backgroundImage: `url(${src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${zoomLevel * 100}%`,
                  backgroundPosition: bgPos(),
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    // ✅ CHANGED: Removed h-screen and overflow-hidden
    // Now it's a normal scrollable section
    <div className="min-h-screen bg-white py-8">
      {/* NAVBAR - Made it non-sticky */}
      <header className="bg-red-600 shadow w-full mb-6">
        <div className="flex justify-between items-center px-4 h-16">
          <div onClick={() => goToPage(0)} className="flex items-center gap-2 cursor-pointer">
            <img src="/assets/images/logo.png" alt="logo" className="w-10 h-10 bg-white p-1 rounded" />
            <div>
              <p className="text-white font-semibold text-lg leading-none">GENWIN</p>
              <p className="text-white text-xs">Building Up to Your Expectation</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="hidden sm:inline px-3 py-1 bg-white text-red-600 rounded"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </button>
            <button className="hidden sm:inline px-3 py-1 bg-white text-red-600 rounded" onClick={onPrev}>Prev</button>
            <button className="hidden sm:inline px-3 py-1 bg-white text-red-600 rounded" onClick={onNext}>Next</button>
            <button onClick={() => setTocOpen(true)} className="sm:hidden bg-white text-red-600 p-2 rounded-md">☰</button>
          </div>
        </div>
      </header>

      {/* MAIN SECTION */}
      <div ref={stageRef} className="flex w-full max-w-7xl mx-auto px-2 sm:px-6 gap-6">
        {/* Desktop TOC */}
        <aside className="hidden lg:block w-80 bg-white border rounded-md p-4 shadow-sm overflow-y-auto max-h-[800px] sticky top-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Table of Contents</h3>
          {pages.map((p, i) => (
            <button
              key={p.id}
              className={`w-full text-left p-3 rounded-md mb-2 ${i === current ? "bg-red-50 border border-red-100" : "hover:bg-gray-50"}`}
              onClick={() => goToPage(i)}
            >
              <div className="text-sm font-medium text-gray-800">{p.name}</div>
              <div className="text-xs text-gray-500">{p.size}</div>
            </button>
          ))}
        </aside>

        {/* Mobile TOC */}
        {tocOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="bg-black/40 flex-1" onClick={() => setTocOpen(false)}></div>
            <div className="w-72 bg-white p-4 overflow-y-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Contents</h3>
              {pages.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => {
                    goToPage(i);
                    setTocOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-md mb-2 ${i === current ? "bg-red-50 border border-red-100" : "hover:bg-gray-50"}`}
                >
                  <div className="text-sm font-medium text-gray-800">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.size}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FLIPBOOK */}
        <main className="flex-1">
          {!isMounted ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-gray-600">Loading...</div>
            </div>
          ) : (
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              size="stretch"
              minWidth={320}
              maxWidth={3000}
              minHeight={400}
              maxHeight={3000}
              mobileScrollSupport={false}
              useMouseEvents={false}
              clickEventForward={false}
              drawShadow={true}
              flippingTime={1000}
              ref={bookRef}
              swipeDistance={0}
              onFlip={onFlip}
              className="flipbook w-full select-none"
            >
              {pages.map((p, i) => (
                <article key={p.id} className="p-4 bg-white overflow-y-auto sm:overflow-y-visible">
                  <div className="flex justify-between items-center mb-3 lg:hidden">
                    <button
                      onClick={onPrev}
                      aria-label="Previous"
                      className="px-3 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                    >
                      Prev
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={handleDownloadPDF}
                        className="px-3 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                      >
                        Download PDF
                      </button>

                      <button
                        onClick={onNext}
                        aria-label="Next"
                        className="px-3 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Size: {p.size}</p>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 m-0">
                      <span className="font-medium">Code:</span> {p.code}
                    </p>

                    <div className="flex items-center gap-3">
                      {p.youtube && (
                        <a
                          href={p.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 transition"
                          title="YouTube Channel"
                        >
                          <Youtube size={26} />
                        </a>
                      )}

                      {p.instagram && (
                        <a
                          href={p.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition"
                          title="Instagram"
                        >
                          <Instagram size={26} />
                        </a>
                      )}

                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Visit our Website"
                          className="hover:opacity-80 transition"
                        >
                          <img
                            src="/assets/images/logo.png"
                            alt="Website"
                            className="w-6 h-6 object-contain"
                          />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">Price: ₹{p.price}</p>
                  <p className="text-sm text-gray-600 mb-3">Packing: {p.packing}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch h-full">
                    <div className="rounded-md border border-gray-100 p-4 flex flex-col items-center justify-center">
                      {p.images?.[0] ? (
                        <>
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full object-contain rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 max-h-[330px]"
                            onClick={() => setZoomImg(p.images[0])}
                          />
                          <button
                            className="mt-4 px-4 py-2 w-full sm:w-auto rounded-md bg-red-600 text-white text-sm hover:bg-red-700"
                            onClick={() =>
                              downloadBlob(
                                p.images[0],
                                `${(p.name || "image").replace(/\s+/g, "_")}.jpg`
                              )
                            }
                          >
                            Download Image
                          </button>
                        </>
                      ) : (
                        <div className="text-sm text-gray-400">No image</div>
                      )}
                    </div>

                    <div className="rounded-md border border-gray-100 p-4 flex flex-col items-center justify-center">
                      {p.videos?.[0] ? (
                        <>
                          <div className="w-full aspect-video rounded-md overflow-hidden flex items-center justify-center">
                            <iframe
                              src={p.videos[0]}
                              title={`video-${i}`}
                              allow="autoplay; encrypted-media; picture-in-picture"
                              className="w-full h-full"
                            />
                          </div>
                          <button
                            className="mt-4 px-4 py-2 w-full sm:w-auto rounded-md bg-red-600 text-white text-sm hover:bg-red-700"
                            onClick={() =>
                              downloadBlob(
                                p.videos[0],
                                `${(p.name || "video").replace(/\s+/g, "_")}.mp4`
                              )
                            }
                          >
                            Download Video
                          </button>
                        </>
                      ) : (
                        <div className="text-sm text-gray-400">No video</div>
                      )}
                    </div>
                  </div>

                  <footer className="text-xs text-gray-400 mt-4">
                    Genwin | Page {i + 1}
                  </footer>
                </article>
              ))}
            </HTMLFlipBook>
          )}

          {zoomImg && (
            <Magnifier
              src={zoomImg}
              initialZoom={2}   // starting zoom (you can change)
              lensSize={180}
              onClose={() => setZoomImg(null)}
            />
          )}
        </main>
      </div>
    </div>
  );
}
