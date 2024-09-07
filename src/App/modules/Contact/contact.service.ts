import nodemailer from 'nodemailer';
import { TContact } from './contact.interface';
import config from '../../config';

const sendMail = async (mailData: TContact) => {
  const { name, email, subject, message } = mailData;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });
  // Set up email data
  const mailOptions = {
    from: email,
    to: config.email_user,
    subject: `New Message from ${name}: ${subject}`,
    text: message,
  };
  const result = await transporter.sendMail(mailOptions);
  return result;
};

export const contactServices = { sendMail };
