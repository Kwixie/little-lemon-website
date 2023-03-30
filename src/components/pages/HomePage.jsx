import React from "react";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import SpecialsSection from "../sections/SpecialsSection";
import TestimonialsSection from "../sections/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SpecialsSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
