"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import { products } from "./data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Category: React.FC = () => {
    const params = useParams();
    const categoryName = params.category as "websites" | "applications";

    const getDatas = (catName: "websites" | "applications") => {
        const allDatas = products[catName];
        if (allDatas) {
            return allDatas;
        }

        return notFound();
    };

    const datas = getDatas(categoryName);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };


    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
            <Slider {...settings} className="lg:w-[25vw] mx-auto">
                {datas && datas.map((item, index) => (
                    <div  key={index} className="bg-white rounded-lg  overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <div className="relative">
                            <Image unoptimized width={800} height={800} src={item.image} alt={item.title} className="object-cover rounded-t-lg" />
                            <div className="absolute top-0 left-0 p-4 bg-blue-600 text-white rounded-br-lg">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <Link href={item.url} className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                                View Project
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
           
        </div>
    );
}

export default Category;
