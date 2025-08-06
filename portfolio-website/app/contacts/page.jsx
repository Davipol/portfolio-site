import React from "react";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const metadata = {
  title: "Contacts | Davide Polizzi",
  description:
    "Ways to contact Davide Polizzi, a junior software developer based in London.",
};

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />
      <main className="ml-2.5 mr-2.5 flex-grow flex flex-col items-center pb-10 sm:pb-20">
        <h2 className="text-center py-16 text-5xl font-bold text-blue-100">
          Contacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-blue-300 text-center">
          <a
            href="https://www.linkedin.com/in/davide-polizzi-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaLinkedin className="w-12 h-12 mb-2" />
            linkedin.com/in/davide-polizzi-dev
          </a>

          <a
            href="https://github.com/Davipol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaGithub className="w-12 h-12 mb-2" />
            github.com/Davipol
          </a>

          <a
            href="mailto:davide.polizzi15@gmail.com"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaEnvelope className="w-12 h-12 mb-2" />
            davide.polizzi15@gmail.com
          </a>

          <a
            href="tel:+447903113314"
            className="flex flex-col items-center hover:text-blue-400"
          >
            <FaPhone className="w-12 h-12 mb-2" />
            +44 7903 113 314
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
