"use client"

import React, { useEffect, useState } from 'react'

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllEnquiry = async () => {
    try {
      const response = await fetch("/api/admin/get-enquires", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch enquiries");
      }
      const data = await response.json();
      setEnquiries(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      setEnquiries([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllEnquiry();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Customer Enquiries</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {enquiries.length > 0 ? (
              enquiries.map((enquiry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        {enquiry.name?.[0] || 'U'}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enquiry.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enquiry.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">{enquiry.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(enquiry.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      enquiry.status === 'resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {enquiry.status || 'pending'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No enquiries available at the moment
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enquiry;