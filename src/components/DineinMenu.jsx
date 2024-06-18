import React from "react";
import menuPDF from "../assets/Menu.pdf";

const DineinMenu = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black pb-24 py-8 pt-24">
      <div className="container mx-auto px-5 lg:px-8 h-full">
        <div className="bg-black text-white p-5 rounded-lg shadow-lg w-full h-[90vh] space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-3 border-b-4 border-[#E2C151] inline-block">
              Dine-in Menu
            </h1>
          </div>
          <div className="relative w-full h-full p-4">
            {/* PDF viewer */}
            <iframe
              src={menuPDF}
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineinMenu;