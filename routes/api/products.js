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
 *     summary: Get products by blood type
 *     description: Retrieve products based on the user's blood type and an optional recommendation filter.
 *     tags:
 *       - Products
 *     parameters:
 *       - name: recommended
 *         in: query
 *         description: Filter products based on recommendation (true or false).
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products that match the specified criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get('/byBloodType', authenticate, getProductsByBloodType);

module.exports = router;