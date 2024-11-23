import express from 'express';
import basicAuth from 'express-basic-auth';
import { sendReply } from '../controllers/adminController';

const router = express.Router();

// Basic Auth for admin routes
router.use(
  basicAuth({
    users: { admin: 'admin' },
    challenge: true,
  })
);

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