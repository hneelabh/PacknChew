// import React from "react";

// const Button = (props) => {
//   return (
//     <div>
//       <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
//         {props.title}
//       </button>
//     </div>
//   );
// };

// export default Button;import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-brightColor opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-brightColor transition-colors duration-200 ease-in-out group-hover:text-white">
          {props.title}
        </span>
        <span className="absolute inset-0 border-2 border-brightColor rounded-full"></span>
      </button>
    </div>
  );
};

export default Button;
