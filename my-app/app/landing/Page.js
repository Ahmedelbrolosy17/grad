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
{/* How It Works Section */}
      <section className="py-12 w-11/12 max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How Mahali Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-600">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img src="/window.svg" alt="Connect" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect</h3>
            <p>Local businesses join Mahali to reach more customers and showcase their offerings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img src="/globe.svg" alt="Discover" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Discover</h3>
            <p>Users browse and explore products and services from their favorite local brands.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img src="/file.svg" alt="Support" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
            <p>Customers shop locally, leave reviews, and help small businesses grow.</p>
          </div>
        </div>
      </section>

      {/* Options Section */}
      {/* <section className="py-12 w-11/12 max-w-screen-lg mx-auto grid text-center gap-8">
        <div className="bg-white shadow-lg mx-auto rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-800">See Reviews</h2>
          <p className="text-gray-600 mt-2">
            Read what users and owners have to say about Mahali.
          </p>
          <button className="mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded hover:opacity-90 transition duration-300 ease-in-out">
            See Reviews
          </button>
        </div>
      </section> */}

      {/* Offers Section */}
      

      {/* Projects Section */}
      {/* <section className="py-12 w-11/12 max-w-screen-lg mx-auto">
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
      </section> */}

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
      {/* Enhanced Footer */}
<footer className="bg-gray-900 text-white w-full">
  <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">
    {/* About */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About Mahali</h3>
      <p className="text-gray-400">
        Mahali connects local businesses with customers through a reliable and community-focused platform.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-300">
        <li><a href="/signUp" className="hover:text-white">Sign Up</a></li>
        <li><a href="/signIn" className="hover:text-white">Sign In</a></li>
        <li><a href="#" className="hover:text-white">Reviews</a></li>
        <li><a href="#" className="hover:text-white">Support</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-400">Email: support@mahali.com</p>
      <p className="text-gray-400">Phone: +966 500 123 456</p>
      <p className="text-gray-400">Riyadh, Saudi Arabia</p>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i> Facebook</a>
        <a href="#" className="hover:text-blue-300"><i className="fab fa-twitter"></i> Twitter</a>
        <a href="#" className="hover:text-pink-400"><i className="fab fa-instagram"></i> Instagram</a>
        <a href="#" className="hover:text-red-400"><i className="fab fa-youtube"></i> YouTube</a>
      </div>
    </div>
  </div>

  <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
    © {new Date().getFullYear()} Mahali. All rights reserved.
  </div>
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
