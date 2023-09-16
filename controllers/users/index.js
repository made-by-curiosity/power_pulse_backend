const register = require("./register");
const login = require("./login");
const addInfo = require("./addInfo");
const updateInfo = require("./updateInfo");
const getInfo = require("./getInfo");
const logOut = require("./logOut");

const { tryCatchWrapper } = require("../../middlewares");

module.exports = {
  register: tryCatchWrapper(register),
  login: tryCatchWrapper(login),
  addInfo: tryCatchWrapper(addInfo),
  updateInfo: tryCatchWrapper(updateInfo),
  getInfo: tryCatchWrapper(getInfo),
  logOut: tryCatchWrapper(logOut),
};
