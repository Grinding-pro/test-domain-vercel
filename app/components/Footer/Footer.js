import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-blue-950 text-white rounded-t-3xl">
            <div className="container mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-8">

                    {/* Brand Info Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
                            <p>Lidya</p>
                            <p className="text-yellow-400">Zumba</p>
                            <p>Aerobik</p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Helping you stay active, healthy, and happy through fun Zumba and Aerobic sessions. Join us and transform your fitness journey!
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h1 className="text-xl font-semibold mb-2">Follow Us</h1>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/zinlydia_mua/" className="hover:text-yellow-400 transition-all duration-300">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="https://www.facebook.com/salibay.lydia" className="hover:text-yellow-400 transition-all duration-300">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="https://www.tiktok.com/@loly0307" className="hover:text-yellow-400 transition-all duration-300">
                                <FaTiktok className="text-3xl" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-4">
                        <h1 className="text-xl font-semibold mb-2">Contact Us</h1>
                        <ul className="space-y-3 text-gray-300">
                            {/* <li className="flex items-center gap-3">
                                <FaPhone className="text-yellow-400" />
                                <p>+62 812-880-25956
                                </p>
                            </li> */}
                            <li className="flex items-center gap-3">
                                <FaGoogle className="text-yellow-400" />
                                <p>Lidyarachmawati7@gmail.com </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} Lidya Zumba. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
