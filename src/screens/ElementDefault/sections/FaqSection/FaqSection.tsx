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
    question: "What services does Emarq provide as a marketing agency in Dubai?",
    answer: `Emarq offers a full suite of digital marketing and production services in Dubai, including
    branding, social media marketing (SMM), web design and development, SEO,
    performance marketing, influencer marketing, content creation, photography,
    videography, and PR services.`
  },
  {
    id: "item-2",
    question: "How can Emarq help improve my brand presence in Dubai?",
    answer: `Through professional branding, social media strategies, high-quality content creation,
    and PR campaigns, Emarq helps businesses in Dubai build a strong and recognizable
    brand presence.`,
  },
  {
    id: "item-3",
    question: "What types of content creation does Emarq specialize in?",
    answer: `We specialize in automotive, lifestyle, F&B, and product photography and videography,
    event coverage, social media reels, promotional videos, and organic content marketing to maximize engagement.`,
  },
  {
    id: "item-4",
    question:
      "Does Emarq provide SEO services for businesses in Dubai?",
    answer: `Yes! Emarq offers comprehensive SEO strategies, including on-page SEO, keyword
    research, link building, and content optimization to improve your website’s visibility and
    ranking on search engines.`,
  },
  {
    id: "item-5",
    question: "What makes Emarq different from other marketing agencies in Dubai?",
    answer: `Emarq combines creative production and performance marketing with a results-driven
    approach, ensuring high-quality content and measurable growth for businesses across
    Dubai and the UAE.`,
  },
  {
    id: "item-6",
    question: "Can Emarq manage my social media marketing campaigns?",
    answer: `Absolutely. We handle end-to-end social media marketing for platforms like Instagram,
    Facebook, TikTok, Snapchat, and LinkedIn, including content planning, posting,
    engagement, and analytics.`,
  },
  {
    id: "item-7",
    question: "Do you provide influencer marketing services in Dubai?",
    answer: `Yes, Emarq connects brands with relevant influencers in Dubai to create authentic
    campaigns that drive engagement and brand awareness.`
  },
  {
    id: "item-8",
    question: "Does Emarq cover events and product launches for photography and videography?",
    answer: `Yes. We provide professional event coverage, product shoots, and launch
    documentation with high-quality photos and videos suitable for social media, websites,
    and marketing campaigns.`
  },
  {
    id: "item-9",
    question: "How does Emarq ensure high-quality results for content and campaigns?",
    answer: `We follow a strategic, data-driven approach combining creativity and analytics, using
    professional equipment and expert editors to deliver premium content that aligns with
    your brand goals.`
  },
  {
    id: "item-10",
    question: " How can I get started with Emarq for my marketing and production needs?",
    answer: `Simply contact us via phone, email, or our website inquiry form. We’ll schedule a
    consultation to understand your business objectives and create a tailored marketing and
    production plan.`
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section id="faq" className="w-full py-20 px-4">
  <div className="max-w-[700px] mx-auto">

    {/* Badge */}
    <div className="flex flex-col items-center mb-16">
      <Badge
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        className="mb-7 rounded-[50px] shadow-[0px_3px_15px_#00000080] bg-[linear-gradient(190deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] text-white border-0 px-3.5 py-1.5 h-auto"
      >
        <span className="[font-family:'Geist',Helvetica] font-normal text-sm tracking-[-0.14px] leading-[16.8px]">
          FAQ
        </span>
      </Badge>

      {/* Headings */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-2 mb-3">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]"
          >
            Frequently
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]"
          >
            Asked
          </h2>
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-5xl text-center tracking-[-2.40px] leading-[48px]"
        >
          Questions
        </h2>
      </div>

      {/* Subtext */}
      <div className="flex flex-col items-center">
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]"
        >
          Everything you need to know before
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          className="[font-family:'Geist',Helvetica] font-normal text-[#707070] text-base text-center tracking-[-0.16px] leading-[22.4px]"
        >
          getting started
        </p>
      </div>
    </div>

    {/* FAQ ACCORDION */}
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2.5 mb-20"
    >
      {faqItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          data-aos-duration="800"
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

    {/* Bottom CTA */}
    <div className="flex flex-col items-center gap-5">
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        className="[font-family:'Geist',Helvetica] font-medium text-[#3e2f56] text-base text-center tracking-[-0.48px] leading-4"
      >
        Can&apos;t find your answer?
      </p>

      <a href="mailto:Info@emarq.ae">
      <Button
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="relative w-[195px] h-14 rounded-[50px] overflow-hidden shadow-[0px_10px_20px_1px_#00000080] bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)] hover:bg-[linear-gradient(186deg,rgba(62,47,86,1)_0%,rgba(62,47,86,1)_100%)]"
      >
        <span className="[font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[-0.48px] leading-4">
          Send me an email
        </span>
        <div className="absolute h-[200%] top-[-123.19%] -left-14 w-[50px] bg-[#ffffff4c] rotate-45 blur-[2.5px]" />
      </Button>
      </a>
    </div>

  </div>
</section>

  );
};
