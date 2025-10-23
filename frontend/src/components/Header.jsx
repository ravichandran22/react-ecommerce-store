import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-purple-400 shadow sticky top items-center justify-center px-4 py-2">
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
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li className="hover:text-black">
            <NavLink to="/cart">
              <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
