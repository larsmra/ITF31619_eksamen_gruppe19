import User from '../models/user.js';

export const getUserByEmail = async (email, password) => {
  if (password) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

export const createUser = async (data) => User.create(data);
