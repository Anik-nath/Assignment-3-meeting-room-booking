import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const test = 'Assignment-3 Meeting-room-booking system';

  res.send(test);
});
export default app;
