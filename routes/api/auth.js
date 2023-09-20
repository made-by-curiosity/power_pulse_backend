const express = require("express");

const { auth } = require("../../controllers");

const { validation, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Creates a new user
 *     description: Endpoint to create a new user.
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: User registration data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
 *     responses:
 *       201:
 *         description: User successfully registered.
 *       400:
 *         description: Bad request, invalid input data.
 *       409:
 *         description: Email already in use.
 */

router.post("/register", validation(schemas.registerSchema), auth.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in an existing user
 *     description: Endpoint to log in an existing user.
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: User login data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: Bad request, invalid input data.
 *       401:
 *         description: Email or password is wrong.
 */

router.post("/login", validation(schemas.loginSchema), auth.login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: logout user
 *     description: Endpoint to logout user.
 *     tags:
 *         - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.post("/logout", authenticate, auth.logOut);

module.exports = router;
