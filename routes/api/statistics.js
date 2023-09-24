const express = require('express');
const { ctrlStatistics } = require('../../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/statistics/users:
 *   get:
 *     summary: Get total number of users
 *     description: Endpoint for getting total number of users
 *     tags:
 *         - Statistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalUsers'
 */

router.get('/users', ctrlStatistics.getCountUsers);

/**
 * @swagger
 * /api/statistics/exercises:
 *   get:
 *     summary: Get number of exercises in base
 *     description: Endpoint for getting exercises count in base
 *     tags:
 *         - Statistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalExercises'
 */

router.get('/exercises', ctrlStatistics.getCountExercises);

/**
 * @swagger
 * /api/statistics/workouts:
 *   get:
 *     summary: Get total number of workouts
 *     description: Endpoint for getting total number of workouts
 *     tags:
 *         - Statistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalWorkouts'
 */
router.get('/workouts', ctrlStatistics.getCountWorkouts);

/**
 * @swagger
 * /api/statistics/time:
 *   get:
 *     summary: Get total number of training minutes
 *     description: Endpoint for getting total number of training minutes
 *     tags:
 *         - Statistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalWorkoutsTime'
 */

router.get('/time', ctrlStatistics.getTotalTimeWorkouts);

/**
 * @swagger
 * /api/statistics/calories:
 *   get:
 *     summary: Get total number of calories burned
 *     description: Endpoint for getting total number of calories burned
 *     tags:
 *         - Statistics
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalBurnedCalories'
 */

router.get('/calories', ctrlStatistics.getTotalCaloriesWorkouts);

module.exports = router
