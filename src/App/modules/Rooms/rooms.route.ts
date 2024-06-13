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
  validateRequest(meetingRoomValidation.meetingRoomValidationSchema),
  MeetingRoomControllers.createMeetingRooom,
);
// get all rooms
router.get(
  '/',
  auth(USER_ROLE.admin),
  MeetingRoomControllers.getAllMeetingRooms,
);
// get single rooms
router.get('/:roomId', MeetingRoomControllers.getSingleMeetingRoom);
// update room
router.put(
  '/:roomId',
  validateRequest(
    meetingRoomUpdateValidation.meetingRoomUpdateValidationSchema,
  ),
  MeetingRoomControllers.updateMeetingRoom,
);
// delete room
router.delete('/:roomId', MeetingRoomControllers.deleteMeetingRoom);

export const meetingRoomRoutes = router;
