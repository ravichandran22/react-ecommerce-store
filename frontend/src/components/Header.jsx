import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

function Header() {
  const { cart } = useAppContext();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    toast.success('Logged out successfully!');
    navigate('/login');
  }

  // Calculate total quantity
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-purple-400 shadow sticky top items-center justify-center px-5 py-2">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="font-bold text-white text-2xl">Ravi - Shop</h1>
          </Link>
        </div>
        <ul className="flex space-x-4 items-center font-bold text-white">
          <li className="hover:text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink to="/category">Shop by Category</NavLink>
          </li>
          {loggedInUser ? (<li className="hover:text-black">
            <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
          </li>) : <li className="bg-white rounded shadow-lg hover:shadow-xl text-black px-4 py-1">
            <NavLink to="/login">Login</NavLink>
          </li>}


          <li className="hover:text-black">
            <NavLink to="/cart">
              <FaShoppingCart className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
