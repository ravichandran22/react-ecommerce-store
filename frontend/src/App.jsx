import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AppProvider } from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import {Login} from './pages/Login';
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
