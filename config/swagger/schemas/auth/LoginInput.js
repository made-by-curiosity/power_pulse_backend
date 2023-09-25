const LoginInput = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
    example: {
      email: 'john@example.com',
      password: 'password123',
    },
  }

  module.exports = LoginInput;