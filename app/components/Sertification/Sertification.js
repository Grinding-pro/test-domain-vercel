'use client'
import { SertificationData } from '../../MockData/data';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick'

const Sertification = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        
    };
    return (

        <div className='container py-16'>
            <div className='flex items-center justify-center py-10'>

                <p className='text-4xl font-bold'>Certification</p>
            </div>
            <div className='bg-[#f9f9f9] rounded-lg'>

                <Slider {...setting}>
                  {SertificationData.map((data) => (
                    <div
                        key={data.id}
                        className='flex items-center justify-center h-[600px] w-[600px]'>
                        <Image
                            src={data.img}
                            className='w-full h-full object-contain '
                            alt='Certification Image'
                        />
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    );
}

export default Sertification