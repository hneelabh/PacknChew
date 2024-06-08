import React from "react";
import chef from "../assets/chef.jpg";

const ChefsNote = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8">
      <div className="container mx-auto px-5 lg:px-32 flex flex-col lg:flex-row items-center gap-8">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2">CHEF'S NOTE</h1>
            <p className="italic">The only thing we're serious about is food.</p>
          </div>
          <p className="text-justify mb-4">
            Celebrating <b>Pack N Chew's 25th Anniversary</b>, a silver milestone achieved with the love of our well-wishers and patrons. Heartfelt thanks to critiques for refining our craft. I hope Team PNC has consistently brought joy through its food and service. Our dishes, a blend of experimentation and simplicity, remain sumptuous and healthy. Specialized kitchens, tasteful decor, eco-friendly practices, and immaculate facilities make me immensely proud. While I personally supervise every detail, there's always room for improvement. I invite you to provide an honest feedback on the food and service, enabling Team PNC to enhance your dining experience. A big compliment to my dedicated team, enduring the journey with an eccentric perfectionist, serving all guests with a smile. Here's to more years of culinary excellence!
            <br />
            <br />
            <b>
              <i>Bon Appetit `</i>
            </b>
            <br />
            <br />
            <i>NITTIN </i>
            <br />
            Founder & Chef
          </p>
        </div>
        <div className="w-full max-w-md lg:ml-8">
          <img src={chef} alt="about" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default ChefsNote;
