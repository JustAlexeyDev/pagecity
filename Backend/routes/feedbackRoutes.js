// feedbackRoutes.js
import express from 'express';
import { submitFeedback, respondFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/feedback', submitFeedback);
router.put('/feedback/:id', respondFeedback);

export default router;