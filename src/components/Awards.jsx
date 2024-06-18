import React from "react";
import award1 from "../assets/award1.webp";
import award2 from "../assets/award2.webp";

const Awards = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-slate-950 py-8">
      <div className="container mx-auto px-5 lg:px-32 flex flex-col items-center gap-8">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-4xl space-y-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">AWARDS & RECOGNITION</h1>
            <p className="italic">Celebrating excellence and culinary mastery.</p>
          </div>
          
          {/* First Award */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 max-w-md">
              <img src={award1} alt="Special Award for the Best Family Restaurant in Lucknow" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full lg:w-1/2 text-justify">
              <h2 className="text-xl font-bold mb-2">Special Award for the Best Family Restaurant in Lucknow</h2>
              <i>From Fever 104 FM in association with HT City</i>
            </div>
          </div>

          {/* Second Award */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="w-full lg:w-1/2 max-w-md">
              <img src={award2} alt="Lucknow's biggest Peoples' Food Choice Award - Best Restaurant Lucknow" className="rounded-lg shadow-lg lg:pl-28" />
            </div>
            <div className="w-full lg:w-1/2 text-justify">
              <h2 className="text-xl font-bold mb-2">Lucknow&apos;s biggest Peoples&apos; Food Choice Award - Best Restaurant Lucknow</h2>
              <i>From Fever 104 FM in association with HT City</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
