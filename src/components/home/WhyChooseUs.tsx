"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ChevronDown, Clock10, Users } from 'lucide-react';
import MaxWidthWrapper from '../wrapper/MaxWidthWrapper';

function WhyChooseUs() {
    // Initialize Intersection Observer
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.5,    // Trigger when 20% of the section is visible
    });

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <section id="whyChooseUs" className="py-20 bg-white" ref={ref}>
            <MaxWidthWrapper>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    Why Choose Us?
                </motion.h2>
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { title: 'Verified Mentors', icon: Award, description: 'All our mentors are thoroughly vetted and verified' },
                        { title: 'Flexible Scheduling', icon: Clock10, description: 'Book sessions that fit your busy schedule' },
                        { title: 'Affordable Sessions', icon: Users, description: 'Quality mentorship at competitive prices' },
                    ].map((reason, index) => (
                        <motion.div key={index} variants={fadeInUp} className="text-center">
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block mb-4 shadow-lg">
                                <reason.icon className="w-12 h-12 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default WhyChooseUs;
