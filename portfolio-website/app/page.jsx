import React from "react";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />
      <main className="ml-2.5 mr-2.5 flex-grow flex flex-col items-center pb-10 sm:pb-20">
        <HeroContent />
      </main>
    </div>
  );
};

export default Home;
