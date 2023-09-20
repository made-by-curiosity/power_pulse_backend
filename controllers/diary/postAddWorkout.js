const { diary } = require('../../models');

const { workout } = diary;

const postAddWorkout = async (req, res) => {
  const { _id: owner } = req.user;
  const addWorkout = await workout.Workout.create({ ...req.body, owner });
  res.status(201).json(addWorkout);
};

module.exports = postAddWorkout;
