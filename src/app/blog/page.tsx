import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Post{
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const getData=async():Promise<Post[]>=>{
    const res=await fetch("http://localhost:3000/api/posts",{
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const Blog=async()=>{
    const data: Post[]=await getData();
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {data.map((item) => (
            <Link href={`/blog/${item._id}`} key={item._id} className="group">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="relative">
                <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                    unoptimized
                />
                </div>
                <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600">
                    {item.title}
                </h1>
                <p className="text-gray-500 mt-3">{item.desc}</p>
                <p className="text-gray-700 mt-2 font-medium">By {item.username}</p>
                <p className="text-gray-600 mt-4">
                    {item.content.substring(0, 100)}... {/* İçeriğin ilk 100 karakterini göster */}
                </p>
                </div>
            </div>
            </Link>
        ))}
    </div>
    )
}

export default Blog;