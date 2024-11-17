"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BookOpen, MailCheckIcon, Target, Users } from "lucide-react";

interface HowItWorksProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}
const HowItWorks = ({fadeInUp, staggerChildren}: HowItWorksProps) => {
    const controls = useAnimation(); // Controls the animation
    const [ref, inView] = useInView({ threshold: 0.2 }); // Detects when section is in view

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <section id="howItWorks" ref={ref} className="pb-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Animated Heading */}
                <motion.h2
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    How It Works
                </motion.h2>

                {/* Steps Grid with Animations */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    {[
                        { title: "Create Profile", icon: Users },
                        { title: "Find Mentor", icon: MailCheckIcon },
                        { title: "Book a Session", icon: BookOpen },
                        { title: "Start Learning", icon: Target },
                    ].map((step, index) => (
                        <motion.div key={index} variants={fadeInUp} className="text-center">
                            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 inline-block mb-4 shadow-lg">
                                <step.icon className="w-12 h-12 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
