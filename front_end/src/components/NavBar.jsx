import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router";
import {
  faBars,
  faCartShopping,
  faCircleChevronDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-42 " />
      <ul className="hidden sm:flex gap-5  text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <FontAwesomeIcon icon={faUser} className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-(0) pt-4">
            <div className="flex flex-col gap-2 py-3 px-5 bg-slate-100 text-gray-700 w-28 rounded">
              <p className="cursor-pointer hover:text-black">My Prifile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link className="relative" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-orange-700 text-white aspect-square rounded-full text-[8px]">
            5
          </p>
        </Link>
        <div className="sm:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="w-5 cursor-pointer "
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              className="h-4 rotate-90"
            />
            <p>Back</p>
          </div>
          <NavLink
            className="py2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className="py2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            className="py2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="py2 pl-6 border"
            onClick={() => setVisible(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
