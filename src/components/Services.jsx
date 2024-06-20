import React from "react";
import schedule from "../assets/schedule.jpg";
import order from "../assets/order.jpg";
import dinein from "../assets/dinein.png";
import DishesCard from "../layouts/DishesCard";

const Services = () => {
  return (
    <div name="services" className="bg-gradient-to-r from-slate-950 to-black text-[#E2C151] min-h-screen flex flex-col max-sm:pb-24 max-sm:pt-10 justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl max-sm:text-3xl font-bold text-center pt-24 mb-10  border-b-4 border-[#E2C151] inline-block">
        Our Services
      </h1>

      <div className="flex  gap-8 justify-center">
        <DishesCard img={dinein} link="/dinein" title="Dine-in"/>
        <DishesCard img={schedule} link="/reserve" title="Reserve a Table"/>
        <DishesCard img={order} link="/order" title="Order Online"/>
      </div>
    </div>
  );
};

export default Services;

// for going row-wise in sm screen, use flex-wrap in classname alongside flex