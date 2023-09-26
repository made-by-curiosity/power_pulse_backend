const ErrorSavingInDiary = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: '"{any key}" is required',
  },
};

module.exports = ErrorSavingInDiary;