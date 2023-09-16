const express = require("express");

const ctrl = require("../../controllers/users");

const { validation, auth, upload } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

router.post("/register", validation(schemas.registerSchema), ctrl.register);

router.post("/login", validation(schemas.loginSchema), ctrl.login);

router.post("/info", auth, validation(schemas.addUserInfoSchema), ctrl.addInfo);

router.put(
  "/info",
  auth,
  validation(schemas.updateUserSchema),
  ctrl.updateInfo
);

router.get("/info", auth, ctrl.getInfo);

router.post("/logout", auth, ctrl.logOut);

module.exports = router;
