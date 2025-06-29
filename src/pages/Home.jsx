import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
  return (
    <>
      <div className="w-full md:bg-[url('./assets/background.png')] bg-no-repeat bg-[130%] absolute">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
