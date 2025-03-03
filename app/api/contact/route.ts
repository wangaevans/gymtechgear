// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    if (!email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Configure transport
    // For production, use your actual email service credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'Gymtechwear <no-reply@gymtechwear.com>',
      to: process.env.EMAIL_TO || 'support@gymtechwear.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { message: 'Email sent successfully', id: info.messageId },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Email sending error:', error);
  
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
  
}