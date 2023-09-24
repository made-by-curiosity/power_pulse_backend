const getCurrent = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      userParams: user.userParams,
      createdAt: user.createdAt,
    },
    token: user.token,
  });
};

module.exports = getCurrent;
