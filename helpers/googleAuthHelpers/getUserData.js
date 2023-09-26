const axios = require("axios");

const getUserData = async (accessToken) => {
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    );
    return res.data;
  };

  module.exports = getUserData;