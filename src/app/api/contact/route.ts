import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST=async(req:Request)=>{

    const {username,email,message}=await req.json();

    const transporter=nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions={
        from: email,
        to: process.env.EMAIL_TO,
        subject: `There is a message from ${username}`,
        text: message,
        html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <p style="font-size: 16px;"><strong>From:</strong> ${username} <br><strong>Email:</strong> ${email}</p>
                    <hr style="border: 1px solid #ccc;">
                    <p style="font-size: 16px;"><strong>Message:</strong></p>
                    <p style="background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #ddd;">
                        ${message}
                    </p>
                    <p style="font-size: 14px; color: #555;">This email was sent from your contact form.</p>
                </div>
            `,
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error sending email,check route.ts in contact',error }, { status: 500 });
    }

}