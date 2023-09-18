const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

const { User } = require("../../models/users");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const updateAvatar = async (req, res) => {
  const { email } = req.user;
  const { path } = req.file;

  const result = await cloudinary.uploader.upload(path, {
    folder: "power_pulse_avatars",
  });

  const user = await User.findOneAndUpdate(
    { email },
    { avatarUrl: result.url },
    { new: true }
  );

  await fs.unlink(path);

  res.status(200).json({
    user: {
      name: user.name,
      avatar: user.avatarUrl,
    },
  });
};

module.exports = updateAvatar;
