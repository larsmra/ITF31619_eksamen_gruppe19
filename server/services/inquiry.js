import Email from '../models/inquiry';

export const listEmails = async() => Email.find();