const { exercise, diary } = require('../../models');

const { Exercise } = exercise;
const { Workout } = diary.workout;

const getCountExercisesAndCalories = async (req, res) => {
	const countExercises = await Exercise.countDocuments();
	const totalCaloriesWorkouts = await Workout.aggregate([
    { $group: { _id: null, calories: { $sum: '$calories' } } },
  ]);

  res.json({
		totalExercises: countExercises,
		totalBurnedCalories: totalCaloriesWorkouts[0].calories,
  });
};

module.exports = getCountExercisesAndCalories;
