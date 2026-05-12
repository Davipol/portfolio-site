import React from "react";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

export const metadata = {
  title: "About | Davide Polizzi",
  description:
    "Learn more about Davide Polizzi, a software developer based in London.",
};

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />
      <AboutContent />
    </div>
  );
};

export default About;
