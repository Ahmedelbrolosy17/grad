"use client"; // Ensures the component runs on the client side.

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` in Next.js 13+
import Link from "next/link";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To display error messages
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    // Prepare login data
    const loginData = {
      email,
      password,
    };

    try {
      // Sending POST request for login
      const response = await fetch("http://ma7aliapigrad.runasp.net/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "text/plain",
        },
        body: JSON.stringify(loginData),
      });

      // Check if the response is OK (status 200)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password.");
      }

      // If login is successful, redirect to the dashboard
      router.push("/createStore");

    } catch (error) {
      // Set the error message to be displayed
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#a8e6cf] to-[#9b4de1] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-[#6a1b9a] mb-6">Sign In</h3>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6 text-black">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                User name or email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b4de1] text-black"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b4de1] text-black"
                required
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-600 text-sm text-center mt-2">
                {errorMessage}
              </div>
            )}

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="/resetPassword" className="text-sm font-medium text-[#9b4de1] hover:text-[#6a1b9a]">
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#9b4de1] text-white font-bold rounded-md hover:bg-[#6a1b9a] transition"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-black">
            Don&apos;t have an account?{" "}
            <Link href="/signUp" className="text-[#9b4de1] font-medium hover:text-[#6a1b9a]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInScreen;
