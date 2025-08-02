import React, { useState } from "react";
import SignupPopup from "../SignupPopup";
import LoginPopup from "../LoginPopup";

export default function HeroSection() {
  const [currState, setCurrState] = useState(null);

  return (
    <div className="bg-[#f1f3fb] py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Increase your efficiency
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The only online to-do list to take your productivity to the next level.
      </p>
      <button
        onClick={() => setCurrState("signup")}
        className="inline-block bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-full cursor-pointer shadow-md hover:bg-indigo-700 transition"
      >
        Get Started →
      </button>
      <p className="text-sm text-gray-500 mt-3">Free forever. No credit card.</p>
      
      {currState === "signup" && <SignupPopup setCurrState={setCurrState} />}
      {currState === "login" && <LoginPopup setCurrState={setCurrState} />}
    </div>
  );
}
