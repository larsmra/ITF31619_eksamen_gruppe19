import Email from '../models/inquiry.js';

export const listEmails = async() => Email.find();

export const createEmail = async (data) => Email.create(data);