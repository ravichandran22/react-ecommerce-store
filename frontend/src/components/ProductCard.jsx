import { Link } from "react-router-dom";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { id, title, image, description, price, category } = product;
  const { addToCart } = useAppContext();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-100 hover:border-indigo-200">
      <div className="relative group">
        <img
          src={image}
          alt="product-img"
          className="w-full h-52 object-contain bg-gradient-to-br from-gray-50 to-white group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <p className="absolute top-3 right-3 text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-3 py-1 shadow-md">
          {category}
        </p>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-1 text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <span className="text-2xl font-extrabold text-indigo-600 tracking-tight text-center sm:text-left">
            ${price}
          </span>

          <div className="flex flex-row gap-2 justify-center sm:justify-end flex-wrap">
            <Link
              to={`/product/${id}`}
              className="bg-black text-white font-medium px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-white text-sm transition-all duration-300 cursor-pointer shadow-sm text-center"
            >
              Details
            </Link>

            <button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 text-sm cursor-pointer transition-all duration-500 shadow-md hover:shadow-lg"
              onClick={() => {
                addToCart(product);
                toast.success(`${product.title} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
