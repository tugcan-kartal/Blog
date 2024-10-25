import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { title } from "process";

interface Post {
    _id: string;
    title: string;
    desc: string;
    img: string;
    content: string;
    username: string;
}

interface Params{
    params: {
        id: string;
    };
}

const getData=async(id: string): Promise<Post | null>=> {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      return null; // Eğer hata varsa null döner
    }
  
    return res.json();
}

// generateMetadata fonksiyonunda params'ı asenkron olarak alın
export const generateMetadata = async ({ params }: Params) => {
    const { id } = await params; // params nesnesini await ile bekleyin
    const post = await getData(id);

    if (!post) {
        return {
            title: "Post not found",
            description: "The requested post does not exist",
        };
    }

    return {
        title: post.title,
        description: post.desc,
    };
};

// BlogPost bileşeninde de aynı şekilde params nesnesini asenkron olarak alın
const BlogPost = async ({ params }: Params) => {
    const { id } = await params; // params nesnesini await ile bekleyin
    const data = await getData(id);

    if (!data) {
        return notFound(); // Eğer veri yoksa 404 sayfası göster
    }

    return (
        <div className="max-w-7xl mx-auto p-8 space-y-16 bg-white">
            {/* Başlık ve Yazar Bilgisi */}
            <div className="flex flex-col items-center space-y-6">
                <h1 className="text-5xl font-extrabold text-gray-900 text-center">
                    {data.title}
                </h1>
                <p className="text-lg text-gray-500 text-center">{data.desc}</p>
                <div className="flex items-center space-x-4 mt-4">
                    <Image
                        src={data.img}
                        alt={data.title}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                    />
                    <span className="text-gray-700 font-medium text-lg">
                        By {data.username}
                    </span>
                </div>
            </div>

            {/* Büyük Ana Görsel */}
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image src={data.img} alt={data.title} fill={true} className="object-cover" />
            </div>

            {/* İçerik Bölümü */}
            <div className="prose lg:prose-xl max-w-none leading-relaxed text-gray-700 mx-auto">
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;
