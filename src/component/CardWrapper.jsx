import React from "react";

// This wrapper component will receive children as its content
const CardWrapper = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      {" "}
      {/* Common styles */}
      <div className="ml-4">
        {" "}
        {/* Shifts content to the left */}
        {children} {/* Renders whatever is passed inside this wrapper */}
      </div>
    </div>
  );
};

export default CardWrapper;
