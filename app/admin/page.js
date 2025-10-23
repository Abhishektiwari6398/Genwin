"use client"; // Required for client-side rendering

import React, { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";

export default function AdminPage() {
  const [dashData, setDashData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashData = async () => {
      try {
        const response = await fetch("/api/admin/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setDashData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setError("Failed to load dashboard data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashData();
  }, []);

  if (isLoading) {
    return <div className="text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Genwinauto</h1>
      <Dashboard stats={dashData} />
    </div>
  );
}
