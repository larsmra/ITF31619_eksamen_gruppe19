import Category from '../models/category.js';

export const listCategories = async () => Category.find();
