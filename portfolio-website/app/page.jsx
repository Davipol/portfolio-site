import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />
      <main className="ml-2.5 mr-2.5 flex-grow flex flex-col items-center pb-10 sm:pb-20">
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
          <div className="flex flex-col items-center">
            <p className="text-center py-16 flex justify-center text-6xl font-bold text-blue-100">
              Hi, I'm Davide Polizzi.
            </p>
            <p className="text-center leading-relaxed flex justify-center text-5xl font-bold text-blue-100">
              Junior Software Developer
            </p>
            <p className="text-center leading-relaxed flex justify-center text-5xl font-bold text-blue-100">
              based in London.
            </p>
            <div className="mt-15 flex justify-center gap-20">
              <Link href="/projects">
                <button
                  label="My projects"
                  className="bg-fuchsia-700 hover:bg-fuchsia-800 text-blue-100 font-bold py-2 px-4 rounded"
                >
                  My projects
                </button>
              </Link>
              <Link href="/about">
                <button
                  label="About me"
                  className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded"
                >
                  About me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
