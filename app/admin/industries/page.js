"use client";
import { useState, useEffect } from "react";
import IndustryForm from "@/components/IndustryForm";

export default function IndustriesPage() {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setselectedIndustry] = useState(null);

  const fetchindustries = async () => {
    try {
      const response = await fetch("/api/admin/getindustries", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch industries");
      }
      const data = await response.json();
      setIndustries(data);
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };

  useEffect(() => {
    fetchindustries();
  }, []);

  const handleRefresh = () => {
    setselectedIndustry(null);
    fetchindustries();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Industries</h1>
      <IndustryForm industry={selectedIndustry || {}} onSuccess={handleRefresh} />
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
            {industries.map((industry, index) => (
                <tr key={industry.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{industry.name}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(industry.createdAt).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <button
                    onClick={() => setselectedIndustry(industry)}
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