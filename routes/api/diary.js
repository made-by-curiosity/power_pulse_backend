const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { auth, isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/meal', auth, ctrlDiary.getByDateMeal);
router.get('/workout', auth, ctrlDiary.getByDateWorkout);
router.post('/meal', auth, ctrlDiary.postAddMeal);
router.post('/workout', auth, ctrlDiary.postAddWorkout);
router.delete('/meal/:id', auth, isValidId, ctrlDiary.deleteByIdMeal);
router.delete('/workout/:id', auth, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router