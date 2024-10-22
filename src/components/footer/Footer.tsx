import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-white shadow-md py-6 mt-[5vh]">
            <div className="container mx-auto text-center">
                <div className="text-sm mb-4">
                    <p>© 2024 Tugcan. All rights reserved.</p>
                </div>
                <div className="flex justify-center items-center space-x-6">
                    <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
