"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full text-center py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/bigzone5.jpg')` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Welcome to Mahali
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Connecting local brands with their customers.
        </p>
        <div className="mt-8 space-x-4">
          <button
            onClick={() => router.push("/signUp")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/signIn")}
            className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-12 w-11/12 max-w-screen-lg mx-auto grid text-center gap-8">
        <div className="bg-white shadow-lg mx-auto rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-800">See Reviews</h2>
          <p className="text-gray-600 mt-2">
            Read what users and owners have to say about Mahali.
          </p>
          <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded hover:opacity-90 transition duration-300 ease-in-out">
            See Reviews
          </button>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-12 w-11/12 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Exclusive Offers</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px] mx-auto hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/img${item % 2 === 0 ? "2" : "1"}.jpg`}
                alt={`Product ${item}`}
                className="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 ease-in-out"
              />
              <h4 className="font-medium text-gray-800">Product Name {item}</h4>
              <p className="text-sm text-gray-600 mb-2">
                This is a description of the product.
              </p>
              <span className="text-lg font-bold">$50</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 w-11/12 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">Featured Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-lg p-4 w-full max-w-[300px] mx-auto hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/img${item % 2 === 0 ? "2" : "1"}.jpg`}
                alt={`Project ${item}`}
                className="w-full h-40 object-cover rounded-lg mb-4 transition duration-300 ease-in-out"
              />
              <h4 className="font-medium text-gray-800">Project Name {item}</h4>
              <p className="text-sm text-gray-600 mb-2">
                This is a description of the project.
              </p>
              <span className="text-lg font-bold">$50</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-12 w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Community Says</h2>
        <div className="relative overflow-hidden mt-8">
          <div className="animate-marquee flex gap-6">
            {[
              "This platform helped my local business thrive!",
              "I love finding unique products here.",
              "Amazing support and visibility for local brands.",
              "A game-changer for small businesses.",
              "I recommend it to all my friends!",
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg max-w-sm flex-shrink-0 hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <p className="text-gray-700 italic">"{review}"</p>
                <h3 className="mt-4 text-gray-800 font-semibold">- User</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-full text-center">
        <p>© 2024 Mahali. All rights reserved.</p>
      </footer>

      {/* Tailwind CSS Keyframe Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
