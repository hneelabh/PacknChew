import React from "react";
import menuPDF from "../assets/Menu.pdf";

const DineinMenu = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">Dine-in Menu</h1>
          </div>
          <div className="w-full max-w-md">
            {/* PDF viewer */}
            <div className="relative pb-4/3">
              <iframe
                src="../assets/Menu.pdf"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineinMenu;

// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import menuPDF from "../assets/Menu.pdf";

// const DineinMenu = () => {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 to-black py-8 pt-24">
//       <div className="container mx-auto px-5 lg:px-32">
//         <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full lg:max-w-2xl space-y-4">
//           <div className="text-center mb-4">
//             <h1 className="text-2xl font-bold mb-2 border-b-4 border-[#E2C151] inline-block">Dine-in Menu</h1>
//           </div>
//           <div className="w-full max-w-md">
//             {/* PDF viewer */}
//             <Document file={menuPDF} onLoadSuccess={onDocumentLoadSuccess}>
//               {({ numPages }) => (
//                 <>
//                   {numPages > 1 && (
//                     <p className="text-center text-sm mb-2">
//                       Page {1} of {numPages}
//                     </p>
//                   )}
//                   <Page pageNumber={1} width="100%" height="600px" />
//                 </>
//               )}
//             </Document>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DineinMenu;