"use client";
import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Pencil } from "lucide-react";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      description: "description 1",
      price: 200,
      sizes: ["XS", "S", "L", "XL"],
      colors: [
        "#007bff",
        "#f8c4e1",
        "#c0c0c0",
        "#000",
        "#f1c40f",
        "#e74c3c",
        "#27ae60",
        "#9b59b6",
        "#e67e22",
        "#1abc9c",
      ],
    },
  ],
  reducers: {},
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

const ProductCard = ({ product }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [editDescription, setEditDescription] = useState(false);
  const [editPrice, setEditPrice] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    document.getElementById("imageUpload").click();
  };

  const selectSize = (size) => {
    setSelectedSize(size === selectedSize ? "" : size);
  };

  const selectColor = (color) => {
    setSelectedColor(color === selectedColor ? "" : color);
  };

  return (
    <div className="relative group w-[36rem]">
      <div
        onClick={triggerUpload}
        className="absolute top-2 right-6 z-10 bg-white p-1 rounded-full shadow cursor-pointer"
      >
        <Pencil className="w-4 h-4 text-gray-600" />
      </div>
      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        onChange={handleImageUpload}
        className="hidden"
      />
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-base">
        <div className="h-56 bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt="Product" className="h-full object-cover" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="text-sm text-black">Description:</label>
            {editDescription ? (
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => setEditDescription(false)}
                autoFocus
                className="border rounded px-3 py-1 text-sm w-48 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <span className="text-gray-800">{description}</span>
            )}
          </div>
          <Pencil
            onClick={() => setEditDescription(!editDescription)}
            className="w-4 h-4 text-gray-600 cursor-pointer"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="text-sm text-black">Price:</label>
            {editPrice ? (
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onBlur={() => setEditPrice(false)}
                autoFocus
                className="border rounded px-3 py-1 text-sm w-32 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ) : (
              <span className="text-gray-800">${price}</span>
            )}
          </div>
          <Pencil
            onClick={() => setEditPrice(!editPrice)}
            className="w-4 h-4 text-gray-600 cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <label className="text-sm text-black mr-2">Size:</label>
          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <div
                key={size}
                onClick={() => selectSize(size)}
                className={`px-4 py-1 rounded-full text-sm font-semibold cursor-pointer border transition ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm text-black mr-2">Color:</label>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                onClick={() => selectColor(color)}
                className={`w-7 h-7 rounded-full cursor-pointer border transition ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        <button className="w-28 text-sm bg-blue-600 text-white py-2 rounded-full shadow-md hover:bg-blue-700 transition block mx-auto font-semibold">
          Save
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="flex justify-center items-center min-h-screen">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
        <ProductGrid />
      </div>
    </Provider>
  );
};

export default App;
