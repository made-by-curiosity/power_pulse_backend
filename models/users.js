const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSchemaValidationErrors } = require("../helpers");

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const userParamsSchema = new Schema(
  {
    height: {
      type: Number,
      min: 150,
    },
    currentWeight: {
      type: Number,
      min: 35,
    },
    desiredWeight: {
      type: Number,
      min: 35,
    },
    birthday: {
      type: Date,
      validate: {
        validator: function (birthday) {
          const today = new Date();
          const birthDate = new Date(birthday);
          let age = today.getFullYear() - birthDate.getFullYear();
          const m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          return age >= 18;
        },
        message: "User must be 18 years or older. ",
      },
    },
    blood: {
      type: Number,
      enum: [1, 2, 3, 4],
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    levelActivity: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  },
  { versionKey: false, _id: false }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegex,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minLength: 6,
    },
    token: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    userParams: { type: userParamsSchema, default: {} },
  },
  { versionKey: false, minimize: false, timestamps: true }
);

userSchema.post("save", handleSchemaValidationErrors);

const registerSchema = Joi.object({
  name: Joi.string().trim().empty().required(),
  email: Joi.string().trim().empty().pattern(emailRegex).required(),
  password: Joi.string().pattern(passwordRegex).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().trim().empty().pattern(emailRegex).required(),
  password: Joi.string().min(6).pattern(passwordRegex).required(),
});

const updateUserParamsSchema = Joi.object({
  height: Joi.number().min(150).required(),
  currentWeight: Joi.number().min(35).required(),
  desiredWeight: Joi.number().min(35).required(),
  birthday: Joi.date()
    .max("now")
    .custom((value, helpers) => {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 18) {
        return helpers.error("date.min", { limit: "18 years" });
      }
      return value;
    }, "Mininum age validation")
    .required(),
  blood: Joi.number().valid(1, 2, 3, 4).required(),
  sex: Joi.string().valid("male", "female").required(),
  levelActivity: Joi.number().valid(1, 2, 3, 4, 5).required(),
});

const updateUsername = Joi.object({
  name: Joi.string().trim().empty().required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateUserParamsSchema,
  updateUsername,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
