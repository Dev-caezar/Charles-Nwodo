import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import MyServices from "../components/MyServices";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonial />
      <About />
      <MyServices />
      <Portfolio />
    </div>
  );
};

export default Home;
