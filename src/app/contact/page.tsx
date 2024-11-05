"use client";

import Image from "next/image";
import React, { useState } from "react";
import ContactImage from "@/../public/ContactPage-Contact.svg";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setStatusMessage("Email sent successfully.");
                setFormData({ username: "", email: "", message: "" }); // Reset form
            } else {
                setStatusMessage("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setStatusMessage("An error occurred while sending the email.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="flex flex-col md:flex-row w-[50vw] mx-auto items-center justify-center mt-[10vh] p-8 bg-white shadow-lg rounded-lg">
            <div className="w-full md:w-1/2 md:mr-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            type="text"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-200 ease-in-out hover:bg-gray-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                        <input
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your e-mail"
                            type="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-200 ease-in-out hover:bg-gray-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 resize-none transition duration-200 ease-in-out hover:bg-gray-50"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 shadow-md transition duration-200">Send</button>
                    {statusMessage && <p className="mt-2 text-green-600">{statusMessage}</p>}
                </form>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <Image unoptimized src={ContactImage} alt="Contact Us" />
            </div>
        </div>
    );
};

export default Contact;
