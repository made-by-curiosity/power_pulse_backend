
const { diary } = require('../../models');

const { workout } = diary;

const getTotalTimeWorkouts = async (req, res) => {
const totalTimeWorkouts = await workout.Workout.countDocuments();
  res.json(totalTimeWorkouts);
};

module.exports = getTotalTimeWorkouts;