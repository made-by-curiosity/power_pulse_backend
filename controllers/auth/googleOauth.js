const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const { users } = require("../../models");
const { User } = users;

const getUserData = async (accessToken) => {
  const res = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );
  return res.data;
};

const googleOauth = async (req, res) => {
  const { code } = req.query;

  const redirectUrl = process.env.GOOGLE_REDIRECT_URL;

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const response = await oAuth2Client.getToken(code);
  await oAuth2Client.setCredentials(response.tokens);
  const userData = oAuth2Client.credentials;
  const data = await getUserData(userData.access_token);

  const { email, name, picture } = data;

  const user = await User.findOne({ email });
  if (user) {
    return res.redirect(
      `${process.env.FRONTEND_URL}welcome?token=${user.token}`
    );
  }

  const newUser = await User.create({
    name: name,
    email: email,
    avatarUrl: picture,
  });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(newUser._id, { token });

  return res.redirect(`${process.env.FRONTEND_URL}welcome?token=${token}`);
};

module.exports = googleOauth;
