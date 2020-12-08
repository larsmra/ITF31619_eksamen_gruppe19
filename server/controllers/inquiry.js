import {inquiryService} from '../services/index.js';
import { sendMail, receiveMail } from '../utils/email.js';

export const list = catchAsyncError(async (req, res, next) => {
    const emails = await inquiryService.listEmails();
    res.status(200).json({ success: true, data: emails });
  });

export const create = catchAsyncErrors(async (req, res, next) => {
    const inquiry = await inquiryService.createInquiry(req.body);
    try{
        await sendMail({
            email: inquiry.email,
            subject: "Email bekreftelse",
            message: "Vi har mottatt henvendelsen din, vi tar kontakt innen 1-2 dager. \n Mvh. FG Rørleggerservice AS",
        });
        await receiveMail()
    }
    res.status(201).json(inquiry);
  });