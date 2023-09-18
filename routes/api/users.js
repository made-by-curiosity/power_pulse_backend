const express = require("express");

const { users } = require("../../controllers");

const { validation, auth, upload } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validation(schemas.registerSchema), users.register);

router.post("/login", validation(schemas.loginSchema), users.login);

router.post(
  "/params",
  auth,
  validation(schemas.updateUserParamsSchema),
  users.updateParams
);

router.put(
  "/params",
  auth,
  validation(schemas.updateUserParamsSchema),
  users.updateParams
);

router.get("/params", auth, users.getParams);

router.patch(
  "/username",
  auth,
  validation(schemas.updateUsername),
  users.updateUsername
);

router.patch("/avatars", auth, upload.single("avatar"), users.updateAvatar);

router.post("/logout", auth, users.logOut);

module.exports = router;
