import React from "react";

export const NavbarButton = ({ text }) => {
  return (
    <button className="px-4 py-3 bg-gradient-to-r from-yellow to-darkGold rounded font-bold text-xs uppercase">
      {text}
      {/* <img src="/public/arrow.svg" /> */}
    </button>
  );
};
