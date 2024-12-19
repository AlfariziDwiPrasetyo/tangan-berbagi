import Image from "next/image";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { navMenu } from "@/lib/data";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center gap-3 border border-b-2 px-5">
        <Image src={"/images/logo.svg"} width={80} height={80} alt="nav-logo" />
        <ul className="hidden md:flex justify-center gap-3">
          {navMenu.map((menu, key) => (
            <a key={key} href={menu.url}>
              <li>{menu.name}</li>
            </a>
          ))}
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
}

export default Navbar;
