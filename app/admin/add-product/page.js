"use client";

import { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function AddProductPage() {
    const router = useRouter();
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [mobile, setMobile] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [specifications, setSpecifications] = useState([{ name: "", value: "" }]);
    const [properties, setProperties] = useState([{ name: "", value: "" }]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Fetch categories from the database
        async function fetchCategories() {
            try {
                const response = await fetch("/api/admin/getcategories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
    }, []);

    // Fetch subcategories when a category is selected
    useEffect(() => {
      async function fetchSubCategories() {
        if (!selectedCategory) {
          setSubCategories([]);
          return;
        }

        try {
          const response = await fetch(`/api/admin/getsubcategory-by-category?cid=${selectedCategory}`);
          const data = await response.json();
          setSubCategories(data);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      }

      fetchSubCategories();
    }, [selectedCategory]);

    const validate = () => {
        const newErrors = {};
        if (!productName.trim()) newErrors.productName = "Product Name is required.";
        if (images.length === 0) newErrors.images = "At least one image is required.";
        if (!price || price <= 0) newErrors.price = "Price must be a positive number.";
        if (!mobile || !/^\d{10}$/.test(mobile)) {
          newErrors.mobile = "Mobile number must be a 10-digit number.";
        }
        if (!selectedCategory) newErrors.category = "Category is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files).map((file) => {        
        return {
            file,
            name: file.name,
            preview: URL.createObjectURL(file),
        };
        });
        setImages((prev) => [...prev, ...files]);
    };
    const handleRemoveImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAddRow = (setState, rowTemplate) => {
        setState((prev) => [...prev, { ...rowTemplate }]);
    };

    const handleRemoveRow = (setState, index) => {
        setState((prev) => prev.filter((_, i) => i !== index));
    };

    const handleRowChange = (setState, index, field, value) => {
        setState((prev) => {
        const updated = [...prev];
        updated[index][field] = value;
        return updated;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
  
        // Convert all images to base64
        const imagesWithBase64 = await Promise.all(
        images.map(async (img) => ({
            name: img.file.name,
            type: img.file.type,
            data: await convertToBase64(img.file),
        }))
        );
  
        const productData = {
          productName,
          price,
          mobile,
          description,
          images: imagesWithBase64,
          specifications,
          properties,
          category: selectedCategory,
          subCategory: selectedSubCategory,
        };
  
        try {
            const response = await fetch("/api/admin/addproduct", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });
    
            const result = await response.json();
            if (!response.ok) {
                console.error("Error:", result.error);
            } else {

                router.push("/admin/products");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
  
    // Helper function to convert file to base64
    const convertToBase64 = (file) =>
        new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category & Sub Category */}
        <div className="flex gap-4">
          <div className="flex-1">
              <label htmlFor="category" className="block text-sm font-medium">
                  Category
              </label>
              <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full border ${errors.category ? "border-red-500" : "border-gray-300"} rounded-lg p-2`}
                  required
              >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                          {category.name}
                      </option>
                  ))}
              </select>
              {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
          </div>

          <div className="flex-1">
              <label htmlFor="subCategory" className="block text-sm font-medium">
                  Sub Category
              </label>
              <select
                  id="subCategory"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  className={`w-full border ${errors.subCategory ? "border-red-500" : "border-gray-300"} rounded-lg p-2`}
                  required
              >
                  <option value="">Select Sub Category</option>
                  {subCategories.map((subCategory) => (
                      <option key={subCategory.id} value={subCategory.id}>
                          {subCategory.name}
                      </option>
                  ))}
              </select>
              {errors.subCategory && (
                  <p className="text-red-500 text-sm mt-1">{errors.subCategory}</p>
              )}
          </div>
        </div>
        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={`w-full border ${
              errors.productName ? "border-red-500" : "border-gray-300"
            } rounded-lg p-2`}
            required
            placeholder="Enter product name"
          />
          {errors.productName && (
            <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className={`w-full border ${
              errors.images ? "border-red-500" : "border-gray-300"
            } rounded-lg p-2`}
          />
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}
          <div className="mt-2 flex gap-4 flex-wrap">
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={img.preview}
                  width={80}
                  height={80}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={`w-full border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-lg p-2`}
              required
              placeholder="Enter positive number"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>

          <div className="w-1/2">
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={`w-full border ${errors.mobile ? "border-red-500" : "border-gray-300"} rounded-lg p-2`}
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-medium">Specifications</label>
          {specifications.map((spec, index) => (
            <div key={index} className="flex items-center gap-4 mb-2">
              <input
                type="text"
                value={spec.name}
                onChange={(e) =>
                  handleRowChange(setSpecifications, index, "name", e.target.value)
                }
                className="w-1/4 border border-gray-300 rounded-lg p-2"
                placeholder="Name"
              />
              <input
                type="text"
                value={spec.value}
                onChange={(e) =>
                  handleRowChange(setSpecifications, index, "value", e.target.value)
                }
                className="flex-1 border border-gray-300 rounded-lg p-2"
                placeholder="Value"
              />
              <button
                type="button"
                onClick={() => handleRemoveRow(setSpecifications, index)}
                className="text-red-500 flex-shrink-0"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="flex justify-end mt-1">
            <button
              type="button"
              onClick={() => handleAddRow(setSpecifications, { name: "", value: "" })}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-primary"
            >
              Add Specification
            </button>
          </div>
        </div>

        {/* Properties */}
        <div>
          <label className="block text-sm font-medium">Properties</label>
          {properties.map((prop, index) => (
            <div key={index} className="flex items-center gap-4 mb-2">
              <input
                type="text"
                value={prop.name}
                onChange={(e) =>
                  handleRowChange(setProperties, index, "name", e.target.value)
                }
                className="w-1/4 border border-gray-300 rounded-lg p-2"
                placeholder="Name"
              />
              <input
                type="text"
                value={prop.value}
                onChange={(e) =>
                  handleRowChange(setProperties, index, "value", e.target.value)
                }
                className="flex-1 border border-gray-300 rounded-lg p-2"
                placeholder="Value"
              />
              <button
                type="button"
                onClick={() => handleRemoveRow(setProperties, index)}
                className="text-red-500"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="flex justify-end mt-1">
            <button
              type="button"
              onClick={() => handleAddRow(setProperties, { name: "", value: "" })}
              className="bg-gray-500 hover:bg-primary text-white px-4 py-2 rounded-lg"
            >
              Add Property
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            rows="4"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-primary text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}