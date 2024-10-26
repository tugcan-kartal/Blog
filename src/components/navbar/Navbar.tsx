"use client";

import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Kapatma ikonu ekleniyor

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const data = [
        { title: "Home", url: "/" },
        { title: "Portfolio", url: "/portfolio" },
        { title: "Blog", url: "/blog" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Dashboard", url: "/dashboard" }
    ];

    return (
        <div className="relative">
            <div className="flex justify-between p-4 bg-white shadow-md rounded-md">

                <div>
                    <Link href={"/"} className="text-xl font-semibold">Tugcan</Link>
                </div>

                <div className="hidden md:flex gap-x-[2vw]">
                    {data.map((item, index) => (
                        <div key={index}>
                            <Link href={item.url} className="text-gray-700 hover:text-blue-600 transition duration-300">{item.title}</Link>
                        </div>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobil Menü */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-gray-50 shadow-lg rounded-lg mt-2 p-4">
                    {data.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <div className="py-2 text-lg text-gray-800 hover:text-blue-600 transition duration-300">{item.title}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Navbar;
