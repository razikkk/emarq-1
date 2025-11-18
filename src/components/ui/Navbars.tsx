import React from "react";
import { Button } from "../ui/button";
import { FaQuestion } from "react-icons/fa6";
import { FaFileAlt, FaHome, FaPhone } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 px-4">

      {/* OUTER CONTAINER */}
      <div
        className="
          bg-white rounded-[50px] shadow-[0px_5px_20px_#00000040]
          flex items-center justify-center relative
          
          /* Desktop */
          w-[460px] h-[70px]

          /* Tablets & Mobiles */
          max-w-full
          sm:w-[420px] sm:h-[60px]
          xs:w-full xs:h-[56px]
        "
      >
        {/* INNER WRAPPER */}
        <div
          className="
            flex items-center justify-between

            /* Desktop */
            w-[520px]

            /* Tablet */
            sm:w-[380px]

            /* Mobile */
            xs:w-full xs:px-4
          "
        >

          {/* ICONS GROUP */}
          <div
  className="
    ml-4
    rounded-[50px] bg-gray-200 flex items-center justify-center gap-8
    w-[210px] h-[50px]
    sm:w-[240px] sm:h-[45px] sm:gap-6
    xs:w-[200px] xs:h-[42px] xs:gap-5
  "
>
  {/* HOME */}
  <div className="relative group cursor-pointer" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' })}>
    <FaHome className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 transition-transform duration-200 group-hover:-translate-y-1" />

    {/* Tooltip */}
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      bg-[#3e2f56] text-white text-xs px-2 py-1 rounded opacity-0
      group-hover:opacity-100 transition pointer-events-none hidden sm:block">
      Home
    </span>
  </div>

  {/* SERVICES */}
  <div className="relative group cursor-pointer" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' })}>
    <IoMdSettings className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 transition-transform duration-200 group-hover:-translate-y-1" />

    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      bg-[#3e2f56] text-white text-xs px-2 py-1 rounded opacity-0
      group-hover:opacity-100 transition hidden sm:block">
      Services
    </span>
  </div>

  {/* PROJECTS */}
  <div className="relative group cursor-pointer" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' })}>
    <FaFileAlt className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 transition-transform duration-200 group-hover:-translate-y-1" />

    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      bg-[#3e2f56] text-white text-xs px-2 py-1 rounded opacity-0
      group-hover:opacity-100 transition hidden sm:block">
      Projects
    </span>
  </div>

  {/* FAQ */}
  <div className="relative group cursor-pointer" onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: 'smooth' })}>
    <FaQuestion className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 transition-transform duration-200 group-hover:-translate-y-1" />

    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      bg-[#3e2f56] text-white text-xs px-2 py-1 rounded opacity-0
      group-hover:opacity-100 transition hidden sm:block">
      FAQ
    </span>
  </div>
</div>

          {/* CONTACT BUTTON — RESPONSIVE */}
          <Button
  onClick={() => window.open("https://wa.me/971506568512", "_blank")}
  className="
    mr-2
    relative rounded-[50px] overflow-hidden flex items-center justify-center
    bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)]
    w-[100px] h-[50px]
    sm:w-[140px] sm:h-[45px]
    xs:w-[55px] xs:h-[42px]
  "
>
  <span className="hidden xs:hidden sm:block font-medium text-white text-sm tracking-[-0.48px] leading-4 font-[Geist,Helvetica]">
    Contact
  </span>

  <FaPhone className="block sm:hidden text-white w-5 h-5" />

  <div className="absolute h-[200%] top-[-120%] -left-10 w-[40px] bg-[#ffffff4c] rotate-45 blur-[2px] pointer-events-none" />
</Button>
        </div>
      </div>
    </div>
  );
};
