"use client";
import { useState, useEffect } from "react";
import CategoryForm from "@/components/CategoryForm";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);



  // Move fetchCategories outside useEffect
  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/getcategories", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleRefresh = () => {
    setSelectedCategory(null);
    fetchCategories();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <CategoryForm category={selectedCategory || {}} onSuccess={handleRefresh} />
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
            {categories.map((category, index) => (
                <tr key={category.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(category.createdAt).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <button
                    onClick={() => setSelectedCategory(category)}
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