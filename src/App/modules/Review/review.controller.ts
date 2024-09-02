import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { reviewServices } from './review.service';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewServices.createReviewIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Review created successfully',
    data: result,
  });
});
const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewServices.getAllReviewFromDb();
  if (result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Reviews retrieved successfully',
    data: result,
  });
});
export const reviewController = { createReview, getAllReviews };
