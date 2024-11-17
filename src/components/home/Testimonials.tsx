"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import MaxWidthWrapper from "../wrapper/MaxWidthWrapper";

interface TestimonialsProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}


function Testimonials(
    { fadeInUp, staggerChildren }: TestimonialsProps
) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.8,  
  });



  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Product Manager",
      quote:
        "MentorConnect has been a game-changer for my career. The insights I've gained are invaluable.",
    },
    {
      name: "Sophia Lee",
      role: "UX Designer",
      quote:
        "I found an amazing mentor who helped me transition into a new role. Highly recommended!",
    },
    {
      name: "David Martinez",
      role: "Software Engineer",
      quote:
        "The platform is user-friendly and the mentors are top-notch. It's been a great investment in my future.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-white"
    >
        <MaxWidthWrapper>
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        >
          What Our Users Say
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="italic mb-4 text-gray-700">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Image
                      src={`https://placehold.co/400`}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4 border-2 border-white shadow"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-purple-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
        </MaxWidthWrapper>  
    </section>
  );
}

export default Testimonials;
