const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleSchemaValidationErrors} = require('../../helpers');

const mealSchema = new Schema({
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
	owner: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
}, {versionKey: false, timestamps: true});

mealSchema.post('save', handleSchemaValidationErrors);
const Meal = model('meal', mealSchema);

const postMealSchema = Joi.object({
	name: Joi.string().required(),
	amount: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
});

const schemasMeal = {
	postMealSchema,
};

module.exports = {
	Meal,
	schemasMeal,
}
