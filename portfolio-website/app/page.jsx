import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-16">
        <h1 className="flex justify-center text-green">
          Hi, I'm Davide Polizzi,
          <br />
          Junior Software Developer
        </h1>

        <Link href="/projects">
          <h3>My projects</h3>
        </Link>
      </main>
    </div>
  );
};

export default Home;
