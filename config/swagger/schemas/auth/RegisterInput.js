const RegisterInput = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["name", "email", "password"],
  example: {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
};

module.exports = RegisterInput;
