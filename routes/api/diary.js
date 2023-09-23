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
 * /api/diary/meal{?date}:
 *   get:
 *     summary: Get list of consumed products
 *     description: End point for getting list of consumed products
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: date
 *         description: The date for which information is required
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 */

router.get('/meal', authenticate, ctrlDiary.getByDateMeal);

/**
 * @swagger
 * /api/diary/workout{?date}:
 *   get:
 *     summary: Get list of completed exercise
 *     description: End point for getting list of completed exercise
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: date
 *         description: The date for which information is required
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 */

router.get('/workout', authenticate, ctrlDiary.getByDateWorkout);

/**
 * @swagger
 * /api/diary/meal:
 *   post:
 *     summary: Save consumed product
 *     description: Endpoint of saving consumed product
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Data of consumed product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavingConsumedProduct'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 */

router.post('/meal', validation(postMealSchema), authenticate, ctrlDiary.postAddMeal);

/**
 * @swagger
 * /api/diary/workout:
 *   post:
 *     summary: Save completed exercise
 *     description: Endpoint of saving completed exercise
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Data of completed exercise
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavingCompletedExercise'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 */
router.post('/workout', validation(postWorkoutSchema), authenticate, ctrlDiary.postAddWorkout);

/**
 * @swagger
 * /api/diary/meal/{id}:
 *   delete:
 *     summary: Delete consumed product
 *     description: Endpoint to deleting consumed product
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         description: Product id that is being deleted
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not Found
 */

router.delete('/meal/:id', authenticate, isValidId, ctrlDiary.deleteByIdMeal);

/**
 * @swagger
 * /api/diary/workout/{id}:
 *   delete:
 *     summary: Delete completed exercise
 *     description: Endpoint of deleting completed exercise
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         description: Exercise id that is being deleted
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not Found
 */

router.delete('/workout/:id', authenticate, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router;
