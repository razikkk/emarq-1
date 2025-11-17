import React from "react";
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

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[linear-gradient(0deg,rgba(235,236,237,1)_0%,rgba(235,236,237,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="flex-1 relative bg-[#ebeced]">
        <div className="absolute top-0 left-0 w-full h-[760px] opacity-10  bg-cover bg-[50%_50%] pointer-events-none" />

        {/* Top Info Bar */}
        <div className="relative w-full">
          <div className="w-full flex items-center justify-center py-[14px]">
            <div className="h-9 flex items-center gap-6">
              {/* Green Dot + Text */}
              <div className="flex items-center gap-2.5 translate-x-2 translate-y-1">
                <div className="relative h-2 w-2 flex items-center justify-center bg-[#06b300] rounded-full">
                  <div className="absolute h-4 w-4 bg-[#07d10066]  rounded-full" />
                </div>
                <div className="flex items-center justify-center font-normal text-[#3e2f56] text-sm tracking-[-0.14px] leading-[16.8px] whitespace-nowrap font-[Geist,Helvetica]">
                  3 Open slots
                </div>
              </div>

              {/* Divider */}
              <div className="h-full w-px bg-[#c9c9c9]" />

              {/* Social Icons */}
              <div className="flex items-center gap-4 translate-x-3 translate-y-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e2f56] transition-colors"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e2f56] transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3e2f56] transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
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
          className="absolute top-[-74px] left-[70px] w-[340px] h-[240px] object-cover pointer-events-none"
          alt="Emarq logos"
          src="/emarq-logos-04-1.png"
        />
      </div>
      <Navbar/>
    </div>
  );
};
