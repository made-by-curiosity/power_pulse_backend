const express = require('express');

const { validation, tryCatchWrapper, authenticate, upload } = require('../../middlewares');

const router = express.Router();

const { 
    getAllExercises,
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');

/**
 * @swagger
 * /exercises:
 *   get:
 *     summary: Get all exercises
 *     description: Get a list of all exercises.
 *     responses:
 *       200:
 *         description: A list of exercises.
 */

router.get('/', authenticate, getAllExercises);

/**
 * @swagger
 * /exercises/body-parts:
 *   get:
 *     summary: Get all body parts
 *     description: Get a list of all body parts.
 *     responses:
 *       200:
 *         description: A list of body parts.
 */

router.get('/body-parts',authenticate, getAllBodyParts);

/**
 * @swagger
 * /exercises/equipment:
 *   get:
 *     summary: Get all types of equipment
 *     description: Get a list of all types of equipment for exercises.
 *     responses:
 *       200:
 *         description: List of equipment types.
 */

router.get('/equipment',authenticate, getAllEquipment);

/**
 * @swagger
 * /exercises/muscles:
 *   get:
 *     summary: Get all muscle groups
 *     description: Get a list of all muscle groups used in exercises.
 *     responses:
 *       200:
 *         description: List of muscle groups.
 */

router.get('/muscles',authenticate, getAllMuscles);

module.exports = router;
