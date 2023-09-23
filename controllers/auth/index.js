const register = require("./register");
const login = require("./login");
const logOut = require("./logOut");
const getCurrent = require("./getCurrent");
const getGoogleUrl = require("./getGoogleUrl");
const googleOauth = require("./googleOauth");

const { tryCatchWrapper } = require("../../middlewares");

module.exports = {
  register: tryCatchWrapper(register),
  login: tryCatchWrapper(login),
  logOut: tryCatchWrapper(logOut),
  getCurrent: tryCatchWrapper(getCurrent),
  getGoogleUrl: tryCatchWrapper(getGoogleUrl),
  googleOauth: tryCatchWrapper(googleOauth),
};
