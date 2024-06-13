import { Types } from 'mongoose';
import { z } from 'zod';

const slotValidationSchema = z.object({
  body: z.object({
    room: z.instanceof(Types.ObjectId, { message: 'Invalid room ID format' }),
    date: z.date({ message: 'Invalid date format' }),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid start time format, expected HH:MM',
    }),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'Invalid end time format, expected HH:MM',
    }),
  }),
});

export const slotValidation = { slotValidationSchema };
