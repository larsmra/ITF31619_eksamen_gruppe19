import { categoryService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const list = catchAsyncError(async (req, res, next) => {
  const categories = await categoryService.listCategories();
  res.status(200).json({ success: true, data: categories });
});

export const create = catchAsyncError(async (req, res, next) => {
  if (!req.user.id) {
    return next(new ErrorHandler('Du må være logget inn', 403));
  }
  req.body.creator = req.user.id;
  const { name } = req.body;
  if (!name) {
    return next(new ErrorHandler('Fyll ut feltet', 400));
  }
  const exist = await categoryService.getCategory({ name });
  if (exist) {
    return next(new ErrorHandler('Kategorien finnes allerede', 400));
  }
  const category = await categoryService.createCategory(req.body);
  res.status(201).json({ success: true, data: category });
});
