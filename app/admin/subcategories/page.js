"use client";

import { useState, useEffect } from "react";
import SubcategoryForm from "@/components/SubcategoryForm";

export default function SubcategoriesPage() {
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const fetchSubcategories = async () => {
    const response = await fetch("/api/admin/getsubcategories", {method: "GET"});
    const data = await response.json();
    setSubcategories(data);
  };

  useEffect(() => {
    fetchSubcategories();
  }, []);

  const handleSuccess = () => {
    setSelectedSubcategory(null);
    fetchSubcategories();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Subcategories</h1>
      <SubcategoryForm
        subcategory={selectedSubcategory || {}}
        onSuccess={handleSuccess}
      />
      <table className="w-full border-collapse border border-gray-300 mt-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">Subcategory</th>
            <th className="border border-gray-300 px-4 py-2">Parent Category</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory, index) => (
            <tr key={subcategory.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{subcategory.subcategory_name}</td>
              <td className="border border-gray-300 px-4 py-2">{subcategory.parent_category}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className="bg-gray-500 hover:bg-primary text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
