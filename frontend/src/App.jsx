import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AppProvider } from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Login } from './pages/Login';
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopByCategory from "./pages/ShopByCategory";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import {AddProduct} from "./pages/admin/AddProduct";
import {EditProduct} from "./pages/admin/EditProduct";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<ShopByCategory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/edit" element={<EditProduct />} />
        </Routes>
      </Router>

      {/* Global Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AppProvider>
  );
}

export default App;
