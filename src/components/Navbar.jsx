import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex justify-between items-center h-20 w-11/12 mx-auto">
        <div className="">
          <img src={assets.logo} className="h-9" alt="logo" />
        </div>
        <ul className="flex justify-between items-center w-4/5">
          <li className="cursor-pointer text-sm">Home</li>
          <NavLink to="/menu">
            <li className="cursor-pointer  flex items-center">
              <span className="text-sm">Menu</span>
              <img src={assets.arrow_down} className="h-5" alt="arrow_down" />
            </li>
          </NavLink>
          <li className="cursor-pointer  flex items-center">
            <span className="text-sm">Specials</span>
            <img src={assets.arrow_down} className="h-5" alt="arrow_down" />
          </li>{" "}
          <li className="cursor-pointer text-sm">Locations</li>
          <li className="cursor-pointer text-sm">About Us</li>
          <NavLink to="/login">
            <button className="bg-primary p-2 rounded-lg text-white text-sm">
              Login/Sign Up
            </button>
          </NavLink>
          <li className="cursor-pointer flex items-center gap-1">
            <img src={assets.cart} className="h-4" alt="add to cart" />
            <span className="text-sm">Cart</span>
          </li>
          <div className="flex items-center relative">
            <img
              src={assets.search}
              className="h-4 absolute left-4"
              alt="arrow_down"
            />
            <input
              type="text"
              className="text-xs py-3 px-8 border rounded-3xl w-60 bg-white"
              placeholder="What would you like to eat?"
            />
            <img
              src={assets.arrow_down}
              className="h-5 absolute right-4"
              alt="arrow_down"
            />
          </div>
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="flex md:hidden justify-between items-center w-full px-4 py-2 bg-white shadow">
        <img src={assets.logo} className="h-8" alt="logo" />
        <div className="flex items-center gap-4">
          <li className="cursor-pointer flex items-center gap-1">
            <img src={assets.cart} className="h-4" alt="add to cart" />
            <span className="text-sm">Cart</span>
          </li>
          <NavLink to="/login">
            <button className="bg-primary p-2 rounded-lg text-white text-sm">
              Login/Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
