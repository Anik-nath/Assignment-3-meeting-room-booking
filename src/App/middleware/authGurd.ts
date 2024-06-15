import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { catchAsync } from '../utils/catchAsync';
import { TUserRole } from '../modules/User/user.interface';
import config from '../config';
import AppError from '../apperrors/errors';
import User from '../modules/User/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }
    const token = authHeaders.split(' ')[1];
    // Verify token
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    // console.log(decoded);
    const { role, userEmail } = decoded;

    // check user exist or not
    const user = await User.isUserExistsByCustomId(userEmail);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
