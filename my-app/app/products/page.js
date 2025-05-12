"use client"; // Marking the component as client-side

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";

const ProductCard = ({ product, onDelete }) => {
  const [imageSrc, setImageSrc] = useState(product.images?.[0]?.imageUrl || "/placeholder.png");
  const handleImageError = () => setImageSrc("/placeholder.png");

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://ma7aliapigrad.runasp.net/api/StoreProduct/DeleteProduct?id=${product.id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        onDelete(product.id);
      } else {
        console.error("Failed to delete product");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="relative group">
      {/* Edit button */}
      <Link
        href="/editProduct"
        className="absolute -top-2 -right-2 z-10 bg-white p-1.5 rounded-full shadow hover:bg-gray-50 transition-transform transform hover:scale-110"
      >
        <Pencil className="w-4 h-4 text-gray-600" />
      </Link>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="absolute -top-2 -right-10 z-10 bg-red-500 p-1.5 rounded-full shadow hover:bg-red-600 transition-transform transform hover:scale-110"
      >
        <Trash className="w-4 h-4 text-white" />
      </button>

      <div className="bg-white rounded-2xl shadow p-4">
        {/* Product Image */}
        <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            className="h-full object-cover"
            onError={handleImageError}
          />
        </div>

        {/* Product Info */}
        <div className="text-sm text-gray-800 mb-1">{product.description}</div>
        <div className="text-sm font-medium mb-2">{product.price} L.E</div>

        {/* Sizes */}
        <div className="text-xs text-gray-500 mb-1">Size</div>
        <div className="flex gap-2 mb-2">
          {["XS", "S", "M"].map((size) => (
            <div
              key={size}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs"
            >
              {size}
            </div>
          ))}
        </div>

        {/* Colors */}
        <div className="text-xs text-gray-500 mb-1">Color</div>
        <div className="flex gap-2">
          {["#000", "#c0c0c0"].map((color, idx) => (
            <div
              key={idx}
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://ma7aliapigrad.runasp.net/api/Store");
        const data = await res.json();
        console.log(data); // Log the response to check the format
        if (Array.isArray(data)) {
          setProducts(data); // Set products if data is an array
        } else {
          console.error("Data is not an array:", data);
          setProducts([]); // Set to empty array if not an array
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]); // Set empty array in case of an error
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
};

const ProductsPage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Link href="/products">
          <button className="text-lg">&larr;</button>
        </Link>
        <span className="text-gray-600 font-medium">All Products</span>
      </div>
      <div className="text-sm text-gray-600">name</div>
    </div>

    <div className="flex-1">
      <ProductGrid />
    </div>

    <div className="p-4 border-t border-gray-200">
      <button className="w-32 mx-auto block bg-green-300 text-white py-1.5 rounded-md shadow hover:bg-green-400 transition-transform transform hover:scale-105">
        Save
      </button>
    </div>
  </div>
);

export default ProductsPage;
