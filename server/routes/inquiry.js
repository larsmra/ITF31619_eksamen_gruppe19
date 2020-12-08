import express from 'express';
import { inquiryController } from '../controllers/index.js';

const router = express.Router();

router.get('/', inquiryController.list);
router.post('/', inquiryController.create);

export default router;