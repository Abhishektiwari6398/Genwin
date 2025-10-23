"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProductPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortedBy, setSortedBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Loader state
    const itemsPerPage = 10;
      

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Start loader
            try {
                const response = await fetch("/api/admin/getallproducts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch products: ${response.statusText}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Stop loader
            }
        };

        fetchProducts();
    }, []);

    const handleSort = (field) => {
        const sorted = [...products].sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        setProducts(sorted);
        setSortedBy(field);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter(
        (product) =>
            product.productName &&
            product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddProductClick = () => {
        router.push("/admin/add-product");
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    className="bg-gray-500 hover:bg-primary text-white px-4 py-2 rounded-lg"
                    onClick={handleAddProductClick}
                >
                    Add Product
                </button>
            </div>

            {/* Loader */}
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                </div>
            ) : (
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th
                                className="p-2 border-b cursor-pointer text-left"
                                onClick={() => handleSort("id")}
                            >
                                S.No
                            </th>
                            <th
                                className="p-2 border-b cursor-pointer text-left"
                                onClick={() => handleSort("product_name")}
                            >
                                Name
                            </th>
                            <th
                                className="p-2 border-b cursor-pointer text-left"
                                onClick={() => handleSort("price")}
                            >
                                Price
                            </th>
                            <th className="p-2 border-b text-left">Image</th>
                            <th className="p-2 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProducts.map((product, index) => {
                          
                            let images = [];
                            try {
                                images = product.images;
                            } catch (error) {
                                console.error("Error parsing imagesurl:", error);
                            }
                            const imageSrc = images?.[0]?.data ?? null;

                            return (
                                <tr key={product._id}>
                                    <td className="p-2 border-b">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="p-2 border-b">{product.productName}</td>
                                    <td className="p-2 border-b">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="p-2 border-b">
                                        {imageSrc ? (
                                            <Image
                                                src={imageSrc}
                                                width={64}
                                                height={64}
                                                alt={product.productName}
                                                className="w-16 h-16 object-cover"
                                            />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </td>
                                    <td className="p-2 border-b">
                                        {/* <button className="text-blue-500">Edit</button> */}
                                        <Link href={`/admin/edit-product/${product._id}`} className="bg-gray-500 hover:bg-primary text-white px-3 py-1 rounded-lg" id={index}>Edit</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

            {/* Pagination */}
            {!loading && (
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="mx-2">{`Page ${currentPage}`}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage * itemsPerPage >= filteredProducts.length}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
