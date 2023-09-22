const { diary } = require('../../models');

const { workout } = diary;

const getTotalTimeWorkouts = async (req, res) => {
  const totalTimeWorkouts = await workout.Workout.aggregate([
    { $group: { _id: null, time: { $sum: '$time' } } },
  ]);

  const workoutTotalHours = Math.round(totalTimeWorkouts[0].time / 60);

  res.json({
    totalWorkoutsTime: workoutTotalHours,
  });
};

module.exports = getTotalTimeWorkouts;
