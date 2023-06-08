import React from "react";
import { MainAuthor } from "./MainAuthor";
import { MainQuote } from "./MainQuote";
import { MainBreadcrumbs } from "./MainBreadcrumbs";

export const Main = () => {
  return (
    <div className="flex flex-col w-full max-w-[820px] pt-[490px]">
      <MainBreadcrumbs />
      <h1 className="uppercase text-yellow text-5xl font-bold max-w-[750px] mb-[19px]">
        Radical unveils track-only 'project 25' racer
      </h1>

      <p className="text-white text-xl max-w-[680px] mb-7">
        Reinforcing its position as one of the world leaders in race car
        engineering, manufacturing and single-make racing series organisers,
        UK-based Radical Motorsport has teased images of its new flagship,
        closed-cockpit track car under the codename of ‘Project 25’, which will
        enter production in Q4 2023.
      </p>

      <MainAuthor name="John Smith" date="14th November, 2022" />

      <p className="text-grey text-lg max-w-[680px] mb-7">
        ‘Project 25’ has been designed to showcase the culmination of knowledge
        that Radical Motorsport has amassed through producing world-class racing
        cars from its UK premises for over a quarter of a century, currently
        present in 21 countries worldwide through its 33-strong dealer network.
        With exact specification details limited at the time of writing, the
        race car manufacturer can reveal that its all-new, track-only model will
        use the company’s signature spaceframe chassis to deliver outstanding
        driver engagement and feedback synonymous with the Radical brand.
        ‘Project 25’ is confirmed to be powered by Radical Performance Engine’s
        V6 bi-turbo motor, with an expected power output of 850 bhp.
      </p>

      <p className="text-grey text-lg max-w-[680px] mb-7">
        Evolving from the prominent RXC model line, ‘Project 25’ was previewed
        to VIP guests at Radical’s end of season World Finals in Las Vegas on
        Sunday 13 November. Interested parties are advised to contact their
        local dealer or register interest through Radical Motorsport’s microsite
        from today, www.wemakeracers.com. With production scheduled to start Q4
        2023, and first customer deliveries by the end of 2023, ‘Project 25’
        will be limited to just 25 models.
      </p>

      <MainQuote />

      <p className="text-grey text-lg max-w-[680px] mb-7">
        Radical Motorsport’s team will confirm more details of its ‘Project 25’
        track-only model in early 2023. The last new model to be released from
        the Radical stable, the SR10, was designed, developed, engineered and
        manufactured in the midst of the recent pandemic, with the first model
        having been produced in December 2020. Today it is known as the brand’s
        fastest-selling model, selling over 100 units and counting.
      </p>

      <p className="text-grey text-lg max-w-[680px] mb-[95px]">
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
        odio dui. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Etiam porta sem malesuada magna mollis euismod.
      </p>
    </div>
  );
};
