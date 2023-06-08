import Image from "next/image";
import React from "react";

export const NavbarButton = ({ text }) => {
  return (
    <button className="px-4 py-3 bg-gradient-to-r from-yellow to-darkGold rounded font-bold text-xs uppercase flex items-center">
      {text}
      <Image src="arrow.svg" height={5} width={5} className="ml-[7px]" />
    </button>
  );
};
