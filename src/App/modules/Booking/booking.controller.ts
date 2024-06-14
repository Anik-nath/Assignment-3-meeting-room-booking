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
const getAllbookings = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.getAllBookingFromDb();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});
const getSinglebookings = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingServices.getSingleBookingFromDb(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Bookings retrieved successfully',
    data: result,
  });
});

export const bookingController = {
  booking,
  getAllbookings,
  getSinglebookings,
};
