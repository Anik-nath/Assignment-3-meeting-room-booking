import { object, z } from 'zod';

export const bookingValidationSchema = z.object({
  body: object({
    date: z.string({
      message: 'Date format should be YY-MM-DD',
    }),
    slots: z.array(z.string()),
    room: z.string(),
    user: z.string(),
  }),
});
