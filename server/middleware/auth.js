import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  // WIP

  next();
});
