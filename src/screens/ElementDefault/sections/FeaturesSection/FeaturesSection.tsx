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
    {/* Header */}
    <div className="flex flex-col items-center mb-16">
      <Badge className="mb-8 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0 px-[14px] py-[5px] h-auto">
        <span className="font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px]">
          Services
        </span>
      </Badge>

      <div className="flex flex-col items-center mb-6">
        {/* Mobile smaller text */}
        <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
          <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
            Tailored
          </h2>
          <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
            Solutions,
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
            Impactful
          </h2>
          <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
            Result
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[#707070] text-sm sm:text-base text-center tracking-[-0.14px] leading-[20px] sm:leading-[22.4px]">
          Delivering innovative, results-driven solutions that
        </p>
        <p className="text-[#707070] text-sm sm:text-base text-center tracking-[-0.14px] leading-[20px] sm:leading-[22.4px]">
          elevate your brand and business
        </p>
      </div>
    </div>

    {/* Services Grid */}
    <div
  className="
    grid 
    grid-cols-1      /* Mobile = 1 per row */
    md:grid-cols-2   /* Desktop = 2 per row */
    gap-10 
    lg:gap-[65px] 
    place-items-center
  "
>
  {servicesData.map((service, index) => (
    <Card
      key={index}
      className="
        bg-[#3e2f56] 
        rounded-[30px] 
        shadow-[0px_5px_20px_#0000001a] 
        w-[90%] 
        sm:w-[350px] 
        md:w-[400px] 
        border-0 
        h-[260px] 
        sm:h-[280px]
      "
    >
      <CardContent className="flex items-center justify-center h-full p-0">
        <div className="flex flex-col items-center">
          <img
            className="
              w-[140px] 
              sm:w-[160px] 
              md:w-[180px] 
              h-28 
              sm:h-32 
              md:h-36 
              mb-6
            "
            alt={service.title}
            src={service.icon}
          />
          <span className="font-medium text-white text-base tracking-[-0.48px] leading-4">
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
