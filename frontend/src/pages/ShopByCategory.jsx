import React, { useState } from "react";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

const ShopByCategory = () => {
  const { products, loading, addToCart } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading products...
        </p>
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <aside className="hidden md:block w-1/5 bg-white border-r p-6 shadow-sm">
        <div className="sticky top-10">
          <h2 className="font-bold text-lg mb-4 text-gray-800">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 hover:text-indigo-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center shadow-sm">
        <h2 className="text-lg font-semibold capitalize">
          {selectedCategory === "all" ? "All Products" : selectedCategory}
        </h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-sm bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 transition-all duration-300"
        >
          {menuOpen ? "Close" : "Filter"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b p-4 shadow-sm">
          <ul className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <li
                key={category}
                className={`px-3 py-1 rounded-full cursor-pointer text-sm capitalize transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-100"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setMenuOpen(false);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800">
          {selectedCategory === "all" ? "All Products" : selectedCategory}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            No products available in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col"
              >
                <div className="flex justify-center items-center mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-md transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-indigo-600 font-bold text-lg mb-3">
                  ${product.price}
                </p>

                <button
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 text-sm cursor-pointer transition-all duration-500 shadow-md hover:shadow-lg mt-auto"
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.title} added to cart!`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopByCategory;
