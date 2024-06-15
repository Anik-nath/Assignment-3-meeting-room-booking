import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { meetingRoomRoutes } from '../modules/Rooms/rooms.route';
import { slotRoutes } from '../modules/Slot/slot.route';
import { bookingRoutes } from '../modules/Booking/booking.route';
import { myBookingRoutes } from '../modules/Booking/mybooking.route';

export const router = Router();

const allModuleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/rooms',
    route: meetingRoomRoutes,
  },
  {
    path: '/slots',
    route: slotRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoutes,
  },
  {
    path: '/my-bookings',
    route: myBookingRoutes,
  },
];

allModuleRoutes.map((ele) => router.use(ele.path, ele.route));
