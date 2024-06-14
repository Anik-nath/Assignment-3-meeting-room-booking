import { Types } from 'mongoose';
import { TSlot } from './slot.interface';
import Slot from './slot.model';

const createSlotsIntoDb = async (payload: TSlot[]) => {
  const result = await Slot.insertMany(payload);
  return result;
};
// get all the slots those are not booked
const getAllSlotFromDb = async () => {
  const query: object = {
    isBooked: false,
  };
  const result = await Slot.find(query).populate('room');
  return result;
};
// get available slots by date and roomId
const getAvailableSlotFromDb = async (date: string, roomId: string) => {
  const dateRegex = new RegExp(`^${date}`, 'i');
  const result = await Slot.find({
    date: dateRegex,
    room: new Types.ObjectId(roomId),
    isBooked: false,
  }).populate('room');
  return result;
};
export const slotsServices = {
  createSlotsIntoDb,
  getAllSlotFromDb,
  getAvailableSlotFromDb,
};
