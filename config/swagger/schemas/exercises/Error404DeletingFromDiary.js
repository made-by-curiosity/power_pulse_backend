const Error404DeletingFromDiary = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Not found",
  },
};

module.exports = Error404DeletingFromDiary;
