"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Ma7ali | محلي</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Welcome to Ma7ali | محلي, please complete this form!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6"
      >
        <div className="flex flex-wrap gap-6">
          {/* Personal Information */}
          <div className="flex-1 min-w-[300px] bg-gray-100 p-4 rounded-lg shadow-sm">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information:
            </h5>
            <div className="space-y-2">
              <input
                type="text"
                {...register("fullName")}
                placeholder="Full name:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                {...register("email")}
                placeholder="Email:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("phoneNumber")}
                placeholder="Phone number:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Brand Information */}
          <div className="flex-1 min-w-[300px] bg-gray-100 p-4 rounded-lg shadow-sm">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              Brand Information:
            </h5>
            <div className="space-y-2">
              <input
                type="text"
                {...register("brandName")}
                placeholder="Brand's Name:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("type")}
                placeholder="Type:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("brandProduction")}
                placeholder="Country of origin:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("brandPrice")}
                placeholder="Range of prices:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                {...register("targetGroup")}
                placeholder="Target Group:"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
        <h5 className="text-center text-lg font-medium text-gray-700 mt-6">
          Thank you!
        </h5>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition mt-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default App;
