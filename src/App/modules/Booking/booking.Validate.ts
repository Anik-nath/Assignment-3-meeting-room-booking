import { object, z } from 'zod';

export const bookingValidationSchema = z.object({
  body: object({
    date: z.string({
      message: 'Date format should be YY-MM-DD',
    }),
    slots: z.array(z.string()),
    room: z.string(),
    user: z.string(),
    totalAmount: z.number().default(0),
  }),
});
export const UpdateBookingValidationSchema = z.object({
  body: object({
    date: z
      .string({
        message: 'Date format should be YY-MM-DD',
      })
      .optional(),
    slots: z.array(z.string()).optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount: z.number().default(0).optional(),
  }),
});
