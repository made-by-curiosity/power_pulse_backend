const UpdateParamsResponse = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        userParams: { type: "object" },
      },
    },
    bmr: { type: "number" },
  },
  example: {
    user: {
      name: "John Doe",
      userParams: {
        height: 170,
        currentWeight: 75,
        desiredWeight: 70,
        birthday: "1990-01-01T00:00:00.000+00:00",
        blood: 1,
        sex: "male",
        levelActivity: 3,
      },
    },
    bmr: 2557,
  },
};

module.exports = UpdateParamsResponse;