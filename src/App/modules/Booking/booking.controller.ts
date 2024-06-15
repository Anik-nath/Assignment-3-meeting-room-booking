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
  if (result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
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
const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingServices.updateBookingFromDB(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Booking updated successfully',
    data: result,
  });
});
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingServices.deleteBookingFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Booking deleted successfully',
    data: result,
  });
});

const getMybookings = catchAsync(async (req: Request, res: Response) => {
  const userEmail = req.user?.userEmail;
  const result = await bookingServices.getMyBookingFromDb(userEmail);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});

export const bookingController = {
  booking,
  getAllbookings,
  getSinglebookings,
  updateBooking,
  deleteBooking,
  getMybookings,
};
