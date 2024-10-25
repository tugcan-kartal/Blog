import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/Post";
import connectDB from "@/lib/connect";

export const GET = async (request: NextRequest, context: { params: { id: string } }) => {
    const { id } = await context.params; // params.id'yi asenkron olarak alıyoruz.

    try {
        await connectDB();
        const post = await Post.findById(id);

        if (!post) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const DELETE = async (request: NextRequest, context: { params: { id: string } }) => {
    const { id } = await context.params; // params.id'yi asenkron olarak alıyoruz.

    try {
        await connectDB();
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return new NextResponse("Post not found", { status: 404 });
        }

        return new NextResponse("Post deleted successfully", { status: 200 });
    } catch (error) {
        return new NextResponse("Database error", { status: 500 });
    }
};
