import jwt from 'jsonwebtoken';
import { userService } from '../services/index.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from './catchAsync.js';

// Denne koden er hentet fra tidligere forelesningsnotater med noen modifikasjoner: https://www.dropbox.com/sh/9nr561t0qn6eioo/AAD4E8xcT_7TaAMeU_QSnbbZa/Kodefiler?dl=0&file_subpath=%2Fhifo-leksjon13-master%2Fserver%2Fmiddleware%2Fauth.js&preview=leksjon_13.zip&subfolder_nav_tracking=1
export const isAuthenticated = (throwError = true) =>
  catchAsyncErrors(async (req, res, next) => {
    if (!req.cookies.token) {
      return next(throwError && new ErrorHandler('Du er ikke logget inn', 401));
    }

    const { token } = req.cookies;

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decodedData.id);

    if (!user) {
      return next(
        throwError && new ErrorHandler('Brukeren din eksisterer ikke', 404)
      );
    }

    req.user = user;
    next();
  });

export const isAuthenticatedNoErrors = (throwError = true) =>
  catchAsyncErrors(async (req, res, next) => {
    if (!req.cookies.token) {
      return next();
    }

    const { token } = req.cookies;

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decodedData.id);

    if (!user) {
      next();
    }

    req.user = user;
    next();
  });

export const isAuthorized = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(new ErrorHandler('Du er ikke autorisert', 403));
  }
  next();
};
