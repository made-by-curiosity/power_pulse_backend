const express = require("express");

const { users } = require("../../controllers");

const { validation, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

/**
 * @swagger
 * /api/users/params:
 *   post:
 *     summary: Add user parameters
 *     description: Endpoint to add user parameters.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: User parameters to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserParams'
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateParamsResponse'
 *       400:
 *         description: Bad request, invalid input data.
 *       401:
 *         description: Unauthorized
 */


router.post(
  "/params",
  authenticate,
  validation(schemas.updateUserParamsSchema),
  users.updateParams
);

/**
 * @swagger
 * /api/users/params:
 *   put:
 *     summary: Update user parameters
 *     description: Endpoint to update user parameters.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: User parameters to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserParams'
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateParamsResponse'
 *       400:
 *         description: Bad request, invalid input data.
 *       401:
 *         description: Unauthorized
 */

router.put(
  "/params",
  authenticate,
  validation(schemas.updateUserParamsSchema),
  users.updateParams
);

/**
 * @swagger
 * /api/users/params:
 *   get:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetParams'
 *       401:
 *         description: Unauthorized
 */

router.get("/params", authenticate, users.getParams);

/**
 * @swagger
 * /api/users/username:
 *   patch:
 *     summary: Update username
 *     description: Endpoint to update username.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Updated username data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUsernameInput'
 *     responses:
 *       200:
 *         description: Username succesfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateUsernameResponse'
 *       400:
 *         description: Bad request, invalid input data.
 *       401:
 *         description: Unauthorized
 */

router.patch(
  "/username",
  authenticate,
  validation(schemas.updateUsername),
  users.updateUsername
);

/**
 * @swagger
 * /api/users/avatars:
 *   patch:
 *     summary: Update user avatar
 *     description: Endpoint to update user avatar.
 *     tags:
 *         - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Updated user avatar image (file)
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary  # Specify the format as binary for files
 *     responses:
 *       200:
 *         description: Avatar succesfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateAvatarResponse'
 *       400:
 *         description: Bad request, invalid input data.
 *       401:
 *         description: Unauthorized
 */

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  users.updateAvatar
);

module.exports = router;
