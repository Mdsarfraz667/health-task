import React from "react";
import CardWrapper from "./CardWrapper";
function PriceSection() {
  const plans = [
    {
      name: "Basic",
      description:
        "Basic health tracking, community access, and initial consultation.",
    },
    {
      name: "Standard",
      description:
        "Includes personalized health plans, continuous monitoring, and priority support.",
    },
    {
      name: "Premium",
      description:
        "All features, including unlimited consultations, detailed analytics, and advanced wellness planning.",
    },
  ];

  return (
    <section id="pricing" className="py-10 px-5 bg-gray-100">
      <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
        Pricing Plans
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* Centered and responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="text-center  bg-gray-50 p-6 rounded-lg shadow-lg text-gray-700 w-auto h-48 cursor-pointer 
                    transform transition-transform duration-300 hover:-translate-y-2 
                    hover:bg-gray-100 hover:shadow-xl "
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
