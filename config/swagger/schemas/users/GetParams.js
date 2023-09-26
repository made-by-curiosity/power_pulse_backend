const GetParams = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        avatarUrl: { type: "string" },
        userParams: { type: "object" },
        createdAt: { type: "date" },
      },
    },
    bmr: { type: "number" },
  },
  example: {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatarUrl:
        "http://res.cloudinary.com/de24hlzdl/image/upload/v1695158738/power_pulse_avatars/6509fca7fc3390e9427dd48e.png",
      userParams: {
        height: 170,
        currentWeight: 75,
        desiredWeight: 70,
        birthday: "1990-01-01T00:00:00.000+00:00",
        blood: 1,
        sex: "male",
        levelActivity: 3,
      },
      createdAt: "2023-09-19T19:55:19.539+00:00",
    },
    bmr: 2557,
  },
};

module.exports = GetParams;
