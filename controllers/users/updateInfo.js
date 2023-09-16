const { User } = require("../../models/users");

const { bmrCalculationFn } = require("../../helpers");

const updateInfo = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOneAndUpdate(
    { email },
    { ...req.body },
    { new: true }
  );

  if (user.userInfo) {
    const { desiredtWeight, height, birthday, sex, levelActivity } =
      user.userInfo;

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
        userInfo: user.userInfo,
      },
      bmr,
    });
  } else {
    res.status(200).json({
      user: {
        name: user.name,
      },
    });
  }
};

module.exports = updateInfo;
