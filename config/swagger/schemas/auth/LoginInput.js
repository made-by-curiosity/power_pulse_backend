const LoginInput = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
    example: {
      email: 'john@example.com',
      password: 'Password123',
    },
  }

  module.exports = LoginInput;