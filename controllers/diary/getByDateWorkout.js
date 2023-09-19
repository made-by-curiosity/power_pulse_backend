const { diary } = require('../../models');

const { workout } = diary;

const getByDateWorkout = async (req, res) => {
	const { _id: owner } = req.user; 
	// const { date } = req.query;
	date = '2023-09-19T13:28:41.309+00:00';

	const listWorkout = await workout.Workout.find({ owner, createdAt: date }, '-owner -createdAt -updatedAt');
	res.json(listWorkout);
}

module.exports = getByDateWorkout;