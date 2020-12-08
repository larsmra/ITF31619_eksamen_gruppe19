import { articleService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = catchAsyncError(async (req, res, next) => {
  const article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(new ErrorHandler('Artikkelen du leter etter finnes ikke', 404));
  }
  res.status(201).json({ success: true, data: article });
});

export const list = catchAsyncError(async (req, res, next) => {
  const showAll = !!req.user;
  const count = await articleService.countArticles(showAll);
  const articles = await articleService.listArticles(
    (req.params.page - 1) * 5,
    showAll
  );
  res
    .status(200)
    .json({ success: true, data: { pages: Math.ceil(count / 5), articles } });
});

export const listAuthors = catchAsyncError(async (req, res, next) => {
  const authors = await articleService.listAuthors();
  res.status(200).json({ success: true, data: authors });
});

export const create = catchAsyncError(async (req, res, next) => {
  req.body.admin = req.user.id;
  req.body.date = new Date();
  const article = await articleService.createArticle(req.body);
  res.status(201).json({ success: true, data: article });
});

export const update = catchAsyncError(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler('Artikkelen du prøver å oppdatere finnes ikke', 404)
    );
  }
  article = await articleService.updateArticle(req.params.id, req.body);
  res.status(200).json({ success: true, data: article });
});

export const remove = catchAsyncError(async (req, res, next) => {
  let article = await articleService.getArticleById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler('Artikkelen du prøver å slette finnes ikke', 404)
    );
  }
  article = await articleService.deleteArticle(req.params.id);
  res.status(204).json({});
});
