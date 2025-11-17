import React from "react";
import { Badge } from "../../../../components/ui/badge";

const headingWords = [
  { text: "Crafted", row: 1 },
  { text: "to", row: 1 },
  { text: "Impress,", row: 1 },
  { text: "Built", row: 2 },
  { text: "to", row: 2 },
  { text: "Perform", row: 2 },
];

const projectImages = [
  {
    src: "/image---sienna-desktop-ui.png",
    alt: "Sienna Desktop UI Project 1",
    title: "Project One",
  },
  {
    src: "/image---sienna-desktop-ui-1.png",
    alt: "Sienna Desktop UI Project 2",
    title: "Project Two",
  },
  {
    src: "/image---sienna-desktop-ui-2.png",
    alt: "Sienna Desktop UI Project 3",
    title: "Project Three",
  },
  {
    src: "/image---sienna-desktop-ui-3.png",
    alt: "Sienna Desktop UI Project 4",
    title: "Project Four",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-16 px-4">
  {/* Heading Section */}
  <div className="flex flex-col items-center gap-6">
    <Badge className="h-auto rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(187deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] px-3.5 py-[5px] border-0">
      <span className="font-normal text-white text-sm tracking-[-0.14px] font-[Geist,Helvetica]">
        Projects
      </span>
    </Badge>

    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 flex-wrap">
  {headingWords
    .filter((word) => word.row === 1)
    .map((word, index) => (
      <h1
        key={`heading-row1-${index}`}
        className="font-medium text-[#3e2f56] text-5xl md:text-6xl text-center tracking-[-2px] font-[Geist,Helvetica]"
      >
        {word.text}
      </h1>
    ))}
</div>


        <div className="flex items-center justify-center gap-2 flex-wrap">
          {headingWords
            .filter((word) => word.row === 2)
            .map((word, index) => (
              <h1
                key={`heading-row2-${index}`}
                className="font-medium text-[#3e2f56] text-5xl md:text-5xl text-center tracking-[-2px] font-[Geist,Helvetica]"
              >
                {word.text}
              </h1>
            ))}
        </div>
      </div>

      <div className="flex flex-col items-center px-2">
        <p className="text-[#707070] text-sm md:text-base text-center leading-[20px] md:leading-[22.4px] font-[Geist,Helvetica]">
          Explore a showcase of designs that blend creativity,
        </p>
        <p className="text-[#707070] text-sm md:text-base text-center leading-[20px] md:leading-[22.4px] font-[Geist,Helvetica]">
          strategy, and seamless execution
        </p>
      </div>
    </div>
  </div>

  {/* Project Grid Section */}
  <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
    {projectImages.map((image, index) => (
      <div
        key={`project-${index}`}
        className="
          relative group 
          w-full 
          h-[260px] sm:h-[340px] md:h-[450px] 
          rounded-[30px] md:rounded-[40px] 
          overflow-hidden cursor-pointer
        "
      >
        {/* Image */}
        <div
          className="
            w-full h-full bg-cover bg-center 
            transition-transform duration-300 
            group-hover:scale-110
          "
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>

        {/* Hover Text Overlay */}
        <div className="
          absolute inset-0 bg-black/50 
          opacity-0 group-hover:opacity-100 
          flex items-center justify-center 
          transition-opacity duration-300
        ">
          <p className="font-[Poppins] font-bold text-white text-xl md:text-2xl">
            {image.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};
