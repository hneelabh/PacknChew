// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import pasta from "../assets/success1.png";

// const Success = () => {
//   const [countdown, setCountdown] = useState(10);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeoutId = setInterval(() => {
//       setCountdown((preCount) => {
//         if (preCount === 1) {
//           clearInterval(timeoutId);
//           navigate("/");
//         }
//         return preCount - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timeoutId);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-slate-950 to-black lg:px-32 px-5 py-8">
//       <div className="w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
//         <img src={pasta} alt="success" className="rounded-lg shadow-lg" />
//       </div>
//       <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md space-y-4 lg:pt-14">
//         <h1 className="text-3xl font-semibold">You have successfully made your reservation!</h1>
//         <h2 className="text-2xl">See you soon at the restaurant 👋</h2>
//         <h1 className="text-xl font-light text-gray-100 mb-2">
//           Redirecting to Home in {countdown} seconds...
//         </h1>
//         <Link
//           to={"/"}
//           className="border border-black px-7 py-2 rounded-full flex items-center justify-center mx-auto text-base text-gray-400 transition-colors duration-300 hover:bg-black hover:text-[#E2C151]"
//         >
//           Back to Home{" "}
//           <HiOutlineArrowNarrowRight className="ml-4 p-1 bg-black text-white rounded-full transition-colors duration-300 hover:bg-white hover:text-black" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Success;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import pasta from "../assets/success1.png";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-950 to-black px-5 py-8 space-y-6">
      <div className="py-20 max-w-xs sm:max-w-32">
        <img src={pasta} alt="success" className="rounded-lg shadow-lg w-full" />
      </div>
      <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-xs lg:max-w-md space-y-4 text-center">
        <h1 className="text-xl font-semibold lg:text-2xl">You have successfully made your reservation!</h1>
        <h2 className="text-lg lg:text-xl">See you soon at the restaurant 👋</h2>
        <h1 className="text-md font-light text-gray-100 mb-2 lg:text-lg">
          Redirecting to Home in {countdown} seconds...
        </h1>
        <Link
          to={"/"}
          className="border border-black px-5 py-2 rounded-full flex items-center justify-center mx-auto text-base text-gray-400 transition-colors duration-300 hover:bg-black hover:text-[#E2C151]"
        >
          Back to Home{" "}
          <HiOutlineArrowNarrowRight className="ml-2 p-1 bg-black text-white rounded-full transition-colors duration-300 hover:bg-white hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default Success;