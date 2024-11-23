import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import db from '../models/Feed';

export const sendReply = (req: Request, res: Response) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Admin Reply',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Email sent', info: info.response });
  });
};