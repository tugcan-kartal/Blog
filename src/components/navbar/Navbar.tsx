"use client";

import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const data = [
        { title: "Home", url: "/" },
        { title: "Services", url: "/services" },
        { title: "Portfolio", url: "/portfolio" },
        { title: "Blog", url: "/blog" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Dashboard", url: "/dashboard" }
    ];

    return (
        <nav className="relative bg-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
                <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition duration-300">
                    Tugcan
                </Link>

                <div className="hidden md:flex space-x-6">
                    <DarkModeToggle />
                    {data.map((item, index) => (
                        <Link key={index} href={item.url} className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition duration-300">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobil Menü */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-white shadow-lg rounded-lg mt-2 p-4">
                    {data.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <div className="py-2 text-lg text-gray-800 hover:text-blue-600 transition duration-300">{item.title}</div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
