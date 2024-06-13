import MeetingRoom from './rooms.model';
import { TMeetingRoom } from './rooms.interface';

const createRoom = async (payload: TMeetingRoom) => {
  const result = await MeetingRoom.create(payload);
  return result;
};
const getAllRooms = async () => {
  const result = await MeetingRoom.find();
  return result;
};
const getSingleRoom = async (id: string) => {
  const result = await MeetingRoom.findById({ _id: id });
  return result;
};
const updateRoom = async (id: string, payload: Partial<TMeetingRoom>) => {
  const result = await MeetingRoom.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteRoom = async (id: string) => {
  const result = await MeetingRoom.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};
export const MeetingRoomServices = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  deleteRoom,
  updateRoom,
};
