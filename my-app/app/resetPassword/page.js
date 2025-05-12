"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPasswordScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const handleReset = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const data = {
      userName,
      email,
      currentPassword,
      newPassword,
    };

    try {
      const response = await fetch("http://ma7aliapigrad.runasp.net/api/Auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "text/plain",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Failed to reset password");
      }

      setSuccessMessage("Password updated successfully.");
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong. Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#a8e6cf] to-[#9b4de1] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-[#6a1b9a] mb-6">Reset Password</h3>

        <form onSubmit={handleReset}>
          <div className="space-y-6 text-black">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                className="mt-2 w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#9b4de1]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#9b4de1]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="mt-2 w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#9b4de1]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="mt-2 w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#9b4de1]"
                required
              />
            </div>

            {errorMessage && <p className="text-red-600 text-sm text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-600 text-sm text-center">{successMessage}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-[#9b4de1] text-white font-bold rounded-md hover:bg-[#6a1b9a] transition"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordScreen;
