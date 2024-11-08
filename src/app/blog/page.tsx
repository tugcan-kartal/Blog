// src/app/blog/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define Post interface
interface Post {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

// Blog component to render posts
const Blog = async () => {
  // Fetching posts data directly in the component
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, { cache: 'no-store' });
  const posts: Post[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {posts.map((item) => (
        <Link href={`/blog/${item._id}`} key={item._id} className="group">
          <div className="bg-white lg:w-[20vw] w-[80vw] mx-auto shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <Image src={item.img} alt={item.title} width={400} height={250} className="w-full h-64 object-cover" unoptimized />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-800">{item.title}</h1>
              <p className="text-gray-500 mt-3">{item.desc}</p>
              <p className="text-gray-700 mt-2 font-medium">By {item.username}</p>
              <p className="text-gray-600 mt-4">{item.content.substring(0, 100)}...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
