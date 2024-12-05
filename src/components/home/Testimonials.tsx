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

function Testimonials({ fadeInUp, staggerChildren }: TestimonialsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const testimonials = [
    {
      name: "Amit Kumar",
      role: "Software Engineer",
      quote:
        "MentorConnect provided me with the mentorship I needed to ace my interviews and secure a top-tier job.",
      photo: "https://images.pexels.com/photos/1808387/pexels-photo-1808387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    },
    {
      name: "Pooja Sharma",
      role: "UX Designer",
      quote:
        "The guidance I received was phenomenal. My mentor helped me design a portfolio that got me hired at my dream company.",
      photo: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    },
    {
      name: "Rohan Verma",
      role: "Product Manager",
      quote:
        "This platform is a must-have for anyone looking to grow their career. The mentors are extremely helpful and insightful.",
      photo: "https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-white">
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
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="italic mb-4 text-gray-700">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-4 border-2 object-cover aspect-square border-white shadow"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-purple-600">
                          {testimonial.role}
                        </p>
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
