
const { diary } = require('../../models');

const { workout } = diary;

const getTotalCaloriesWorkouts = async (req, res) => {
	const totalCaloriesWorkouts = await workout.Workout.aggregate([{ $group: { _id: null, calories: { $sum: "$calories" } } }]);
  res.json(totalCaloriesWorkouts[0].calories);
};

module.exports = getTotalCaloriesWorkouts;