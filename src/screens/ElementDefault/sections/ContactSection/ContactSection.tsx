import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center relative pb-20">
      <div className="w-full max-w-2xl"> 
      <Card className="bg-white rounded-[30px] shadow-[0px_10px_20px_#0000001a] border-0">
        <CardContent className="p-2.5">
          <div className="flex flex-col gap-[50px] bg-[#ebeced] rounded-3xl overflow-hidden p-6">
            <header className="flex flex-col items-center gap-[27px]">
              <Badge className="h-[27px] px-3.5 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(187deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(187deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0">
                <span className="font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px] [font-family:'Geist',Helvetica]">
                  Contact
                </span>
              </Badge>

              <div className="flex flex-col items-center">
                <h2 className="flex items-center justify-center gap-2">
                  <span className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                    Get
                  </span>
                  <span className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                    in
                  </span>
                  <span className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                    Touch
                  </span>
                </h2>

                <p className="mt-[16.5px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
                  Have a project in mind? I&apos;ll respond
                </p>
                <p className="mt-[1.9px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
                  within 6 hours.
                </p>
              </div>
            </header>

            <div className="flex flex-col gap-2.5 mx-[50px]">
              <Input
                placeholder="Enter your name"
                className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] font-normal text-base tracking-[-0.48px] placeholder:text-[#bababa]"
              />

              <Input
                placeholder="Enter your email"
                type="email"
                className="h-14 bg-white rounded-[50px] shadow-[0px_5px_20px_#0000001a] border-[#8888881a] px-[30px] [font-family:'Geist',Helvetica] font-normal text-base tracking-[-0.48px] placeholder:text-[#bababa]"
              />

              <Button className="h-14 rounded-[50px] shadow-[0px_10px_20px_#00000080] bg-[linear-gradient(182deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(182deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] border-0">
                <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base text-center tracking-[-0.48px] leading-4">
                  Send message
                </span>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-[5px]">
              <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#707070] text-base text-center tracking-[-0.48px] leading-4">
                Let&#39;s Connect
              </h3>

              <div className="flex flex-col items-center gap-[5px] mt-[19px]">
                <a
                  href="tel:+1234567890"
                  className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-xl text-center tracking-[-1.00px] leading-6"
                >
                  +12 3456789010
                </a>

                <a
                  href="mailto:info@emarq.ae"
                  className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-4xl text-center tracking-[-1.80px] leading-[43.2px]"
                >
                  info@emarq.ae
                </a>
              </div>
            </div>

            <img
              className="h-9 w-[118px] self-center"
              alt="Social icon"
              src="/social-icon.svg"
            />
          </div>

          <footer className="flex items-center justify-center mt-5 mb-[10.2px]">
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#3e2f56] text-sm tracking-[-0.14px] leading-[16.8px]">
              © Copyright 2024. Rights Reserved.
            </p>
          </footer>
        </CardContent>
      </Card>
      </div>
    </section>
  );
};
