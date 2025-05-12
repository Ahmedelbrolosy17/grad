"use client";
import React, { useState, useEffect } from "react";

export default function ProductForm({ productId }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [storeId, setStoreId] = useState(""); 
  const [categoryId, setCategoryId] = useState(""); 

  useEffect(() => {
    if (productId) {
      fetchProductData(productId);
    }
  }, [productId]);

  const fetchProductData = async (id) => {
    try {
      const res = await fetch(`http://ma7aliapigrad.runasp.net/api/StoreProduct/GetProduct/${id}`);
      const data = await res.json();
      if (res.ok) {
        setCategorie(data.Name);
        setDescription(data.Description);
        setPrice(data.Price);
        setCategoryId(data.CategoryId);
        setStoreId(data.StoreId);
        setImagePreview(data.ImageUrl); // Assuming the image URL is provided in the response
        setSelectedSize(data.Size || "M");
        setSelectedColor(data.Color || "red");
      } else {
        alert("Failed to fetch product data.");
      }
    } catch (error) {
      alert("Failed to fetch product data.");
      console.error(error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!imageFile) return alert("Please upload an image");

    const productData = {
      name: categorie,
      description: description || "Test description",
      price: price || 100,
      stock: 20, // Set stock as needed
      creationTime: new Date().toISOString(),
      images: [{ imageUrl: imagePreview }], // Assuming imageUrl is part of the request
      categoryId: categoryId || "2", // Category ID
      storeId: storeId || "1", // Store ID
    };

    const url = productId
      ? `http://ma7aliapigrad.runasp.net/api/StoreProduct/UpdateProduct` // For updating
      : "http://ma7aliapigrad.runasp.net/api/StoreProduct/CreateProduct"; // For creating a new product

    try {
      const res = await fetch(url, {
        method: productId ? "PUT" : "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(productId ? "Product successfully updated ✅" : "Product successfully created ✅");
        console.log(data);
      } else {
        alert(`Error: ${data.Message}`);
        console.error(data);
      }
    } catch (error) {
      alert("Failed to send data");
      console.error(error);
    }
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
            {imagePreview ? (
              <img
                src={imagePreview}
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
            <label className="text-gray-700 font-semibold mb-1">Category ID</label>
            <input
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 placeholder-gray-500"
              type="number"
              placeholder="Enter Category ID"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Store ID</label>
            <input
              value={storeId}
              onChange={(e) => setStoreId(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white/70 placeholder-gray-500"
              type="number"
              placeholder="Enter Store ID"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Category Name</label>
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
            {productId ? "Update Product" : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
