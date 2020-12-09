import { categoryService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';

export const list = catchAsyncError(async (req, res, next) => {
  const categories = await categoryService.listCategories();
  res.status(200).json({ success: true, data: categories });
});

export const create = catchAsyncError(async (req, res, next) => {
  req.body.creator = req.user.id;
  const category = await categoryService.createCategory(req.body);
  res.status(201).json({ success: true, data: category });
});
