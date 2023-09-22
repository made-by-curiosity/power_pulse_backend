const { users } = require('../../models');

const getCountUsers = async (req, res) => {
  const countUsers = await users.User.countDocuments();
  res.json({
    totalUsers: countUsers,
  });
};

module.exports = getCountUsers;
