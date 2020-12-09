import Category from '../models/category.js';

export const getCategory = async (name) => Category.findOne(name);

export const listCategories = async (categories) =>
  Category.find(categories && { name: { $in: categories } });

export const createCategory = async (data) => Category.create(data);
