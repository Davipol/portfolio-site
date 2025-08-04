import React from "react";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TabGroup,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <nav className="py-4 shadow bg-amber-50">
        <div className="flex justify-center">
          <ul className=" list-none flex gap-15 text-lg font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="px-4">
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
