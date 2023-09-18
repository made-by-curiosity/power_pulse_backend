const { BadRequest, NotFound } = require('http-errors');
const { diary } = require('../models');
const { tryCatchWrapper } = require('../middlewares')
const { receiveOwner } = require('../helpers');

const { Product, Exercise, schemas } = diary;

const getByDateProduct = async (req, res) => {
	const { error } = schemas.getSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user; 
	const { date } = req.body;

	const listContacts = await Product.find({ owner, date }, '-owner');
	res.json(listContacts);
}

const getByDateExercise = async (req, res) => {
	const { error } = schemas.getSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user; 
	const { date } = req.body;

	const listContacts = await Exercise.find({ owner, date: date });
	res.json(listContacts);
}

const postAddProduct = async (req, res) => {
	const { error } = schemas.postProductSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addProduct = await Product.create({ ...req.body, owner });
	res.status(201).json(addProduct);
};

const postAddExercise = async (req, res) => {
	const { error } = schemas.postExerciseSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addExercise = await Exercise.create({ ...req.body, owner });
	res.status(201).json(addExercise);
};

const deleteByNameAndDateProduct = async (req, res) => {
	const { error } = schemas.deleteSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const deletedProduct = await Product.findOneAndDelete(receiveOwner(req));

	if (!deletedProduct) throw NotFound('Not found');
	res.json({ 'message': 'product deleted' });
};

const deleteByNameAndDateExercise = async (req, res) => {
	const { error } = schemas.deleteSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const deletedExercise = await Exercise.findOneAndDelete(receiveOwner(req));

	if (!deletedExercise) throw NotFound('Not found');
	res.json({ 'message': 'exercise deleted' });
};

module.exports = {
	getByDateProduct: tryCatchWrapper(getByDateProduct),
	getByDateExercise: tryCatchWrapper(getByDateExercise),
	postAddProduct: tryCatchWrapper(postAddProduct),
	postAddExercise: tryCatchWrapper(postAddExercise),
	deleteByNameAndDateProduct: tryCatchWrapper(deleteByNameAndDateProduct),
	deleteByNameAndDateExercise: tryCatchWrapper(deleteByNameAndDateExercise),
}