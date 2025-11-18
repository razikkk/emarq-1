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

    const message = `Hello, my name is ${name}.
My email is: ${email}.
I want to get in touch with Emarq.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  return (
<section className="w-full flex justify-center relative pb-20">
  <div className="w-full max-w-2xl">
    <Card 
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      className="bg-white rounded-[30px] shadow-[0px_10px_20px_#0000001a] border-0"
    >
      <CardContent className="p-2.5">
        <div className="flex flex-col gap-[50px] bg-[#ebeced] rounded-3xl overflow-hidden p-6">

          {/* Header */}
          <header className="flex flex-col items-center gap-[27px]">

            {/* Badge */}
            <Badge
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="800"
              className="h-[27px] px-3.5 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(187deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0"
            >
              <span className="font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px] [font-family:'Geist',Helvetica]">
                Contact
              </span>
            </Badge>

            {/* Heading */}
            <div className="flex flex-col items-center">
              <h2 className="flex items-center justify-center gap-2">
                <span
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl tracking-[-2.40px]"
                >
                  Get
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl tracking-[-2.40px]"
                >
                  in
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="800"
                  className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl tracking-[-2.40px]"
                >
                  Touch
                </span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="800"
                className="mt-[16.5px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center"
              >
                Have a project in mind? we&apos;ll respond
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
                className="[font-family:'Geist',Helvetica] font-normal text-[#707070] mt-[1.9px] text-base text-center"
              >
                within 6 hours.
              </p>
            </div>
          </header>

          {/* Form */}
          <div className="flex flex-col gap-2.5 mx-[50px]">

      <Input
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] placeholder:text-[#bababa]"
      />

      <Input
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] placeholder:text-[#bababa]"
      />

      <Button
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800"
        onClick={sendToWhatsApp}
        className="h-14 rounded-[50px] shadow-[0px_10px_20px_#00000080] bg-[linear-gradient(182deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0"
      >
        <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
          Send message
        </span>
      </Button>

    </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-[5px]">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="[font-family:'Geist',Helvetica] font-medium text-[#707070] text-base text-center"
            >
              Let&apos;s Connect
            </h3>

            <div className="flex flex-col items-center gap-[5px] mt-[19px]">
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                href="tel:+1234567890"
                className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-xl tracking-[-1.00px]"
              >
                971506568512
              </a>

              <a
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                href="mailto:info@emarq.ae"
                className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-4xl tracking-[-1.80px]"
              >
                info@emarq.ae
              </a>
            </div>
          </div>

          {/* <img
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="h-9 w-[118px] self-center"
            alt="Social icon"
            src="/social-icon.svg"
          /> */}
            <div className="flex justify-center gap-4 translate-x-3 translate-y-1 mt-2 md:mt-0">
    <a
  href="https://wa.me/971506568512"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="w-5 h-5 text-[#3e2f56]" />
</a>
<a
  href="mailto:Info@emarq.ae"
  target="_blank"
  rel="noopener noreferrer"
>
  <BiLogoGmail className="w-5 h-5 text-[#3e2f56]" />
</a>

      <a href="https://www.instagram.com/emarq.ae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-5 h-5 text-[#3e2f56]" />
      </a>
    </div>
        </div>

        {/* Footer */}
        <footer
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="flex items-center justify-center mt-5 mb-[10.2px]"
        >
          <p className="[font-family:'Geist',Helvetica] text-[#3e2f56] text-sm">
            © Copyright {new Date().getFullYear()}. Rights Reserved.
          </p>
        </footer>
      </CardContent>
    </Card>
  </div>
</section>

  );
};
