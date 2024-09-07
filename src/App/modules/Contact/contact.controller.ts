import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { contactServices } from './contact.service';
import { sendResponse } from '../../utils/sendResponse';

const sendMailFromClient = catchAsync(async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required: name, email, subject, and message.',
    });
  }
  const result = await contactServices.sendMail({
    name,
    email,
    subject,
    message,
  });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Email sent successfully!',
    data: result,
  });
});

export const contactController = { sendMailFromClient };
