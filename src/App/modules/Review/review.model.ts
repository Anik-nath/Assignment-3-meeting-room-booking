import mongoose, { Schema } from 'mongoose';
import { TReview } from './review.interface';

const ReviewSchema: Schema = new Schema(
  {
    reviewerName: { type: String, required: true },
    reviewerBio: { type: String, required: true },
    review: { type: String, required: true },
    companyName: { type: String, required: true },
  },
  { versionKey: false },
);

const Review = mongoose.model<TReview>('Review', ReviewSchema);
export default Review;
