import Slot from '../Slot/slot.model';
import { TBooking } from './booking.interface';
import Booking from './booking.model';

const createBooking = async (payload: TBooking) => {
  const booking = await Booking.create(payload);
  //set isBooked true
  await Slot.updateMany({ _id: { $in: payload.slots } }, { isBooked: true });

  const result = await (
    await (await booking.populate('slots')).populate('user')
  ).populate('room');
  return result;
};

export const bookingServices = {
  createBooking,
};
