import { useState } from "react";
import data from "./data.json";
import { CarouselCard } from "./CarouselCard";
import Image from "next/image";

export const RelatedNews = () => {
  const [current, setCurrent] = useState(0);
  const imageWidth = 340;
  const visibleImages = 4;

  const previousImage = () => {
    setCurrent((current) => (current - 1 < 0 ? 0 : current - 1));
  };

  const nextImage = () => {
    setCurrent((current) =>
      current + 1 > data.data.length - visibleImages ? current : current + 1
    );
  };

  return (
    <div className="relative w-[1234px] mx-auto">
      <button
        onClick={previousImage}
        disabled={current === 0}
        className="absolute left-0 top-1/2 transform -translate-y-[+100%] -translate-x-1/2 bg-transparent rotate-180"
      >
        <Image src="nextButton.svg" height={30} width={30} />
      </button>
      <button
        onClick={nextImage}
        disabled={current === data.data.length - 1}
        className="absolute right-0 top-1/2 transform -translate-y-[+100%] translate-x-1/2 bg-transparent"
      >
        <Image src="nextButton.svg" height={30} width={30} />
      </button>
      <div className="overflow-x-hidden my-12 mx-auto carousel">
        <div
          className="flex gap-5"
          style={{ marginLeft: `-${current * imageWidth}px` }}
        >
          {data.data.map((item, index) => (
            <CarouselCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
