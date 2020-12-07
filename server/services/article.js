import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (showAll) => {
  if (showAll) {
    return Article.find().populate('user', 'name').populate('category', 'name');
  }
  return Article.find({ hidden: false })
    .populate('user', 'name')
    .populate('category', 'name');
};

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeArticle = async (id) => Article.findByIdAndDelete(id);
