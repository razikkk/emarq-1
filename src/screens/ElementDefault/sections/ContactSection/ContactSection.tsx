import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export const ContactSection = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendToWhatsApp = () => {
    const phone = "971506568512";
    const message = `Hello, my name is ${name}.\nMy email is: ${email}.\nI want to get in touch with Emarq.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full flex justify-center relative pb-20 z-10">
      <div className="w-full max-w-2xl px-4">
        <Card 
          data-aos="fade-up"
          data-aos-delay="50"
          className="bg-white rounded-[30px] shadow-[0px_10px_20px_#0000001a] border-0 overflow-hidden"
        >
          <CardContent className="p-2.5">
            <div className="flex flex-col gap-[40px] bg-[#ebeced] rounded-3xl p-6">

              {/* Header */}
              <header className="flex flex-col items-center gap-[20px]">
                {/* Badge */}
                <Badge
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="h-[27px] px-3.5 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(187deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0"
                >
                  <span className="font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px] [font-family:'Geist',Helvetica]">
                    Contact
                  </span>
                </Badge>

                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                  <h2 className="flex items-center justify-center gap-2 flex-wrap" data-aos="fade-up" data-aos-delay="150">
                    <span className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl tracking-[-2.40px]">
                      Get in Touch
                    </span>
                  </h2>

                  <p data-aos="fade-up" data-aos-delay="200" className="mt-4 [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base">
                    Have a project in mind? we&apos;ll respond within 6 hours.
                  </p>
                </div>
              </header>

              {/* Form Content Controls */}
              <div className="flex flex-col gap-3.5 max-w-md w-full mx-auto" data-aos="fade-up" data-aos-delay="250">
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] placeholder:text-[#bababa]"
                />

                <Input
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] placeholder:text-[#bababa]"
                />

                <Button
                  onClick={sendToWhatsApp}
                  className="h-14 rounded-[50px] shadow-[0px_10px_20px_#00000080] bg-[linear-gradient(182deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0"
                >
                  <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
                    Send message
                  </span>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center gap-[5px]" data-aos="fade-up" data-aos-delay="300">
                <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#707070] text-base text-center">
                  Let&apos;s Connect
                </h3>

                <div className="flex flex-col items-center gap-[5px] mt-4">
                  <a href="tel:+971506568512" className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-xl tracking-[-1.00px] hover:underline">
                    971506568512
                  </a>

                  <a href="mailto:info@emarq.ae" className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-3xl sm:text-4xl tracking-[-1.80px] hover:underlinebreak-all text-center">
                    info@emarq.ae
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex justify-center gap-6 mt-4" data-aos="fade-up" data-aos-delay="350">
                <a href="https://wa.me/971506568512" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-5 h-5 text-[#3e2f56]" />
                </a>
                <a href="mailto:Info@emarq.ae" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <BiLogoGmail className="w-5 h-5 text-[#3e2f56]" />
                </a>
                <a href="https://www.instagram.com/emarq.ae" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <FaInstagram className="w-5 h-5 text-[#3e2f56]" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="flex items-center justify-center mt-6 mb-2">
              <p className="[font-family:'Geist',Helvetica] text-[#3e2f56] text-sm opacity-80">
                &copy; Copyright {new Date().getFullYear()}. Rights Reserved.
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};