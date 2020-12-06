import { userService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import { sendToken } from '../utils/jwtToken.js';

export const create = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler('Fyll ut alle feltene', 400));
  }
  const exist = await userService.getUserByEmail({ email });
  if (exist) {
    return next(new ErrorHandler('Brukeren finnes allerede', 400));
  }
  const user = await userService.createUser({ name, email, password });
  sendToken(user, res);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler('Fyll ut alle feltene', 400));
  }
  const user = await userService.getUserByEmail({ email }, true);
  if (!user) {
    return next(
      new ErrorHandler('Informasjonen du skrev inn var ikke riktig', 400)
    );
  }
  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    return next(
      new ErrorHandler('Informasjonen du skrev inn var ikke riktig', 400)
    );
  }
  sendToken(user, res);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({ success: true, data: 'Logget ut' });
});

export const currentUser = catchAsyncError(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);
  if (!user) {
    return next(new ErrorHandler('Brukeren finnes ikke', 404));
  }
  res.status(200).json({ success: true, data: user });
});
