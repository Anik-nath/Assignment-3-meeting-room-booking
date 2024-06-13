import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';

export const slotSchema = new Schema<TSlot>({
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
    validate: {
      validator: function (v: string) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
      },
      message: (props) => `${props.value} is not a valid time format!`,
    },
  },
  endTime: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
      },
      message: (props) => `${props.value} is not a valid time format!`,
    },
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

const Slot = model('Slot', slotSchema);
export default Slot;
