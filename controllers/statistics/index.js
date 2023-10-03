const getCountExercises = require('./getCountExercises');
const getTotalCaloriesWorkouts = require('./getTotalCaloriesWorkouts');
const getCountUsers = require('./getCountUsers');
const getTotalTimeWorkouts = require('./getTotalTimeWorkouts');
const getCountWorkouts = require('./getCountWorkouts');

const getCountExercisesAndCalories = require('./getCountExercisesAndCalories');
const getCountExercisesAndTime = require('./getCountExercisesAndTime');
const getCountExercisesAndUsers = require('./getCountExercisesAndUsers');
const getCountExercisesAndWorkouts = require('./getCountExercisesAndWorkouts');

const { tryCatchWrapper } = require('../../middlewares');

module.exports = {
  getCountUsers: tryCatchWrapper(getCountUsers),
  getCountExercises: tryCatchWrapper(getCountExercises),
  getCountWorkouts: tryCatchWrapper(getCountWorkouts),
  getTotalTimeWorkouts: tryCatchWrapper(getTotalTimeWorkouts),
	getTotalCaloriesWorkouts: tryCatchWrapper(getTotalCaloriesWorkouts),

	getCountExercisesAndCalories: tryCatchWrapper(getCountExercisesAndCalories),
	getCountExercisesAndTime: tryCatchWrapper(getCountExercisesAndTime),
	getCountExercisesAndUsers: tryCatchWrapper(getCountExercisesAndUsers),
	getCountExercisesAndWorkouts: tryCatchWrapper(getCountExercisesAndWorkouts),
};
