const express = require('express');

const router = express.Router();

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const { getAllProductCategories, getAllProductsByBloodType } = require('../../controllers/products');


router.get('/', getAllProductCategories);

router.get('/byBloodType/:bloodType', getAllProductsByBloodType);

module.exports = router;