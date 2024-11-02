"use client";

import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/AboutPage-Me.png";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { PiProjectorScreenBold } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { FaCodeCommit } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col items-center py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-6xl">
        {/* Profile Information */}
        <div className="text-center lg:text-left">
          <div className="text-blue-600 text-xl uppercase font-semibold mb-4">Software Developer</div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            <div>Hello, I'm</div>
            <div className="text-blue-700">Tugcan Kartal</div>
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg max-w-lg mb-8">
            With my love for the software world and my experience, I approach every project with excitement and strive to deliver the best user experience possible.
          </p>

          {/* Action Buttons and Social Links */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1-eGxsicrT1ULDmyJr2ZdiIHbTZxHyNLR/view?usp=sharing"
              passHref
            >
              <button className="flex items-center gap-x-2 bg-blue-700 text-white text-lg px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition duration-200 shadow-md lg:mx-0 mx-auto">
                <FaDownload />
                <span>Download CV</span>
              </button>
            </Link>

            <div className="flex gap-6 mt-4 lg:mt-0 text-blue-600 text-2xl lg:mx-0 mx-auto">
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
        <div className="mt-8 lg:mt-0">
          <Image
            className="rounded-full shadow-lg border-4 border-blue-300"
            src={Me}
            alt="Tugcan Kartal"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mt-16 max-w-6xl w-full flex justify-center items-center flex-wrap">
        {[
          { end: 5, label: "Years of Experience",img: <FaLaptopCode /> },
          { end: 40, label: "Projects Completed",img: <PiProjectorScreenBold />},
          { end: 8, label: "Technologies Mastered",img: <GrTechnology />},
          { end: 500, label: "Code Commits",img: <FaCodeCommit />},
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center mx-4 mb-6">
            <div className="text-5xl text-blue-700">
              <CountUp start={0} end={stat.end} duration={4} />
            </div>
            <div className="text-xl text-gray-700 font-semibold">{stat.label}</div>
            <div className="text-3xl text-blue-700">{stat.img}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
