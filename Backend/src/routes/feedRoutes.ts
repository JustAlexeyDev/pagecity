import express from 'express';
import { createFeed, getAllFeeds } from '../controllers/feedController';

const router = express.Router();

/**
 * @swagger
 * /api/allfeeds:
 *   get:
 *     summary: Get all customer feedbacks
 *     responses:
 *       200:
 *         description: A list of feedbacks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   message:
 *                     type: string
 *                   created_at:
 *                     type: string
 */
router.get('/allfeeds', getAllFeeds);

/**
 * @swagger
 * /api:
 *   post:
 *     summary: Create a new customer feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Feedback created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 */
router.post('/', createFeed);

export default router;