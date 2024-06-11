import httpStatus from 'http-status';
import { Request, Response } from 'express';

export const notFoundRoute = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
};
