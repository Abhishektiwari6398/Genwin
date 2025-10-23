"use client";

import { useState, useEffect } from "react";

export default function SubcategoryForm({ subcategory = {}, onSuccess }) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState(subcategory?.subcategory_name || "");
  const [categoryId, setCategoryId] = useState(subcategory?.cid || "");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (subcategory?.subcategory_name) {
    setName(subcategory?.subcategory_name);
    }

    if (subcategory?.cid) {
      setCategoryId(subcategory?.cid);
    }
  }, [subcategory]);

  // Fetch categories for the dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/admin/getcategories", { method: "GET" });
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/admin/add-edit-subcategory", {
        method: subcategory?.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: subcategory.id,
          name,
          categoryId,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto  bg-white p-6 rounded-md shadow-md"
    >
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-row items-end justify-between space-x-4">
        {/* Subcategory Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Subcategory Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subcategory name"
            required
          />
        </div>

        {/* Parent Category */}
        <div className="flex flex-col">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-2"
          >
            Parent Category
          </label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-500 hover:bg-primary text-white px-4 py-2 rounded-lg"
        >
          {subcategory?.id ? "Update Subcategory" : "Add Subcategory"}
        </button>
      </div>
    </form>
  );
}
