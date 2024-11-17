"use client"
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import React from 'react'
import { GlobeDemo } from './Globe';

interface HeroProps {
    fadeInUp: Variants;
    staggerChildren: Variants;
}

function Hero({ fadeInUp, staggerChildren }: HeroProps) {

    return (
        <>
            <section
                id="hero"
                className=" md:py-32 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 opacity-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                        className="text-center"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                        >
                            Connect with Mentors to Grow Your Career
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-gray-700 mb-8"
                        >
                            Unlock career guidance from industry experts
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Button
                                size="lg"
                                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                            >
                                Find Your Mentor
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <GlobeDemo />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-0 left-0 right-0"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="w-full h-auto"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </motion.div>
            </section>

        </>

    )
}

export default Hero
