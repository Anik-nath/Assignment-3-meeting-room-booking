import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './App/routes';
import { notFoundRoute } from './App/middleware/notfoundRoute';
import { globalErrorHandler } from './App/middleware/globalErrorHandler';

const app = express();

//parser
app.use(express.json());
app.use(cors());

//api route
app.use('/api', router);

// test route
const test = (req: Request, res: Response) => {
  res.send('Meeting room booking system Server');
};
app.get('/', test);
// globar error handler
app.use(globalErrorHandler);
// 404 route
app.get('*', notFoundRoute);
export default app;
