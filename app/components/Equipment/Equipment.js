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
        title: "Senam Aerobik",
        desc: "Latihan kardio ritmis yang membantu membakar kalori, menjaga kesehatan jantung, dan meningkatkan stamina. Cocok untuk semua usia.",
        icon: <GrYoga />,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Zumba",
        desc: "Gerakan dansa energik khas Latin yang bikin semangat, seru, dan efektif membakar lemak. Favorit peserta wanita usia 20–45 tahun di Jakarta!",
        icon: <FaDumbbell />,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Senam SKJ",
        desc: "Senam Kesegaran Jasmani khas Indonesia yang penuh gerakan sinkron dan musik ritmis, cocok untuk meningkatkan fleksibilitas dan kebugaran.",
        icon: <GiGymBag />,
        delay: 0.9,
    },
    {
        id: 4,
        title: "Senam Kreasi",
        desc: "Kombinasi senam modern dan tarian tradisional yang menyenangkan. Bikin olahraga jadi lebih ekspresif, bebas, dan tetap sehat.",
        icon: <GiGymBag />,
        delay: 1.2,
    },
];
  

const Equipment = () => {
    return (
        <section id="equipment" aria-label="Peralatan dan Fasilitas Kelas Senam">
            <div className="container py-24">
                <div className="space-y-4 py-10 justify-center items-center grid grid-rows-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Apa yang Kami Tawarkan Untuk Kamu
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                    {EquipmentData.map((item) => (
                        <motion.div
                            variants={SlideRight(item.delay)}
                            initial="hidden"
                            whileInView="visible"
                            key={item.id}
                            className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
                        >
                            <div className="text-4xl">{item.icon}</div>
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Equipment