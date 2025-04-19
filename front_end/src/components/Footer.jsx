import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div className="">
        <img src={assets.logo} alt="" className="w-42 mb-5" />
        <p className="flex flex-wrap w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus
          quod vero? Quam, atque quia dignissimos vitae dolorum fugiat labore.
          Ipsum dicta dolorem iure facilis corrupti quae molestiae illum
          aliquam.
        </p>
      </div>
      <div className="">
        <ul className="flex flex-col gap-1 text-gray-600">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-1 text-gray-600">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <li>fashion@fashion.com</li>
          <li>+44-3256-256-256</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
