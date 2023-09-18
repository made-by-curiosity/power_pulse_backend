const { BadRequest, NotFound } = require('http-errors');
const { diary } = require('../models');
const { tryCatchWrapper } = require('../middlewares')
const { receiveOwner } = require('../helpers');

const { Product, Exercise, schemas } = diary;

const getByDate = async (req, res) => {
	const { _id: owner } = req.user; 
	const { page = 1, limit = 20, ...filters } = req.query;
	const skip = (page - 1) * limit;

	const listContacts = await Contact.find({ owner, ...filters }, '-owner -token -createdAt -updatedAt', { skip, limit });
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
	const deletedProduct = await Product.findOneAndDelete(receiveOwner(req));

	if (!deletedProduct) throw NotFound('');
	res.json({ 'message': 'product deleted' });
};

const deleteByNameAndDateExercise = async (req, res) => {
	const deletedExercise = await Exercise.findOneAndDelete(receiveOwner(req));

	if (!deletedExercise) throw NotFound('');
	res.json({ 'message': 'exercise deleted' });
};

module.exports = {
	getByDate: tryCatchWrapper(getByDate),
	postAddProduct: tryCatchWrapper(postAddProduct),
	postAddExercise: tryCatchWrapper(postAddExercise),
	deleteByNameAndDateProduct: tryCatchWrapper(deleteByNameAndDateProduct),
	deleteByNameAndDateExercise: tryCatchWrapper(deleteByNameAndDateExercise),
}