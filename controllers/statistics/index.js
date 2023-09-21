const getCountUsers = require("./getCountUsers");
const getCountExercises = require("./getCountExercises");
const getCountWorkouts = require("./getCountWorkouts");
const getTotalTimeWorkouts = require("./getTotalTimeWorkouts");
const getTotalCaloriesWorkouts = require("./getTotalCaloriesWorkouts");


const { tryCatchWrapper } = require('../../middlewares')

module.exports = {
	getCountUsers: tryCatchWrapper(getCountUsers),
	getCountExercises: tryCatchWrapper(getCountExercises),
	getCountWorkouts: tryCatchWrapper(getCountWorkouts),
	getTotalTimeWorkouts: tryCatchWrapper(getTotalTimeWorkouts),
	getTotalCaloriesWorkouts: tryCatchWrapper(getTotalCaloriesWorkouts),
}