const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { auth } = require('../../middlewares');

const router = express.Router();

router.get('/meal', auth, ctrlDiary.getByDateMeal);
router.get('/workout', auth, ctrlDiary.getByDateWorkout);
router.post('/meal', auth, ctrlDiary.postAddMeal);
router.post('/workout', auth, ctrlDiary.postAddWorkout);
router.delete('/meal', auth, ctrlDiary.deleteByNameAndDateMeal);
router.delete('/workout', auth, ctrlDiary.deleteByNameAndDateWorkout);

module.exports = router