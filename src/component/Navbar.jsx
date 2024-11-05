// // import React, { useState } from "react";
// // import { FiMenu, FiX } from "react-icons/fi";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="bg-teal-500 text-white">
// //       <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
// //         {/* Logo */}
// //         <h1 className="text-2xl font-semibold">Ayushmana</h1>

// //         {/* Hamburger Icon for Mobile */}
// //         <div className="md:hidden" onClick={toggleMenu}>
// //           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
// //         </div>

// //         {/* Navigation Links */}
// //         <ul
// //           className={`flex-col md:flex-row md:flex space-x-4 items-center ${
// //             isOpen ? "flex" : "hidden"
// //           } md:space-x-4 md:block`}
// //         >
// //           <li>
// //             <a href="/vision" className="hover:text-gray-300 ml-2">
// //               <span className="font-semibold">Vision</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/mission" className="hover:text-gray-300 ml-2">
// //               <span className="font-semibold">Mission</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/features" className="hover:text-gray-300 ml-2">
// //               <span className="font-semibold">Features</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/pricing" className="hover:text-gray-300 ml-2">
// //               <span className="font-semibold">Pricing</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/contact" className="hover:text-gray-300 ml-2">
// //               <span className="font-semibold">Contact Us</span>
// //             </a>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-teal-500 text-white">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
//         {/* Logo */}
//         <h1 className="text-2xl font-semibold">Ayushmana</h1>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </div>

//         {/* Navigation Links for Desktop */}
//         <ul className="hidden md:flex space-x-4">
//           <li>
//             <a
//               href="/vision"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Vision
//             </a>
//           </li>
//           <li>
//             <a
//               href="/mission"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Mission
//             </a>
//           </li>
//           <li>
//             <a
//               href="/features"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Features
//             </a>
//           </li>
//           <li>
//             <a
//               href="/pricing"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="/contact"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden fixed inset-0 bg-teal-600 bg-opacity-95 flex flex-col items-center pt-10 z-50">
//           {/* Close Button in the top right corner */}
//           <div className="absolute top-4 right-4" onClick={toggleMenu}>
//             <FiX size={30} className="text-white" />
//           </div>

//           {/* Mobile Navigation Links */}
//           <ul className="flex flex-col items-center space-y-4">
//             <li>
//               <a
//                 href="/vision"
//                 className="text-white text-xl font-semibold hover:text-gray-300"
//               >
//                 Vision
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/mission"
//                 className="text-white text-xl font-semibold hover:text-gray-300"
//               >
//                 Mission
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/features"
//                 className="text-white text-xl font-semibold hover:text-gray-300"
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/pricing"
//                 className="text-white text-xl font-semibold hover:text-gray-300"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="text-white text-xl font-semibold hover:text-gray-300"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-teal-500 text-white">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
//         {/* Logo */}
//         <h1 className="text-2xl font-semibold">Ayushmana</h1>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </div>

//         {/* Navigation Links for Desktop */}
//         <ul className="hidden md:flex space-x-4">
//           <li>
//             <a
//               href="/vision"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Vision
//             </a>
//           </li>
//           <li>
//             <a
//               href="/mission"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Mission
//             </a>
//           </li>
//           <li>
//             <a
//               href="/features"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Features
//             </a>
//           </li>
//           <li>
//             <a
//               href="/pricing"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="/contact"
//               className="hover:text-gray-300 ml-2 font-semibold"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Overlay with Transition */}
//       <div
//         className={`fixed inset-y-0 right-0 bg-teal-600 bg-opacity-95 w-3/4 max-w-xs transform transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button in the top right corner */}
//         <div className="flex justify-end p-4">
//           <FiX
//             size={30}
//             className="text-white cursor-pointer"
//             onClick={toggleMenu}
//           />
//         </div>

//         {/* Mobile Navigation Links */}
//         <ul className="flex flex-col items-center space-y-4 mt-4">
//           <li>
//             <a
//               href="/vision"
//               className="text-white text-xl font-semibold hover:text-gray-300"
//             >
//               Vision
//             </a>
//           </li>
//           <li>
//             <a
//               href="/mission"
//               className="text-white text-xl font-semibold hover:text-gray-300"
//             >
//               Mission
//             </a>
//           </li>
//           <li>
//             <a
//               href="/features"
//               className="text-white text-xl font-semibold hover:text-gray-300"
//             >
//               Features
//             </a>
//           </li>
//           <li>
//             <a
//               href="/pricing"
//               className="text-white text-xl font-semibold hover:text-gray-300"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="/contact"
//               className="text-white text-xl font-semibold hover:text-gray-300"
//             >
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the 'no-scroll' class on the body when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="bg-teal-500 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Ayushmana</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="/vision"
              className="hover:text-gray-300 ml-2 font-semibold"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="/mission"
              className="hover:text-gray-300 ml-2 font-semibold"
            >
              Mission
            </a>
          </li>
          <li>
            <a
              href="/features"
              className="hover:text-gray-300 ml-2 font-semibold"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="hover:text-gray-300 ml-2 font-semibold"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-gray-300 ml-2 font-semibold"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay with Transition */}
      <div
        className={`fixed inset-y-0 right-0 bg-teal-600 bg-opacity-95 w-3/4 max-w-xs transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button in the top right corner */}
        <div className="flex justify-end p-4">
          <FiX
            size={30}
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li>
            <a
              href="/vision"
              className="text-white text-xl font-semibold hover:text-gray-300"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="/mission"
              className="text-white text-xl font-semibold hover:text-gray-300"
            >
              Mission
            </a>
          </li>
          <li>
            <a
              href="/features"
              className="text-white text-xl font-semibold hover:text-gray-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="text-white text-xl font-semibold hover:text-gray-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white text-xl font-semibold hover:text-gray-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
