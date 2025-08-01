import React, { useState } from "react";

const SignupPopup = () => {
  let [form, setForm] = useState({
    username: "",
    email:"",
    password: "",
  });

  const handleForm = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setForm({
      username: "",
      email:"",
      password: "",
    });
  };
  return (
    <div className="h-[80vh] flex   " >

    
    <div className="bg-[#00000090] m-auto flex flex-col shadow-xl/30  rounded-2xl max-w-md p-8  w-[350px]">
      <h2 className="text-2xl font-bold mb-6 text-white">Signup</h2>
      <form
        onSubmit={handleSignUp}
        className="w-full flex flex-col gap-6"
        style={{}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-white font-medium mb-1 text-left ">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleForm}
            className="rounded px-3 py-2 focus:border-b-blue-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-white font-medium mb-1 text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter  Email"
            value={form.email}
            onChange={handleForm}
            className="rounded px-3 py-2 focus:border-b-blue-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white font-medium mb-1 text-left">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleForm}
            className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          />
        </div>

        <button
          type="submit"
          class="w-full text-white text-8 bg-[#ff5722] hover:bg-[#e64a19] rounded-lg font-bold  py-3 mt-4 shadow-[0_2px_8px_0_rgba(255,87,34,0.15)]"
        >
          Sign Up
        </button>
        <p className="text-white">Already have an account? {" "} <a href="#" className="underline text-blue-800">Click Here</a></p>

    
      </form>
    </div>

    </div>
  );
};

export default SignupPopup;
