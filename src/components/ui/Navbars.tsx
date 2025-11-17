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

              /* Desktop */
              w-[210px] h-[50px]

              /* Tablet */
              sm:w-[240px] sm:h-[45px] sm:gap-6

              /* Mobile */
              xs:w-[200px] xs:h-[42px] xs:gap-5
            "
          >
            <FaHome className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 cursor-pointer" />
            <IoMdSettings className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 cursor-pointer" />
            <FaFileAlt className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 cursor-pointer" />
            <FaQuestion className="text-[#3e2f56] w-6 h-6 xs:w-5 xs:h-5 cursor-pointer" />
          </div>

          {/* CONTACT BUTTON — RESPONSIVE */}
          <Button
            className="
            mr-2
              relative rounded-[50px] overflow-hidden flex items-center justify-center
              bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)]

              /* Desktop */
              w-[100px] h-[50px]

              /* Tablet */
              sm:w-[140px] sm:h-[45px]

              /* Mobile → ICON BUTTON */
              xs:w-[55px] xs:h-[42px]
            "
          >
            {/* Desktop & Tablet Text */}
            <span className="hidden xs:hidden sm:block font-medium text-white text-sm tracking-[-0.48px] leading-4 font-[Geist,Helvetica]">
              Contact
            </span>

            {/* Mobile Icon */}
            <FaPhone className="block sm:hidden text-white w-5 h-5" />

            {/* Shine effect */}
            <div className="absolute h-[200%] top-[-120%] -left-10 w-[40px] bg-[#ffffff4c] rotate-45 blur-[2px] pointer-events-none" />
          </Button>

        </div>
      </div>
    </div>
  );
};
