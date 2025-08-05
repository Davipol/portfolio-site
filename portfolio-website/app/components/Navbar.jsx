import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-20 bg-gray-700 border-b border-gray-400 shadow z-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-lg font-medium text-black">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="px-4">
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
