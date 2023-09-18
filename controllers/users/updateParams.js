const { User } = require("../../models/users");

const { bmrCalculationFn } = require("../../helpers");

const updateParams = async (req, res) => {
  const { email } = req.user;

  const userParams = {
    ...req.body,
  };

  const user = await User.findOneAndUpdate(
    { email },
    { userParams: userParams },
    { new: true }
  );

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
      userParams: user.userParams,
    },
    bmr,
  });
};

module.exports = updateParams;
