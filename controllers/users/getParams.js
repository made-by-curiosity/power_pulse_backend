const { User } = require("../../models/users");

const { bmrCalculationFn } = require("../../helpers");

const getParams = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  const { desiredtWeight, height, birthday, sex, levelActivity } =
    user.userParams;

  const bmr = bmrCalculationFn(
    desiredtWeight,
    height,
    birthday,
    sex,
    levelActivity
  );

  res.status(200).json({
    user: {
      name: user.name,
      userParams: user.userParams,
    },
    bmr,
  });
};

module.exports = getParams;
