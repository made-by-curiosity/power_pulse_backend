const { exercise, users } = require('../../models');

const { Exercise } = exercise;
const { User } = users;

const getCountExercisesAndUsers = async (req, res) => {
	const countExercises = await Exercise.countDocuments();
	const countUsers = await User.countDocuments();

  res.json({
		totalExercises: countExercises,
		totalUsers: countUsers,
  });
};

module.exports = getCountExercisesAndUsers;
