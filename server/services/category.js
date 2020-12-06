import Category from '../models/category.js';

export const listCategories = async () => Category.find();

export const createCategory = async (data) => Category.create(data);
