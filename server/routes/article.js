import express from 'express';
import {isAuthenticated} from '../middleware/auth.js';
import { articleController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', articleController.get);
router.get('/', articleController.list);
router.post('/', isAuthenticated, articleController.create);
router.put('/:id', isAuthenticated, articleController.update);
router.delete('/:id', isAuthenticated, articleController.remove);

export default router;
