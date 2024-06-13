import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { slotsServices } from './slot.service';
import { sendResponse } from '../../utils/sendResponse';
import { calculateSlots } from './slot.calculate';
import { TSlot } from './slot.interface';

const createSlots = catchAsync(async (req: Request, res: Response) => {
  const slotDuration = 60;
  const slots: TSlot[] = calculateSlots(req.body, slotDuration);
  //   console.log(slots)

  const result = await slotsServices.createSlotsIntoDb(slots);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'slots are created',
    data: result,
  });
});

export const slotsController = {
  createSlots,
};
