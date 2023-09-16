const express = require("express");

const { users } = require("../../controllers");

const { validation, auth, upload } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validation(schemas.registerSchema), users.register);

router.post("/login", validation(schemas.loginSchema), users.login);

router.post(
  "/info",
  auth,
  validation(schemas.addUserInfoSchema),
  users.addInfo
);

router.put(
  "/info",
  auth,
  validation(schemas.updateUserSchema),
  users.updateInfo
);

router.get("/info", auth, users.getInfo);

router.post("/logout", auth, users.logOut);

module.exports = router;
