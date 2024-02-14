import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        console.log("from Email",process.env.fromEmail); 
        console.log("Password",process.env.password); 
        console.log("to Email",process.env.toEmail); 
        const { name,email,phone,message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user:process.env.fromEmail,
                pass:process.env.password,
            }
        })
        
        const mailOption = {
            from:process.env.fromEmail,
            to: process.env.toEmail,
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