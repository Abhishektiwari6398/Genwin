import React from "react";

const Dashboard = ({ stats }) => {
  const { products, categories, industries, brands, pages, sections } = stats;

  const data = [
    { label: "Products", value: products, color: "bg-blue-500" },
    { label: "Categories", value: categories, color: "bg-green-500" },
    { label: "Industries", value: industries, color: "bg-yellow-500" },
    { label: "Brands", value: brands, color: "bg-red-500" },
    { label: "Pages", value: pages, color: "bg-purple-500" },
    { label: "Sections", value: sections, color: "bg-teal-500" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center ${item.color} text-white`}
        >
          <h2 className="text-3xl font-bold">{item.value}</h2>
          <p className="text-lg">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
