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
                    desc: "Built a dynamic, multilingual front-end using Next.js and Tailwind CSS to enhance performance and responsiveness, achieving a 30% improvement in load times and delivering an optimized mobile user experience across multiple devices through efficient code splitting and UI component design. Integrated MongoDB for efficient data handling and optimized server-side logic with Feather.js, enabling real-time performance updates and robust management of large-scale booking queries within the admin dashboard system. Developed and maintained admin panel features while resolving user-facing bugs, which improved data accuracy and increased administrative efficiency by 40% through component reuse and seamless form validation logic. Applied GitLab and Docker for scalable version control and containerized deployments, streamlining CI/CD pipelines, reducing rollback errors, and accelerating deployment across development, staging, and production environments.",
                    img: CitioLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Dipnot Software",
                    date: "07/2023 - 09/2023",
                    desc: "Rebuilt an automotive parts sales platform and redesigned the UI using Tailwind CSS, achieving a 45% increase in user retention by enhancing responsiveness, improving visual consistency, and introducing a dynamic parts filtering system. Implemented a React-Redux architecture with a Node.js backend to boost performance and scalability, enabling real-time inventory updates and user-specific product views integrated with advanced search filters. Structured the MongoDB database schema for optimized search and retrieval, reducing query latency by 35% through strategic indexing and document relationship normalization tailored for complex automotive datasets and user metadata.",
                    img: DipnotLogo,
                  },
                  {
                    title: "Software Engineer",
                    company: "Mipos Technology",
                    date: "05/2023 - 07/2023",
                    desc: "Created a React-based admin dashboard and customer email platform to manage restaurant POS software, improving internal communication and reducing support ticket resolution time by 50% through the automation of common queries. Developed EasOrder for POS marketing with a focus on SEO optimization, user onboarding flow, and contact funnel design, helping the company expand its audience and increase distributor leads by 30%. Enabled SQL-based data analytics and backend operations using Express.js and Node.js, optimizing daily sales reporting and allowing management to track real-time data with interactive charts and secure role-based access.",
                    img: MiposLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Piton Technology",
                    date: "09/2022 - 03/2023",
                    desc: "Built a full-stack platform with React and Node.js, implementing robust user authentication, form validation, and dynamic routing for different roles to enhance usability for both admins and general users across various modules. Utilized Bootstrap and SQL to create a responsive UI and structured data models, resulting in a 25% faster onboarding process for new users and improved platform accessibility across devices through the use of semantic HTML components.",
                    img: PitonLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Evobulut",
                    date: "06/2022 - 08/2022",
                    desc: "Led CRM and invoicing feature development using React, Node.js, TypeScript, and MongoDB, consolidating three disparate tools into a single seamless platform that enhanced customer tracking, invoicing, and lead conversion workflows. Streamlined customer engagement and sales tracking with intuitive dashboards, real-time alerts, and role-based permissions, enabling sales teams to close deals faster and improving overall visibility into client activity metrics.",
                    img: EvobulutLogo,
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        unoptimized
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
                          unoptimized
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
                    <li><strong>Email:</strong> tugcankartall@gmail.com</li>
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
