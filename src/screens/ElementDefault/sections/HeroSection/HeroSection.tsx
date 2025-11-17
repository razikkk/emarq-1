import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const headlineWords = [
  { text: "we", className: "left-[calc(50.00%_-_200px)] top-0 w-3.5 h-[58px]" },
  {
    text: "build",
    className: "left-[calc(50.00%_-_159px)] top-[9px] w-[175px] h-[70px]",
  },
  {
    text: "brands",
    className: "left-[calc(50.00%_+_43px)] -top-px w-[239px] h-[58px]",
  },
  {
    text: "that",
    className: "left-[calc(50.00%_-_245px)] top-[58px] w-[108px] h-[58px]",
  },
  {
    text: "hustle",
    className: "left-[calc(50.00%_-_125px)] top-[58px] w-[164px] h-[58px]",
  },
  {
    text: "as",
    className: "left-[calc(50.00%_+_51px)] top-[58px] w-[63px] h-[58px]",
  },
  {
    text: "hard",
    className: "left-[calc(50.00%_+_125px)] top-[58px] w-[119px] h-[58px]",
  },
  {
    text: "as",
    className: "left-[calc(50.00%_-_125px)] top-[115px] w-[63px] h-[58px]",
  },
  {
    text: "you",
    className: "left-[calc(50.00%_-_51px)] top-[115px] w-[97px] h-[58px]",
  },
  {
    text: "do",
    className: "left-[calc(50.00%_+_57px)] top-[115px] w-[68px] h-[58px]",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full relative flex flex-col items-center py-12">
      <Badge
        variant="secondary"
        className="flex gap-2.5 bg-white rounded-[50px] shadow-[0px_3px_20px_#00000026] px-2.5 py-2 h-auto mb-12"
      >
        <img className="h-3 w-[68px]" alt="Star" src="/star-1.svg" />
        <span className="[font-family:'Geist',Helvetica] font-normal text-[#3e2f56] text-sm tracking-[-0.14px] leading-[16.8px] whitespace-nowrap">
          100+ Satisfied Customers
        </span>
      </Badge>

      <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
  <div className="text-center mt-6">
    <h1 className="font-medium text-[#3e2f56] text-[64px] leading-[1.1] tracking-[-3px] font-[Geist,Helvetica]">
      we build brands <br />
       that hustle as hard <br />
       as you do
    </h1>
  </div>
</div>


        <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px] mb-[1.9px]">
          From bold ideas to seamless design every detail
        </p>
        <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px] mb-8">
          is built to inspire action.
        </p>

        <Button className="relative w-[195px] h-14 rounded-[50px] shadow-[0px_10px_20px_1px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] overflow-hidden">
          <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[-0.48px] leading-4 whitespace-nowrap relative z-10">
            Book an Intro Call
          </span>
          <div className="absolute h-[200.00%] top-[-123.20%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px]" />
        </Button>
      </div>
    </section>
  );
};
