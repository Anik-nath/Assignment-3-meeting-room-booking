import { object, z } from 'zod';

export const reviewValidationSchema = z.object({
  body: object({
    reviewerName: z.string(),
    reviewerBio: z.string(),
    review: z.string(),
    companyName: z.string(),
  }),
});
