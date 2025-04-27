"use client";

import React, { useState } from "react";
import {
  FaEdit,
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

export default function Profile() {
  const [image, setImage] = useState(null);
  const [brandName, setBrandName] = useState("Brand name");
  const [editingBrandName, setEditingBrandName] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10 px-4 font-sans text-gray-700">
      {/* Profile Image Section */}
      <div className="relative mb-6">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
        ) : (
          <FaUserCircle className="w-28 h-28 text-gray-300" />
        )}
        <label
          htmlFor="imageUpload"
          className="absolute bottom-1 right-1 bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100 transition"
        >
          <FaEdit className="text-gray-500" />
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      {/* Brand Name Section */}
      <div className="flex items-center space-x-2 mb-8">
        {editingBrandName ? (
          <input
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            onBlur={() => setEditingBrandName(false)}
            autoFocus
            className="text-2xl font-semibold border-b border-gray-400 focus:outline-none focus:border-blue-500 transition"
          />
        ) : (
          <h2 className="text-2xl font-semibold">{brandName}</h2>
        )}
        <FaEdit
          onClick={() => setEditingBrandName(true)}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition"
        />
      </div>

      {/* Information Rows */}
      <div className="space-y-4 w-full max-w-sm">
        <InfoRow icon={<FaUser />} defaultText="Owner Name" />
        <InfoRow icon={<FaEnvelope />} defaultText="email@gmail.com" />
        <InfoRow icon={<FaPhone />} defaultText="01055723" />
        <InfoRow icon={<FaMapMarkerAlt />} defaultText="Tanta" />
        <InfoRow icon={<FaSignOutAlt />} defaultText="Logout" hideEdit />
      </div>
    </div>
  );
}

function InfoRow({ icon, defaultText, hideEdit = false }) {
  const [value, setValue] = useState(defaultText);
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 py-3 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition">
      <div className="flex items-center space-x-3">
        <div className="text-gray-500">{icon}</div>
        {editing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
            className="text-sm text-gray-700 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition"
          />
        ) : (
          <span className="text-sm text-gray-700">{value}</span>
        )}
      </div>
      {!hideEdit && (
        <FaEdit
          onClick={() => setEditing(true)}
          className="text-gray-400 cursor-pointer hover:text-gray-600 transition"
        />
      )}
    </div>
  );
}
