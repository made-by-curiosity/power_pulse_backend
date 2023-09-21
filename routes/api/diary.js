const express = require('express');
const { ctrlDiary } = require('../../controllers');
const { authenticate, isValidId, validation } = require('../../middlewares');
const {
  schemasMeal: { postMealSchema },
} = require('../../models/diary/meal');
const {
  schemasWorkout: { postWorkoutSchema },
} = require('../../models/diary/workout');

const router = express.Router();

/**
 * @swagger
 * /api/diary/meal:
 *   get:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.get('/meal', authenticate, ctrlDiary.getByDateMeal);

/**
 * @swagger
 * /api/diary/workout:
 *   get:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.get('/workout', authenticate, ctrlDiary.getByDateWorkout);

/**
 * @swagger
 * /api/diary/meal:
 *   post:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.post('/meal', validation(postMealSchema), authenticate, ctrlDiary.postAddMeal);

/**
 * @swagger
 * /api/diary/workout:
 *   post:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.post('/workout', validation(postWorkoutSchema), authenticate, ctrlDiary.postAddWorkout);

/**
 * @swagger
 * /api/diary/meal/:id:
 *   delete:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.delete('/meal/:id', authenticate, isValidId, ctrlDiary.deleteByIdMeal);

/**
 * @swagger
 * /api/diary/workout/:id:
 *   delete:
 *     summary: Get user parameters
 *     description: Endpoint to get user parameters.
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *       401:
 *         description: Unauthorized
 */

router.delete('/workout/:id', authenticate, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router;
