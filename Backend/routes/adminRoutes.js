const express = require('express');
const multer = require('multer');
const { createNews, createCategory } = require('../controllers/adminController');
const authenticate = require('../middlewares/authMiddleware');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

/**
 * @swagger
 * /admin/news:
 *   post:
 *     summary: Create a new news article
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               categoryId:
 *                 type: integer
 *               media:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: News article created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       401:
 *         description: Unauthorized
 */
router.post('/news', authenticate, upload.single('media'), createNews);

/**
 * @swagger
 * /admin/category:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Admin
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       401:
 *         description: Unauthorized
 */
router.post('/category', authenticate, createCategory);

module.exports = router;