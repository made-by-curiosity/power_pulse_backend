const cloudinary = require("cloudinary").v2;
const fs = require("fs/promises");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (path, _id) => {
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

  await fs.unlink(path);

  return {
    mobile: resultMobile.url,
    desktop: resultDesktop.url,
  };
};

module.exports = cloudinaryUpload;
