const { diary } = require('../../models');

const { meal } = diary;

const getByDateMeal = async (req, res) => {
	const { _id: owner } = req.user; 
	// const { date } = req.query;
	date = '2023-09-19T13:31:59.895+00:00';

	const listMeal = await meal.Meal.find({ owner, createdAt: date }, '-owner -createdAt -updatedAt');
	res.json(listMeal);
}

module.exports = getByDateMeal;