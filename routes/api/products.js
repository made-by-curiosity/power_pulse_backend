const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middlewares');
const { 
    getAllProductCategories,
     getProductsByBloodType
 } = require('../../controllers/products');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all product categories
 *     description: Get a list of all product categories.
 *     responses:
 *       200:
 *         description: A list of product categories.
 */

router.get('/categories', authenticate, getAllProductCategories);

/**
 * @swagger
 * /products/byBloodType:
 *   get:
 *     summary: Get products by blood type
 *     description: Get a list of products by blood type.
 *     responses:
 *       200:
 *         description: A list of products by blood type.
 */

router.get('/byBloodType', authenticate, getProductsByBloodType);

module.exports = router;