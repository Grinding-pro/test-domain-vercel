'use client'

import { ProductsData } from '@/app/MockData/data';
import Image from 'next/image';
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const TabComp = () => {

    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Zumba', 'Aerobic', 'SKJ', 'Kreasi'];

    const filteredCards = activeTab === 'All' ? ProductsData : ProductsData.filter((card) => card.category === activeTab);

    return (
        <>
            <div className='container my-12 md:my-16'>
                {/* Tabs Section */}
                <div className='flex flex-wrap justify-center gap-4 mb-6'>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 rounded-full text-sm md:text-base font-medium 
                                ${activeTab === tab
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"} 
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredCards.map((card) => (
                        <motion.div
                            id={card.id}
                            key={card.id}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Section */}
                            <Image
                                src={card.image}
                                alt={card.alt}
                                className='h-[240px] w-full object-cover'
                            />
                            {/* Text Section */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TabComp;
