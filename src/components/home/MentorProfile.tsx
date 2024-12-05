"use client";
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

function MentorProfiles({ fadeInUp, staggerChildren }: MentorProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
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
                            {
                                name: 'Dr. Anil Mehra',
                                role: 'AI Research Scientist',
                                description: '15+ years experience in machine learning and AI research.',
                                photo: 'https://img.freepik.com/free-photo/indian-male-dressed-red-shirt-isolated-grey-background_613910-15190.jpg?t=st=1733386755~exp=1733390355~hmac=15439157ede516fddf7ebebee943fb97b53d6c195c3d4d7062fda7f646a1f49b&w=996', 
                            },
                            {
                                name: 'Rohit Sharma',
                                role: 'Senior Product Manager',
                                description: 'Headed product teams in leading tech firms in Bengaluru.',
                                photo: 'https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm_155003-23821.jpg?t=st=1733386671~exp=1733390271~hmac=4729b2e4e5330762b2f957950fa01d4a63bb337bcc08d7eb44db89870e8fc215&w=1380', 
                            },
                            {
                                name: 'Anjali Verma',
                                role: 'UX Design Lead',
                                description: 'Award-winning designer with a focus on creating user-friendly digital products.',
                                photo: 'https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66741.jpg?t=st=1733386545~exp=1733390145~hmac=0c7d71e1655521f7b2949d46638362b9cfb74b2fafae12463449831f236bb497&w=1380', 
                            },
                        ].map((mentor, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-6 text-center">
                                        <Image
                                            src={mentor.photo}
                                            alt={mentor.name}
                                            width={120}
                                            height={120}
                                            className="rounded-full mx-auto mb-4 border-4 aspect-square object-cover border-purple-100 shadow-lg"
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
