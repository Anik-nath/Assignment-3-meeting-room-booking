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
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req: Request, res: Response) => {
  const { date, roomId } = req.query;
  if (date && roomId) {
    const result = await slotsServices.getAvailableSlotFromDb(
      date as string,
      roomId as string,
    );
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  } else {
    const result = await slotsServices.getAllSlotFromDb();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  }
});

export const slotsController = {
  createSlots,
  getAvailableSlots,
};
