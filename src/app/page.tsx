"use client"

import Image from "next/image";
import Link from "next/link";
import Me from "@/../public/AboutPage-Me.png";
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CountUp from 'react-countup';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center gap-x-[12vw] mt-[10vh]">

        <div>

          <div className="flex flex-col gap-y-[2vh]">
            <div className="text-lg">Software Developer</div>
            <div className="text-6xl">
              <div>Hello I'm</div>
              <div className="text-blue-800">Tugcan Kartal</div>
            </div>

            <div className="text-lg">
              <div>With my love for the software world and my experience,</div>
              <div>I approach every project with excitement and strive</div>
              <div>to deliver the best user experience possible.</div>
            </div>

            <div className="flex justify-start items-center gap-x-[2vw]">
              <div className="flex justify-center p-2 text-blue-700 font-semibold border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200">
                <Link href={"https://drive.google.com/file/d/1-eGxsicrT1ULDmyJr2ZdiIHbTZxHyNLR/view?usp=sharing"}>DOWNLOAD CV</Link>
              </div>
              <div className="flex gap-x-[1vw]">
                <div>
                  <Link href={"https://github.com/tugcan-kartal"}>
                    <FaGithub className="p-1 text-4xl text-blue-900 border-2 border-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white transition-all duration-200"/>
                  </Link>
                </div>

                <div>
                  <Link href={"https://www.linkedin.com/in/tugcan-kartal"}>
                    <FaLinkedin className="p-1 text-4xl text-blue-900 border-2 border-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white transition-all duration-200"/>
                  </Link>
                </div>

                <div>
                  <Link href={"mailto:tugcankartal01@gmail.com"}>
                    <SiGmail className="p-1 text-4xl text-blue-900 border-2 border-blue-700 rounded-2xl hover:bg-blue-700 hover:text-white transition-all duration-200"/>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div>
          <Image className="w-[25vw]" src={Me} alt="not found"/>
        </div>

      </div>

      <div className="flex justify-center items-center gap-x-[4vw] mt-[10vh]">
        <div className="flex justify-center items-center gap-x-[1vw]">
          <div className="text-5xl text-blue-700">
            <CountUp start={0} end={5} duration={4} />
          </div>
          <div className="text-xl">Years of experience</div>
        </div>

        <div className="flex justify-center items-center gap-x-[1vw]">
          <div className="text-5xl text-blue-700">
            <CountUp start={0} end={40} duration={4} />
          </div>
          <div className="text-xl">Projects completed</div>
        </div>

        <div className="flex justify-center items-center gap-x-[1vw]">
          <div className="text-5xl text-blue-700">
            <CountUp start={0} end={8} duration={4} />
          </div>
          <div className="text-xl">Technologies mastered</div>
        </div>

        <div className="flex justify-center items-center gap-x-[1vw]">
          <div className="text-5xl text-blue-700">
            <CountUp start={0} end={500} duration={4} />
          </div>
          <div className="text-xl">code commits</div>
        </div>
      </div>
    </div>
  );
}
