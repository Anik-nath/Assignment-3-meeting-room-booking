import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import {
  UpdateBookingValidationSchema,
  bookingValidationSchema,
} from './booking.Validate';
import { bookingController } from './booking.controller';

const router = express.Router();

// booking slots
router.post(
  '/',
  validateRequest(bookingValidationSchema),
  bookingController.booking,
);
// all bookings
router.get('/', bookingController.getAllbookings);
// get single
router.get('/:id', bookingController.getSinglebookings);
// delete booking
router.delete('/:id', bookingController.deleteBooking);
// update booking
router.put(
  '/:id',
  validateRequest(UpdateBookingValidationSchema),
  bookingController.updateBooking,
);
// /my-bookings(GET)
router.get('/my-booking');

export const bookingRoutes = router;
