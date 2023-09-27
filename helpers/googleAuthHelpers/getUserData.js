const axios = require("axios");

const GOOGLE_REQ_URL = "https://www.googleapis.com/oauth2/v3/userinfo";

const getUserData = async (accessToken) => {
  const res = await axios.get(`${GOOGLE_REQ_URL}?access_token=${accessToken}`);
  return res.data;
};

module.exports = getUserData;
