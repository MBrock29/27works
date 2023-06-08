import React from "react";
import { NavbarLink } from "./NavbarLink";
import { NavbarButton } from "./NavbarButton";

export const Navbar = () => {
  return (
    <div className="flex">
      <NavbarLink text="News" theme="secondary" />
      <NavbarLink text="Cars" />
      <NavbarLink text="Experience" />
      <NavbarLink text="Go Racing" />
      <NavbarLink text="Our Story" />
      <NavbarLink text="Merchandise" />
      <NavbarButton text="Build your car" />
    </div>
  );
};
