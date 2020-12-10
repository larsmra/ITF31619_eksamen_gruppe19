import {
  articleService,
  categoryService,
  imageService,
} from '../services/index.js';
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
  const categories = await categoryService.listCategories(
    req.params.filter ? req.params.filter.split(',') : null
  );
  const count = await articleService.countArticles(
    req.params.search || '',
    categories,
    showAll
  );
  const articles = await articleService.listArticles(
    (req.params.page - 1) * 5,
    req.params.search || '',
    categories,
    showAll
  );
  res.status(200).json({ success: true, data: { count, articles } });
});

export const listAuthors = catchAsyncError(async (req, res, next) => {
  const authors = await articleService.listAuthors();
  res.status(200).json({ success: true, data: authors });
});

export const create = catchAsyncError(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorHandler('Bildet ble ikke lagret', 400));
  }
  req.body.imagePath = req.file.path.replace('public\\', '');
  req.body.admin = req.user.id;
  req.body.title_lower = req.body.title.toLowerCase();
  req.body.date = new Date();
  req.body.hidden = req.body.hidden === 'true';
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
  await articleService.removeArticle(req.params.id);
  res.status(200).json({ success: true });
});
