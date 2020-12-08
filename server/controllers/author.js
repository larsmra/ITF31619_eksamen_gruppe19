import { articleService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const list = catchAsyncError(async (req, res, next) => {
  const authors = await articleService.listAuthors();
  res.status(200).json({ success: true, data: authors });
});
