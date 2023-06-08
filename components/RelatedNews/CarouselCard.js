import React from "react";
import Image from "next/image";

export const CarouselCard = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] border-grey border-2 border-opacity-30 rounded-2xl corner mb-10 overflow-hidden">
      <Image src={data.image} height={176} width={320} />
      <h2 className="text-white px-4 text-lg font-bold mb-2 uppercase">
        {data.title}
      </h2>
      <p className="text-grey px-4 mb-4">{data.text}</p>
    </div>
  );
};
