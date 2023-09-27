const { NotFound } = require('http-errors');
const { diary } = require('../../models');
const { receiveOwner } = require('../../helpers');

const { Meal } = diary.meal;

const deleteByIdMeal = async (req, res) => {
	const deletedMeal = await Meal.findByIdAndRemove(receiveOwner(req));

	if (!deletedMeal) throw NotFound('Not found');
	res.json({ 'message': 'product deleted' });
};

module.exports = deleteByIdMeal;