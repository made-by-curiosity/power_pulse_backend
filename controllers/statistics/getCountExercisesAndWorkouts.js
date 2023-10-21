const { exercise, diary } = require('../../models');

const { Exercise } = exercise;
const { Workout } = diary.workout;

const getCountExercisesAndWorkouts = async (req, res) => {
	const countExercises = await Exercise.countDocuments();
	const сountWorkouts = await Workout.countDocuments();

  res.json({
		totalExercises: countExercises,
		totalWorkouts: сountWorkouts,
  });
};

module.exports = getCountExercisesAndWorkouts;
