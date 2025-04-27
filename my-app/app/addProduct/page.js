"use client";
import React, { useState } from "react";

export default function ProductForm() {
  const [image, setImage] = useState(null);
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const productData = {
      image,
      categorie,
      description,
      price,
      size: selectedSize,
      color: selectedColor,
    };
    console.log("Product Data:", productData);
    alert("Data saved to console ✅");
  };

  const colors = [
    "red",
    "orange",
    "green",
    "teal",
    "white",
    "lightblue",
    "cyan",
    "yellow",
    "blue",
    "black",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 backdrop-blur-sm">
      <div className="p-8 w-full max-w-2xl bg-white/80 rounded-2xl shadow-2xl space-y-6 backdrop-blur-md">
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 flex items-center justify-center relative w-40 h-40 bg-white/30">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <label
                htmlFor="imageUpload"
                className="cursor-pointer text-5xl text-gray-500"
              >
                +
              </label>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Category</label>
            <input
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 placeholder-gray-500"
              type="text"
              placeholder="Type category"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 placeholder-gray-500"
              type="text"
              placeholder="Type description"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 placeholder-gray-500"
              placeholder="0"
            />
          </div>
        </div>

        <div className="space-y-3">
          <span className="font-semibold text-gray-700">Available Size</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full font-medium border transition ${
                  selectedSize === size
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-white text-gray-800 hover:bg-teal-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <span className="font-semibold text-gray-700">Available Color</span>
          <div className="flex flex-wrap gap-3 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition ${
                  selectedColor === color
                    ? "ring-2 ring-teal-500"
                    : "hover:opacity-75"
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
