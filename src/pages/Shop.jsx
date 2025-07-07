
// Import React and hooks
import React, { useEffect, useState } from "react";
// Import axios for API requests
import axios from "axios";
// Import cart icon
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  const [getAxiosProducts, setGetAxiosProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setGetAxiosProducts(res.data);
  };

  console.log(getAxiosProducts);

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col pt-[120px] min-h-screen w-full bg-[#f2f7f8]">
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-900 tracking-tight">Products Listing</h1>
      </div>
      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4 pb-20">
        {getAxiosProducts.map((product, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex flex-col shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
            style={{ background: 'linear-gradient(135deg, #f9fafb 70%, #e0e7ff 100%)' }}
          >
            {/* Splash SVG background for card */}
            <svg
              className="absolute -top-8 -left-8 w-32 h-32 opacity-20 pointer-events-none z-0"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" fill="#6366f1" />
              <ellipse cx="70" cy="30" rx="18" ry="8" fill="#a5b4fc" />
            </svg>
            <svg
              className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none z-0"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="20" width="60" height="60" rx="30" fill="#818cf8" />
            </svg>
            {/* Product Image with Favorite Button */}
            <div className="relative group z-10">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain bg-[#f9fafb] p-6 transition-transform duration-300 group-hover:scale-105"
              />
              {/* Favorite (heart) button, not functional but for UI */}
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none"
                title="Add to wishlist"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            {/* Product Details */}
            <div className="p-5 flex flex-col flex-1 z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[48px]">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[40px]">{product.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 focus:outline-none transition-colors">
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
