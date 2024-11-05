// import React from "react";

// const Card = ({ feature }) => {
//   return (
//     <div
//       className="bg-gray-50 p-6 rounded-lg shadow-lg text-gray-700 w-full max-w-xs cursor-pointer
//                  transform transition-transform duration-300 hover:-translate-y-2
//                  hover:bg-gray-100 hover:shadow-xl flex flex-col items-start space-y-2"
//     >
//       <h1 className="text-2xl font-semibold ">{feature}</h1>
//       <p className="text-gray-600">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
//         deserunt ab.
//       </p>
//     </div>
//   );
// };

// export default Card;

// import React from "react";

// const Card = ({ feature }) => {
//   return (
//     <div
//       className="bg-gray-50 p-6 rounded-lg shadow-lg text-gray-700 w-full max-w-xs cursor-pointer
//                  transform transition-transform duration-300 hover:-translate-y-2
//                  hover:bg-gray-100 hover:shadow-xl flex flex-col items-start space-y-2"
//     >
//       <h1 className="text-2xl font-semibold">{feature}</h1>
//       <p className="text-gray-600">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
//         deserunt ab.
//       </p>
//     </div>
//   );
// };

// export default Card;

// import React, { useState } from "react";

// const Card = ({ feature }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div
//       className={`bg-gray-50 p-6  rounded-lg shadow-lg text-gray-700 w-full max-w-xs cursor-pointer
//                   transform transition-transform duration-300
//                   ${isActive ? "scale-110 bg-gray-100 shadow-xl" : ""}
//                   flex flex-col items-start space-y-2`}
//       onMouseEnter={() => setIsActive(true)}
//       onMouseLeave={() => setIsActive(false)}
//       onClick={() => setIsActive(!isActive)}
//     >
//       <h1 className="text-2xl font-semibold">{feature}</h1>
//       <p className="text-gray-600">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
//         deserunt ab.
//       </p>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";

const Card = ({ feature }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`bg-gray-50 p-6 rounded-lg shadow-lg text-gray-700 w-full max-w-xs min-h-[250px] cursor-pointer
                  transform transition-transform duration-300 
                  ${isActive ? "scale-110 bg-gray-100 shadow-xl" : ""} 
                  flex flex-col items-start space-y-2 min-h-[200px]`} // Adjust the min-h value as needed
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <h1 className="text-2xl font-semibold">{feature}</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
        deserunt ab.
      </p>
    </div>
  );
};

export default Card;
