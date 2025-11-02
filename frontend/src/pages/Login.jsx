import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import TextInput from "../components/TextInput";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email.trim() === "" || password.trim() === "") {
      toast.warning("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("user")) || [];

    if (users.length === 0) {
      toast.info("No user found. Please register first.");
      return;
    }

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 sm:p-10">

        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to your account to continue
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
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right">
            <span className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 active:scale-95"
          >
            Log In
          </button>

          <p className="text-center text-gray-700 font-medium mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
