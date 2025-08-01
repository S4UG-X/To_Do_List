import React from "react";

const Navbar = () => {
  return (
    <div className="bg-stone-400 flex justify-between p-3 px-6  ">
      <div className="flex flex-col gap-1 sm:flex-row">
        <p>logo of company</p>

        <p> home</p>
        <p>add task</p>
      </div>

      <div className="">login/signup</div>
    </div>
  );
};

export default Navbar;
