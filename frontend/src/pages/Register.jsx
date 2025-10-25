import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      toast.warning("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    //Get existing users
    let existingUsers = JSON.parse(localStorage.getItem("user"));
    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    //Check for duplicate email
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      toast.warning("Email already registered!");
      return;
    }

    //Add new user
    const newUser = { email, password };
    existingUsers.push(newUser);

    //Save updated list
    localStorage.setItem("user", JSON.stringify(existingUsers));

    toast.success("Registration successful!");
    navigate("/");
  };

  return (
    <div className="bg-blue-100 text-white min-h-screen flex justify-center items-center">
      <div className="bg-white rounded shadow-lg hover:shadow-xl p-4 h-100 w-100">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">
          Register
        </h1>
        <form action="" className="mt-7 space-y-5" onSubmit={handleSubmit}>
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
            id="create-password"
            type="password"
            name="create-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="create a password"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:font-semi-bold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          />
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:font-semi-bold focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
          />

          <button className="bg-blue-100 text-black font-bold shadow-lg hover:bg-blue-500 hover:shadow-xl px-4 py-2 rounded w-full hover:text-white">
            Signup
          </button>

          <p className="text-black font-bold text-center">
            Already have an Account?
            <span className="ps-2 text-purple-500 font-semi-bold hover:text-purple-700 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};