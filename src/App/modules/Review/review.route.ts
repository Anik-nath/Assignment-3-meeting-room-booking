import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { reviewValidationSchema } from './review.validation';
import { reviewController } from './review.controller';
const router = express.Router();

router.post(
  '/',
  reviewController.createReview,
  validateRequest(reviewValidationSchema),
);
router.get('/', reviewController.getAllReviews);
export const reviewRoute = router;
