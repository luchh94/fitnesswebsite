import React from "react";
import FirstSection from "../components/FirstSection";
import FithSection from "../components/FithSection";
import FourthSection from "../components/FourthSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />;
      <FourthSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FithSection />
    </>
  );
};

export default Homepage;
