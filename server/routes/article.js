import express from 'express';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', [isAuthenticated(false)], articleController.get);
router.get('/pages/:page', [isAuthenticated(false)], articleController.list);
router.post('/', [isAuthenticated(), isAuthorized], articleController.create);
router.put('/:id', [isAuthenticated(), isAuthorized], articleController.update);
router.delete(
  '/:id',
  [isAuthenticated(), isAuthorized],
  articleController.remove
);

export default router;
