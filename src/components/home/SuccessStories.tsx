"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

interface SuccessStoriesProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}


function SuccessStories(
    { fadeInUp, staggerChildren }: SuccessStoriesProps
) {
    // Initialize the Intersection Observer
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.8,
    });


    return (
        <section id="successStories" className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    Success Stories
                </motion.h2>
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {[
                        { name: 'Sarah Johnson', role: 'Software Engineer', quote: 'MentorConnect helped me land my dream job at a top tech company.' },
                        { name: 'Michael Chen', role: 'Marketing Manager', quote: 'The career advice I received was invaluable for my professional growth.' },
                    ].map((story, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 flex items-center space-x-4">
                                    <Image
                                        src={`https://placehold.co/400`}
                                        alt={story.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full border-4 border-white shadow-lg"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">{story.name}</h3>
                                        <p className="text-purple-600 mb-2">{story.role}</p>
                                        <p className="italic text-gray-700">{story.quote}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default SuccessStories;
