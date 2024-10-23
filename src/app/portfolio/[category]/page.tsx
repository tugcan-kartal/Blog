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

    return (
        <div className="container mx-auto py-12 px-4">
            {datas && datas.map((item, index) => (
                <div key={index} className={`mb-10 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-4">{item.desc}</p>
                        <Link href={item.url} className="inline-block w-[10vw] bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300">
                            To see Project
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center p-4">
                        <img src={item.image} alt="Project Image" className="w-[90%] max-w-[400px] h-auto rounded-md shadow-md object-cover" />
                    </div>
                </div>
            ))}
        </div>
    );
    
    
}

export default Category;