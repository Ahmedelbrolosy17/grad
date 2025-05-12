'use client'; // Add this at the top to mark the component as a client component

import { useRouter } from 'next/navigation'; // Use next/navigation in App Router
import { Store } from "lucide-react";
import { FaShippingFast, FaChartLine } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

export default function StartStore() {
  const router = useRouter();

  const handleCreateStore = () => {
    router.push('/newStore'); // Redirect to "newStore" path
  };

  const handleGoToStore = () => {
    router.push('/dashboard'); // Redirect to "dashboard" path
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-[#D1F2EB] flex flex-col justify-center items-center gap-6 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-600 text-center">
          Ready to sell online?
        </h1>
        
        <button 
          onClick={handleCreateStore} 
          className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-6 rounded-2xl shadow-xl transition"
        >
          Create Your Store
        </button>

        {/* Go to your stores - secondary option */}
        <div className="mt-6">
          <p className="text-gray-600 mb-2 text-center">Already have a store?</p>
          <button 
            onClick={handleGoToStore} 
            className="border border-violet-500 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-xl transition"
          >
            Go to Your Stores
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white flex flex-col justify-center px-6 md:px-16 py-12">
        <h2 className="text-3xl font-semibold text-violet-700 mb-8">How it works</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-center gap-4">
            <Store className="text-[#1ABC9C] w-6 h-6" />
            <span>Create your store</span>
          </li>
          <li className="flex items-center gap-4">
            <MdAddShoppingCart className="text-[#1ABC9C] w-6 h-6" />
            <span>Add your products</span>
          </li>
          <li className="flex items-center gap-4">
            <FaShippingFast className="text-[#1ABC9C] w-6 h-6" />
            <span>Monitor your orders and shippings</span>
          </li>
          <li className="flex items-center gap-4">
            <FaChartLine className="text-[#1ABC9C] w-6 h-6" />
            <span>Get insights from your statistics</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
