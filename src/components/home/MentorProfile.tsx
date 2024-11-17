"use client"
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import MaxWidthWrapper from '../wrapper/MaxWidthWrapper';

interface MentorProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}


function MentorProfiles(
    { fadeInUp, staggerChildren }: MentorProps
) {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.8,    
    });

   

    return (
        <section
            id="mentorProfiles"
            className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
            ref={ref}
        >
            <MaxWidthWrapper>
            <div className="container mx-auto px-4">
                <motion.h2
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                >
                    Featured Mentors
                </motion.h2>
                <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerChildren}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { name: 'Dr. Emily Watson', role: 'AI Research Scientist', description: '10+ years experience in machine learning and AI' },
                        { name: 'John Doe', role: 'Senior Product Manager', description: 'Led product teams at top Silicon Valley companies' },
                        { name: 'Lisa Chen', role: 'UX Design Lead', description: 'Award-winning designer with a focus on user-centered design' },
                    ].map((mentor, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 text-center">
                                    <Image
                                        src={`https://placehold.co/400`}
                                        alt={mentor.name}
                                        width={120}
                                        height={120}
                                        className="rounded-full mx-auto mb-4 border-4 border-purple-100 shadow-lg"
                                    />
                                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                                    <p className="text-purple-600 mb-2">{mentor.role}</p>
                                    <p className="text-sm text-gray-600">{mentor.description}</p>
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

export default MentorProfiles;
