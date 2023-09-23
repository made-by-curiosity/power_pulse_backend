const { OAuth2Client } = require("google-auth-library");

const getGoogleUrl = (req, res) => {
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = process.env.GOOGLE_REDIRECT_URL;

  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "openid",
    ].join(" "),
    prompt: "consent",
  });

  res.json({
    url: authorizeUrl,
  });
};

module.exports = getGoogleUrl;
