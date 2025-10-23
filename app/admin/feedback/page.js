"use client";
import React, { useEffect, useState } from 'react'

const fetchFeedback = async () => {
  try {
    const response = await fetch("/api/admin/get-feedback", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch feedback");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return [];
  }
};

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFeedback = async () => {
      const data = await fetchFeedback();
      setFeedbackData(data);
      setIsLoading(false);
    };
    getFeedback();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Customer Feedback</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedbackData.length > 0 ? (
          feedbackData.map((feedback, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  {feedback.name?.[0] || 'U'}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">{feedback.name || 'Anonymous'}</h3>
                  <p className="text-sm text-gray-500">{feedback.email || 'No email provided'}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3">{feedback.message}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
                <span className={`px-2 py-1 rounded ${
                  feedback.status === 'resolved' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {feedback.status || 'pending'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No feedback available at the moment
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedback;