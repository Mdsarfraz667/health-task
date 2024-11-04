import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gray-100 text-center py-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Your Health, Our Promise: Answers at Your Fingertips!
      </h2>
      <p className="text-2xl text-gray-600 mb-6">
        Take charge of your health with Ayushmana’s AI-driven platform.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-400 transform transition-all duration-300 ease-in-out hover:-translate-y-1">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
