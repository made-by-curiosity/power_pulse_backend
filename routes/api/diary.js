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
 *     description: Endpoint for getting list of consumed products
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
 *         description: OK. ----- Array of objects
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InfoAboutConsumedProducts'
 */

router.get('/meal', authenticate, ctrlDiary.getByDateMeal);

/**
 * @swagger
 * /api/diary/workout{?date}:
 *   get:
 *     summary: Get list of completed exercise
 *     description: Endpoint for getting list of completed exercise
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
 *         description: OK. ----- Array of objects
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InfoAboutCompletedWorkouts'
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessSavingProductInDiary'
 *       400:
 *         description: Bad request. 
 *           Options body request - "{key} is not allowed", "{key} is required", "{key} must be a {type}", id error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorSavingInDiary'
 */

router.post('/meal', validation(postMealSchema), authenticate, ctrlDiary.postAddMeal);

/**
 * @swagger
 * /api/diary/workout:
 *   post:
 *     summary: Save completed workout
 *     description: Endpoint of saving completed workout
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Data of completed workout
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavingCompletedWorkout'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessSavingWorkoutInDiary'
 *       400:
 *         description: Bad request. 
 *           Options body request - "{key} is not allowed", "{key} is required", "{key} must be a {type}", id error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorSavingInDiary'
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessDeletingProductFromDiary'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error400DeletingFromDiary'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error404DeletingFromDiary'
 */

router.delete('/meal/:id', authenticate, isValidId, ctrlDiary.deleteByIdMeal);

/**
 * @swagger
 * /api/diary/workout/{id}:
 *   delete:
 *     summary: Delete completed workout
 *     description: Endpoint of deleting completed workout
 *     tags:
 *         - Diary
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         description: Workout id that is being deleted
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessDeletingWorkoutFromDiary'
 *       400:
 *          description: Bad Request
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error400DeletingFromDiary'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error404DeletingFromDiary'
 */
router.delete('/workout/:id', authenticate, isValidId, ctrlDiary.deleteByIdWorkout);

module.exports = router;
