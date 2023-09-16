const { User } = require("../../models/users");

const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({
    message: "logout sucsess",
  });
};

module.exports = logOut;
