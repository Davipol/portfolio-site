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
          <div className="flex flex-col items-center max-w-4xl text-center gap-3">
            <p className="text-7xl font-bold text-blue-100">
              Hi, I&apos;m Davide.
            </p>

            <p className="text-4xl font-bold text-violet-300 pb-2">
              Full-stack developer based in London.
            </p>

            <p className="text-3xl font-medium text-purple-100/70 mt-2">
              Formerly a nurse - now building with
            </p>
            <p className="text-3xl text-fuchsia-400 font-semibold">
              React, Node.js and PostgreSQL.
            </p>

            <p className="text-3xl font-medium text-purple-100/70">
              Currently collaborating with an early-stage AI startup and open to
              junior roles.
            </p>

            <div className="mt-10 flex justify-center gap-8">
              <Link href="/projects">
                <button className="btn-fuchsia font-bold py-3 px-10 rounded-lg text-lg cursor-pointer">
                  My projects
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-cyan font-bold py-3 px-10 rounded-lg text-lg cursor-pointer">
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
