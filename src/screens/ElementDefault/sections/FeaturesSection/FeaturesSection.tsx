import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import FadeInView from "../../../../animations/FadeInView";

const servicesData = [
  {
    title: "Website Design",
    description: "Modern, fast, and high-converting websites designed to match your brand and boost results.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "On-site Shooting",
    description: "Professional photo and video shoots tailored for businesses, products, and customer experiences.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Digital Marketing",
    description: "Performance-driven marketing strategies to increase visibility, traffic, and sales across all platforms.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Branding",
    description: "Build a strong identity with brand strategy, visuals, and guidelines that set you apart.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    )
  },
  {
    title: "Social Media Management",
    description: "End-to-end content creation, posting, and engagement to grow your audience consistently.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  },
  {
    title: "Logos",
    description: "Unique, memorable logo designs crafted to represent your brand’s personality perfectly.",
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  }
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section id="services" className="w-full py-20 px-4 bg-[#E8C1C5]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20">

          {/* Badge */}
          <FadeInView delay={0.2}>
            <Badge className="mb-8 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0 px-[14px] py-[5px] h-auto">
              <span className="font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px]">
                Services
              </span>
            </Badge>
          </FadeInView>

          <div className="flex flex-col items-center mb-6">
            <FadeInView delay={0.35}>
              <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
                  Tailored Solutions,
                </h2>
              </div>
            </FadeInView>

            <FadeInView delay={0.55}>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <h2 className="font-medium text-[#3e2f56] text-5xl sm:text-4xl md:text-5xl text-center tracking-[-2px] leading-tight">
                  Impactful Results
                </h2>
              </div>
            </FadeInView>
          </div>

          {/* Paragraphs */}
          <FadeInView delay={0.8}>
            <p className="text-[#707070] text-sm sm:text-base text-center tracking-[-0.14px] leading-[20px] sm:leading-[22.4px] max-w-xl">
              Delivering innovative, results-driven solutions that elevate your brand and business
            </p>
          </FadeInView>
        </div>

        {/* Scaled & Deepened Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-16">
          {servicesData.map((service, index) => (
            <FadeInView key={index} delay={0.2 + index * 0.1}>
              {/* Grand engaging card container wrapper */}
              <div className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 rounded-[32px] bg-white border border-gray-100/80 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(62,47,86,0.1)] hover:border-[#3e2f56]/20 overflow-hidden min-h-[180px]">
                
                {/* Visual Accent Bar inside the card frame */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gray-100 transition-colors duration-300 group-hover:bg-[#3e2f56]" />

                {/* Engaging Primary Icon Orb Element */}
                <div className="flex items-center justify-center shrink-0 w-14 h-14 rounded-2xl bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] shadow-[0px_6px_15px_rgba(62,47,86,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                {/* Typography Information Block */}
                <div className="flex flex-col mt-2 sm:mt-0">
                  <h3 className="font-semibold text-[#3e2f56] text-2xl tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#3e2f56]/90">
                    {service.title}
                  </h3>
                  <p className="text-[#707070] text-[15px] leading-relaxed tracking-wide font-normal">
                    {service.description}
                  </p>
                </div>

              </div>
            </FadeInView>
          ))}
        </div>

        {/* Centered Engaging Action Button */}
        <div className="flex justify-center">
          <FadeInView delay={0.4}>
            <Button className="group relative w-[210px] h-14 rounded-[50px] shadow-[0px_10px_25px_rgba(62,47,86,0.4)] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden border-0 gap-2 flex items-center justify-center">
              
              <span className="font-medium text-white text-base tracking-[-0.48px] [font-family:'Geist',Helvetica]">
                Discover More
              </span>
              
              {/* Dynamic Animated Arrow Signifier */}
              <svg 
                className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>

              {/* Shimmer Light Accent Frame */}
              {/* <div className="absolute h-[200%] top-[-123.21%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px] pointer-events-none transition-transform duration-1000 group-hover:translate-x-[350px]" /> */}
            </Button>
          </FadeInView>
        </div>

      </div>
    </section>
  );
};