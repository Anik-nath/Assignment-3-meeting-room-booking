import { Types } from 'mongoose';
import { TSlot } from './slot.interface';
import { timeToMinutes, minutesToTime } from './slot.timeConversion';

export const calculateSlots = (
  payload: TSlot,
  slotDuration: number,
): TSlot[] => {
  const startMinutes = timeToMinutes(payload.startTime);
  const endMinutes = timeToMinutes(payload.endTime);
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / slotDuration;

  const convertedDate = new Date(payload.date).toISOString().split('T')[0];
  // console.log(convertedDate);

  const slots: TSlot[] = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const calculateSlotStartMinutes = startMinutes + i * slotDuration;
    const calculateSlotEndMinutes = calculateSlotStartMinutes + slotDuration;

    slots.push({
      room: new Types.ObjectId(payload.room),
      date: convertedDate,
      startTime: minutesToTime(calculateSlotStartMinutes),
      endTime: minutesToTime(calculateSlotEndMinutes),
      isBooked: false,
    });
  }

  return slots;
};
