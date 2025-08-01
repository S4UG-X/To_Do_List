import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-[#f1f3fb] py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Increase your efficiency
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The only online to-do list to take your productivity to the next level.
      </p>
      <a
        href="#get-started"
        className="inline-block bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
      >
        Get Started →
      </a>
      <p className="text-sm text-gray-500 mt-3">Free forever. No credit card.</p>
    </div>
  );
}
