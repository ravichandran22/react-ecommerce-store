import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className='bg-purple-400 shadow sticky top items-center justify-center px-4 py-2'>
      <nav className='flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-white text-2xl'>Ravi - Shop</h1>
        </div>
        <ul className='flex space-x-4 items-center font-bold text-white'>
          <li className='hover:text-black'><NavLink to="/">Home</NavLink></li>
          <li className='hover:text-black'><NavLink to="/cart"><FaShoppingCart /></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header