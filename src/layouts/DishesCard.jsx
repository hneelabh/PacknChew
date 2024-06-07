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
    <RouterLink to={props.link} className="block bg-zinc-900 text-[#E2C151] hover:scale-105 hover:text-brightColor bg- w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg no-underline">
      <div className="rounded-xl hover:text-brightColor overflow-hidden">
        <img className="w-full h-auto rounded-xl" src={props.img} alt="img" />
      </div>
      <div className="space-y-4 mt-4">
        <h3 className="font-semibold text-center text-xl pt-6 text-[#E2C151] hover:text-brightColor">{props.title}</h3>
      </div>
    </RouterLink>
  );
};

export default DishesCard;