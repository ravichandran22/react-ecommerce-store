import { useAppContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useAppContext();

  const handleCheckout = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
      toast.warning("Please log in before proceeding to checkout");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      return;
    }

    navigate("/checkout");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-4">
            <table>
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-sm">S.No</th>
                  <th scope="col" className="px-6 py-3 text-sm">Product Image</th>
                  <th scope="col" className="px-6 py-3 text-sm">Product Title</th>
                  <th scope="col" className="px-6 py-3 text-sm">Price</th>
                  <th scope="col" className="px-6 py-3 text-sm">Quantity</th>
                  <th scope="col" className="px-6 py-3 text-sm">Total</th>
                  <th scope="col" className="px-6 py-3 text-sm">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <tr key={item.id} className="py-5 align-middle hover:bg-gray-50 text-center">
                    <td className="py-4">{index + 1}</td>
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                    </td>
                    <td className="py-4">
                      <h2 className="font-semibold text-sm">{item.title}</h2>
                    </td>
                    <td className="py-4">
                      <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                    </td>
                    <td className="py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 border border-gray-300 rounded text-center"
                      />
                    </td>
                    <td className="py-4">
                      <p className="font-semibold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => removeFromCart(item.id, item.title)}
                        className="text-red-500 hover:text-red-600 font-medium cursor-pointer"
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
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mb-4"
            >
              Clear Cart
            </button>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit sticky top-10">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items in Cart:</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button onClick={handleCheckout} className="cursor-pointer w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
