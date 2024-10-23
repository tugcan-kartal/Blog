import Image from "next/image";
import React from "react";
import WebsiteImage from "@/../public/PortfolioPage-Websites.jpg";
import ApplicationsImage from "@/../public/PortfolioPage-Applications.jpg";
import Link from "next/link";


const Portfolio:React.FC=()=>{
    return(
        <div>
            <div className="mt-[5vh] flex flex-col items-center justify-center gap-y-[2vh]">
                <div>OUR WORKS</div>
                <div>Choose a gallery</div>
            </div>

            <div className="flex justify-between mt-[10vh] gap-x-[2vw]">
                <div className="relative">
                    <Link href={"/portfolio/websites"} className="absolute text-white bottom-10 left-5 font-semibold">Websites</Link>
                    <Image className="w-[40vw] h-[40vh]" src={WebsiteImage} alt="not found"/>
                </div>

                <div className="relative">
                    <Link href={"/portfolio/applications"} className="absolute text-white bottom-10 left-5 font-semibold">Applications</Link>
                    <Image className="w-[40vw] h-[40vh]" src={ApplicationsImage} alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

