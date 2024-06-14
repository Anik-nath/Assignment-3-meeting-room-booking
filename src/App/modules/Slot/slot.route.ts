import express from 'express';
import { slotsController } from './slot.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { slotValidation } from './slot.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(slotValidation.slotValidationSchema),
  slotsController.createSlots,
);
router.get('/availability', slotsController.getAvailableSlots);

export const slotRoutes = router;
