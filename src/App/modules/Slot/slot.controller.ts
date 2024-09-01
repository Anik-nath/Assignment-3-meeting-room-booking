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

const getSlots = catchAsync(async (req: Request, res: Response) => {
  const result = await slotsServices.getAllSlots();
  if (result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Slots retrieved successfully',
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
    if (result.length === 0) {
      sendResponse(res, {
        success: false,
        statusCode: 404,
        message: 'No Data Found',
        data: result,
      });
    }
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  } else {
    const result = await slotsServices.getAllSlotFromDb();
    if (result.length === 0) {
      sendResponse(res, {
        success: false,
        statusCode: 404,
        message: 'No Data Found',
        data: result,
      });
    }
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  }
});
const deleteSlot = catchAsync(async (req: Request, res: Response) => {
  const {slotId } = req.params;
  const result = await slotsServices.deleteSlotFromDb(slotId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Slot deleted successfully',
    data: result,
  });
});
export const slotsController = {
  getSlots,
  createSlots,
  getAvailableSlots,
  deleteSlot
};
