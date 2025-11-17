import React from "react";
import { Button } from "../ui/button";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaQuestion } from "react-icons/fa6";
import { FaFileAlt, FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const Navbar = () => {
  return (
<div className="fixed bottom-4 left-0 w-full flex justify-center z-50">
  <div className="w-[560px] h-[70px] relative bg-white rounded-[50px] shadow-[0px_5px_20px_#00000040] flex items-center justify-center">

    {/* INNER WRAPPER TO CENTER EVERYTHING */}
    <div className="flex items-center justify-between w-[520px]">

      {/* ICON CONTAINER */}
      <div className="w-[310px] h-[50px] rounded-[50px] bg-gray-200 flex items-center justify-center gap-8">
      <FaHome className="text-[#3e2f56] w-6 h-6 cursor-pointer" />

        <IoMdSettings className="text-[#3e2f56] w-6 h-6 cursor-pointer" />
        <FaFileAlt className="text-[#3e2f56] w-6 h-6 cursor-pointer" />
        <FaQuestion className="text-[#3e2f56] w-6 h-6 cursor-pointer" />
      </div>

      {/* CONTACT BUTTON */}
      <Button className="relative w-[180px] h-[50px] rounded-[50px] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] overflow-hidden flex items-center justify-center">
  <div className="font-medium text-white text-sm tracking-[-0.48px] leading-4 whitespace-nowrap font-[Geist,Helvetica]">
    Contact
  </div>
  <div className="absolute h-[200%] top-[-120%] -left-10 w-[40px] bg-[#ffffff4c] rotate-45 blur-[2px] pointer-events-none" />
</Button>


    </div>

  </div>
</div>

  );
};
