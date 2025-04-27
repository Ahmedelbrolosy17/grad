"use client";
// pages/owner-dashboard.js
import Link from "next/link";
import {
  FaEye,
  FaWallet,
  FaShippingFast,
  FaBox,
  FaPlus,
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <header className="bg-[#44C3B80A] w-full flex items-center py-4 px-2 border-b border-gray-200">
        <FaRegUserCircle className="text-gray-600 text-3xl" />
        <span className="text-lg text-gray-800 font-semibold ml-2">Name</span>
        {/* Home Button */}
        <Link
          href="/"
          className="ml-auto flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg shadow transition"
        >
          <FaHome className="text-lg" />
          <span>Home</span>
        </Link>
      </header>

      <div className="flex">
        {/* Sidebar Menu */}
        <aside className="w-1/5 bg-[#44C3B80A] shadow-md flex flex-col">
          <nav className="p-4 flex-1">
            <h2 className="text-gray-500 text-sm uppercase mb-4">Menu</h2>
            <ul className="space-y-4 mt-auto">
              <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                <FaEye />
                <span>Overview</span>
              </li>
              <li>
                <Link
                  href="/finance"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <FaWallet />
                  <span>Finance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <FaShippingFast />
                  <span>Order</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <FaBox />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/addProduct"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <FaPlus />
                  <span>Add a New Product</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-60 mx-auto">
              <h3 className="text-gray-900 text-lg font-medium">Total Sales</h3>
              <span className="text-2xl font-bold text-gray-500">320</span>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center w-60 mx-auto">
              <h3 className="text-gray-900 text-lg font-medium">Number of Orders</h3>
              <span className="text-2xl font-bold text-gray-500">150</span>
            </div>
          </div>

          {/* Best Seller */}
          <div className="mb-8">
            <h3 className="text-xl text-gray-950 font-semibold mb-4">Best Seller This Month</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {/* Product Card 1 */}
              <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px]">
                <img
                  src="/img1.jpg"
                  alt="Product 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-medium text-gray-800">Product Name 1</h4>
                <p className="text-sm text-gray-600 mb-2">This is a description of the product.</p>
                <span className="text-lg font-bold">$50</span>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px]">
                <img
                  src="/img1.jpg"
                  alt="Product 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-medium text-gray-800">Product Name 1</h4>
                <p className="text-sm text-gray-600 mb-2">This is a description of the product.</p>
                <span className="text-lg font-bold">$50</span>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px]">
                <img
                  src="/img1.jpg"
                  alt="Product 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-medium text-gray-800">Product Name 1</h4>
                <p className="text-sm text-gray-600 mb-2">This is a description of the product.</p>
                <span className="text-lg font-bold">$50</span>
              </div>
              {/* Product Card 2 */}
              <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px]">
                <img
                  src="/img2.jpg"
                  alt="Product 2"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-medium text-gray-800">Product Name 2</h4>
                <p className="text-sm text-gray-600 mb-2">This is a description of the product.</p>
                <span className="text-lg font-bold">$75</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Chatbot Button */}
      <button
        className="absolute bottom-8 right-8 rounded-full bg-blue-600 text-white p-4 shadow-md hover:bg-blue-700 focus:outline-none"
        aria-label="Chat with bot"
      >
        Chat Bot
      </button>
    </div>
  );
};

export default OwnerDashboard;
