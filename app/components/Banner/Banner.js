'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '@/app/utility/animations';

const MotionImage = motion(Image); // Wrap Next.js Image component

const Banner = ({ image, title, subtitle, link }) => {
    return (
        <div className="container">
            <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                <div className="w-[300px] md:max-w-[400px] h-full object-cover xl:min-w-[600px]">
                    <MotionImage
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                        src={image}
                        alt=""
                        width={600} // Ensure width is specified for Next.js optimization
                        height={400} // Ensure height is specified for Next.js optimization
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center text-justify md:text-left space-y-4 m-4 lg:max-w-[500px]">
                    <motion.p
                    variants={SlideUp(0.5)}
                    initial='hidden'
                    whileInView={'visible'}
                    viewport={{once: 'true'}}
                    className="text-2xl lg:text-4xl font-bold capitalize font-playfair">{title}</motion.p>
                    <motion.p
                        variants={SlideUp(0.7)}
                        initial='hidden'
                        whileInView={'visible'}
                    >{subtitle}</motion.p>
                    {/* <motion.div
                        variants={SlideUp(0.9)}
                        initial='hidden'
                        whileInView={'visible'}
                    className="flex justify-center md:justify-start">
                        <button className="primary-btn">Explore More</button>
                    </motion.div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
