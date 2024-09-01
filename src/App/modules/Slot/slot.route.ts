import express from 'express';
import { slotsController } from './slot.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { slotValidation } from './slot.validation';
import auth from '../../middleware/authGurd';
import { USER_ROLE } from '../User/user.const';

const router = express.Router();

// all bookings
router.get('/', auth(USER_ROLE.admin), slotsController.getSlots);
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(slotValidation.slotValidationSchema),
  slotsController.createSlots,
);
router.get('/availability', slotsController.getAvailableSlots);
// delete room
router.delete(
  '/:slotId',
  // auth(USER_ROLE.admin),
  slotsController.deleteSlot,
);

export const slotRoutes = router;
