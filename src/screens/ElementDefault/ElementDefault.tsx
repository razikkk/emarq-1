import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { ContactSection } from "./sections/ContactSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Navbar } from "../../components/ui/Navbars";
import AOS from "aos";
import "aos/dist/aos.css";


export const ElementDefault = (): JSX.Element => {


useEffect(() => {
  AOS.init();
}, []);
  return (
    <div className="w-full min-h-screen flex flex-col bg-[linear-gradient(0deg,rgba(235,236,237,1)_0%,rgba(235,236,237,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] overflow-hidden">
      <div className="flex-1 relative bg-[#ebeced]">
        <div className="absolute top-0 left-0 w-full h-[760px] opacity-10  bg-cover bg-[50%_50%] pointer-events-none" />

        {/* Top Info Bar */}
    
        <div className="relative w-full">
        <div className="w-full flex flex-col items-center justify-center py-[14px] 
                  md:flex-row md:gap-6">

    {/* Logo - show on mobile */}
    <img
      src="/emarq-logos-04-1.png"
      alt="Logo"
      className="w-[130px] h-auto mb-2 md:hidden"
    />

    {/* Left Section: Slots + Divider */}
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">

      {/* Green Dot + Text */}
      <div className="flex items-center gap-2.5 translate-x-2 translate-y-1">
        <div className="relative h-2 w-2 flex items-center justify-center bg-[#06b300] rounded-full">
          <div className="absolute h-4 w-4 bg-[#07d10066] rounded-full"/>
        </div>
        <div className="font-normal text-[#3e2f56] text-sm leading-[16.8px] whitespace-nowrap font-[Geist,Helvetica]">
          3 Open slots
        </div>
      </div>

      {/* Divider — hide on mobile */}
      {/* <div className="hidden md:block h-9 w-px bg-[#c9c9c9]" /> */}
    </div>

    {/* Right Section: Social Icons */}
    <div className="flex items-center gap-4 translate-x-3 translate-y-1 mt-2 md:mt-0">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="w-5 h-5 text-[#3e2f56]" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="w-5 h-5 text-[#3e2f56]" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-5 h-5 text-[#3e2f56]" />
      </a>
    </div>
  </div>

          <HeroSection />

          {/* Contact Button Section */}
          {/* <div className="w-full flex justify-center py-4">
            <div className="w-[700px] h-[66px] relative bg-white rounded-[50px] shadow-[0px_5px_20px_#00000040]">
              <img
                className="absolute w-[490px] h-14 top-[5px] left-[5px]"
                alt="Links"
                src="/links.svg"
              />
              <Button className="absolute w-[195px] h-14 top-[5px] left-[500px] rounded-[50px] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] overflow-hidden h-auto">
                <div className="w-full h-4 flex items-center justify-center overflow-hidden">
                  <div className="font-medium text-white text-base tracking-[-0.48px] leading-4 whitespace-nowrap font-[Geist,Helvetica]">
                    Contact
                  </div>
                </div>
                <div className="absolute h-[200.01%] top-[-123.21%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px] pointer-events-none" />
              </Button>
            </div>
          </div> */}

          <FeaturesSection />
          <MainContentSection />
          {/* <ServicesSection /> */}
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </div>

        {/* Background Logo */}
        <img
  className="absolute top-[-74px] left-[70px] w-[340px] h-[240px] object-cover pointer-events-none hidden md:block"
  alt="Emarq logos"
  src="/emarq-logos-04-1.png"
/>




      </div>
      <Navbar/>
    </div>
  );
};
