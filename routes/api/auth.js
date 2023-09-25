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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
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
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
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

/**
 * @swagger
 * /api/auth/current:
 *   get:
 *     summary: Get current user information
 *     description: Endpoint to get current user information.
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successfull response.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       401:
 *         description: Unauthorized
 */

router.get("/current", authenticate, auth.getCurrent);

router.post("/request", auth.getGoogleUrl);

/**
 * @swagger
 * /api/auth/oauth:
 *   get:
 *     summary: Get Google auth URL
 *     description: Endpoint to get Google auth URL.
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *             example:
 *               url: "https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20openid&prompt=consent&..."
 */

router.get("/oauth", auth.googleOauth);

module.exports = router;
