
const { diary } = require('../../models');

const { workout } = diary;

const getTotalTimeWorkouts = async (req, res) => {
	const totalTimeWorkouts = await workout.Workout.aggregate([{ $group: { _id: null, time: { $sum: "$time" } } }]);
  res.json(totalTimeWorkouts[0].time);
};

module.exports = getTotalTimeWorkouts;