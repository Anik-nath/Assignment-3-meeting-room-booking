import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { authServices } from './auth.service';

const loginController = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req.body);
  const { accessToken, user } = result;
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    token: accessToken,
    data: user,
  });
});
export const authController = { loginController };
