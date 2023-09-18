const register = require("./register");
const login = require("./login");
const updateParams = require("./updateParams");
const updateAvatar = require("./updateAvatar");
const updateUsername = require("./updateUsername");
const getParams = require("./getParams");
const logOut = require("./logOut");

const { tryCatchWrapper } = require("../../middlewares");

module.exports = {
  register: tryCatchWrapper(register),
  login: tryCatchWrapper(login),
  updateParams: tryCatchWrapper(updateParams),
  updateAvatar: tryCatchWrapper(updateAvatar),
  updateUsername: tryCatchWrapper(updateUsername),
  getParams: tryCatchWrapper(getParams),
  logOut: tryCatchWrapper(logOut),
};
