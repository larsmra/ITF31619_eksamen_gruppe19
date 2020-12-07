import express from 'express';
import { userController } from '../controllers/index.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', userController.create);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/me', [isAuthenticated()], userController.currentUser);

export default router;
