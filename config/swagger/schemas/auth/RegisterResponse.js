const RegisterResponse = {
  type: "object",
  properties: {
    token: { type: "string" },
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        avatarUrls: { type: "object" },
        userParams: { type: "object" },
        createdAt: { type: "date" },
      },
    },
  },
  example: {
    token: "your-auth-token",
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatarUrls: {},
      userParams: {},
      createdAt: "2023-09-19T19:55:19.539+00:00",
    },
  },
};

module.exports = RegisterResponse;
