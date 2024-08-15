

/**
 * @swagger
 * /api/shorten:
 *   post:
 *     summary: Shorten a URL
 *     tags: [URL Shortener API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               originalUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: A shortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUrl:
 *                   type: string
 *                 shortUrl:
 *                   type: string
 */

/**
 * @swagger
 * /api/{shortUrl}:
 *   get:
 *     summary: Redirect to the original URL
 *     tags: [URL Shortener API]
 *     parameters:
 *       - in: path
 *         name: shortUrl
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       302:
 *         description: Redirect to the original URL
 *       404:
 *         description: URL not found
 */

const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);

module.exports = router;

