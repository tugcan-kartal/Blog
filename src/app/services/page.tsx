import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBug, FaSearch } from "react-icons/fa"; // Import icons

const Services = () => {
    const data = [
        {
            id: 1,
            title: "Web Development",
            desc: "Building responsive and high-quality web applications tailored to your needs.",
            icon: <FaLaptopCode className="text-blue-600 text-6xl mb-4" />, // Add icon
        },
        {
            id: 2,
            title: "Mobile Development",
            desc: "Creating user-friendly mobile applications for both iOS and Android platforms.",
            icon: <FaMobileAlt className="text-blue-600 text-6xl mb-4" />, // Add icon
        },
        {
            id: 3,
            title: "Bug Tracking and Resolution",
            desc: "Identifying and resolving bugs efficiently to ensure smooth application performance.",
            icon: <FaBug className="text-blue-600 text-6xl mb-4" />, // Add icon
        },
        {
            id: 4,
            title: "SEO Optimization",
            desc: "Improving your website's visibility on search engines through effective SEO strategies.",
            icon: <FaSearch className="text-blue-600 text-6xl mb-4" />, // Add icon
        },
    ];

    return (
        <div className="py-16 px-4 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <div className="mb-4">{item.icon}</div> {/* Place icon here */}
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                        <p className="text-lg text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
