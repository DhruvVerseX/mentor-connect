"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import MaxWidthWrapper from "../wrapper/MaxWidthWrapper";

interface FAQSectionProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}


function FAQSection(
    { fadeInUp, staggerChildren }: FAQSectionProps
) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.8,   
  });



  const faqItems = [
    {
      question: "How does MentorConnect work?",
      answer:
        "MentorConnect connects mentees with experienced mentors in their field. You can browse mentor profiles, book sessions, and engage in one-on-one mentoring.",
    },
    {
      question: "What are the fees for mentoring sessions?",
      answer:
        "Fees vary depending on the mentor and the type of session. You can view the pricing on each mentor's profile before booking.",
    },
    {
      question: "How long are mentoring sessions?",
      answer:
        "Most sessions are 30-60 minutes long, but this can vary based on the mentor and the type of session you book.",
    },
    {
      question: "Can I become a mentor on MentorConnect?",
      answer:
        "Yes! If you have expertise to share, you can apply to become a mentor. We review all applications to ensure high-quality mentorship.",
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
        <MaxWidthWrapper>
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
        </MaxWidthWrapper>
    </section>
  );
}

export default FAQSection;
