'use client'

import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideRight } from '../../utility/animations'


const EquipmentData = [
    {
        id: 1,
        title: "Aerobik",
        desc: "Cardio exercises to improve endurance, heart health, and fitness.",
        icon: <GrYoga />,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Zumba",
        desc: "Fun, dance-based workout with energetic Latin-inspired music moves.",
        link: "/",
        icon: <FaDumbbell />,
        delay: 0.6,
    },
    {
        id: 3,
        title: "SKJ",
        desc: "A structured group exercise originating in Indonesia, focused on synchronized movements set to rhythmic music, aimed at improving physical fitness, flexibility, and endurance.",
        link: "/",
        icon: <GiGymBag />,
        delay: 0.9,
    },
    {
        id: 4,
        title: "Kreasi",
        desc: "A creative form of exercise that combines traditional dance, modern movements, and music, encouraging freedom of expression while promoting fitness and fun.",
        link: "/",
        icon: <GiGymBag />,
        delay: 0.9,
    },
];

const Equipment = () => {
    return (
        <div>
            <div className="container py-24">
                <div className="space-y-4 py-10 justify-center items-center grid grid-rows-1">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        What we offer for you
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                    {/* <div className="space-y-4 p-6">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            What we offer for you
                        </h1>
                        <p className="text-gray-500">
                            It is a long established fact that a reader readable.
                        </p>
                    </div> */}
                    {EquipmentData.map((item) => {
                        return (
                            <motion.div
                            variants={SlideRight(item.delay)}
                            initial='hidden'
                            whileInView='visible'
                                key={item.id}
                                className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
                            >
                                <div className="text-4xl">{item.icon}</div>
                                <p className="text-2xl font-semibold">{item.title}</p>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Equipment