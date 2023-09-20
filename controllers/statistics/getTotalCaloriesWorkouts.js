
const { diary } = require('../../models');

const { workout } = diary;

const getTotalCaloriesWorkouts = async (req, res) => {
	const totalCaloriesWorkouts = await workout.Workout.countDocuments();
  res.json(totalCaloriesWorkouts);
};

module.exports = getTotalCaloriesWorkouts;