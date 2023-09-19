const { BadRequest} = require('http-errors');
const { diary } = require('../../models');

const { workout } = diary;

const postAddWorkout = async (req, res) => {
	const { error } = workout.schemasWorkout.postWorkoutSchema.validate(req.body);
	if (error) throw BadRequest('missing required name field');

	const { _id: owner } = req.user;
	const addWorkout = await workout.Workout.create({ ...req.body, owner });
	res.status(201).json(addWorkout);
};

module.exports = postAddWorkout;