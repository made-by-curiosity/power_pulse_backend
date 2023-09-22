const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares');
const { 
    getAllProductCategories,
     getProductsByBloodType
 } = require('../../controllers/products');


/**
 * @swagger
 * /api/products/categories:
 *   get:
 *     summary: Get all product categories.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of all product categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/categories', authenticate, getAllProductCategories);

/**
 * @swagger
 * /api/products/byBloodType:
 *   get:
 *     summary: Get products by blood type.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: recommended
 *         schema:
 *           type: boolean
 *         description: Filter products by recommendation status (true or false).
 *     responses:
 *       200:
 *         description: A list of products filtered by blood type and recommendation status.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/byBloodType', authenticate, getProductsByBloodType);

module.exports = router;