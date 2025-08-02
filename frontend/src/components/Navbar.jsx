import React, { useState } from "react";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const Navbar = () => {
  const [currState, setCurrState] = useState(null);
  return (
    <>
      <div className="bg-red-400 flex justify-between p-3 px-6 items-center shadow-md ">
        {/* Left side */}
        <div className="flex flex-row w-2/3 sm:w-1/3 sm:gap-4 justify-between items-center">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-14 w-auto cursor-pointer"
          />
          <p className="hidden sm:block text-white font-medium hover:text-stone-200 cursor-pointer">
            Home
          </p>
          <p className="hidden sm:block text-white font-medium hover:text-stone-200 cursor-pointer">
            Add Task
          </p>
        </div>

        {/* Right side */}
        <div className="text-white font-medium">
          <span
            onClick={() => setCurrState("login")}
            className=" hover:text-stone-200 cursor-pointer"
          >
            {" "}
            Login
          </span>{" "}
          /
          <span
            onClick={() => setCurrState("signup")}
            className=" hover:text-stone-200 cursor-pointer"
          >
            {" "}
            Signup{" "}
          </span>
        </div>
     
       
      </div>
      {currState === "login" &&   <LoginPopup setCurrState={setCurrState}/>}
      {currState === "signup" && <SignupPopup setCurrState={setCurrState}/>}
    </>
  );
};

export default Navbar;
