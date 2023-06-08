import React from "react";

export const Logo = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-screen ml-25 mt-4.25"
      style={{
        backgroundImage: `url('/logo.svg')`,
        width: "196px",
        height: "40px",
      }}
    ></div>
  );
};
