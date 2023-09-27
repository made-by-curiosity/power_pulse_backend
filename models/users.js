const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSchemaValidationErrors, getAge } = require("../helpers");

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const avatarUrlsSchema = new Schema(
  {
    mobile: {
      type: String,
    },
    desktop: {
      type: String,
    },
  },
  { versionKey: false, _id: false }
);

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
          return getAge(birthday) >= 18;
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
      minLength: 6,
    },
    token: {
      type: String,
      default: "",
    },
    avatarUrls: { type: avatarUrlsSchema, default: {} },
    userParams: { type: userParamsSchema, default: {} },
  },
  { versionKey: false, minimize: false, timestamps: true }
);

userSchema.post("save", handleSchemaValidationErrors);

const registerSchema = Joi.object({
  name: Joi.string().trim().empty().required().messages({
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),
  email: Joi.string()
    .trim()
    .empty()
    .pattern(emailRegex, { name: "email pattern" })
    .required()
    .messages({
      "string.base": "Email should be a string",
      "string.empty": "Email should not be an empty field.",
      "any.required": "Email is required.",
      "string.pattern.base": "Email must be in format of test@mail.com.",
    }),
  password: Joi.string()
    .pattern(passwordRegex, { name: "password pattern" })
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.pattern.base":
        "Password must be 8-32 characters long and include at least one digit, one lowercase letter, and one uppercase letter.",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .empty()
    .pattern(emailRegex, { name: "email pattern" })
    .required()
    .messages({
      "string.base": "Email should be a string",
      "string.empty": "Email should not be an empty field.",
      "any.required": "Email is required.",
      "string.pattern.base": "Email must be in format of test@mail.com.",
    }),
  password: Joi.string()
    .pattern(passwordRegex, { name: "password pattern" })
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.pattern.base":
        "Password must be 8-32 characters long and include at least one digit, one lowercase letter, and one uppercase letter.",
    }),
});

const updateUserParamsSchema = Joi.object({
  height: Joi.number().min(150).required().messages({
    "number.min": "Height must be at least 150 cm.",
    "any.required": "Height is required.",
    "number.base": "Height must be a valid number.",
  }),
  currentWeight: Joi.number().min(35).required().messages({
    "number.min": "Current weight must be at least 35 kg.",
    "any.required": "Current weight is required.",
    "number.base": "Current weight must be a valid number.",
  }),
  desiredWeight: Joi.number().min(35).required().messages({
    "number.min": "Desired weight must be at least 35 kg.",
    "any.required": "Desired weight is required.",
    "number.base": "Desired weight must be a valid number.",
  }),
  birthday: Joi.date()
    .max("now")
    .custom((value, helpers) => {
      if (getAge(value) < 18) {
        return helpers.error("date.min", { limit: "18 years" });
      }
      return value;
    }, "Minimum age validation")
    .required()
    .messages({
      "date.max": "Birthday cannot be in the future.",
      "date.base": "Birthday must be a valid date.",
      "any.required": "Birthday is required.",
    }),
  blood: Joi.number().valid(1, 2, 3, 4).required().messages({
    "number.base": "Blood type must be a valid number.",
    "any.only": "Invalid blood type selected.",
    "any.required": "Blood type is required.",
  }),
  sex: Joi.string().valid("male", "female").required().messages({
    "string.base": "Sex must be a valid string.",
    "any.only": "Invalid sex selected.",
    "any.required": "Sex is required.",
  }),
  levelActivity: Joi.number().valid(1, 2, 3, 4, 5).required().messages({
    "number.base": "Activity level must be a valid number.",
    "any.only": "Invalid activity level selected.",
    "any.required": "Activity level is required.",
  }),
});

const updateUsername = Joi.object({
  name: Joi.string().trim().empty().required().messages({
    "string.empty": "Name cannot be empty.",
    "any.required": "Name is required.",
  }),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateUserParamsSchema,
  updateUsername,
};

const User = model("user", userSchema);

module.exports = { User, schemas };
