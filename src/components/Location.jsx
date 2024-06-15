import React from "react";
import { GrLocation } from "react-icons/gr";

const Location = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
      <div className="container mx-auto px-5 lg:px-32 flex flex-col lg:flex-row items-center gap-8">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">Location & Hours</h1>
          </div>
          <div className="text-justify mb-4">
            Pack N Chew, the boutique restaurant serving a customized experience since 1999. We offer a variety of cuisines including Indian, Chinese and Continental dishes. Visit us at our location in Lucknow to enjoy an experience like no other and also our food.
            <br />
            <br />
            <div className="flex text-sm mt-4">
            <div className="mt-1"> <GrLocation/> </div>
            2/30, Vijay Khand Road, Near Mithaiwala Crossing <br />
            Gomti Nagar, Lucknow - 226010
          </div>
            <br />
            Open all days 11am to 10:45pm.
          </div>
        </div>
        <div className="w-full max-w-md lg:ml-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4258855962894!2d80.99074157553699!3d26.858206962430643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2da27e1abd%3A0x4b93794a42b6e8cb!2sPack%20&#39;N&#39;%20Chew!5e0!3m2!1sen!2sin!4v1718210488997!5m2!1sen!2sin"
            width="600"
            height="450"
            className="rounded-lg shadow-lg w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;


// This is showing bigger map but displays over the navbar while scrolling
// import React from "react";

// const Location = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
//       <div className="container mx-auto px-5 lg:px-32 flex flex-col lg:flex-row items-center gap-8">
//         <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
//           <div className="text-center mb-4">
//             <h1 className="text-2xl font-bold mb-2">Location & Hours</h1>
//           </div>
//           <p className="text-justify mb-4">
//             Pack N Chew, the boutique restaurant serving a customized experience since 1999. We offer a variety of cuisines including Indian, Chinese and Continental dishes. Visit us at our location in Lucknow to enjoy an experience like no other and also our food.
//             <br />
//             <br />
//             2/30 Vijay Khand Rd, Gomti Nagar Lucknow, UP 226010.
//             <br />
//             Open all days 11am to 10:45pm.
//           </p>
//         </div>
//         <div className="w-full max-w-md lg:ml-8">
//           <div className="relative pb-56 overflow-hidden rounded-lg shadow-lg w-full h-0">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4258855962894!2d80.99074157553699!3d26.858206962430643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2da27e1abd%3A0x4b93794a42b6e8cb!2sPack%20&#39;N&#39;%20Chew!5e0!3m2!1sen!2sin!4v1718210488997!5m2!1sen!2sin"
//               className="absolute top-0 left-0 w-full h-full border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;