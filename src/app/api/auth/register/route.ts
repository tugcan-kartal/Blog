import connectDB from "@/lib/connect";
import Users from "@/models/Users";
import { NextRequest, NextResponse } from "next/server";


export const POST=async(request: NextRequest):Promise<NextResponse>=>{
    const body=await request.json();
    const newUser=new Users(body);

    try {
        await connectDB();
        await newUser.save();

        return new NextResponse("Post has been created",{status: 201});
    } catch (error) {
        return new NextResponse("Database error",{status: 500});
    }
}