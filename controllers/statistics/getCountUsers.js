const { users } = require('../../models');

const getCountUsers = async (req, res) => {
	const countUsers = await users.User.countDocuments();
  res.json(countUsers);
};

module.exports = getCountUsers;