import {inquiryService} from '../services/index.js';
import { sendMail, receiveMail } from '../utils/email.js';
import catchAsyncError from '../middleware/catchAsync.js';

export const list = catchAsyncError(async (req, res, next) => {
    const emails = await inquiryService.listEmails();
    res.status(200).json({ success: true, data: emails });
  });

export const create = catchAsyncError(async (req, res, next) => {
    console.log("I got to the controller");
    const inquiry = await inquiryService.createEmail(req.body);
    try{
      await receiveMail({
        email: inquiry.email,
        name: inquiry.name,
        subject: "Kontaktskjema",
        message: inquiry.message,
      });

      await sendMail({
        email: inquiry.email,
        subject: 'Bekreftet henvendelse',
        message: `Hei ${inquiry.name} \n Vi har mottatt henvendelsen din, vi tar kontakt innen 1-2 dager. \n Mvh. FG Rørleggerservice AS`,
      });
    }catch(error){
      console.log(error);
    }
    
    res.status(201).json(inquiry);
  });