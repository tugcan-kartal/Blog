"use client"

import React, { useState } from "react";
import Me from "@/../public/AboutPage-Me.png";
import Image from "next/image";

const About:React.FC=()=>{

    const [option,setOption]=useState("experience");

    const changeOption=(e:React.FormEvent)=>{
        e.preventDefault();
        setOption((e.target as HTMLElement).id);
    }

    const showElement=()=>{
        switch (option) {
            case "experience":
                return (
                    <div>
                        <div>
                            <div>My Experience</div>
                            <div>With my love for the software world and my experience,
                                I approach every project with excitement and strive
                                to deliver the best user experience possible.
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {[
                                    {title: "Full Stack Developer",company: "Citio",date: "08/2024-Present",desc:"building hotel website"},
                                    {title: "Software Engineer Intern",company: "Dipnot Software",date: "07/2023-09/2023",desc:"I undertook the task of updating a car parts sales website, necessitating a comprehensive transformation. In the course of rebuilding the site"},
                                    {title: "Software Engineer",company: "Mipos Technology",date: "05/2023-07/2023",desc:"I expanded the functionality of our existing website, mipos.com, by incorporating an admin panel and creating an elegant interface to showcase customer emails."},
                                    {title: "Software Engineer Intern",company: "Piton Technology",date: "09/2022-03/2023",desc:"During my internship at PİTON Technology, I had the opportunity to work on the Smart Transportation Platform ALFA System, which consolidates all resources of transportation enterprises on a single platform."},
                                    {title: "Software Engineer Intern",company: "Evobulut",date: "06/2022-08/2022",desc:"I designed a comprehensive system for monitoring customer activities, including calls, visits, and emails, providing a streamlined approach to efficient customer relationship management."},
                                ].map((job,index)=>(
                                    <div key={index}>
                                        <div>{job.title}</div>
                                        <div>{job.company}</div>
                                        <div>{job.date}</div>
                                        <div>{job.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            case "education":
                return <div>education</div>
            case "skills":
                return <div>skills</div>
            case "about-me":
                return <div>about-me</div>
            default:
                return null;
        }
    }


    return(
        <div>
            <div className="flex">
                <div className="flex flex-col gap-y-[1vh]">
                    <div onClick={(e)=>changeOption(e)} id="experience" className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md">Experience</div>
                    <div onClick={(e)=>changeOption(e)} id="education" className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md">Education</div>
                    <div onClick={(e)=>changeOption(e)} id="skills" className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md">Skills</div>
                    <div onClick={(e)=>changeOption(e)} id="about-me" className="bg-blue-600 text-white py-2 px-[2vw] rounded-xl flex justify-center font-semibold hover:bg-blue-800 transition duration-200 shadow-md">About Me</div>
                </div>

                <div>
                    {showElement()}
                </div>
            </div>
        </div>
    )

}

export default About;