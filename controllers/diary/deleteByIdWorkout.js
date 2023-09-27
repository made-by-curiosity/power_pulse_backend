const { NotFound } = require('http-errors');
const { diary } = require('../../models');
const { receiveOwner } = require('../../helpers');

const { Workout } = diary.workout;

const deleteByIdWorkout = async (req, res) => {
	const deletedWorkout = await Workout.findByIdAndRemove(receiveOwner(req));

	if (!deletedWorkout) throw NotFound('Not found');
	res.json({ 'message': 'exercise deleted' });
};

module.exports = deleteByIdWorkout;