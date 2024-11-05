import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import VisionSection from "./component/VisionSection";
import FeatureSection from "./component/FeatureSection";
import FooterSection from "./component/Footer";
import MissionSection from "./component/MissionSection";
import PriceSection from "./component/PriceSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VisionSection />
      <FeatureSection />
      <PriceSection />
      <FooterSection />
    </div>
  );
};

export default App;
