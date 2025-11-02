import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading, addToCart } = useAppContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading Products...
        </p>
      </div>
    );
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="text-gray-500 text-lg mb-4">Product not found!</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-500 text-sm"
        >
          Go back to Products
        </Link>
      </div>
    );
  }

  const { title, image, description, stock, price } = product;
  const formattedPrice = price.toFixed(2);

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-500 text-sm"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg w-full max-w-md object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>

          <p className="text-2xl font-semibold mb-4 text-green-600">
            ${formattedPrice}
          </p>

          <p className="text-gray-700 mb-6">
            <span className="font-medium">In Stock:</span>{" "}
            {stock > 0 ? stock : "Out of Stock"}
          </p>

          <button
            className={`bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-5 py-3 rounded-lg hover:opacity-90 active:scale-95 text-sm cursor-pointer transition-all duration-500 shadow-md hover:shadow-lg ${
              stock === 0
                ? "opacity-60 cursor-not-allowed hover:opacity-60 active:scale-100"
                : ""
            }`}
            onClick={() => {
              if (stock > 0) {
                addToCart(product);
                toast.success(`${product.title} added to cart!`);
              }
            }}
            disabled={stock === 0}
          >
            {stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
