import React from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useAppContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading Products....
        </p>
      </div>
    );
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Product not found!</p>
      </div>
    );
  }

  const {title, imageURL, description, stock, price} = product;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={imageURL}
            alt={title}
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-2xl font-semibold mb-4 text-green-600">
            ${price}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">In Stock:</span> {stock}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
