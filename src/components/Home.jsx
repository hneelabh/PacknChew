import React, { useState } from "react";
import Button from "../layouts/Button";
import logo from '../assets/logo.png'
import { Link } from "react-scroll";


const Home = () => {

  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
      <img className="logo" src={logo} alt="logo" />

        {/* <h1 className=" text-backgroundColor font-semibold text-6xl">
        PACK n CHEW        </h1> */}
        <p className=" text-[#E2C151] lg:pl-44 pt-10 pl-5 text-lg md:text-xl lg:text-xl">
        The perfect place for Music | Food | Drinks | Family | Home
        </p>
        <div className=" lg:pl-44 pl-5">
          <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
            <Button title="Dining Options" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
