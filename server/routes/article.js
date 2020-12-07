import express from 'express';
import {isAuthenticated} from '../middleware/auth.js';
import { articleController } from '../controllers/index.js';
import {
  isAuthenticated,
  isAuthenticatedNoErrors,
  isAuthorized,
} from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', [isAuthenticated(false)], articleController.get);
router.get('/', [isAuthenticated(false)], articleController.list);
router.post('/', [isAuthenticated(), isAuthorized], articleController.create);
router.put('/:id', [isAuthenticated(), isAuthorized], articleController.update);
router.delete(
  '/:id',
  [isAuthenticated(), isAuthorized],
  articleController.remove
);

export default router;
