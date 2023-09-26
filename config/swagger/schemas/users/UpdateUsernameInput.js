const UpdateUsernameInput = {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
    required: ['name'],
    example: {
      name: 'New Name',
    },
  }

  module.exports = UpdateUsernameInput;