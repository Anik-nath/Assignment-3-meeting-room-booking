import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { MeetingRoomServices } from './rooms.service';
import { sendResponse } from '../../utils/sendResponse';

const createMeetingRooom = catchAsync(async (req: Request, res: Response) => {
  const result = await MeetingRoomServices.createRoom(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Room added successfully',
    data: result,
  });
});
const getAllMeetingRooms = catchAsync(async (req: Request, res: Response) => {
  const result = await MeetingRoomServices.getAllRooms();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Room retrieved successfully',
    data: result,
  });
});
const getSingleMeetingRoom = catchAsync(async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const result = await MeetingRoomServices.getSingleRoom(roomId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Room retrieved successfully',
    data: result,
  });
});
const updateMeetingRoom = catchAsync(async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const result = await MeetingRoomServices.updateRoom(roomId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Room deleted successfully',
    data: result,
  });
});
const deleteMeetingRoom = catchAsync(async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const result = await MeetingRoomServices.deleteRoom(roomId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Room deleted successfully',
    data: result,
  });
});
export const MeetingRoomControllers = {
  createMeetingRooom,
  getAllMeetingRooms,
  getSingleMeetingRoom,
  deleteMeetingRoom,
  updateMeetingRoom,
};
