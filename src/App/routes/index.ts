import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { meetingRoomRoutes } from '../modules/Rooms/rooms.route';
import { slotRoutes } from '../modules/Slot/slot.route';
import { bookingRoutes } from '../modules/Booking/booking.route';

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
];

allModuleRoutes.map((ele) => router.use(ele.path, ele.route));
