const { diary } = require('../../models');

const { Workout } = diary.workout;

const postAddWorkout = async (req, res) => {
  const { _id: owner } = req.user;
  const addWorkout = await Workout.create({ ...req.body, owner });
  res.status(201).json(addWorkout);
};

module.exports = postAddWorkout;
