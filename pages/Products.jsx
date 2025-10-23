"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Platypi } from 'next/font/google';
import PhoneProductBlack from "@/components/PhoneProductBlack";
import Phoneproduct from "@/components/Phoneproduct";
import SearchIcon from "@/components/SearchIcon";
import FilterIconPhone from "@/components/FilterIconPhone";
import CancelIcon from "@/components/CancelIcon";
import FilterSidebar from "@/components/FilterSidebar"; 
import Head from "next/head";
const platypi = Platypi({
  weight: ['400','500','600'],
  preload: false,
});

const placeholderImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDBkMGQwIiAvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM4MDgwODAiPlBpeGVsbHM8L3RleHQ+Cjwvc3ZnPg==';

export default function ProductsPage1() {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
      categories: [], subcategories: [], industries: [], brands: [],
  });
  const [visibleProductsCount, setVisibleProductsCount] = useState(9);
  const [showMobileNumberMap, setShowMobileNumberMap] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
  })
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function fetchCategories() {
        try {
            const response = await fetch("/api/admin/getcategories");
            if (!response.ok) throw new Error("Failed to fetch categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    }
    fetchCategories();
  }, []);

  const submitForm = async () => {
    const {name , email , phone} = formData
    console.log(formData)
      try {
          const response = await fetch("/api/product-inquiry", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, phone }),
          });
          if (!response.ok) throw new Error("Failed to send email");
          console.log("Email sent successfully");
          setIsModalOpen(false);
          setFormData({ name: "", email: "", phone: "" });
      } catch (error) {
          console.error("Error sending email:", error);
      }
  };

  useEffect(() => {
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/getallproducts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllProducts([]);
    } finally {
      setIsLoading(false);
    }
  };
  fetchProducts();
}, []);

  useEffect(() => { 
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        if (window.innerWidth >= 1024) setIsExpanded(true);
        else setIsExpanded(false);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleFilterChange = (newFilters) => {
      setActiveFilters(newFilters);
      setVisibleProductsCount(9);
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const searchLower = searchText.toLowerCase();
      const matchesSearch = !searchText ||
          product.productName?.toLowerCase().includes(searchLower) ||
          product.description?.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;

      const matchesSubcategory = activeFilters.subcategories.length === 0 ||
 
          (product.subCategoryName && activeFilters.subcategories.includes(product.subCategoryName));

      if (!matchesSubcategory) return false;



      return true;
    });
  }, [allProducts, searchText, activeFilters]);


  const loadMoreProducts = () => {
    setVisibleProductsCount((prev) => prev + 9);
  };

  const handleOpenContactModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleViewMobileClick = (productId) => {
    setShowMobileNumberMap(prev => ({
        ...prev,
        [productId]: !prev[productId] 
    }));
  };

  const popImageSrc = useMemo(() => {
    let images = [];
    try {
        images = selectedProduct?.images;
        return images?.[0]?.data

    } catch (error) {
        console.error("Error parsing imagesurl:", error);
    }
    const imageSrc = images?.[0]?.data ?? null;
  }, [isModalOpen, selectedProduct]);


  

  return (

    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    
      <div className="flex flex-col lg:flex-row gap-6">

        <FilterSidebar
            categories={categories}
            onFilterChange={handleFilterChange}
        />

        <main className="w-full lg:w-4/5 space-y-4">

         <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className={`text-2xl lg:text-3xl font-[600] text-gray-800 ${platypi.className}`}>
              All <span className="text-primary">Products</span>
            </h1>
            <div className="relative flex-grow sm:flex-grow-0">
                 <input
                    type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full sm:w-64"
                    placeholder="Search products..."
                />
                 <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><SearchIcon /></span>
            </div>
          </div>

          <div className="text-right text-sm lg:text-base text-gray-600 font-medium">
  {isLoading ? (
    <div className="h-4 bg-gray-200 rounded w-48 ml-auto animate-pulse"></div>
  ) : (
    `Showing ${Math.min(visibleProductsCount, filteredProducts.length)} of ${filteredProducts.length} Products`
  )}
</div>

           {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.slice(0, visibleProductsCount).map((product) => {
                        let images = [];
                            try {
                                images = product.images;
                            } catch (error) {
                                console.error("Error parsing imagesurl:", error);
                            }
                            const imageSrc = images?.[0]?.data ?? null;

                        const specifications = product.specifications || {};

                        return (
                        <div key={product._id} className="bg-f7f4ed rounded-md border border-E6ECF6 hover:border-red-200 transition-colors duration-300 group flex flex-col">
                            <div className="cursor-pointer flex-grow" onClick={() => handleOpenContactModal(product)}>
                                <div className="overflow-hidden rounded-t-md aspect-square bg-gray-100"> 
                                    <Image
                                        src={imageSrc || placeholderImg}
                                        alt={product.productName || 'Product Image'}
                                        className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out ${!imageSrc ? 'opacity-50' : ''}`} 
                                        width={400}
                                        height={400}
                                        priority={false}
                                    />
                                </div>
                                <div className="p-4 flex-grow">
                                    <h3 className="group-hover:text-primary text-[#393939] text-base font-[600] mb-2 line-clamp-2 h-12" title={product.productName}>
                                        {product.productName}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-2 mb-3">
                                        {Object.entries(specifications).slice(0, 4).map(([key, value], index) => (
                                            <li key={key} className={index % 2 !== 0 ? 'text-right' : ''}>
                                                <p className="text-[#09090999] text-xs font-[500] truncate">{key}</p>
                                                <p className="text-[#393939] text-sm font-[500] truncate">{String(value)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        <p className="text-[#09090999] text-xs font-[500]">Price</p>
                                        <h5>
                                            <span className="font-[600] text-lg group-hover:text-primary transition-colors duration-300">₹{product.price}</span>
                                            <span className="pl-1 text-sm text-[#09090966]">Per Piece</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border-t border-gray-200 mt-auto space-y-2">
                                {!showMobileNumberMap[product._id] ? ( 
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleViewMobileClick(product._id);
                                        }}
                                        className="w-full border border-gray-300 text-gray-700 text-sm font-[500] flex items-center justify-center py-2 px-4 rounded-md group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-primary transition-colors duration-300"
                                    >
                                        <span className={`h-5 w-5 mr-2`}>
                                            <span className="hidden group-hover:inline"><Phoneproduct /></span>
                                            <span className="inline group-hover:hidden"><PhoneProductBlack /></span>
                                        </span>
                                        View Mobile Number
                                    </button>
                                ) : (
                                    <div className="w-full bg-gray-100 border border-gray-300 flex items-center justify-center py-2 px-4 rounded-md text-gray-800 text-sm font-medium">
                                        <PhoneIcon className="h-5 w-5 mr-2 text-green-600" />
                                        {product.mobile} 
                                    </div>
                                )}
                                <button
                                    onClick={() => handleOpenContactModal(product)}
                                    className="w-full bg-[#181818] border border-[#181818] text-sm font-[500] text-white flex items-center justify-center py-2 px-4 rounded-md group-hover:bg-primary transition-colors duration-300"
                                >
                                    Get Best Price
                                </button>
                            </div>
                        </div>
                        );
                    })}
                </div>
            ) : (
              <div className="w-full">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="bg-white rounded-md border border-gray-200 animate-pulse">
                        <div className="aspect-square bg-gray-200"></div>
                        <div className="p-4">
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                </div>
                              ))}
                            </div>
                            <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
                          </div>
                        </div>
                        <div className="p-4 border-t border-gray-200">
                          <div className="h-10 bg-gray-200 rounded mb-2"></div>
                          <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="text-gray-500">No products found</div>
                  </div>
                )}
              </div>
            )}

          {filteredProducts.length > visibleProductsCount && (
            <div className="text-center pt-8">
              <button
                onClick={loadMoreProducts}
                className="text-primary px-6 py-2 rounded-full border border-[#FFD2D2] bg-[#e52d3814] hover:bg-[#e52d382e] transition duration-300 text-base font-[600]"
              >
                Show More
              </button>
            </div>
          )}
        </main>

        {isModalOpen && selectedProduct && (
     <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60 p-4"> {/* Increased backdrop opacity slightly */}
         {/* Modal Container */}
        
         <div className="w-full max-w-4xl bg-white relative rounded-2xl flex flex-col md:flex-row shadow-xl max-h-[90vh] overflow-hidden"> {/* Added overflow-hidden */}
         <button onClick={() => setIsModalOpen(false)} style={{ color: 'black'}} className="text-black absolute bg-188118 rounded-full right-1 top-1 lg:hidden hover:text-black p-0.5 -mr-1"> 
                <CancelIcon style={{ color: 'black'}} />
          </button>

             {/* Left Side (Product Info) */}
             {/* Added overflow-y-auto for potential scroll on small screens and fixed height */}
             <div className="w-full md:w-2/5 bg-[#FFF0F0] flex flex-col p-4 sm:p-6 border-b md:border-b-0 md:border-r border-gray-200 overflow-y-auto max-h-[50vh] md:max-h-none flex-shrink-0">
                 {/* Image Container */}
                 <div className="bg-white flex items-center justify-center rounded-lg border border-gray-200 mb-4 aspect-w-1 aspect-h-1 overflow-hidden"> {/* Used aspect ratio helpers */}
                     {popImageSrc ? (
                         <Image
                             src={popImageSrc}
                             alt={selectedProduct.productName || 'Product Image'}
                             width={300} height={300} // Keep reasonable sizes for optimization
                             className="object-contain h-full w-auto" // Use contain to fit image
                         />
                     ) : (
                         <div className="h-full w-full flex items-center justify-center text-gray-400">No Image</div>
                     )}
                 </div>
                 {/* Product Details */}
                 <div className="space-y-3 flex flex-col text-sm">
                     <h3 className="text-[#181818] text-base sm:text-lg font-[600]">{selectedProduct.productName}</h3>
                     <div>
                         <p className="text-[#09090999] text-xs font-[500]">Price</p>
                         <h5>
                             <span className="font-[600] text-lg sm:text-xl text-gray-800">₹{selectedProduct.price}</span>
                             <span className="pl-1 text-xs sm:text-sm text-[#09090966]">Per Piece</span>
                         </h5>
                     </div>
                     <div>
                         <p className="text-[#09090999] text-xs font-[500]">Sold By:</p>
                         <span className="text-sm text-[#181818] font-medium">Genwin</span>
                     </div>
                 </div>
             </div>

             {/* Right Side (Contact Form) */}
             {/* Ensures this part scrolls independently */}
             <div className="w-full md:w-3/5 flex flex-col bg-white overflow-y-auto">
                 {/* Modal Header (Sticky within this scrolling container) */}
                 <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-4">
                     <div className="flex justify-between items-center">
                         {/* Adjusted text size for responsiveness */}
                         <h3 className={`text-sm sm:text-base md:text-lg font-[500] text-gray-800 leading-tight ${platypi.className}`}> {/* Added leading-tight */}
                             <span className="text-primary font-semibold">Contact Seller</span>
                             <span className="block md:inline"> for {selectedProduct.productName}</span> {/* Stack title on small screens */}
                         </h3>
                         <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hidden md:block hover:text-gray-700 p-1 -mr-1"> {/* Added padding for easier click */}
                             <CancelIcon />
                         </button>
                     </div>
                 </div>

                 {/* Modal Body Form */}
                 <form onSubmit={(e) => { e.preventDefault(); submitForm();  }}> 
                     <div className="p-4 sm:p-6 flex flex-col space-y-4 text-xs sm:text-sm"> 
                         <div>
                             <label htmlFor="modal_name" className="font-medium text-gray-700 block mb-1">Name</label>
                             <input
                
                                value={formData.name}
                                onChange={(e)=>setFormData({...formData, name: e.target.value})} // Use single handler
                                type="text" // Changed type to text
                                placeholder="Enter Your Name"
                                className="w-full p-2 border rounded-md text-xs sm:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                required // Add basic validation
                            />
                         </div>
                         <div>
                             <label htmlFor="modal_email" className="font-medium text-gray-700 block mb-1">Email</label>
                             <input
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData, email: e.target.value})} // Use single handler
                                type="email" // Use email type for basic validation
                                placeholder="Enter your email"
                                className="w-full p-2 border rounded-md text-xs sm:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                required
                            />
                         </div>
                         <div>
                             <label htmlFor="modal_phone" className="font-medium text-gray-700 block mb-1">Phone</label>
                             <input
            // Add name attribute
                                value={formData.phone}
                                onChange={(e)=>setFormData({...formData, phone: e.target.value})} // Use single handler
                                type="text" // Use tel type
                                placeholder="Enter your phone number"
                                className="w-full p-2 border rounded-md text-xs sm:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                required
                            />
                         </div>

                         {/* Modal Footer / Submit Button */}
                         <div className="pt-2">
                             <button
                                type="submit" // Set button type to submit
                                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition duration-200 text-sm sm:text-base"
                             >
                                 Submit Inquiry
                             </button>
                         </div>
                     </div>
                 </form> {/* End form tag */}
             </div>
         </div>
     </div>
 )}
      </div>
    </div>
  );
}