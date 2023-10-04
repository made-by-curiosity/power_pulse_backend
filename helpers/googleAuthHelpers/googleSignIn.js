const jwt = require("jsonwebtoken");
const { users } = require("../../models");

const { SECRET_KEY } = process.env;

const { User } = users;

const googleSignIn = async (email) => {
    const user = await User.findOne({ email });
      const payload = {
        id: user._id,
      };
  
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
      await User.findByIdAndUpdate(user._id, { token });
      return `${process.env.FRONTEND_URL}welcome?token=${token}`;
  };

  module.exports = googleSignIn;