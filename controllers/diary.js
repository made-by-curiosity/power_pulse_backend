const { BadRequest, NotFound } = require('http-errors');
const { diary } = require('../models');
const { tryCatchWrapper } = require('../middlewares')
const { receiveOwner } = require('../helpers');

const { Meal, Workout, schemas } = diary;

const getByDateMeal = async (req, res) => {
	const { error } = schemas.getSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user; 
	const { date } = req.body;

	const listMeal = await Meal.find({ owner, date }, '-owner');
	res.json(listMeal);
}

const getByDateWorkout = async (req, res) => {
	const { error } = schemas.getSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user; 
	const { date } = req.body;

	const listWorkout = await Workout.find({ owner, date }, '-owner');
	res.json(listWorkout);
}

const postAddMeal = async (req, res) => {
	const { error } = schemas.postMealSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addMeal = await Meal.create({ ...req.body, owner });
	res.status(201).json(addMeal);
};

const postAddWorkout = async (req, res) => {
	const { error } = schemas.postWorkoutSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addWorkout = await Workout.create({ ...req.body, owner });
	res.status(201).json(addWorkout);
};

const deleteByNameAndDateMeal = async (req, res) => {
	const { error } = schemas.deleteSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const deletedMeal = await Meal.findOneAndDelete(receiveOwner(req));

	if (!deletedMeal) throw NotFound('Not found');
	res.json({ 'message': 'product deleted' });
};

const deleteByNameAndDateWorkout = async (req, res) => {
	const { error } = schemas.deleteSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const deletedWorkout = await Workout.findOneAndDelete(receiveOwner(req));

	if (!deletedWorkout) throw NotFound('Not found');
	res.json({ 'message': 'exercise deleted' });
};

module.exports = {
	getByDateMeal: tryCatchWrapper(getByDateMeal),
	getByDateWorkout: tryCatchWrapper(getByDateWorkout),
	postAddMeal: tryCatchWrapper(postAddMeal),
	postAddWorkout: tryCatchWrapper(postAddWorkout),
	deleteByNameAndDateMeal: tryCatchWrapper(deleteByNameAndDateMeal),
	deleteByNameAndDateWorkout: tryCatchWrapper(deleteByNameAndDateWorkout),
}