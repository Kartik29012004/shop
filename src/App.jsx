import React from 'react';
import { ShoppingCart } from 'lucide-react';




<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>


const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 14999,
      description: "High-  wireless headphones with noise cancellation and 30-hour battery life.",
      image: "./public/img/head.jpg"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 9999,
      description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring.",
      image: "./public/img/watch.jpeg"
    },
    {
      id: 3,
      title: "Portable Power Bank",
      price: 2499,
      description: "20000mAh capacity power bank with fast charging support for all devices.",
      image: "./public/img/power.jpg"
    },
    {
      id: 4,
      title: "Mechanical Gaming Keyboard",
      price: 7999,
      description: "RGB backlit mechanical keyboard with custom switches for gaming enthusiasts.",
      image: "./public/img/key.jpg"
    },
    {
      id: 5,
      title: "4K Webcam",
      price: 12999,
      description: "Ultra HD webcam perfect for streaming and video conferences.",
      image: "./public/img/web.jpg"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: 4999,
      description: "Waterproof portable speaker with rich bass and 12-hour playback.",
      image: "./public/img/speaker.jpeg"
    },
    {
      id: 7,
      title: "Gaming Mouse",
      price: 5999,
      description: "High-precision gaming mouse with adjustable DPI and programmable buttons.",
      image: "./public/img/gaming.jpg"
    },
    {
      id: 8,
      title: "USB-C Hub",
      price: 3499,
      description: "7-in-1 USB-C hub with HDMI, USB 3.0, and card reader ports.",
      image: "./public/img/c.jpg"
    },
    {
      id: 9,
      title: "Wireless Charger",
      price: 1999,
      description: "15W fast wireless charging pad compatible with all Qi-enabled devices.",
      image: "./public/img/wireless.jpg"
    },
    {
      id: 10,
      title: "True Wireless Earbuds",
      price: 8999,
      description: "Premium TWS earbuds with active noise cancellation and wireless charging case.",
      image: "./public/img/earbuds.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">TechStore</h1>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-4 h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};



export default ProductListingPage;