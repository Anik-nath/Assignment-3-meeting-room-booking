import express from 'express';
import { userController } from './user.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

// all the user auth routes here
router.post(
  '/signup',
  validateRequest(userValidation.userValidationSchema),
  userController.signup,
);
router.get('/users', userController.getAllUsers);
router.post('/login');

export const UserRoutes = router;
