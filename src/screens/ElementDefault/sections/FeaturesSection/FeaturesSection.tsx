import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    icon: "/folder-4.svg",
    title: "Website Design",
  },
  {
    icon: "/folder-1.svg",
    title: "On-site shooting",
  },
  {
    icon: "/folder-5.svg",
    title: "Digital Marketing",
  },
  {
    icon: "/folder.svg",
    title: "Branding",
  },
  {
    icon: "/folder-2.svg",
    title: "Social Media Managment",
  },
  {
    icon: "/folder-3.svg",
    title: "Logos",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-8 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0 px-[14px] py-[5px] h-auto">
            <span className="[font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px]">
              Services
            </span>
          </Badge>

          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Tailored
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Solutions,
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Impactful
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Result
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              Delivering innovative, results-driven solutions that
            </p>
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              elevate your brand and business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[65px] justify-center">
  {servicesData.map((service, index) => (
    <Card
      key={index}
      className="bg-[#3e2f56] rounded-[30px] shadow-[0px_5px_20px_#0000001a] w-[400px] border-0 h-[280px] mx-auto"
    >
      <CardContent className="flex items-center justify-center h-full p-0">
        <div className="flex flex-col items-center">
          <img
            className="w-[180px] h-36 mb-7"
            alt={service.title}
            src={service.icon}
          />
          <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[-0.48px] leading-4 whitespace-nowrap">
            {service.title}
          </span>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </section>
  );
};
