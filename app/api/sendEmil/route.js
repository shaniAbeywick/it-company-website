import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        console.log("from Email",process.env.NEXT_PUBLIC_FROM_EMAIL); 
        console.log("Password",process.env.NEXT_PUBLIC_PASSWORD); 
        console.log("to Email",process.env.NEXT_PUBLIC_TO_EMAIL); 
        const { name,email,phone,message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user:process.env.NEXT_PUBLIC_FROM_EMAIL,
                pass:process.env.NEXT_PUBLIC_PASSWORD,
            }
        })
        
        const mailOption = {
            from:process.env.NEXT_PUBLIC_FROM_EMAIL,
            to: process.env.NEXT_PUBLIC_TO_EMAIL,
            subject: "Contact Us",
            html: `
        
        <li> name: ${name}</li>
        <li> email: ${email}</li> 
        <li> phone: ${phone}</li> 
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}