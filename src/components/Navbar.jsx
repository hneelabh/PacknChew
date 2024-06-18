import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link as RouterLink } from 'react-router-dom';


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  const closeMenu = () => setMenu(false);

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-zinc-900 txt-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <RouterLink
              to="/"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
            <div className=" flex flex-row items-center cursor-pointer">
              <img className="logo w-[200px] " src={logo} alt="logo" />
            </div>
          </RouterLink>

          <nav className="hidden md:flex flex-row text-[#E2C151] items-center text-lg font-medium gap-8">
            <RouterLink
              to="/services"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Services
            </RouterLink>

            <RouterLink
              to="/about"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About Us
            </RouterLink>

            <RouterLink
              to="/contact"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contact Us
            </RouterLink>

            <RouterLink
              to="/menu"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Dine-in Menu
            </RouterLink>

            <Button title="Login" />
          </nav>

          {/* menu for mobile */}
          <div className="md:hidden text-white flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleClick} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleClick} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
            <RouterLink
              to="/services"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Services
            </RouterLink>

            <RouterLink
              to="/about"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About Us
            </RouterLink>

            <RouterLink
              to="/contact"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contact Us
            </RouterLink>

            <RouterLink
              to="/menu"
              onClick={closeMenu}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Dine-in Menu
            </RouterLink>

            <Button title="Login" />        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
