import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './App/routes';
import { notFoundRoute } from './App/middleware/notfoundRoute';

const app = express();

//parser
app.use(express.json());
app.use(cors());

//api route
app.use('/api', router);

// test route
const test = (req: Request, res: Response) => {
  res.send('Assignment-3 Meeting-room-booking system Running');
};
app.get('/', test);

// 404 route
app.get('*', notFoundRoute);
export default app;
