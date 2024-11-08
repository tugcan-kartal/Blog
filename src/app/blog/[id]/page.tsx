"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaUser } from "react-icons/fa";

interface Post {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const getData = async (id: string): Promise<Post | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
      cache: "no-store", // Ensures no caching of the response
    });

    if (!res.ok) {
      throw new Error("Post not found"); // Explicitly throw an error if fetching fails
    }

    return res.json(); // Parse the response as JSON
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null; // Handle any errors during the fetch
  }
};

const BlogPost = () => {
  const { id } = useParams(); // Get the 'id' from the URL params
  const [post, setPost] = useState<Post | null>(null); // State to store the post data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to handle error

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const data = await getData(id as string); // Fetch the post data based on the id
          if (data) {
            setPost(data); // Set the fetched data to state
            setError(null); // Reset error state on successful fetch
          } else {
            setError("Post not found"); // Set error message if data is not found
          }
        } catch (err) {
          console.log(err);
          setError("An error occurred while fetching the post"); // Handle errors here
        }
        setLoading(false); // Set loading to false once data is fetched
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if something goes wrong
  }

  if (!post) {
    return <div>Post not found</div>; // Handle case when post data is not available
  }

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16 bg-white">
      {/* Title and Author Info */}
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center">
          {post.title}
        </h1>
        <p className="text-lg font-semibold text-gray-500 text-center">{post.desc}</p>
        <div className="flex items-center space-x-4 mt-4">
          <FaUser className="text-xl" />
          <span className="text-gray-700 font-medium text-lg">
            By {post.username}
          </span>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative w-full md:h-[40vh] rounded-lg overflow-hidden shadow-lg">
        <Image src={post.img} alt={post.title} fill={true} className="object-cover" unoptimized />
      </div>

      {/* Content Section */}
      <div className="prose lg:prose-xl max-w-none leading-relaxed text-gray-700 mx-auto">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
