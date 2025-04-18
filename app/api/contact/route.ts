import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { MAIL_BOT_ID, MAIL_BOT_PASSWORD, ADMIN_MAIL_ID } from '@/app/credentials/credentials';
import { NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: MAIL_BOT_ID,
        pass: MAIL_BOT_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: MAIL_BOT_ID,
      to: ADMIN_MAIL_ID,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    console.log('📧 Email Options:', mailOptions);

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Mail Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 