import React from "react";

export const NavbarLink = ({ text, theme }) => {
  return (
    <>
      {theme === "secondary" ? (
        <a className="text-yellow pr-4 flex items-center">{text}</a>
      ) : (
        <a className="text-white pr-4 flex items-center">{text}</a>
      )}
    </>
  );
};
