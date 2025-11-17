import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const headingWords = [
  { text: "Join", className: "w-[88px]" },
  { text: "100+", className: "w-[101px]" },
  { text: "Experts", className: "w-[156px]" },
  { text: "Taking", className: "w-[133px]" },
  { text: "Their", className: "w-[101px]" },
  { text: "Brand", className: "w-[122px]" },
  { text: "to", className: "w-[42px]" },
  { text: "the", className: "w-[68px]" },
  { text: "Next", className: "w-[97px]" },
  { text: "Level", className: "w-[107px]" },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <Card className="w-full max-w-[600px] bg-white rounded-[30px] shadow-[0px_10px_20px_#0000001a]">
        <CardContent className="p-2.5">
          <div className="bg-[#ebeced] rounded-[20px] overflow-hidden px-10 py-20">
            <div className="flex flex-col items-center gap-8">
              <Badge className="h-auto rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(185deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] px-3.5 py-[5px] border-0">
                <span className="[font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px]">
                  Newsletter
                </span>
              </Badge>

              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-0 max-w-[600px]">
                  {headingWords.map((word, index) => (
                    <div
                      key={index}
                      className={`flex justify-center ${word.className}`}
                    >
                      <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                        {word.text}
                      </h2>
                    </div>
                  ))}
                </div>

                <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px] max-w-[432px]">
                  Unlock top-tier design and scale your brand with confidence
                </p>
              </div>

              <div className="w-full max-w-[500px] relative">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] pr-[210px] pl-[30px] [font-family:'Geist',Helvetica] font-normal text-base tracking-[-0.48px] placeholder:text-[#bababa]"
                  />
                  <Button className="absolute top-0 right-0 h-14 w-[195px] rounded-[50px] shadow-[0px_10px_20px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(186deg,rgba(62,47,86,0.9)_0%,rgba(62,47,86,0.9)_100%)] overflow-hidden">
                    <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base text-center tracking-[-0.48px] leading-4 relative z-10">
                      Subscribe
                    </span>
                    <div className="absolute h-[200%] top-[-123.22%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
