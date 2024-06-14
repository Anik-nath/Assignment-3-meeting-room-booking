import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { bookingValidationSchema } from './booking.Validate';
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
router.delete('/:id');
// update booking
router.put('/:id');
// /my-bookings(GET)
router.get('/my-booking');

export const bookingRoutes = router;
