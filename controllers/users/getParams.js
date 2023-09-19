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
      avatarUrl: user.avatarUrl,
      userParams: user.userParams,
    },
    bmr,
  });
};

module.exports = getParams;
