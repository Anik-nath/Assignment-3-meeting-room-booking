import { z } from 'zod';

const meetingRoomValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    roomNo: z
      .number()
      .int({ message: 'Room number must be an integer' })
      .positive({ message: 'Room number must be a positive integer' }),
    floorNo: z
      .number()
      .int({ message: 'Floor number must be an integer' })
      .nonnegative({ message: 'Floor number cannot be negative' }),
    capacity: z
      .number()
      .int({ message: 'Capacity must be an integer' })
      .positive({ message: 'Capacity must be a positive integer' }),
    pricePerSlot: z
      .number()
      .nonnegative({ message: 'Price per slot cannot be negative' }),
    amenities: z
      .array(
        z.string().min(1, { message: 'Amenity cannot be an empty string' }),
      )
      .min(1, { message: 'At least one amenity is required' }),
  }),
});

export const meetingRoomValidation = { meetingRoomValidationSchema };
