const Error400DeletingFromDiary = {
    type: "object",
    properties: {
      message: { type: "string" },
    },
    example: {
      message: "{id} is not correct id format",
    },
  }

  module.exports = Error400DeletingFromDiary;