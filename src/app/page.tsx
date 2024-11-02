"use client";

import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/AboutPage-Me.png";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin, FaDownload, FaLaptopCode } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiProjectorScreenBold } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaCodeCommit } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col items-center py-1 px-4">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-8 max-w-6xl w-full">
        {/* Profile Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 lg:p-4 2xl:p-7 transition-transform duration-300 hover:scale-105 flex flex-col">
          <div className="text-center lg:text-left">
            <div className="text-blue-600 text-lg uppercase font-semibold mb-2 text-center">
              Software Developer
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
              <div className="text-center">Hello, I'm</div>
              <div className="text-blue-700 text-center">Tugcan Kartal</div>
            </h1>

            <p className="text-gray-600 leading-relaxed text-base max-w-lg mb-4 text-center">
              With my love for the software world and my experience, I approach
              every project with excitement and strive to deliver the best user
              experience possible.
            </p>

            {/* Action Buttons and Social Links */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-center">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1-eGxsicrT1ULDmyJr2ZdiIHbTZxHyNLR/view?usp=sharing"
                passHref
              >
                <button className="flex items-center gap-x-2 bg-blue-700 text-white text-lg px-4 py-2 rounded-full font-medium hover:bg-blue-800 transition duration-200 shadow-md lg:mx-0 mx-auto">
                  <FaDownload />
                  <span>Download CV</span>
                </button>
              </Link>

              <div className="flex gap-4 mt-2 lg:mt-0 text-blue-600 text-2xl lg:mx-0 mx-auto">
                <Link
                  target="_blank"
                  href="https://github.com/tugcan-kartal"
                  className="hover:text-blue-700 transition"
                >
                  <FaGithub />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/tugcan-kartal"
                  className="hover:text-blue-700 transition"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  target="_blank"
                  href="mailto:tugcankartal01@gmail.com"
                  className="hover:text-blue-700 transition"
                >
                  <SiGmail />
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Image
              className="rounded-full shadow-lg border-4 border-blue-300 hover:scale-105 transition-transform duration-300"
              src={Me}
              alt="Tugcan Kartal"
              width={250} // Reduced size for better fit
              height={250}
            />
          </div>
        
        </div>

        {/* Statistics Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 lg:p-8 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4 text-center">
            Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 5, label: "Years of Experience", img: <FaLaptopCode />,prefix: "+" },
              {end: 38,label: "Projects Completed",img: <PiProjectorScreenBold /> },
              { end: 8, label: "Technologies Mastered", img: <GrTechnology /> },
              { end: 415, label: "Code Contributions ", img: <FaCodeCommit /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="text-5xl text-blue-700 mb-2">
                  <CountUp start={0} end={stat.end} duration={4} prefix={stat.prefix || ""}/>
                </div>
                <div className="text-lg text-gray-700 font-semibold text-center mb-1">
                  {stat.label}
                </div>
                <div className="text-3xl text-blue-700 text-center">
                  {stat.img}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
