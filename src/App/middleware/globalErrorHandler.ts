import { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const message = err.message || 'Something went wrong';
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message,
    err,
  });
};
