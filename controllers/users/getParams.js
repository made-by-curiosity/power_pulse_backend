const { User } = require("../../models/users");

const { bmrCalculationFn } = require("../../helpers");

const getParams = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  const { desiredWeight, height, birthday, sex, levelActivity } =
    user.userParams;

  const bmr = bmrCalculationFn(
    desiredWeight,
    height,
    birthday,
    sex,
    levelActivity
  );

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      avatarUrls: user.avatarUrls,
      userParams: user.userParams,
      createdAt: user.createdAt,
    },
    bmr,
  });
};

module.exports = getParams;
