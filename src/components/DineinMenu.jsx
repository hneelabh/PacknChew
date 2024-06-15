// import React from "react";
// import menuPDF from "../assets/Menu.pdf";

// const DineinMenu = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
//       <div className="container mx-auto px-5 lg:px-32">
//         <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
//           <div className="text-center mb-4">
//             <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">Dine-in Menu</h1>
//           </div>
//           <div className="w-full max-w-md">
//             {/* PDF viewer */}
//             <div className="relative pb-4/3">
//               <iframe
//                 src="../assets/Menu.pdf"
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DineinMenu;

import React from "react";
import menuPDF from "../assets/Menu.pdf";

const DineinMenu = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="bg-black text-white p-5 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-3 border-b-4 border-[#E2C151] inline-block">
              Dine-in Menu
            </h1>
          </div>
          <div className="relative" style={{ paddingBottom: "75%" }}>
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