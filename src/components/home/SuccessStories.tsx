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

function SuccessStories({ fadeInUp, staggerChildren }: SuccessStoriesProps) {
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
                        {
                            name: 'Aarav Patel',
                            role: 'Software Developer',
                            quote: 'With MentorConnect, I achieved my dream of working for an MNC in Bengaluru.',
                            photo: 'https://img.freepik.com/free-photo/young-bearded-hindu-student-with-backpack-pastel-wall_496169-1524.jpg?t=st=1733385752~exp=1733389352~hmac=f9f6eb83593c74b774e988384ed290731bcc3215c090899ed92a4612eabdd658&w=1380', // Replace with the actual URL from Adobe Stock
                        },
                        {
                            name: 'Neha Sharma',
                            role: 'Data Analyst',
                            quote: 'The guidance and mentorship I received have been instrumental in shaping my career.',
                            photo: 'https://img.freepik.com/free-photo/happy-brunette-woman-confident-with-natural-hair-feeling-satisfied_482257-87906.jpg?t=st=1733385801~exp=1733389401~hmac=5d9b60a2148c780688b8fbf03e33ae5769b774ba9d93dd5c66ae7f625420de71&w=1380', // Replace with the actual URL from Adobe Stock
                        },
                    ].map((story, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 flex items-center space-x-4">
                                    <Image
                                        src={story.photo}
                                        alt={story.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full aspect-square object-cover border-4 border-white shadow-lg"
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
