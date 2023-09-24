const express = require('express');
const { authenticate, } = require('../../middlewares');
const router = express.Router();
const { 
    getAllExercises,
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');


/**
 * @swagger
 * /api/exercises:
 *   get:
 *     summary: Get all exercises.
 *     description: Endpoint to get all exercise categories.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExercisesCategories' 
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/', authenticate, getAllExercises);

/**
 * @swagger
 * /api/exercises/body-parts:
 *   get:
 *     summary: Get all body parts for exercises.
 *     description: Endpoint to get exercises for all parts of the body.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all body parts for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExercisesBodyParts' 
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/body-parts', authenticate, getAllBodyParts);

/**
 * @swagger
 * /api/exercises/equipment:
 *   get:
 *     summary: Get all equipment for exercises.
 *     description: Endpoint to get exercises for all equipment.
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all equipment for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExercisesEquipment' 
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/equipment', authenticate, getAllEquipment);

/**
 * @swagger
 * /api/exercises/muscles:
 *   get:
 *     summary: Get all muscles for exercises.
 *     description: Endpoint to get exercises for all muscles. 
 *     tags:
 *       - Exercises
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all muscles for exercises.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExercisesMuscles' 
 *       401:
 *         description: Unauthorized. User is not authenticated.
 *         content:
 *           application/json:
 *             example:
 *               message: Not authorized
 *       404:
 *         description: Not found. The requested resource was not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Not found
 */

router.get('/muscles', authenticate, getAllMuscles);

module.exports = router;
