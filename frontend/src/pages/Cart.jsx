import { useAppContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useAppContext();

  const handleCheckout = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      toast.warning("Please log in before proceeding to checkout");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your cart is empty</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-sm">#</th>
                  <th className="px-4 py-3 text-sm">Product</th>
                  <th className="px-4 py-3 text-sm hidden sm:table-cell">Title</th>
                  <th className="px-4 py-3 text-sm">Price</th>
                  <th className="px-4 py-3 text-sm">Qty</th>
                  <th className="px-4 py-3 text-sm">Total</th>
                  <th className="px-4 py-3 text-sm">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 text-center sm:text-left"
                  >
                    <td className="px-2 py-4">{index + 1}</td>
                    <td className="px-2 py-4 flex justify-center sm:justify-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-2 py-4 hidden sm:table-cell font-semibold">{item.title}</td>
                    <td className="px-2 py-4">${item.price.toFixed(2)}</td>
                    <td className="px-2 py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 border border-gray-300 rounded text-center"
                      />
                    </td>
                    <td className="px-2 py-4 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-2 py-4">
                      <button
                        onClick={() => removeFromCart(item.id, item.title)}
                        className="text-red-500 hover:text-red-600 font-medium"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow transition w-full sm:w-auto"
            >
              Clear Cart
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-80 h-fit sticky top-10">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Items:</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
