"use client";
import { useState, useEffect } from "react";
import BrandForm from "@/components/BrandForm";

export default function BrandsPage() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setselectedBrand] = useState(null);



  const fetchbrands = async () => {
    try {
      const response = await fetch("/api/admin/getbrands", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchbrands();
  }, []);

  const handleRefresh = () => {
    setselectedBrand(null);
    fetchbrands();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Brands</h1>
      <BrandForm brand={selectedBrand || {}} onSuccess={handleRefresh} />
      <div className="mt-8">
        <table className="w-full border-collapse border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">S.No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Created Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
            </thead>
            <tbody>
            {brands.map((brand, index) => (
                <tr key={brand.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{brand.name}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(brand.createdAt).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <button
                    onClick={() => setselectedBrand(brand)}
                    className="text-white px-3 py-1 rounded-md bg-gray-500 hover:bg-primary"
                    >
                    Edit
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

    </div>
  );
}