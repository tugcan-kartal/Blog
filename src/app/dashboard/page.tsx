"use client";
import React, { useEffect, useState, FormEvent } from "react";
import { useSession,signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Post {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [status, router]);


  useEffect(() => {
    const fetchPosts = async () => {
      if (session?.user?.name) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?username=${session.user.name}`);
          const data = await response.json();
          setPosts(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPosts();
  }, [session?.user?.name]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form[0] as HTMLInputElement).value;
    const desc = (form[1] as HTMLInputElement).value;
    const img = (form[2] as HTMLInputElement).value;
    const content = (form[3] as HTMLTextAreaElement).value;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.user?.name,
        }),
      });
      form.reset();
      // Yeni veriyi ekledikten sonra tekrar verileri çek
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?username=${session?.user?.name}`);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
      throw new Error("dashboard error on handlesubmit")
    }
  };

  const handleDelete = async (id: string) => { //mongodbden çekiyor ya verileri burada id atamasakda oradaki _idyi çekiyor zaten aşağıya gösterirkende o idlerden çekti unutma
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, {
        method: "DELETE",
      });
      // Veriyi sildikten sonra tekrar verileri çek
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?username=${session?.user?.name}`);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
      throw new Error("Dashboard error on handleDelete")
    }
  };

  if (status === "authenticated") {
    return (
        <div className="flex flex-col items-center justify-center p-6 space-y-8">
            <div className="text-xl font-semibold">Welcome {session.user?.name}!</div>
            <div className="cursor-pointer bg-red-500 p-2 rounded-2xl text-white font-semibold text-sm" onClick={()=>signOut()}>Sign Out</div>

            <form
            onSubmit={handleSubmit}
            className="md:w-[50vw] w-[80vw] max-w-4xl bg-white shadow-md rounded-lg p-8 space-y-6"
            >
            {/* <form onSubmit={(e)=>{handleSubmit(e)}}> bu şekilde de yazılır */}

                <h1 className="text-3xl font-bold text-gray-900">Add New Post</h1>
                <div className="flex flex-col space-y-4">
                    <input
                    type="text"
                    placeholder="Title"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                    type="text"
                    placeholder="Desc"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                    type="text"
                    placeholder="Image URL"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                    placeholder="Content"
                    cols={30}
                    rows={10}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                    Send
                    </button>
                </div>
            </form>

            <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-6 max-w-5xl">
            {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                posts?.map((post) => (
                <div
                    key={post._id}
                    className="bg-white shadow-md rounded-lg overflow-hidden mb-6 hover:shadow-2xl hover:scale-105 transition-all duration-200"
                >
                    <div className="relative w-full h-48">
                    <Image
                        src={post.img}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                    </div>
                    <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mt-2">{post.desc}</p>
                    <button
                        onClick={() => handleDelete(post._id)}
                        className="text-red-500 hover:text-red-700 mt-4 block text-right"
                    >
                        Delete
                    </button>
                    </div>
                </div>
                ))
            )}
            </div>
        
            
        </div>
    );
  }

  return null;
};

export default Dashboard;
