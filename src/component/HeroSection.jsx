import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track mobile status

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update the mobile status on resize
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []); // Run once on mount

  return (
    <section id="hero" className="bg-gray-100 text-center py-20">
      {/* Responsive heading font sizes */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
        Your Health, Our Promise: Answers at Your Fingertips!
      </h2>

      {/* Responsive paragraph font sizes */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
        Take charge of your health with Ayushmana’s AI-driven platform.
      </p>

      {/* Button */}
      <button
        className={`px-6 py-2 bg-blue-600 text-white rounded transform transition-all duration-300 ease-in-out
          ${isMobile ? "" : "hover:bg-blue-400 hover:-translate-y-1"}`}
      >
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
