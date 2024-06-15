import MeetingRoom from '../Rooms/rooms.model';
import Slot from '../Slot/slot.model';
import User from '../User/user.model';
import { TBooking } from './booking.interface';
import Booking from './booking.model';

const createBooking = async (payload: TBooking) => {
  const userExists = await User.exists({ _id: payload.user });
  if (!userExists) {
    throw new Error('You are not authorized!');
  }
  const booking = await Booking.create(payload);
  //save total amount
  const room = await MeetingRoom.findById(payload.room);
  if (room) {
    const totalAmount = payload.slots.length * room.pricePerSlot;
    booking.totalAmount = totalAmount;
    await booking.save();
  }
  //set isBooked true
  await Slot.updateMany({ _id: { $in: payload.slots } }, { isBooked: true });

  const result = await (
    await (await booking.populate('slots')).populate('room')
  ).populate({ path: 'user', select: '-password' });
  return result;
};
// get all the bookings
const getAllBookingFromDb = async () => {
  const result = await Booking.find()
    .populate('room')
    .populate('slots')
    .populate('user');
  return result;
};

// get single booking
const getSingleBookingFromDb = async (id: string) => {
  const result = await Booking.find({ _id: id })
    .populate('room')
    .populate('slots')
    .populate('user');
  return result;
};
// update booking
const updateBookingFromDB = async (id: string, payload: Partial<TBooking>) => {
  const result = await Booking.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
// soft delete booking
const deleteBookingFromDB = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const getMyBookingFromDb = async (userEmail: string) => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    throw new Error('Your are unauthorized!');
  }
  const result = await Booking.find({ user: user._id })
    .populate('room')
    .populate('slots');

  return result;
};

export const bookingServices = {
  createBooking,
  getAllBookingFromDb,
  getSingleBookingFromDb,
  updateBookingFromDB,
  deleteBookingFromDB,
  getMyBookingFromDb,
};
