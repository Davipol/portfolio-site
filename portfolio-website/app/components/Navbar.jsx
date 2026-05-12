import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full px-4 py-4 z-50 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid #2d1b69",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold">
          <li>
            <Link
              href="/"
              className="text-purple-200 hover:text-fuchsia-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-purple-200 hover:text-fuchsia-300 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-purple-200 hover:text-fuchsia-300 transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="text-purple-200 hover:text-fuchsia-300 transition-colors duration-200"
            >
              Contacts
            </Link>
          </li>
          <li>
            <a
              download
              href="/CV_Davide Polizzi_Software Developer.pdf"
              className="font-bold py-1 px-4 rounded-lg text-sm cursor-pointer btn-fuchsia"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
