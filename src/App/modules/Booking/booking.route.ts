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
router.get('/');
// /my-bookings(GET)
router.get('/my-booking');
// bookings/:id
router.get('/:id');

export const bookingRoutes = router;
