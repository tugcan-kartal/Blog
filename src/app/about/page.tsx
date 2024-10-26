"use client";

import React, { useState } from "react";
import Me from "@/../public/AboutPage-Me.png";
import Image from "next/image";
import CitioLogo from "@/../public/AboutPage-CitioLogo.jpeg";
import DipnotLogo from "@/../public/AboutPage-DipnotLogo.jpeg";
import MiposLogo from "@/../public/AboutPage-MiposLogo.jpeg";
import PitonLogo from "@/../public/AboutPage-PitonLogo.jpeg";
import EvobulutLogo from "@/../public/AboutPage-EvobulutLogo.jpeg";

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
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-blue-700">
                  My Experience
                </h2>
                <p className="text-gray-600 mt-2">
                  With my love for the software world and my experience, I
                  approach every project with excitement and strive to deliver
                  the best user experience possible.
                </p>
              </div>

              {/* Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Full Stack Developer",
                    company: "Citio",
                    date: "08/2024 - Present",
                    desc: "Building hotel website",
                    img: CitioLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Dipnot Software",
                    date: "07/2023 - 09/2023",
                    desc: "I undertook the task of updating a car parts sales website, necessitating a comprehensive transformation.",
                    img: DipnotLogo,
                  },
                  {
                    title: "Software Engineer",
                    company: "Mipos Technology",
                    date: "05/2023 - 07/2023",
                    desc: "Expanded our existing website, mipos.com, with an admin panel and a customer email showcase.",
                    img: MiposLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Piton Technology",
                    date: "09/2022 - 03/2023",
                    desc: "Worked on the Smart Transportation Platform ALFA System, consolidating resources.",
                    img: PitonLogo,
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "Evobulut",
                    date: "06/2022 - 08/2022",
                    desc: "Designed a system for monitoring customer activities, including calls, visits, and emails.",
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
                        <h4 className="text-blue-700 font-semibold text-xl">
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
        return <div>education</div>;
      case "skills":
        return <div>skills</div>;
      case "about-me":
        return <div>about-me</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col gap-y-[1vh]">
          <div
            onClick={(e) => changeOption(e)}
            id="experience"
            className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Experience
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="education"
            className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Education
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="skills"
            className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            Skills
          </div>
          <div
            onClick={(e) => changeOption(e)}
            id="about-me"
            className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
          >
            About Me
          </div>
        </div>

        <div>{showElement()}</div>
      </div>
    </div>
  );
};

export default About;
