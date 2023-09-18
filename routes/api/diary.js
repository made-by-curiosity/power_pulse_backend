const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { isValidId, auth } = require('../../middlewares');

const router = express.Router();

router.get('/date', auth, ctrlDiary.getByDate);
router.post('/product', auth, ctrlDiary.postAddProduct);
router.post('/exercise', auth, ctrlDiary.postAddExercise);
router.delete('/product/:name/date', auth, isValidId, ctrlDiary.deleteByNameAndDateProduct);
router.delete('/exercise/:name/date', auth, isValidId, ctrlDiary.deleteByNameAndDateExercise);

module.exports = router