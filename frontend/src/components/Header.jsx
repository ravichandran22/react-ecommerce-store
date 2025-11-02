import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/CartContext";
import { toast } from "react-toastify";

function Header() {
  const { cart } = useAppContext();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Logged out successfully!");
    navigate("/login");
    setMenuOpen(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const activeClass = "text-purple-500 font-extrabold";

  return (
    <header className="bg-black shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <div>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h1 className="font-bold text-white text-2xl">Ravi - Shop</h1>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 items-center font-bold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
              onClick={() => setMenuOpen(false)}
            >
              Shop by Category
            </NavLink>
          </li>
          {loggedInUser ? (
            <li className="hover:text-gray-400 cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          ) : (
            <li className="bg-blue-500 rounded shadow-lg text-white px-4 py-1">
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/cart"
              className={({ isActive }) => "flex items-center " + (isActive ? activeClass : "hover:text-gray-400")}
              onClick={() => setMenuOpen(false)}
            >
              <FaShoppingCart className="text-xl mr-1" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <ul className="flex flex-col space-y-3 p-5 font-bold text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category"
                className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
                onClick={() => setMenuOpen(false)}
              >
                Shop by Category
              </NavLink>
            </li>
            {loggedInUser ? (
              <li className="cursor-pointer hover:text-gray-400" onClick={handleLogout}>
                Logout
              </li>
            ) : (
              <li className="bg-blue-500 rounded shadow-lg text-white px-4 py-1">
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => isActive ? activeClass : "hover:text-gray-400"}
                onClick={() => setMenuOpen(false)}
              >
                Admin
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/cart"
                className={({ isActive }) => "flex items-center " + (isActive ? activeClass : "hover:text-gray-400")}
                onClick={() => setMenuOpen(false)}
              >
                <FaShoppingCart className="text-xl mr-1" />
                {totalItems > 0 && (
                  <span className="ml-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
