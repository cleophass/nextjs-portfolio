import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Fonction pour gérer les requêtes POST
export async function POST(req: Request) {
  try {
    

    // Parse the incoming JSON data
    const { email, subject, message } = await req.json();
    
    // Log the received data
    

    // Check if required fields are present
    if (!email || !subject || !message) {
      
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create the transporter object for Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Log transporter configuration
   

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'cleophas.fournier@gmail.com',  // Destinataire fixe
      subject,
      text: `Nouveau mail envoyé via le portfolio par : ${email}\n\nVoici le message :\n${message}`,
    };

    // Log email options
    

    // Send the email
    await transporter.sendMail(mailOptions);

    

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
