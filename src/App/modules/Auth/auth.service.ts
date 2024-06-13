import httpStatus from 'http-status';
import User from '../User/user.model';
import { createToken } from './auth.utils';
import config from '../../config';
import AppError from '../../apperrors/errors';
import { TAuth } from './auth.interface';

const loginUser = async (payload: TAuth) => {
  const user = await User.isUserExistsByCustomId(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  

  return {
    accessToken,
    user
  };
};
export const AuthServices = {
  loginUser,
};

export const authServices = { loginUser };
