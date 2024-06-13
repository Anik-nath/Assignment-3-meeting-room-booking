import { TSlot } from './slot.interface';
import Slot from './slot.model';

const createSlotsIntoDb = async (payload: TSlot[]) => {
  const result = await Slot.insertMany(payload);
  return result;
};
export const slotsServices = { createSlotsIntoDb };
