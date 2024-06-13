import { Types } from 'mongoose';
import { TSlot } from './slot.interface';
import { timeToMinutes, minutesToTime } from './slot.timeConversion';

export const calculateSlots = (body: TSlot, slotDuration: number): TSlot[] => {
  const startMinutes = timeToMinutes(body.startTime);
  const endMinutes = timeToMinutes(body.endTime);
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / slotDuration;

  const slots: TSlot[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const calculateSlotStartMinutes = startMinutes + i * slotDuration;
    const calculateSlotEndMinutes = calculateSlotStartMinutes + slotDuration;

    slots.push({
      room: new Types.ObjectId(body.room),
      date: new Date(body.date),
      startTime: minutesToTime(calculateSlotStartMinutes),
      endTime: minutesToTime(calculateSlotEndMinutes),
      isBooked: false,
    });
  }

  return slots;
};
