const { User } = require("../../models/users");

const updateUsername = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOneAndUpdate({ email }, req.body, { new: true });

  res.status(200).json({
    user: {
      name: user.name,
    },
  });
};

module.exports = updateUsername;
