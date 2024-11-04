import React from "react";
import Card from "./Card";

const FeatureSection = () => {
  const features = [
    "AI-Powered Health Risk Assessments",
    "Personalized Nutrition and Wellness Planning",
    "Continuous Health Monitoring",
    "Telemedicine Consultations",
    "Community Support and Resources",
    "Integrated Care Coordination",
    "Data Analytics and Insights",
    "Gamification and Interactive Features",
    "Preventive Health Education",
  ];

  return (
    <section id="features" className="py-10 px-5 bg-white">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Key Solutions of Ayushmana
      </h1>
      <div className="grid justify-center grid-rows-3 grid-flow-col gap-5">
        {features.map((feature, index) => {
          return <Card key={index} feature={feature} />;
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
