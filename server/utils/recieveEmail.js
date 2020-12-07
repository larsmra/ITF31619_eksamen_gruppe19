import nodemailer from 'nodemailer';

export const receiveMail = async (sender) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const message = {
        from: `${sender.email} <${sender.name}>`,
        to: process.env.EMAIL_COMPANY,
        subject: sender.subject,
        text: sender.message
    };

    await transporter.receiveMail(message);
};