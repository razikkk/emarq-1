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
    <section className="w-full relative flex flex-col items-center py-10 md:py-16 px-4">

  {/* Badge */}
  <Badge
    variant="secondary"
    className="flex gap-2.5 bg-white rounded-[50px] shadow-[0px_3px_20px_#00000026] 
               px-3 py-2 h-auto mb-8 md:mb-12"
  >
    <img className="h-3 w-[68px]" alt="Star" src="/star-1.svg" />
    <span className="font-[Geist,Helvetica] font-normal text-[#3e2f56] 
                     text-xs sm:text-sm leading-[1.4] whitespace-nowrap">
      100+ Satisfied Customers
    </span>
  </Badge>

  {/* Heading */}
  <div className="w-full flex flex-col items-center text-center">

<h1
  className="
    font-[Geist,Helvetica] font-medium text-[#3e2f56] 
    leading-[1.15] tracking-[-1.2px]
    text-[32px]
    sm:text-[42px]
    md:text-[56px]
    lg:text-[64px]
  "
>
  <span 
    className="block opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
  >
    we build brands
  </span>

  <span 
    className="block opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.2s]"
  >
    that hustle as hard
  </span>

  <span 
    className="block opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.4s]"
  >
    as you do
  </span>
</h1>

</div>


  {/* Subtext */}
  <p className="font-[Geist,Helvetica] font-normal text-[#707070] text-center 
                 text-sm sm:text-base leading-[1.4] mt-4 
                 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
  From bold ideas to seamless design every detail
</p>

<p className="font-[Geist,Helvetica] font-normal text-[#707070] text-center 
                 text-sm sm:text-base leading-[1.4] mb-8
                 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.2s]">
  is built to inspire action.
</p>


  {/* Button */}
  <Button
  className="
    relative rounded-[50px] overflow-hidden shadow-[0px_10px_20px_1px_#00000080]
    bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)]
    
    w-[180px] h-12 text-sm    
    sm:w-[195px] sm:h-14 sm:text-base
    opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.6s]
  "
>
<a href="mailto:Info@emarq.ae">
  <span className="font-[Geist,Helvetica] font-medium text-white whitespace-nowrap relative z-10">
    Book a Consultation
  </span>
</a>

  {/* Shine effect */}
  <div className="absolute h-[200%] top-[-123%] -left-14 w-[50px] 
                  bg-[#ffffff4c] rotate-45 blur-[2.5px]"/>
</Button>

</section>

  );
};
