'use client'

import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavbarMenu } from '@/app/MockData/data';
import { ResponsiveMenu } from './responsivemenu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <nav>
                <div className='container flex items-center justify-between py-8'>
                    {/* Logo Section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase w-full justify-center md:justify-start'>
                        <FaDumbbell />
                        <p>Lidya</p>
                        <p className='text-primary'>Zumba</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
