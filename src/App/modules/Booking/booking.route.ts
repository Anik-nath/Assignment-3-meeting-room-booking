import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import {
  UpdateBookingValidationSchema,
  bookingValidationSchema,
} from './booking.Validate';
import { bookingController } from './booking.controller';
import auth from '../../middleware/authGurd';
import { USER_ROLE } from '../User/user.const';

const router = express.Router();

// booking slots
router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(bookingValidationSchema),
  bookingController.booking,
);
// all bookings
router.get('/', auth(USER_ROLE.admin), bookingController.getAllbookings);
// get single
router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  bookingController.getSinglebookings,
);
// delete booking
router.delete('/:id', auth(USER_ROLE.admin), bookingController.deleteBooking);
// update booking
router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(UpdateBookingValidationSchema),
  bookingController.updateBooking,
);

export const bookingRoutes = router;
