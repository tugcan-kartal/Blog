"use client";

import React, { useState } from "react";
import Image from "next/image";

import CitioLogo from "@/../public/AboutPage-CitioLogo.jpeg";
import DipnotLogo from "@/../public/AboutPage-DipnotLogo.jpeg";
import MiposLogo from "@/../public/AboutPage-MiposLogo.jpeg";
import PitonLogo from "@/../public/AboutPage-PitonLogo.jpeg";
import EvobulutLogo from "@/../public/AboutPage-EvobulutLogo.jpeg";

import HackerRankLogo from  "@/../public/AboutPage-HackerRankLogo.jpeg";
import FreeCodeCampLogo from  "@/../public/AboutPage-FreeCodeCampLogo.jpeg";
import AkbankLogo from  "@/../public/AboutPage-AkbankLogo.jpeg";
import CraiovaLogo from  "@/../public/AboutPage-UniversityCraiova.jpeg";
import OsmangaziLogo from  "@/../public/AboutPage-Osmangazi.jpeg";

import { FaHtml5,FaCss3  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaAws } from "react-icons/fa";


const About: React.FC = () => {
  const [option, setOption] = useState("experience");

  const changeOption = (e: React.FormEvent) => {
    e.preventDefault();
    setOption((e.target as HTMLElement).id);
  };

  const showElement = () => {
    switch (option) {
      case "experience":
        return (
          <div className="bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold text-blue-800">
                  My Experience
                </h2>
                <p className="text-gray-600 mt-2">
                  With a passion for software development and a wealth of experience, I approach each project with enthusiasm, aiming to deliver exceptional user experiences and innovative solutions.
                </p>
              </div>

              {/* Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Full Stack Developer",
                    company: "Citio",
                    date: "08/2024 - Present",
                    desc: "At Citio, I contributed to developing a comprehensive platform that facilitates the management and customization of events, tours, and hotel packages specifically for Istanbul. My role involved both backend and frontend responsibilities, ensuring a seamless experience for our clients.On the server side, we focused on creating a robust panel for employers, empowering them to update and modify their offerings effortlessly. This included implementing secure data management practices, optimizing server performance, and designing a flexible backend structure to handle frequent updates. On the client side, I took part in adding new features and plugins that enhanced user interaction and functionality. My contributions here ensured that the end-users had a smooth and engaging experience when exploring the diverse services offered on the platform. Through these combined efforts, I supported Citio’s mission to provide a dynamic and user-friendly environment for its customers and clients alike.",
                    img: CitioLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Dipnot Software",
                    date: "07/2023 - 09/2023",
                    desc: "I undertook the task of updating a car parts sales website, necessitating a comprehensive transformation. In the course of rebuilding the site, my focus was on modernizing the interface by replacing outdated designs and visuals with a dynamic and technologically advanced aesthetic. To achieve this, I leveraged Tailwind, a framework known for its technology compatibility and innovative design elements, ensuring a contemporary and polished appearance. For effective data management, I implemented MongoDB as the database solution. Additionally, in conjunction with ReactJS, I integrated the Redux technology, acquired through my experiences within the company, to establish a dynamic user interface with seamless data flow. This not only elevated the overall performance of the website but also contributed to an enhanced user experience through cutting-edge design principles and streamlined data handling.",
                    img: DipnotLogo,
                  },
                  {
                    title: "Software Engineer",
                    company: "Mipos Technology",
                    date: "05/2023 - 07/2023",
                    desc: "I expanded the functionality of our existing website, mipos.com, by incorporating an admin panel and creating an elegant interface to showcase customer emails. Furthermore, drawing inspiration from the distributorship of SambaPOS, I spearheaded the establishment of a new business avenue for the company with the creation of the EasOrder website. This platform serves as a focal point for advertising, introducing, and marketing our restaurant POS software system. To enhance user engagement and gather valuable feedback, I implemented a feedback form on the website. Subsequently, I directed the messages received through this form to the company partner's email account, ensuring efficient communication. These initiatives were undertaken to contribute to the professional growth and success of the company, and I am confident that they can significantly bolster our capabilities in the dynamic landscape of the restaurant POS software market.",
                    img: MiposLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Piton Technology",
                    date: "09/2022 - 03/2023",
                    desc: "During my internship at PİTON Technology, I had the opportunity to work on the Smart Transportation Platform ALFA System, which consolidates all resources of transportation enterprises on a single platform. This platform processes system inputs with smart technologies, offering products designed to meet the expectations of stakeholders and ensuring sustainable transportation. This experience enabled me to work on the latest technologies and play a role in creating innovative solutions for sustainable and efficient transportation systems.",
                    img: PitonLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Evobulut",
                    date: "06/2022 - 08/2022",
                    desc: "I designed a comprehensive system for monitoring customer activities, including calls, visits, and emails, providing a streamlined approach to efficient customer relationship management. My initiatives extended to optimizing the invoicing process, ensuring the swift creation of invoices while closely overseeing the entirety of accounting procedures. In response to the company's needs, I engineered a rapid and intuitive sales tracking program. This solution consolidates control over all operational facets onto a singular platform, fostering seamless and effective management of various processes. My role in these projects not only deepened my technical proficiency but also demonstrated my commitment to delivering impactful solutions in a dynamic work environment.",
                    img: EvobulutLogo,
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        alt={`${job.company} Logo`}
                        src={job.img}
                        width={40}
                        height={40}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-blue-800 font-semibold text-xl">
                          {job.title}
                        </h4>
                        <div className="text-gray-500 text-sm">
                          {job.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs mb-2">{job.date}</div>
                    <p className="text-gray-700">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "education":
        return (
            <div className="bg-gray-50 py-10 px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-semibold text-blue-800">
                    My Education
                  </h2>
                  <p className="text-gray-600 mt-2">
                    I have a solid academic background in computer science, which has equipped me with the technical skills and theoretical knowledge necessary for effective software development. My studies focused on areas such as programming, algorithms fostering a strong foundation that I apply in real-world projects.
                  </p>
                </div>
  
                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Certificate",
                      company: "Akbank",
                      date: "2024",
                      desc: "Artificial Intelligence and Data Analytics",
                      img: AkbankLogo,
                    },
                    {
                      title: "Certificate",
                      company: "FreeCodeCamp",
                      date: "2023",
                      desc: "Responsive Web Design certificate",
                      img: FreeCodeCampLogo,
                    },
                    {
                      title: "Certificate",
                      company: "HackerRank",
                      date: "2023",
                      desc: "Javascript,react and css certificates",
                      img: HackerRankLogo,
                    },
                    {
                      title: "Bachelor of Computer Engineering(Erasmus)",
                      company: "University Of Craiova",
                      date: "10/2021 - 06/2022",
                      desc: "Craiova,Romania",
                      img: CraiovaLogo,
                    },
                    {
                      title: "Bachelor of Computer Engineering",
                      company: "Eskisehir Osmangazi University",
                      date: "09/2020 - 06/2024",
                      desc: "Eskişehir,Turkey",
                      img: OsmangaziLogo,
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
                    >
                      <div className="flex items-center mb-4">
                        <Image
                          alt={`${job.company} Logo`}
                          src={job.img}
                          width={40}
                          height={40}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="text-blue-800 font-semibold text-xl">
                            {job.title}
                          </h4>
                          <div className="text-gray-500 text-sm">
                            {job.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 text-xs mb-2">{job.date}</div>
                      <p className="text-gray-700">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
      case "skills":
        return (
          <div className="bg-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10">
              {/* Header */}
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-blue-800">
                  My Skills
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                  Driven by a passion for software development and extensive experience, I tackle each project with enthusiasm, striving to create optimal user experiences.                </p>
              </div>
        
              {/* Education Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[
                  { title: "HTML", img: FaHtml5 },
                  { title: "CSS", img: FaCss3 },
                  { title: "Tailwind", img: RiTailwindCssFill },
                  { title: "JavaScript", img: IoLogoJavascript },
                  { title: "TypeScript", img: SiTypescript },
                  { title: "React", img: RiReactjsLine },
                  { title: "Next.js", img: RiNextjsFill },
                  { title: "Node.js", img: FaNodeJs },
                  { title: "MongoDB", img: SiMongodb },
                  { title: "Docker", img: FaDocker },
                  { title: "Redis", img: SiRedis },
                  { title: "AWS", img: FaAws },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <skill.img className="text-blue-800 text-4xl mb-4" />
                      <h4 className="text-xl font-semibold text-gray-700">
                        {skill.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "about-me":
        return (
          <div className="bg-gray-50 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-8">
              {/* About Me Section */}
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">About Me</h2>
                <p className="text-gray-600 leading-relaxed text-center">
                  Hello, I am Tugcan Kartal, a passionate software developer.
                  With my love for the software world and my experience,
                  I approach every project with excitement and strive
                  to deliver the best user experience possible.                
                </p>
              </div>
        
              {/* Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <ul className="text-gray-600 space-y-2">
                    <li><strong>Name:</strong> Tugcan Kartal</li>
                    <li><strong>Experience:</strong> +5 Years</li>
                    <li><strong>Nationality:</strong> Turkish</li>
                  </ul>
                </div>
        
                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <ul className="text-gray-600 space-y-2">
                    <li><strong>Phone:</strong> 0 538 449 50 96</li>
                    <li><strong>Email:</strong> tugcankartal01@gmail.com</li>
                    <li><strong>Languages:</strong> English, Turkish</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
    }
  };

  return (
    <div>
      <div className="flex flex-col">

        <div className="flex flex-col items-center gap-y-2">
          <div
            onClick={(e) => changeOption(e)}
            id="experience"
            className="w-[25vw] cursor-pointer bg-white text-blue-700 border-2 border-blue-700 hover:text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Experience
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="education"
            className="w-[25vw] cursor-pointer bg-white text-blue-700 border-2 border-blue-700 hover:text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Education
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="skills"
            className="w-[25vw] cursor-pointer bg-white text-blue-700 border-2 border-blue-700 hover:text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Skills
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="about-me"
            className="w-[25vw] cursor-pointer bg-white text-blue-700 border-2 border-blue-700 hover:text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            About Me
          </div>
        </div>

        <div className="mx-auto">{showElement()}</div>

      </div>
    </div>
  );
};

export default About;
