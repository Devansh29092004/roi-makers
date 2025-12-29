import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is ROI Makers?",
      answer:
        "ROI Makers is a performance-driven digital marketing agency based in Indore, India, focused on helping businesses grow their online presence and maximize return on investment (ROI) through tailored digital strategies. ",
    },
    {
      question: "When was ROI Makers founded and by whom?",
      answer: "ROI Makers was founded in 2023 by Amit Sharma, who brings over 7 years of experience in digital marketing and a passion for measurable, results-oriented campaigns.",
    },
    {
     question: "What services does ROI Makers offer?",
    answer:`We provide a range of digital services designed to boost your brand and revenue, including: Digital Marketing Performance Marketing Website & E-Commerce Development Shopify Store Development Social Media Marketing Search Engine Optimization (SEO) Virtual Tours Each service is customized to align with your business goals`
   },
    {
      question: "What industries does ROI Makers work with?",
      answer:
        "ROI Makers works with businesses across industries, including real estate, healthcare, blockchain/metaverse, advisory services, and more, tailoring strategies to each industry’s unique needs."
    },
    {
      question: "How do I get started with ROI Makers?",
      answer:
        "You can contact us through the website’s Contact page, email, or phone. We’ll schedule a consultation to understand your business needs and recommend the best digital marketing strategy for you.",
    },
  ];

  return (
  <div className="text-black py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto mt-14">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-4xl px-10 sm:text-3xl md:text-4xl lg:text-5xl font-black text-balance mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Everything you need to know about ROI-MAKERS. Can't find what
            you're looking for? Reach out to us on social media or email.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <Accordion
            type="single"
            collapsible
            className="space-y-3 sm:space-y-4"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="text-black rounded-lg sm:rounded-xl border border-black/10 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">
                    {typeof faq.answer === "string" ? faq.answer : faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16 px-2 sm:px-4">
          <div className="text-black rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-black/10 sm:mx-auto" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 font-medium text-sm sm:text-base">
              We're here to help! Reach out to our team and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@roimakers.in"
                target="blank"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-[#141414] text-[#fcf2e8] rounded-lg font-medium hover:bg-[#141414]/90 transition-colors text-sm sm:text-base"
              >
                Email Us
              </a>
              <a
                href="https://www.instagram.com/roimakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;