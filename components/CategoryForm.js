"use client";
import { useState, useEffect } from "react";

export default function CategoryForm({ category = {}, onSuccess }) {
    const [name, setName] = useState(category?.name || "");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    useEffect(() => {
        if (category?.name) {
        setName(category.name);
        }
    }, [category]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
        const response = await fetch("/api/admin/add-edit-category", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: category.id, name }),
        });

        if (!response.ok) {
            throw new Error(await response.json().error || "Failed to save category");
        }

        const result = await response.json();
        setSuccess(result.message);
        setName(""); // Clear the form
        onSuccess?.(); // Refresh the list or perform additional actions
        } catch (error) {
        console.error("Error submitting category:", error);
        setError(error.message || "An error occurred");
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">
            {category.id ? "Edit Category" : "Add Category"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center space-x-3">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Category Name
                </label>
                <div className="flex items-center space-x-4">
                    <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter category name"
                    required
                    />
                    <button
                    type="submit"
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-primary"
                    >
                    {category.id ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
}
