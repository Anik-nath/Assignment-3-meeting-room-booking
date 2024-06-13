import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';

export const slotSchema = new Schema<TSlot>(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: 'MeetingRoom', // reference id from Meeting room model
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false },
);

// check if start time before end time or not
slotSchema.pre('save', function (next) {
  if (this.startTime >= this.endTime) {
    const error = new Error('Start time must be before End time');
    next(error);
  }
});
const Slot = model('Slot', slotSchema);
export default Slot;
