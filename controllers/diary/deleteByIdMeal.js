const { NotFound } = require('http-errors');
const { diary } = require('../../models');
const { receiveOwner } = require('../../helpers');

const { meal } = diary;

const deleteByIdMeal = async (req, res) => {
	const deletedMeal = await meal.Meal.findByIdAndRemove(receiveOwner(req));

	if (!deletedMeal) throw NotFound('Not found');
	res.json({ 'message': 'product deleted' });
};

module.exports = deleteByIdMeal;