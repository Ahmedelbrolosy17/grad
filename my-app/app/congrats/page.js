"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Congrats() {
  const router = useRouter();

  useEffect(() => {
    // Redirect back to the dashboard after 3 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer if component is unmounted
  }, [router]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-50 to-purple-50">
      <h1 className="text-3xl font-bold text-violet-600 mb-4">Your Store is Created Successfully!</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        We are now redirecting you to your dashboard. Please wait...
      </p>
      <button
        onClick={() => router.push("/dashboard")}
        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-green-500 text-white font-semibold rounded-lg shadow-md"
      >
        Go to Dashboard
      </button>
    </section>
  );
}
