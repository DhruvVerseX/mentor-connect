"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import MaxWidthWrapper from '../wrapper/MaxWidthWrapper';

interface JoinProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}


function JoinMentorConnect(
    { fadeInUp, staggerChildren }: JoinProps
) {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.8,  
    });

    

    return (
        <section id="join" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <MaxWidthWrapper>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    Join MentorConnect
                </motion.h2>
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerChildren}
                    className="flex flex-col md:flex-row justify-center items-center gap-8"
                >
                    <motion.div variants={fadeInUp} className="w-full md:w-1/3">
                        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-2xl font-semibold mb-4">Join as a Mentee</h3>
                                <p className="text-gray-600 mb-6">Find a mentor and accelerate your career growth</p>
                                <Button
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                                >
                                    Find a Mentor
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="w-full md:w-1/3">
                        <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-2xl font-semibold mb-4">Join as a Mentor</h3>
                                <p className="text-gray-600 mb-6">Share your expertise and help others grow</p>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                                >
                                    Become a Mentor
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default JoinMentorConnect;
