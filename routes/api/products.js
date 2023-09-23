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
 *     description: Endpoint for all product categories.
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all product categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/categories', authenticate, getAllProductCategories);

/**
 * @swagger
 * /api/products/byBloodType{?recommended}:
 *   get:
 *     summary: Get products by blood type
 *     description: Retrieve products based on the user's blood type and an optional recommendation filter.
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: recommended
 *         in: query
 *         description: Filter products based on recommendation (true or false).
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of all product categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ByBlodType'
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/byBloodType', authenticate, getProductsByBloodType);

module.exports = router;