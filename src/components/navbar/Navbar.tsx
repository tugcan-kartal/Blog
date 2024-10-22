import Link from "next/link";
import React from "react";

const Navbar:React.FC=()=>{

    const data=[
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Portfolio",
            url: "/portfolio"
        },
        {
            title: "Blog",
            url: "/blog"
        },
        {
            title: "About",
            url: "/about"
        },
        {
            title: "Contact",
            url: "/contact"
        },
        {
            title: "Dashboard",
            url: "/dashboard"
        }
    ]

    return(
        <div>
            <div className="flex justify-between mt-[5vh]">

                <div>
                    <div className="text-xl font-semibold">Tugcan</div>
                </div>

                <div className="flex gap-x-[2vw]">
                    {data.map((item,index)=>(
                        <div key={index}>
                            <Link href={item.url}>{item.title}</Link>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;