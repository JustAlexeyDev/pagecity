// authRoutes.js
import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticate user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', login);

/**
 * @swagger
 * /api/login:
 *   get:
 *     summary: Display login page
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Login page
 */
router.get('/login', (req, res) => {
  res.send('Login page');
});

export default router;