const UpdateAvatarResponse = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        avatarUrl: { type: "string" },
      },
    },
  },
  example: {
    user: {
      name: "John Doe",
      avatarUrl:
        "http://res.cloudinary.com/de24hlzdl/image/upload/v1695158738/power_pulse_avatars/6509fca7fc3390e9427dd48e.png",
    },
  },
};

module.exports = UpdateAvatarResponse;
