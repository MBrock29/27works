import Image from "next/image";
import React from "react";

export const MainAuthor = ({ name, date }) => {
  return (
    <div className="flex justify-between items-center mb-7 max-w-[680px]">
      <div className="flex items-center gap-3 text-white">
        <Image src="author.svg" height={42} width={42} />
        <p className="text-base">{name}</p>
        <Image src="ellipse.svg" height={4} width={4} />
        <p className="text-base">{date}</p>
      </div>
      <div className="flex gap-3">
        <div className="border border-grey h-[38px] w-[38px] rounded-full flex justify-center items-center">
          <Image src="save.svg" height={18} width={18} />
        </div>
        <div className="border border-grey h-[38px] w-[38px] rounded-full flex justify-center items-center">
          <Image src="share.svg" height={18} width={18} />
        </div>
      </div>
    </div>
  );
};
