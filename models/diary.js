const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleSchemaValidationErrors, formatToday } = require('../helpers');

const DATE_REGEXP = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

const productSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Set name for product'],
	},
	amount: {
		type: Number,
		min: [1, 'The amount cannot be less than 1 gram'],
		required: [true, 'Set the amount of the product'],
	},
	calories: {
		type: Number,
		min: [1, 'The calories cannot be less than 1'],
		required: [true, 'Set the calories of the product'],
	},
	date: {
		type: String,
		required: true,
		match: DATE_REGEXP,
	},
	owner: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
}, {versionKey: false, timestamps: false});

productSchema.post('save', handleSchemaValidationErrors);
const Product = model('product', productSchema);

const exerciseSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Set name for exercise'],
	},
	time: {
		type: Number,
		min: [1, 'The time cannot be less than 1 minute'],
		required: [true, 'Set the time of the exercise'],
	},
	calories: {
		type: Number,
		min: [1, 'The calories cannot be less than 1'],
		required: [true, 'Set the calories of the exercise'],
	}, 
	date: {
		type: String,
		required: true,
		match: DATE_REGEXP,
	},
	owner: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
}, {versionKey: false, timestamps: false});

exerciseSchema.post('save', handleSchemaValidationErrors);
const Exercise = model('exercise', exerciseSchema);

const getSchema = Joi.object({
	date: Joi.string().pattern(DATE_REGEXP).required(),
})

const postProductSchema = Joi.object({
	name: Joi.string().required(),
	amount: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const postExerciseSchema = Joi.object({
	name: Joi.string().required(),
	time: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const deleteSchema = Joi.object({
	name: Joi.string().required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const schemas = {
	getSchema,
	postProductSchema,
	postExerciseSchema,
	deleteSchema,
};

module.exports = {
	Product,
	Exercise,
	schemas,
}
