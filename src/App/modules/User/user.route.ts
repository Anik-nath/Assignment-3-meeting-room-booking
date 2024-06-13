import express from 'express';
import { userController } from './user.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { userValidation } from './user.validation';
import { authController } from '../Auth/auth.controller';
import { authValidations } from '../Auth/auth.validation';
const router = express.Router();

// all the user auth routes here
router.get('/users', userController.getAllUsers);
// user authentication routes
router.post(
  '/signup',
  validateRequest(userValidation.userValidationSchema),
  userController.signup,
);
router.post(
  '/login',
  validateRequest(authValidations.loginValidationSchema),
  authController.loginController,
);

export const UserRoutes = router;
