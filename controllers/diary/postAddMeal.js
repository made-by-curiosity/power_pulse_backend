const { BadRequest } = require('http-errors');
const { diary } = require('../../models');

const { meal } = diary;

const postAddMeal = async (req, res) => {
	const { error } = meal.schemasMeal.postMealSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addMeal = await meal.Meal.create({ ...req.body, owner });
	res.status(201).json(addMeal);
};

module.exports = postAddMeal;