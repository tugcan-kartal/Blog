import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-50 shadow-md py-6 mt-8 rounded-t-xl">
            <div className="container mx-auto text-center">
                <div className="text-sm mb-4 text-gray-600">
                    <p>© 2024 Tugcan Kartal. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
