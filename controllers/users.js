const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../models/users");
const { tryCatchWrapper } = require("../middlewares");
const { bmrCalculationFn } = require("../helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(401, "Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw createError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

const addInfo = async (req, res) => {
  const { email } = req.user;
  const { height, desiredtWeight, birthday, sex, levelActivity } = req.body;

  const bmr = bmrCalculationFn(
    desiredtWeight,
    height,
    birthday,
    sex,
    levelActivity
  );

  const userInfo = {
    ...req.body,
  };
  const user = await User.findOneAndUpdate(
    { email },
    { userInfo: userInfo },
    { new: true }
  );

  res.status(201).json({
    user: {
      userInfo: user.userInfo,
    },
    bmr,
  });
};

const updateInfo = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOneAndUpdate(
    { email },
    { ...req.body },
    { new: true }
  );

  const { desiredtWeight, height, birthday, sex, levelActivity } =
    user.userInfo;

  const bmr = bmrCalculationFn(
    desiredtWeight,
    height,
    birthday,
    sex,
    levelActivity
  );

  res.status(200).json({
    user: {
      name: user.name,
      userInfo: user.userInfo,
    },
    bmr,
  });
};

const getInfo = async (req, res) => {
  const { email } = req.user;
  const user = await User.findOne({ email });

  if (user.userInfo) {
    const { desiredtWeight, height, birthday, sex, levelActivity } =
      user.userInfo;

    const bmr = bmrCalculationFn(
      desiredtWeight,
      height,
      birthday,
      sex,
      levelActivity
    );

    res.status(200).json({
      user: {
        name: user.name,
        userInfo: user.userInfo,
      },
      bmr,
    });
  } else {
    res.status(200).json({
      user: {
        name: user.name,
      },
    });
  }
};

const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).json({
    message: "logout sucsess",
  });
};

module.exports = {
  register: tryCatchWrapper(register),
  login: tryCatchWrapper(login),
  addInfo: tryCatchWrapper(addInfo),
  updateInfo: tryCatchWrapper(updateInfo),
  getInfo: tryCatchWrapper(getInfo),
  logOut: tryCatchWrapper(logOut),
};
