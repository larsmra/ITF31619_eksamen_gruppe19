import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const countArticles = async (showAll) =>
  Article.count(showAll && { hidden: false });

export const listArticles = async (offset, showAll) =>
  Article.find(showAll && { hidden: false })
    .skip(offset)
    .limit(5)
    .populate('user', 'name')
    .populate('category', 'name');

export const listAuthors = async () => ({
  authors: Article.schema.path('author').enumValues,
});

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
