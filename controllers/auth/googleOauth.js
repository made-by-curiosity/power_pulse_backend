const { OAuth2Client } = require("google-auth-library");

const {
  googleSignIn,
  googleSignUp,
  getUserData,
} = require("../../helpers/googleAuthHelpers");

const { users } = require("../../models");

const { User } = users;

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

  if (!user) {
    const redirectFrontendUrl = await googleSignUp(email, name, picture);
    return res.redirect(redirectFrontendUrl);
  }
  const redirectFrontendUrl = await googleSignIn(email);
  return res.redirect(redirectFrontendUrl);
};

module.exports = googleOauth;
