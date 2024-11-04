import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">Ayushmana</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/vision" className="hover:text-gray-300 ml-2">
              <span className=" font-semibold">Vision</span>
            </a>
          </li>
          <li>
            <a href="/mission" className="hover:text-gray-300 ml-2">
              <span className=" font-semibold">Mission</span>
            </a>
          </li>
          <li>
            <a href="/features" className="hover:text-gray-300 ml-2">
              <span className=" font-semibold">Features</span>
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-gray-300 ml-2">
              <span className=" font-semibold">Pricing</span>
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300 ml-2">
              <span className=" font-semibold">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
