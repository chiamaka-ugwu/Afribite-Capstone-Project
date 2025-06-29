import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const MenuNavbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block w-full bg-primary">
        <div className="flex justify-between items-center h-20 w-11/12 mx-auto text-white">
          <div className="w-auto">
            <NavLink to="/">
              <img src={assets.menuLogo} className="h-16" alt="logo" />
            </NavLink>
          </div>
          <ul className="flex items-center justify-between w-3/4">
            <li className="cursor-pointer flex items-center">
              <span className="text-sm">Swallow</span>
              <img src={assets.whiteArrow} alt="arrow_down" />
            </li>
            <li className="cursor-pointer flex items-center">
              <span className="text-sm">Rice</span>
              <img src={assets.whiteArrow} alt="arrow_down" />
            </li>
            <li className="cursor-pointer flex items-center">
              <span className="text-sm">Soups</span>
              <img src={assets.whiteArrow} alt="arrow_down" />
            </li>
            <div className="flex items-center relative">
              <img
                src={assets.whiteSearch}
                className="h-4 absolute left-4"
                alt="arrow_down"
              />
              <input
                type="text"
                className="text-xs py-3 px-10 border rounded-l-lg w-70 bg-transparent border-white outline-primary"
                placeholder="Search"
              />
              <div className="flex items-center gap-6 bg-white p-2 px-4">
                <img src={assets.person} alt="person" />
                <img src={assets.cartCloured} alt="person" />
              </div>
            </div>
          </ul>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="flex md:hidden w-full bg-primary px-4 py-2 items-center justify-between">
        <NavLink to="/">
          <img src={assets.menuLogo} className="h-10" alt="logo" />
        </NavLink>
        <div className="flex items-center relative">
          <img
            src={assets.whiteSearch}
            className="h-4 absolute left-4"
            alt="arrow_down"
          />
          <input
            type="text"
            className="text-xs py-3 px-10 border rounded-l-lg w-35 bg-transparent border-white outline-primary"
            placeholder="Search"
          />
          <div className="flex items-center gap-2 bg-white p-2 px-2">
            <img src={assets.person} alt="person" />
            <img src={assets.cartCloured} alt="person" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuNavbar;
