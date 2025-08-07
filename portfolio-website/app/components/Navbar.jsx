import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full px-4 py-4 border-t-indigo-900 border-b border-gray-400 shadow z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto w-full">
          <ul className="flex flex-wrap justify-center items-center gap-4 text-lg font-bold text-blue-200">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:underline">
                Contacts
              </Link>
            </li>
            <li>
              <a
                download
                href="./CV -Davide Polizzi Software developer.pdf"
                className="text-fuchsia-400 border-2 border-purple-700 rounded-lg hover:text-fuchsia-600 hover:border-purple-400 px-3 py-1 m-1.5"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
