import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-20" />
      <main className="ml-2.5 mr-2.5 flex-grow">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="flex flex-col items-center">
            <p className="text-center pb-14 flex justify-center text-7xl font-bold text-red-800">
              Hi, I'm Davide Polizzi.
            </p>
            <p className="text-center leading-relaxed flex justify-center text-5xl font-bold text-red-800">
              Junior Software Developer
            </p>
            <p className="text-center leading-relaxed flex justify-center text-5xl font-bold text-red-800">
              based in London.
            </p>
          </div>
        </div>
        <Link href="/projects">
          <h3 className="text-center mt-4 text-red-600 underline">
            My projects
          </h3>
        </Link>
      </main>
    </div>
  );
};

export default Home;
