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
      <nav className="w-full-fixed px-5 flex items-center justify-between">
        <ul className="list-none flex items-center gap-8 rounded-full px-12 py-3">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
