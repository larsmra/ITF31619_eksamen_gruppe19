import nodemailer from 'nodemailer';

export const sendMail = async (options) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const message = {
        from: `${process.env.EMAIL_COMPANY_NAME} <${process.env.EMAIL_COMPANY_NOREPLY}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(message);
};