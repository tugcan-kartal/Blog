import connectDB from "@/lib/connect";
import Post,{IPost} from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(request: NextRequest):Promise<NextResponse>=>{
    const url=new URL(request.url);
    const username=url.searchParams.get("username");

    try {
        await connectDB();
        const posts=await Post.find(username ? {username} : {});
        return new NextResponse(JSON.stringify(posts),{status: 200});
    } catch (error) {
        console.log(error);
        return new NextResponse("Database Error check get func posts/route.ts",{status: 500});
    }
}

export const POST=async(request: NextRequest):Promise<NextResponse>=>{
    const body=await request.json() as IPost;
    const newPost=new Post(body);

    try {
        await connectDB();

        await newPost.save();
        return new NextResponse("Post has been created",{status: 201});
    } catch (error) {
        console.log(error);
        return new NextResponse("Database error check post func posts/route",{status: 500});
    }
}