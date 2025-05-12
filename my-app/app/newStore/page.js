"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function CreateStoreForm() {
  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState(null);
  const [storeId, setStoreId] = useState(null);

 const onSubmit = async (data) => {
  const form = new FormData();

  for (const key in data) {
    if (key === "image") {
      form.append("image", data.image[0]);
    } else {
      form.append(key, data[key]);
    }
  }

  try {
   const response = await fetch("http://ma7aliapigrad.runasp.net/api/Store", {
  method: "POST",
  body: form,
});


    const result = await response.json();
    console.log("Store Created:", result);

    const id = result.id || result._id || result.storeId;
    setStoreId(id);
    setFormData(result);
    reset();
  } catch (error) {
    console.error("Error creating store:", error);
  }
};


  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-emerald-100 via-indigo-100 to-pink-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Ma7ali | محلي
        </h1>
        <p className="mt-2 text-gray-700 text-lg">
          Start your journey by creating your own store!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="bg-gradient-to-br from-white via-indigo-50 to-white p-6 rounded-2xl shadow-inner">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">
              Personal Info
            </h2>
            <div className="space-y-4">
              <input
                {...register("fullName")}
                defaultValue=""
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition text-black"
              />
              <input
                {...register("email")}
                defaultValue=""
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition text-black"
              />
              <input
                {...register("phoneNumber")}
                defaultValue=""
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition text-black"
              />
            </div>
          </div>

          {/* Brand Info */}
          <div className="bg-gradient-to-br from-white via-pink-50 to-white p-6 rounded-2xl shadow-inner">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              Brand Info
            </h2>
            <div className="space-y-4">
              <input
                {...register("brandName")}
                defaultValue=""
                type="text"
                placeholder="Brand Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("type")}
                defaultValue=""
                type="text"
                placeholder="Type"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("brandProduction")}
                defaultValue=""
                type="text"
                placeholder="Country of Origin"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("brandPrice")}
                defaultValue=""
                type="text"
                placeholder="Price Range"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("targetGroup")}
                defaultValue=""
                type="text"
                placeholder="Target Group"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("name")}
                defaultValue=""
                type="text"
                placeholder="Store Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <textarea
                {...register("description")}
                defaultValue=""
                placeholder="Description"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 transition text-black"
              />
              <input
                {...register("image")}
                type="file"
                accept="image/*"
                className="w-full text-black"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          >
            🚀 Create Your Store
          </button>
        </div>
      </form>

      {formData && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow text-sm max-w-2xl w-full overflow-x-auto">
          <h3 className="font-bold mb-2 text-indigo-600">Store Created ✅</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          {storeId && (
            <p className="mt-2 text-green-700 font-semibold">
              Store ID: <span className="font-mono">{storeId}</span>
            </p>
          )}
        </div>
      )} 
    </section>
  );
}

export default CreateStoreForm;
