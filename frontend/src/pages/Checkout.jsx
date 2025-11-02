import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="bg-white rounded shadow-lg hover:shadow-xl p-6 max-w-3xl mx-auto">
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Information</h2>
          <TextInput id="email" type="email" placeholder="Enter your email" />

          <h2 className="text-2xl font-bold mb-4 text-black">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput id="name" placeholder="Full Name" />
            <TextInput id="address" placeholder="Address" />
          </div>
          <TextInput id="address2" placeholder="Apartment, suite, etc. (optional)" className="mt-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <TextInput id="city" placeholder="City" />
            <TextInput id="state" placeholder="State" />
          </div>
          <TextInput id="postalCode" placeholder="Postal Code" className="mt-4" />

          <h2 className="text-2xl font-bold mb-4 text-black">Payment Information</h2>
          <TextInput id="cardNo" placeholder="Card Number" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <TextInput id="expire" placeholder="MM" />
            <TextInput id="month" placeholder="YYYY" />
          </div>

          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg w-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-95 mt-6">
            Pay
          </button>
        </form>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful</h2>
              <p className="text-gray-700 mb-4">Thank you for your purchase! Your order has been confirmed.</p>
              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
