import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
export const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    slots: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Slot' }],
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'MeetingRoom',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    isConfirmed: {
      type: String,
      default: 'unconfirmed',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
    transactionId: {
      type: String,
      default: 'NexusTID',
    },
  },
  { versionKey: false },
);

const Booking = model('Booking', bookingSchema);
export default Booking;
