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
      avatarUrls: {
        mobile:
          "http://res.cloudinary.com/de24hlzdl/image/upload/v1695739152/power_pulse_avatars/mobile_6512ed1cc052bdcd287029f4.png",
        desktop:
          "http://res.cloudinary.com/de24hlzdl/image/upload/v1695739153/power_pulse_avatars/desktop_6512ed1cc052bdcd287029f4.png",
      },
    },
  },
};

module.exports = UpdateAvatarResponse;
