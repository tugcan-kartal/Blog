import Image from "next/image";
import React from "react";
import WebsiteImage from "@/../public/PortfolioPage-Websites.jpg";
import Link from "next/link";

const Portfolio: React.FC = () => {
    return (
        <div className="flex flex-col justify-center md:justify-start items-center mt-[2vh]">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2 text-blue-700">My Portfolio</h1>
                <p className="text-lg text-gray-600">Choose a gallery</p>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly gap-x-[10vw]">
                {/* Websites Section */}
                <div className="relative group transition duration-300">
                    <Link
                        href={"/portfolio/websites"}
                        className="block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                    >
                        <Image
                            unoptimized
                            width={800}
                            height={800}
                            className="object-cover h-[50vh]"
                            src={WebsiteImage}
                            alt="Websites Portfolio"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                            Projects
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio;
