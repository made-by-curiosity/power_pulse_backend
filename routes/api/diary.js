const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { auth } = require('../../middlewares');

const router = express.Router();

router.get('/product', auth, ctrlDiary.getByDateProduct);
router.get('/exercise', auth, ctrlDiary.getByDateExercise);
router.post('/product', auth, ctrlDiary.postAddProduct);
router.post('/exercise', auth, ctrlDiary.postAddExercise);
router.delete('/product', auth, ctrlDiary.deleteByNameAndDateProduct);
router.delete('/exercise', auth, ctrlDiary.deleteByNameAndDateExercise);

module.exports = router