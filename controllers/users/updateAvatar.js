const { cloudinaryUpload } = require("../../helpers");
const { User } = require("../../models/users");

const updateAvatar = async (req, res) => {
  const { email, _id } = req.user;
  const { path } = req.file;

  const payload = await cloudinaryUpload(path,_id);

  const user = await User.findOneAndUpdate(
    { email },
    { avatarUrls: payload },
    { new: true }
  );

  res.status(200).json({
    user: {
      name: user.name,
      avatarUrls: user.avatarUrls,
    },
  });
};

module.exports = updateAvatar;
