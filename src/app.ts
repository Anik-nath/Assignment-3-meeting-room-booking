import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './App/routes';
import httpStatus from 'http-status';
const app = express();

//parser
app.use(express.json());
app.use(cors());

//api route
app.use('/api', router);

// test route
const test = (req: Request, res: Response) => {
  res.send('Assignment-3 Meeting-room-booking system');
};
app.get('/', test);

// 404 route
app.get('*', (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
  });
});
export default app;
