const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { authenticate, isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/meal', authenticate, ctrlDiary.getByDateMeal);
router.get('/workout', authenticate, ctrlDiary.getByDateWorkout);
router.post('/meal', authenticate, ctrlDiary.postAddMeal);
router.post('/workout', authenticate, ctrlDiary.postAddWorkout);
router.delete('/meal/:id', authenticate, isValidId, ctrlDiary.deleteByIdMeal);
router.delete('/workout/:id', authenticate, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router