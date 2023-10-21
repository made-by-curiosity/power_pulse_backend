const { endOfDay, startOfDay } = require('date-fns');
const { diary } = require('../../models');

const { Meal } = diary.meal;
const { Workout } = diary.workout;

const getByDateDiary = async (req, res) => {
  const { _id: owner } = req.user;

  const today = new Date();
	const { date = today } = req.query;

	const params = {
		owner,
		createdAt: {
			$gte: startOfDay(new Date(date)),
			$lte: endOfDay(new Date(date)),
		},
	};

  const listMeal = await Meal.find(params, '-owner -createdAt -updatedAt'
  ).populate('productId', '_id weight calories category title groupBloodNotAllowed');

	const listWorkout = await Workout.find(params, '-owner -createdAt -updatedAt'
	).populate('exerciseId', '_id bodyPart equipment gifUrl name target burnedCalories time');
	
	res.json({
		listMeal,
		listWorkout,
});
};

module.exports = getByDateDiary;
