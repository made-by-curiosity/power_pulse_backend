const { User } = require("../../models/users");

const { bmrCalculationFn } = require("../../helpers");

const addInfo = async (req, res) => {
  const { email } = req.user;
  const { height, desiredtWeight, birthday, sex, levelActivity } = req.body;

  const bmr = bmrCalculationFn(
    desiredtWeight,
    height,
    birthday,
    sex,
    levelActivity
  );

  const userInfo = {
    ...req.body,
  };
  const user = await User.findOneAndUpdate(
    { email },
    { userInfo: userInfo },
    { new: true }
  );

  res.status(201).json({
    user: {
      userInfo: user.userInfo,
    },
    bmr,
  });
};

module.exports = addInfo;
