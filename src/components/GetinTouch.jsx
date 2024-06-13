import React from 'react';

const GetinTouch = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-slate-950 py-8 pt-24">
      <div className="container mx-auto px-5 lg:px-48 flex flex-col items-center">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">Get in Touch!</h1>
            <p className="py-4">Submit the form below or shoot us an email - packnchew@gmail.com</p>
          </div>
          <form method="POST" action="https://getform.io/f/YerJRLeO" className="flex flex-col space-y-4">
            <input
              className="bg-[#ccd6f6] text-gray-700 p-2 rounded-lg"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-[#ccd6f6] text-gray-700 p-2 rounded-lg"
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] text-gray-700 p-2 rounded-lg"
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="border-2 border-[#E2C151] hover:bg-[#E2C151] text-white hover:text-black py-3 rounded-lg mx-auto w-full">
              Let&apos;s Get in Touch!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;