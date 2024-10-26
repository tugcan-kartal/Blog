import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-white shadow-md py-6 mt-8 rounded-t-xl">
            <div className="container mx-auto text-center">
                <div className="text-sm mb-4 text-gray-600">
                    <p>© 2024 Tugcan Kartal. All rights reserved.</p>
                </div>
                <div className="flex justify-center items-center space-x-6">
                    <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg font-semibold">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg font-semibold">Terms of Service</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300 text-lg font-semibold">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
