import {inquiryService} from '../services/index.js';
import { sendMail} from '../utils/email.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const list = catchAsyncError(async (req, res, next) => {
    const emails = await inquiryService.listEmails();
    res.status(200).json({ success: true, data: emails });
  });

export const create = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(new ErrorHandler('Fyll ut alle feltene', 400));
  }
  const inquiry = await inquiryService.createEmail(req.body);
  try{
    await sendMail({
      email: inquiry.email,
      subject: 'Bekreftet henvendelse',
      message: `Hei ${inquiry.name} \n\nVi har mottatt henvendelsen din, vi tar kontakt innen 1-2 dager. \n\nMvh. FG Rørleggerservice AS`,
    });
  }catch(error){
    console.log(error);
  }
  
  res.status(201).json(inquiry)
  });