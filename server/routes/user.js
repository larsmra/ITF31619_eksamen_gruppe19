import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/register', userController.create);

export default router;
