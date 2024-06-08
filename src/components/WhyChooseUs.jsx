import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-black to-slate-950 lg:px-32 px-5 py-8">
      <div className="w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
        <img src={img} alt="img" className="rounded-lg shadow-lg" />
      </div>
      <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center lg:text-left">Why Choose Us?</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quisquam delectus minima perferendis nulla quia nisi laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo molestias omnis reprehenderit quae animi? Explicabo quasi accusamus laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit veritatis facere. Magnam!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;