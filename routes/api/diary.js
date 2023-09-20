const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { authenticate, isValidId, validation } = require('../../middlewares');
const {
  schemasMeal: { postMealSchema },
} = require('../../models/diary/meal');
const {
  schemasWorkout: { postWorkoutSchema },
} = require('../../models/diary/workout');

const router = express.Router();

router.get('/meal', authenticate, ctrlDiary.getByDateMeal);
router.get('/workout', authenticate, ctrlDiary.getByDateWorkout);
router.post('/meal', validation(postMealSchema), authenticate, ctrlDiary.postAddMeal);
router.post('/workout', validation(postWorkoutSchema), authenticate, ctrlDiary.postAddWorkout);
router.delete('/meal/:id', authenticate, isValidId, ctrlDiary.deleteByIdMeal);
router.delete('/workout/:id', authenticate, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router;
