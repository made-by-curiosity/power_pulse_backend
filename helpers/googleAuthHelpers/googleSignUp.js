const jwt = require("jsonwebtoken");
const path = require("path");
const  downloadImageFromUrl  = require("../dowloadImageFromUrl");
const cloudinaryUpload = require("../cloudinaryUpload");
const { users } = require("../../models");

const { User } = users;

const { SECRET_KEY } = process.env;

const tempDir = path.join(__dirname, "..", "../temp", "avatar.png");

const googleSignUp = async (email, name, picture) => {
  
    await downloadImageFromUrl(picture, tempDir);
  
    const newUser = await User.create({
      name: name,
      email: email,
    });
  
    const payload = {
      id: newUser._id,
    };
  
    const avatarUrls = await cloudinaryUpload(tempDir, newUser._id);
  
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  
    const updateData = {
      token,
      avatarUrls: avatarUrls,
    };
    await User.findByIdAndUpdate(newUser._id, updateData);
  
    return `${process.env.FRONTEND_URL}welcome?token=${token}`;
  };

  module.exports = googleSignUp;