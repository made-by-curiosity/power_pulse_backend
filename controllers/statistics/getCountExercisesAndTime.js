const { exercise, diary } = require('../../models');

const { Exercise } = exercise;
const { Workout } = diary.workout;

const getCountExercisesAndTime = async (req, res) => {
	const countExercises = await Exercise.countDocuments();

	const totalTimeWorkouts = await Workout.aggregate([
    { $group: { _id: null, time: { $sum: '$time' } } },
	]);
	const workoutTotalHours = Math.round(totalTimeWorkouts[0].time / 60);

  res.json({
		totalExercises: countExercises,
		totalWorkoutsTime: workoutTotalHours,
  });
};

module.exports = getCountExercisesAndTime;
