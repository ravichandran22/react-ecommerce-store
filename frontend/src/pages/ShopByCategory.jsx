import React, { useState } from "react";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ShopByCategory = () => {
    const { products, loading, addToCart } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Get all unique categories from products
    const categories = ["all", ...new Set(products.map((p) => p.category))];

    // products.map((p) => p.category) → creates an array of all categories from products
    // new Set(...) → removes duplicates
    // ["all", ...] → we add “All” at the beginning to show all products

    // Filter products by selected category
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    if (loading) return <p className="p-5">Loading products...</p>;

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-1/5 bg-gray-100 border-r p-5">
                <div className="sticky top-10">
                    <h2 className="font-bold text-lg mb-4">Categories</h2>
                    <ul className="space-y-2">
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={`cursor-pointer capitalize hover:text-purple-600 ${selectedCategory === category
                                    ? "text-purple-600 font-semibold"
                                    : ""
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Products */}
            <main className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-6 capitalize">
                    {selectedCategory === "all" ? "All Products" : selectedCategory}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-contain mb-3"
                            />
                            <h3 className="font-semibold text-sm mb-2">
                                {product.title.length > 40
                                    ? product.title.slice(0, 40) + "..."
                                    : product.title}
                            </h3>
                            <p className="text-gray-600 font-medium mb-3">${product.price}</p>
                            <button
                                className="bg-purple-500 text-white py-2 rounded hover:bg-purple-600 mt-auto"
                                onClick={() => {
                                    addToCart(product);
                                    toast.success(`${product.title} added to cart`);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ShopByCategory;
