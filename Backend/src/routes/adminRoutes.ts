import express from 'express';
import { sendReply } from '../controllers/adminController';

const router = express.Router();

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Send a reply to a customer via email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 info:
 *                   type: string
 */
router.post('/', sendReply);

export default router;