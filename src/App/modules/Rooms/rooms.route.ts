import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { meetingRoomValidation } from './rooms.validation';
import { MeetingRoomControllers } from './rooms.controller';
import { meetingRoomUpdateValidation } from './rooms.updateValidation';
import auth from '../../middleware/authGurd';
import { USER_ROLE } from '../User/user.const';

const router = express.Router();

// create room
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(meetingRoomValidation.meetingRoomValidationSchema),
  MeetingRoomControllers.createMeetingRooom,
);
// get all rooms
router.get('/', MeetingRoomControllers.getAllMeetingRooms);
// get single rooms
router.get(
  '/:roomId',
  auth(USER_ROLE.admin, USER_ROLE.user),
  MeetingRoomControllers.getSingleMeetingRoom,
);
// update room
router.put(
  '/:roomId',
  auth(USER_ROLE.admin),
  validateRequest(
    meetingRoomUpdateValidation.meetingRoomUpdateValidationSchema,
  ),
  MeetingRoomControllers.updateMeetingRoom,
);
// delete room
router.delete(
  '/:roomId',
  auth(USER_ROLE.admin),
  MeetingRoomControllers.deleteMeetingRoom,
);

export const meetingRoomRoutes = router;
