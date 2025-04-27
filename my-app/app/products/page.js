"use client";
import React from "react";
import Link from "next/link";
import { Provider, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Pencil } from "lucide-react";

const productsSlice = createSlice({
  name: "products",
  initialState: Array(9).fill({
    description: "description 1",
    price: 200,
    sizes: ["XS", "S", "L", "XL"],
    colors: ["#007bff", "#f8c4e1", "#c0c0c0", "#000", "#f1c40f", "#e74c3c"]
  }),
  reducers: {}
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer
  }
});

const ProductCard = ({ product }) => {
  return (
    <div className="relative group">
      {/* Edit Button */}
      <Link href="/editProduct" className="absolute -top-2 -right-2 z-10 bg-white p-1 rounded-full shadow hover:bg-gray-50 transition">
        <Pencil className="w-4 h-4 text-gray-600 cursor-pointer" />
      </Link>

      <div className="bg-white rounded-2xl shadow p-4">
        <div className="h-32 bg-gray-100 rounded-md mb-4"></div>
        <div className="text-sm text-gray-800 mb-1">{product.description}</div>
        <div className="text-sm font-medium mb-2">{product.price} L.E</div>
        <div className="text-xs text-gray-500 mb-1">Size</div>
        <div className="flex gap-2 mb-2">
          {product.sizes.map((size) => (
            <div
              key={size}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs"
            >
              {size}
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-500 mb-1">Color</div>
        <div className="flex gap-2">
          {product.colors.map((color, idx) => (
            <div
              key={idx}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const ProductsPage = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Link href="/products">
              <button>&larr;</button>
            </Link>
            <span className="text-gray-600">All Products</span>
          </div>
          <div className="text-sm text-gray-600">name</div>
        </div>
        <div className="flex-1">
          <ProductGrid />
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="w-32 mx-auto block bg-green-300 text-white py-1.5 rounded-md shadow hover:bg-green-400 transition">
            Save
          </button>
        </div>
      </div>
    </Provider>
  );
};

export default ProductsPage;
