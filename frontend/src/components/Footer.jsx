import React from "react";
import AppDownload from "./AppDownload";

const Footer = () => {
  return (
    <div className="w-full">
        
           <AppDownload/>
     
      <div className="p-10 sm:px-25 sm:pb-15 flex flex-col sm:flex-row gap-5 bg-red-400 justify-between w-full ">
        <div className="left">
          <img src="/logo1.png" className="h-20" alt="" />

          <p className="mb-4 -mt-2 text-gray-100 text-sm leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia
            provident temporibus libero possimus fugiat. Vel eos neque
            laboriosam aut maxime ipsam, in veritatis enim ea est voluptates
            velit tempore.
          </p>
          <div>
            <i className="fab fa-facebook text-gray-100 text-3xl mr-4 cursor-pointer"></i>
            <i className="fab fa-linkedin text-gray-100 text-3xl mr-4 cursor-pointer"></i>
            <i className="fab fa-instagram text-gray-100 text-3xl mr-4 cursor-pointer"></i>
          </div>
        </div>
        <div className="middle">
          <h2 className="text-white text-2xl font-semibold mb-3">Company</h2>
          <ul className="space-y-1 text-gray-100">
            <li className=" hover:text-red-200 cursor-pointer transition-colors">
              Home
            </li>
            <li className=" hover:text-red-200 cursor-pointer transition-colors">
              About Us
            </li>
            <li className=" hover:text-red-200 cursor-pointer transition-colors">
              Know more
            </li>
            <li className=" hover:text-red-200 cursor-pointer transition-colors">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="text-gray-100">
          <h2 className=" text-2xl font-semibold mb-3">Contact Us</h2>
          <p> +1 (601)522-7345</p>
          <p>saugatlamichhane@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
