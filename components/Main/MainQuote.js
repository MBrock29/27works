import React from "react";

export const MainQuote = () => {
  return (
    <div className="flex pl-[25px] border-l-[5px] border-yellow mb-7 ">
      <div className="flex flex-col gap-2">
        <p
          style={{
            background:
              "linear-gradient(94.46deg, #F2CB13 20.7%, #FF0036 143.2%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="font-bold text-2xl"
        >
          “25 years. It’s a huge accolade for Radical Motorsport as a race car
          manufacturer and single-make racing series organiser. ‘Project 25’ has
          been designed and will be built to commemorate this milestone and
          showcase the knowledge and skills our UK-based engineering and
          manufacturing firm has to offer.”
        </p>
        <p className="text-sm text-grey">Joe Anwyll, Radical Motorsport CEO</p>
      </div>
    </div>
  );
};
