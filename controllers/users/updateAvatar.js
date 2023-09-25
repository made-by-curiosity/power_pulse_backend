const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

const { User } = require("../../models/users");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const updateAvatar = async (req, res) => {
  const { email, _id } = req.user;
  const { path } = req.file;

  const resultMobile = await cloudinary.uploader.upload(path, {
    folder: "power_pulse_avatars",
    public_id: `mobile_${_id}`,
    transformation: [{ width: 90, height: 90, crop: "fill" }],
  });

  const resultDesktop = await cloudinary.uploader.upload(path, {
    folder: "power_pulse_avatars",
    public_id: `desktop_${_id}`,
    transformation: [{ width: 150, height: 150, crop: "fill" }],
  });

  const payload = {
    mobile: resultMobile.url,
    desktop: resultDesktop.url,
  }

  const user = await User.findOneAndUpdate(
    { email },
    { avatarUrls: payload },
    { new: true }
  );

  await fs.unlink(path);

  res.status(200).json({
    user: {
      name: user.name,
      avatarUrls: user.avatarUrls,
    },
  });
};

module.exports = updateAvatar;
