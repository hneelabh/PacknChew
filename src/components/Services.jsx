import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import DishesCard from "../layouts/DishesCard";

const Services = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Services
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} link="/dinein" title="Dine-in"/>
        <DishesCard img={img2} link="/reserve" title="Reserve a Table"/>
        <DishesCard img={img3} link="/order" title="Order Onilne"/>
      </div>
    </div>
  );
};

export default Services;