import React from "react";
import Me from "@/../public/AboutPage-Me.png";
import Image from "next/image";

const About:React.FC=()=>{

    return(
        <div>
            <div>
                
                <div>
                    <h1>Computer Engineer</h1>

                    <p>Hello, I'm Tugcan Kartal, a passionate software developer.
                       With my love for the software world and my experience,
                       I approach every project with excitement and strive
                       to deliver the best user experience possible.
                    </p>
                </div>

                <div>
                    <Image src={Me} alt="not found" />
                </div>

            </div>
        </div>
    )

}

export default About;