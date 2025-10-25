import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
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
    <div className='container mx-auto px-4 py-10'>
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="bg-white rounded shadow-lg hover:shadow-xl p-6 w-2xl mx-auto">
        <form action="" className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {/* Contact Information */}
          <h1 className="text-2xl font-bold text-left mb-4 text-black">
            Contact Information
          </h1>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          />

          {/* Shipping Address */}
          <h1 className="text-2xl font-bold text-left mb-4 text-black">
            Shipping Address
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />

            <input
              id="address"
              type="text"
              name="address"
              placeholder="Enter your Address"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />
          </div>

          <input
            id="addresstwo"
            type="text"
            name="address2"
            placeholder="Apartment, suite, etc. (optional)"
            required
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />

            <input
              id="state"
              type="text"
              name="state"
              placeholder="State"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />
          </div>

          <input
            id="postalCode"
            type="text"
            name="postal-code"
            placeholder="Enter your Postal Code"
            required
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
          />

          <h1 className="text-2xl font-bold text-left mb-4 text-black">
            Payment Information
          </h1>

          <input
            id="cardNo"
            type="text"
            name="cardno"
            placeholder="Enter your Card Number"
            required
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="expire"
              type="text"
              name="expire"
              placeholder="MM"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />

            <input
              id="month"
              type="text"
              name="month"
              placeholder="YYYY"
              required
              className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 font-semibold focus:outline-2 focus:outline-purple-600 sm:text-sm/6"
            />
          </div>

          <button className="bg-blue-100 text-black font-bold shadow-lg hover:bg-blue-500 hover:shadow-xl px-4 py-2 rounded w-full hover:text-white transition duration-300">
            Pay
          </button>
        </form>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Payment Successful
              </h2>
              <p className="text-gray-700 mb-4">
                Thank you for your purchase! Your order has been confirmed.
              </p>
              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Checkout