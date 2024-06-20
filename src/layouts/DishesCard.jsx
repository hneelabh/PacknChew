// import React from "react";
// import Button from "../layouts/Button";

// const DishesCard = (props) => {
//   return (
//     <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
//       <img className=" rounded-xl" src={props.img} alt="img" />
//       <div className=" space-y-4">
//         <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
//         <div className=" flex flex-row items-center justify-center gap-4">
//           <Button title="Buy Now" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishesCard;
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const DishesCard = (props) => {
  return (
    <RouterLink 
      to={props.link} 
      className="block bg-zinc-900 text-[#E2C151] hover:scale-105 hover:text-brightColor transition duration-300 ease-in-out w-full md:w-1/2 lg:w-1/4 p-3 md:p-4 lg:p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg no-underline"
    >
      <div className="rounded-xl overflow-hidden">
        <img 
          className="w-full h-40 md:h-48 lg:h-auto rounded-xl transition duration-300 ease-in-out object-cover" 
          src={props.img} 
          alt="img" 
        />
      </div>
      <div className="space-y-2 md:space-y-4 mt-2 md:mt-4">
        <h3 
          className="font-semibold text-center text-lg md:text-xl pt-4 md:pt-6 text-[#E2C151] hover:text-brightColor transition duration-300 ease-in-out"
        >
          {props.title}
        </h3>
      </div>
    </RouterLink>
  );
};

export default DishesCard;

