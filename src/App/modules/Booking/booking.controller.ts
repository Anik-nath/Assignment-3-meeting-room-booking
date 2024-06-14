import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { bookingServices } from './booking.service';

const booking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.createBooking(req.body);
  
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Booking created successfully',
    data: result,
  });
});

export const bookingController = {
  booking,
};
