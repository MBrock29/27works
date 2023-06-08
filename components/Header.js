import React from "react";
import { Logo } from "./Navbar/NavbarLogo";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  return (
    <div className="flex items-center pr-25 justify-between pt-5">
      <Logo />
      <Navbar />
    </div>
  );
};
