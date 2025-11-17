import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "How does the design process work?",
    answer: "",
  },
  {
    id: "item-2",
    question: "What if I need more revisions?",
    answer: "",
  },
  {
    id: "item-3",
    question: "How long does it take to complete a request?",
    answer: "",
  },
  {
    id: "item-4",
    question:
      "What's the difference between the Standard and Enterprise plans?",
    answer: "",
  },
  {
    id: "item-5",
    question: "How do we communicate throughout the project?",
    answer: "",
  },
  {
    id: "item-6",
    question: "Can I pause or cancel my subscription anytime?",
    answer: "",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-[700px] mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Badge className="mb-7 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(190deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] text-white border-0 px-3.5 py-1.5 h-auto">
            <span className="[font-family:'Geist',Helvetica] font-normal text-sm tracking-[-0.14px] leading-[16.8px]">
              FAQ
            </span>
          </Badge>

          <div className="flex flex-col items-center mb-4">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Frequently
              </h2>
              <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
                Asked
              </h2>
            </div>
            <h2 className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]">
              Questions
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              Everything you need to know before
            </p>
            <p className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]">
              getting started
            </p>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2.5 mb-20"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-white rounded-[40px] shadow-[0px_5px_20px_#0000001a] border-0 px-[30px] overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-5 [&[data-state=open]>div]:bg-[#ebeced] [&[data-state=open]>div>div:last-child]:rotate-0 [&[data-state=closed]>div]:bg-[#ebeced]">
                <span className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-xl tracking-[-1.00px] leading-6 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col items-center gap-5">
          <p className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-base text-center tracking-[-0.48px] leading-4">
            Can&apos;t find your answer?
          </p>

          <Button className="relative w-[195px] h-14 rounded-[50px] overflow-hidden shadow-[0px_10px_20px_1px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)]">
            <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[-0.48px] leading-4">
              Send me an email
            </span>
            <div className="absolute h-[200%] top-[-123.19%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
