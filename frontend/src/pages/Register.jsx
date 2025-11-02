import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "../components/TextInput";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      toast.warning("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("user"));
    if (!Array.isArray(existingUsers)) existingUsers = [];

    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      toast.warning("Email already registered!");
      return;
    }


    const newUser = { email, password };
    existingUsers.push(newUser);

    localStorage.setItem("user", JSON.stringify(existingUsers));

    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 sm:p-10">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Join us and start shopping smarter!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <TextInput
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <TextInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 active:scale-95"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-700 font-medium mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
