import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    image: "/item---article---desktop.svg",
    type: "image",
  },
  {
    image: "/item---article---desktop-3.svg",
    type: "image",
  },
  {
    image: "/item---article---desktop-2.svg",
    type: "image",
  },
  {
    name: "Sophia Martinez",
    title: "Marketing Director, Elevate Agency",
    avatar: "/sophia-martinez.png",
    testimonial:
      "Emarq delivered a website that exceeded all our expectations. The design is not just visually appealing but strategically structured for maximum impact. Our brand now has a digital presence that truly stands out, making it easier to connect with our audience. The communication throughout the project was excellent, and every revision was handled with precision and care. Truly a five-star experience!",
    rating: 5,
    type: "testimonial",
  },
  {
    image: "/item---article---desktop-4.svg",
    type: "image",
  },
  {
    image: "/item---article---desktop.svg",
    type: "image",
  },
  {
    image: "/item---article---desktop-3.svg",
    type: "image",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-[230px]">
          <Badge className="rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(185deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(185deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] px-[14px] py-[5px] h-auto">
            <span className="[font-family:'Geist',Helvetica] font-normal text-white text-sm tracking-[-0.14px] leading-[16.8px]">
              Testimonials
            </span>
          </Badge>

          <div className="mt-[57px] flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-x-1 max-w-[500px]">
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Voices
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                of
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Trust
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                &
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Success
              </h2>
            </div>

            <p className="mt-[16.5px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              Feedback from clients who turned their ideas into
            </p>
            <p className="mt-[1.9px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              success with my expertise
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-[99px]">
          <div className="flex justify-center">
            <img
              className="w-[115px] h-[60px]"
              alt="Client images"
              src="/client-images.svg"
            />
          </div>

          <div className="mt-[11px] flex flex-col items-center">
            <p className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-base text-center tracking-[-0.48px] leading-4">
              Trusted by Visionaries
            </p>
            <p className="mt-[4px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-sm text-center tracking-[-0.14px] leading-[16.8px]">
              Chosen by Innovators,
            </p>
            <p className="mt-[2px] [font-family:'Geist',Helvetica] font-normal text-[#707070] text-sm text-center tracking-[-0.14px] leading-[16.8px]">
              Built to Inspire
            </p>
          </div>
        </div>

        <Card className="w-full bg-white rounded-[30px] shadow-[0px_10px_20px_#0000001a] border-0">
          <CardContent className="p-2.5 pb-20">
            <div className="w-full flex flex-col gap-[30.5px]">
              <div className="w-full h-[410px] rounded-[25px] overflow-hidden">
                <div className="flex gap-2.5 ml-[-2760px]">
                  {testimonials.map((item, index) =>
                    item.type === "image" ? (
                      <img
                        key={index}
                        className="w-[680px] h-[410px] flex-shrink-0"
                        alt="Item article desktop"
                        src={item.image}
                      />
                    ) : (
                      <div
                        key={index}
                        className="flex flex-col bg-[#ebeced] rounded-[25px] overflow-hidden w-[680px] h-[410px] flex-shrink-0 p-[50px]"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-[60px] h-[60px] rounded-[100px] bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${item.avatar})` }}
                          />
                          <div className="flex flex-col gap-[3px]">
                            <p className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-base tracking-[-0.48px] leading-4">
                              {item.name}
                            </p>
                            <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-sm tracking-[-0.14px] leading-[16.8px]">
                              {item.title}
                            </p>
                          </div>
                        </div>

                        <p className="mt-[30.5px] [font-family:'Geist',Helvetica] font-normal text-[#3e2f56] text-base tracking-[-0.16px] leading-[22.4px]">
                          {item.testimonial}
                        </p>

                        <img
                          className="w-[68px] h-3 mt-[75px]"
                          alt="Star rating"
                          src="/star.svg"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  className="h-10"
                  alt="Slideshow pagination controls"
                  src="/fieldset---slideshow-pagination-controls.svg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
