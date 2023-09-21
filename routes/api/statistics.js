const express = require('express');
const { ctrlStatistics } = require('../../controllers');

const router = express.Router();

router.get('/users', ctrlStatistics.getCountUsers);
router.get('/exercises', ctrlStatistics.getCountExercises);
router.get('/workouts', ctrlStatistics.getCountWorkouts);
router.get('/time', ctrlStatistics.getTotalTimeWorkouts);
router.get('/calories', ctrlStatistics.getTotalCaloriesWorkouts);

module.exports = router
