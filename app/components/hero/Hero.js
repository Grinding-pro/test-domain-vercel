'use client'

import React from 'react'
import HeroImage from '../../assets/dumbell.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight, SlideUp } from '@/app/utility/animations'
import { animateScroll as scroll, scroller } from 'react-scroll';


const Hero = () => {

    const handleScrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOut',
        });
    };


    return (
        <>
            <section id="hero" aria-label="Profil Instruktur Zumba Jakarta">
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                    {/* brand info */}
                    <div className='text-center md:text-left flex flex-col justify-center items-center md:items-start py-14 md:py-0 font-playfair'>
                        <motion.h1
                            variants={SlideRight(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="text-gray-600 xl:max-w-[500px] mb-6 text-2xl"
                        >
                            Saya adalah <span className="text-primary font-bold font-playfair">Instruktur Zumba</span> dan <span className="text-primary font-bold font-playfair">Senam Aerobik</span> di Jakarta dengan pengalaman bertahun-tahun memimpin sesi <span className="text-primary font-bold font-playfair">Zumba</span> dan <span className="text-primary font-bold font-playfair">senam aerobik</span>
                        </motion.h1>
                        
                        <motion.button
                            onClick={handleScrollToContact}
                            variants={SlideRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="px-6 py-3 text-sm md:text-base bg-primary text-white rounded-md shadow-lg hover:bg-primary-dark focus:outline-none transition-all w-[150px] hover:bg-yellow-400"
                        >
                            Contact Me
                        </motion.button>
                    </div>


                    {/* hero image */}
                    <div className='flex justify-center items-center'>
                        <Image
                            variants={SlideLeft(2)}
                            initial='hidden'
                            animate='visible'
                            src={HeroImage} alt='Lidya Rachmawati - Instruktur Zumba dan Aerobik di Jakarta' className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />

                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero