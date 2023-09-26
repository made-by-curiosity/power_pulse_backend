const UpdateUserParams = {
    type: 'object',
    properties: {
      height: { type: 'number', minimum: 150 },
      currentWeight: { type: 'number', minimum: 35 },
      desiredWeight: { type: 'number', minimum: 35 },
      birthday: {
        type: 'string',
        format: 'date',
      },
      blood: { type: 'number', enum: [1, 2, 3, 4] },
      sex: { type: 'string', enum: ['male', 'female'] },
      levelActivity: { type: 'number', enum: [1, 2, 3, 4, 5] },
    },
    required: [
      'height',
      'currentWeight',
      'desiredWeight',
      'birthday',
      'blood',
      'sex',
      'levelActivity',
    ],
    example: {
      height: 170,
      currentWeight: 75,
      desiredWeight: 70,
      birthday: '1990-01-01',
      blood: 1,
      sex: 'male',
      levelActivity: 3,
    },
  }

  module.exports = UpdateUserParams;