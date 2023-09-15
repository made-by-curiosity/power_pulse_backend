const express = require("express");

const ctrl = require("../../controllers/users");

const {
  validation,
  auth,
  upload,
} = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validation(schemas.registerSchema),ctrl.register);

router.post("/login",validation(schemas.loginSchema),ctrl.login);

module.exports = router;
