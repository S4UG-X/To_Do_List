import React, { useState } from "react";

const LoginPopup = ({setCurrState}) => {
  let [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleForm = (event) => {
    setForm((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setForm({
      username: "",
      password: "",
    });
  };
  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-[#00000090] grid place-items-center">

    
    <div className="bg-[#00000090] m-auto flex flex-col shadow-xl/30 items-center justify-center rounded-2xl max-w-md p-8  w-[350px]">
    <div className="flex justify-between items-center w-full mb-6">
  <h2 className="text-2xl font-bold text-white">Login</h2>
  <i className="fa-solid fa-xmark text-white cursor-pointer" onClick={()=>setCurrState(null)}></i>
</div>

      <form
        onSubmit={handleLogin}
        className="w-full flex flex-col gap-6"
        style={{}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-white font-medium mb-1 text-left">
            Username
          </label>
          <input
            type="text"
           
            name="username"
            placeholder="Enter your username"
            value={form.username}
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
            
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleForm}
            className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white text-8 bg-[#ff5722] hover:bg-[#e64a19] rounded-lg font-bold  py-3 mt-4 shadow-[0_2px_8px_0_rgba(255,87,34,0.15)]"
        >
          LOG IN
        </button>
        <p className="text-white">Don't have an account? {" "}<button onClick={() => setCurrState("signup")} className="underline text-blue-800 cursor-pointer">Click Here</button></p>
      </form>
    </div>

    </div>
  );
};

export default LoginPopup;
