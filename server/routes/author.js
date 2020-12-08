import express from 'express';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.get(
  '/',
  [isAuthenticated(), isAuthorized],
  articleController.listAuthors
);

export default router;
