import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string(),
    role: z.enum(['admin', 'user']),
    isDeleted: z.boolean(),
  }),
});
export const userValidation = {
    userValidationSchema
}