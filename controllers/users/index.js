const updateParams = require("./updateParams");
const updateAvatar = require("./updateAvatar");
const updateUsername = require("./updateUsername");
const getParams = require("./getParams");

const { tryCatchWrapper } = require("../../middlewares");

module.exports = {
  updateParams: tryCatchWrapper(updateParams),
  updateAvatar: tryCatchWrapper(updateAvatar),
  updateUsername: tryCatchWrapper(updateUsername),
  getParams: tryCatchWrapper(getParams),
};
