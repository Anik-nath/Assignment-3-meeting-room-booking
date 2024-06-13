import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  token?: string;
  data: T;
};

export const sendResponse = <T>(res: Response, payload: TResponse<T>) => {
  res.status(payload?.statusCode).json({
    success: payload.success,
    statusCode: payload.statusCode,
    message: payload.message,
    token: payload.token,
    data: payload.data,
  });
};
