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
      question: "What is HACKWAVE?",
      answer:
        "A 36-hour hackathon for dedicated builders and innovators. It's one part party, one part work-hard overnight battle against the clock and the competition. ",
    },
    {
      question: "When and where is HACKWAVE 2025?",
      answer: "August 23-25, 2025. Venue: Chameli Devi Group of institutions.",
    },
    // {
    //   question: "What are the prizes?",
    //   answer:
    //     "₹1 Lakh+ prize pool across multiple categories: Best Overall, Most Innovative, Best Technical Implementation, and Best Design.",
    // },
    {
      question: "Will there be any travel allowance provided?",
      answer:
        "No, we will not be providing travel reimbursements. Participants are expected to arrange and cover their own travel expenses.",
    },
    {
      question: "Can we change our team members after Round 1?",
      answer:
        "No, team compositions will be locked after Round 1 to ensure fairness and smooth coordination.",
    },
  ];

  return (
  <div className="text-black py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen" style={{ backgroundColor: '#E9E4D7' }}>
      <div className="max-w-6xl mx-auto mt-14">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-4xl px-10 sm:text-3xl md:text-4xl lg:text-5xl font-black text-balance mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Everything you need to know about HACKWAVE 2025. Can't find what
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
                style={{ backgroundColor: '#E9E4D7' }}
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
          <div className="text-black rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-black/10 sm:mx-auto" style={{ backgroundColor: '#E9E4D7' }}>
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 font-medium text-sm sm:text-base">
              We're here to help! Reach out to our team and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=eds@cdgi.edu.in"
                target="blank"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-[#141414] text-[#fcf2e8] rounded-lg font-medium hover:bg-[#141414]/90 transition-colors text-sm sm:text-base"
              >
                Email Us
              </a>
              <a
                href="https://www.instagram.com/echelondevsociety"
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