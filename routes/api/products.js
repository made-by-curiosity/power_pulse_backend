const express = require('express');

const router = express.Router();

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const { getAllProductCategories, getProductsByBloodType } = require('../../controllers/products');


router.get('/', getAllProductCategories);

router.get('/byBloodType', getProductsByBloodType);

module.exports = router;