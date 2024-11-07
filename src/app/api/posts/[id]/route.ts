import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/lib/connect";

// URL'den id'yi almak için örnek GET isteği
export const GET = async (request: NextRequest) => {
    // URL'yi alıyoruz
    const url = new URL(request.url);
    // URL'nin son kısmını alıyoruz
    const id = url.pathname.split("/").pop(); // '/api/posts/[id]' şeklinde bir yapıdan son kısmı alır

    if (!id) {
        return new NextResponse("Post ID is missing", { status: 400 });
    }

    try {
        await connectDB();
        const post = await Post.findById(id);

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Database Error, posts/route.ts check get", { status: 500 });
    }
};

// URL'den id'yi almak için örnek DELETE isteği
export const DELETE = async (request: NextRequest) => {
    // URL'yi alıyoruz
    const url = new URL(request.url);
    // URL'nin son kısmını alıyoruz
    const id = url.pathname.split("/").pop(); // '/api/posts/[id]' şeklinde bir yapıdan son kısmı alır

    if (!id) {
        return new NextResponse("Post ID is missing", { status: 400 });
    }

    try {
        await connectDB();
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse("Post deleted successfully", { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Database Error, posts/route.ts check delete", { status: 500 });
    }
};
