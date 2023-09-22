const getCountExercises = require('./getCountExercises');
const getTotalCaloriesWorkouts = require('./getTotalCaloriesWorkouts');
const getCountUsers = require('./getCountUsers');
const getTotalTimeWorkouts = require('./getTotalTimeWorkouts');
const getCountWorkouts = require('./getCountWorkouts');

const { tryCatchWrapper } = require('../../middlewares');

module.exports = {
  getCountUsers: tryCatchWrapper(getCountUsers),
  getCountExercises: tryCatchWrapper(getCountExercises),
  getCountWorkouts: tryCatchWrapper(getCountWorkouts),
  getTotalTimeWorkouts: tryCatchWrapper(getTotalTimeWorkouts),
  getTotalCaloriesWorkouts: tryCatchWrapper(getTotalCaloriesWorkouts),
};
