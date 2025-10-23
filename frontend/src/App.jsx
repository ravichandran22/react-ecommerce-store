import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  const sampleProducts = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      description: "Noise-cancelling over-ear headphones with 20 hours of battery life.",
      imageURL: "https://images.pexels.com/photos/374755/pexels-photo-374755.jpeg",
      price: 89.99,
      stock: 35,
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      description: "Water-resistant smartwatch with heart rate and sleep tracking.",
      imageURL: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
      price: 129.99,
      stock: 50,
    },
    {
      id: 3,
      title: "Mechanical Gaming Keyboard",
      description: "RGB backlit mechanical keyboard with blue switches and ergonomic wrist rest.",
      imageURL: "https://images.pexels.com/photos/1325690/pexels-photo-1325690.jpeg",
      price: 74.99,
      stock: 22,
    },
    {
      id: 4,
      title: "4K Ultra HD Monitor",
      description: "27-inch 4K UHD display with HDR10 support and ultra-thin bezels.",
      imageURL: "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg",
      price: 329.99,
      stock: 15,
    },
    {
      id: 5,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
      imageURL: "https://images.pexels.com/photos/258884/pexels-photo-258884.jpeg",
      price: 29.99,
      stock: 80,
    },
    {
      id: 6,
      title: "Portable Bluetooth Speaker",
      description: "Compact waterproof speaker with deep bass and 12-hour playtime.",
      imageURL: "https://images.pexels.com/photos/3394669/pexels-photo-3394669.jpeg",
      price: 59.99,
      stock: 45,
    },
    {
      id: 7,
      title: "External SSD 1TB",
      description: "High-speed portable SSD with USB-C connection for fast data transfer.",
      imageURL: "https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg",
      price: 149.99,
      stock: 25,
    },
    {
      id: 8,
      title: "Smart LED Light Bulb",
      description: "WiFi-enabled color-changing light bulb compatible with Alexa and Google Home.",
      imageURL: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      price: 19.99,
      stock: 100,
    },
    {
      id: 9,
      title: "Laptop Backpack",
      description: "Water-resistant travel backpack with padded laptop compartment and USB port.",
      imageURL: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
      price: 49.99,
      stock: 60,
    },
    {
      id: 10,
      title: "Wireless Charging Pad",
      description: "Fast Qi-enabled wireless charger with LED indicator and anti-slip design.",
      imageURL: "https://images.pexels.com/photos/5077032/pexels-photo-5077032.jpeg",
      price: 24.99,
      stock: 70,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home products={products} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
