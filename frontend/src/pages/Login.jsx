import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      toast.warning('All fields Required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('user')) || [];

    if (users.length === 0) {
      toast.info('No user found, Please Register first');
      return;
    }

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Invalid email or password');
    }
  };


  return (
    <div className="bg-blue-100 text-white min-h-screen flex justify-center items-center">
      <div className="bg-white rounded shadow-lg hover:shadow-xl p-4 h-100 w-100">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">
          Login
        </h1>
        <form action="" className="mt-10 space-y-5" onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:font-semi-bold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          />
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:font-semi-bold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          />

          <p className="text-purple-500 font-semi-bold hover:text-purple-700 cursor-pointer">Forgot password?</p>

          <button className="bg-blue-100 text-black font-bold shadow-lg hover:bg-blue-500 hover:shadow-xl px-4 py-2 rounded w-full hover:text-white">Log in</button>

          <p className="text-black font-bold text-center">Don't have an account? <span className="text-purple-500 font-semi-bold hover:text-purple-700 cursor-pointer"><Link to='/signup'>Signup</Link></span></p>
        </form>
      </div>
    </div>
  );
};