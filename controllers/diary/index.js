const getByDateMeal = require("./getByDateMeal");
const getByDateWorkout = require("./getByDateWorkout");
const postAddMeal = require("./postAddMeal");
const postAddWorkout = require("./postAddWorkout");
const deleteByIdMeal = require("./deleteByIdMeal");
const deleteByIdWorkout = require("./deleteByIdWorkout");

const { tryCatchWrapper } = require('../../middlewares')

module.exports = {
	getByDateMeal: tryCatchWrapper(getByDateMeal),
	getByDateWorkout: tryCatchWrapper(getByDateWorkout),
	postAddMeal: tryCatchWrapper(postAddMeal),
	postAddWorkout: tryCatchWrapper(postAddWorkout),
	deleteByIdMeal: tryCatchWrapper(deleteByIdMeal),
	deleteByIdWorkout: tryCatchWrapper(deleteByIdWorkout),
}