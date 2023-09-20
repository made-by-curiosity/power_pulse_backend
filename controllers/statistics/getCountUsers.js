const { users } = require('../../models');

const getCountUsers = async (req, res) => {
	const сountWorkouts = await users.User.countDocuments();
  res.json(сountWorkouts);
};

module.exports = getCountUsers;