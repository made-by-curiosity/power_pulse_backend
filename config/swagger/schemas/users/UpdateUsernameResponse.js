const UpdateUsernameResponse = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
    },
  },
  example: {
    user: {
      name: "John Doe",
    },
  },
};

module.exports = UpdateUsernameResponse;
