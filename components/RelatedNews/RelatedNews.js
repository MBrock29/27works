import { useState } from "react";
import data from "./data.json";
import { CarouselCard } from "./CarouselCard";
import Image from "next/image";

export const RelatedNews = () => {
  const [current, setCurrent] = useState(0);
  const imageWidth = 320;
  const visibleImages = 4;

  const previousImage = () => {
    setCurrent((current) => (current - 1 < 0 ? 0 : current - 1));
  };

  const nextImage = () => {
    setCurrent((current) =>
      current + 1 >= data.data.length - visibleImages ? current : current + 1
    );
  };

  return (
    <div className="relative w-[1234px] mx-auto">
      {current > 0 && (
        <button
          onClick={previousImage}
          className="absolute left-0 top-1/2 transform -translate-y-3/4 -translate-x-1/2 bg-transparent rotate-180"
        >
          <Image src="nextButton.svg" height={30} width={30} />
        </button>
      )}
      {current < data.data.length - visibleImages && (
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-3/4 translate-x-1/2 bg-transparent"
        >
          <Image src="nextButton.svg" height={30} width={30} />
        </button>
      )}
      <div className="overflow-x-hidden my-12 mx-auto carousel">
        <div
          className="flex gap-5"
          style={{ marginLeft: `-${current * (imageWidth + 20)}px` }}
        >
          {data.data.map((item, index) => (
            <CarouselCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
