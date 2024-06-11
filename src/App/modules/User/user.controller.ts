import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userServices } from './user.service';

// signup controller
const signup = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUserFormDb(req.body);
    res.status(httpStatus.OK).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'User sign up failed',
      error,
    });
  }
};
// get all users controller
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.gelAllUsersFromDb();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'User retrive successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'User retrive failed',
      error,
    });
  }
};
export const userController = {
  signup,
  getAllUsers,
};
