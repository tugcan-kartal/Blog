"use client"

import { notFound, useParams } from "next/navigation";
import React from "react";
import { products } from "./data";
import Link from "next/link";


const Category:React.FC=()=>{

    const params=useParams();
    const categoryName=params.category as "websites" | "applications";

    const getDatas=(catName: "websites" | "applications")=>{
        const allDatas=products[catName];
        if(allDatas){
            return allDatas
        }

        return notFound();
    }

    const datas=getDatas(categoryName);

    return(
        <div>
            {datas && datas.map((item,index)=>(
                <div key={index}>

                    <div className="flex justify-center gap-x-[10vw]">
                        <div className="w-[25vw]">
                            <div>{item.title}</div>
                            <div>{item.desc}</div>
                            <Link href={item.url}>
                                To see Project
                            </Link>
                        </div>

                        
                        <div className="w-[25vw]">
                            <img src={item.image} alt="not found"/>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Category;