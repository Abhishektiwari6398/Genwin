// components/FilterSidebar.js
"use client"; // Add this if not already present
import React, { useState, useEffect } from 'react';

const FilterSidebar = ({ categories = [], industries = [], brands = [], onFilterChange }) => {
    const [openSection, setOpenSection] = useState('category'); // Default open categories
    const [selectedFilters, setSelectedFilters] = useState({
        categories: [],
        subcategories: [],
        industries: [],
        brands: [],
    });

    const toggleSection = (sectionName) => {
        setOpenSection(prev => (prev === sectionName ? null : sectionName));
    };

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setSelectedFilters(prev => {
            const currentSelection = prev[name] || [];
            const newSelection = checked
                ? [...currentSelection, value]
                : currentSelection.filter(item => item !== value);
            return { ...prev, [name]: newSelection };
        });
    };

    // Notify parent when filters change
    useEffect(() => {
        if (onFilterChange) {
            onFilterChange(selectedFilters);
        }
    }, [selectedFilters, onFilterChange]);

    return (
        <aside className="w-full lg:w-1/5 p-4 rounded-md space-y-4"> {/* Adjusted width for sidebar */}

            {/* Categories Section */}
            <div className="border border-[#CF2B34] rounded-md overflow-hidden">
                <h2
                    className="text-md font-semibold text-primary border-b border-[#CF2B34] bg-white p-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection('category')}
                    aria-expanded={openSection === 'category'}
                    aria-controls="category-filters"
                >
                    Categories
                    <span className={`text-lg font-bold transition-transform duration-300 transform ${openSection === 'category' ? 'rotate-180' : 'rotate-0'}`}>
                    </span>
                </h2>
                {openSection === 'category' && (
                    <div id="category-filters" className="p-3 bg-gray-50 space-y-3 max-h-96 overflow-y-auto"> {/* Added max-height & scroll */}
                        {categories?.map((category) => (
                            <div key={category.id} className="pl-2"> {/* Use category.id from fetched data */}
                                <h3 className="font-semibold text-sm hover:cursor-pointer text-gray-700 mb-1">{category.name}</h3>
                                {category.subcategories && category.subcategories.length > 0 ? (
                                    <ul className="space-y-1 pl-3">
                                        {category.subcategories.map((subcategory, index) => (
                                            <li key={`${category.id}-${index}`}>
                                                <label className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="subcategories"
                                                        value={subcategory} // Use subcategory name as value
                                                        checked={selectedFilters.subcategories.includes(subcategory)}
                                                        onChange={handleCheckboxChange}
                                                        className="rounded border-gray-300 text-[#CF2B34] focus:ring-[#F0454F] accent-[#CF2B34]"
                                                    />
                                                    <span>{subcategory}</span>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-xs text-gray-400 pl-3 italic"></p>
                                )}
                            </div>
                        ))}
                        {(!categories || categories.length === 0) && (
                             <p className="text-sm text-gray-500 px-2">No categories available.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Placeholder for Industry/Brands - Add similar structure when data is available */}
            {/* <div className="border border-[#CF2B34] rounded-md overflow-hidden"> ... Industry ... </div> */}
            {/* <div className="border border-[#CF2B34] rounded-md overflow-hidden"> ... Brands ... </div> */}

        </aside>
    );
};

export default FilterSidebar;