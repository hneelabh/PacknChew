// import React from "react";
// import { BsFacebook } from "react-icons/bs";
// import { RiTwitterXFill } from "react-icons/ri";
// import { BsInstagram } from "react-icons/bs";
// import { GrLocation } from "react-icons/gr";

// const Footer = () => {
//   return (
//     <div className=" bg-zinc-900 text-[#E2C151] mt-8 md:mt-0">
//       <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
//         <div className=" w-full md:w-1/4">
//           <h1 className=" font-semibold text-xl pb-4">Pack n Chew</h1>
//           <p className=" text-sm">
//             Serving you right, since 1999
//           </p>
//           <p className="flex text-sm mt-4">
//             <div className="mt-1"> <GrLocation/> </div>
//             2/30, Vijay Khand Road, Near Mithaiwala Crossing <br />
//             Gomti Nagar, Lucknow - 226010
//           </p>
//         </div>
//         <div>
//           <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
//           <nav className=" flex flex-col gap-2">
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               Dishes
//             </a>
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               About
//             </a>
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               Menu
//             </a>
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               Reviews
//             </a>
//           </nav>
//         </div>
//         <div>
//           <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
//           <nav className=" flex flex-col gap-2">
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               Our Dishes
//             </a>
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               Premium Menu
//             </a>
//           </nav>
//         </div>
//         <div>
//           <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
//           <nav className=" flex flex-col gap-2">
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="mailto:packnchew@gmail.com"
//             >
//               packnchew@gmail.com
//             </a>
//             <a
//               className=" hover:text-brightColor transition-all cursor-pointer"
//               href="/"
//             >
//               +91 9876543210
//             </a>
  
//             <div className="flex flex-rowjustify-center gap-4">
//       <a
//         className="hover:text-brightColor transition-all cursor-pointer"
//         href="https://www.instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <BsInstagram size={24} />
//       </a>
//       <a
//         className="hover:text-brightColor transition-all cursor-pointer"
//         href="https://www.facebook.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <BsFacebook size={24} />
//       </a>
//       <a
//         className="hover:text-brightColor transition-all cursor-pointer"
//         href="https://www.twitter.com"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <RiTwitterXFill size={24} />
//       </a>
//     </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-[#E2C151] pt-8">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Pack n Chew</h1>
          <p className="text-sm">Serving you right, since 1999</p>
          <p className="flex text-sm mt-4 items-center">
            <GrLocation className="mt-1 mr-2" />
            2/30, Vijay Khand Road, Near Mithaiwala Crossing <br />
            Gomti Nagar, Lucknow - 226010
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/dinein"
            >
              Dine-in
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/reserve"
            >
              Reserve a Table
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/order"
            >
              Order Online
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/about"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/menu"
            >
              Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:packnchew@gmail.com"
            >
              packnchew@gmail.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+91 9876543210"
            >
              +91 9876543210
            </a>

            <div className="flex flex-row gap-4 items-center">
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={24} />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook size={24} />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;