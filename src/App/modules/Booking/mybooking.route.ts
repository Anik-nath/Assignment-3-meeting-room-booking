import express from 'express';
import auth from '../../middleware/authGurd';
import { USER_ROLE } from '../User/user.const';
import { bookingController } from './booking.controller';

const router = express.Router();
// /my-bookings(GET)
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  bookingController.getMybookings,
);

export const myBookingRoutes = router;
