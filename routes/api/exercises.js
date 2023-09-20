const express = require('express');

const { validation, tryCatchWrapper, authenticate, upload } = require('../../middlewares');

const router = express.Router();

const { 
    getAllExercises,
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');

router.get('/', authenticate, getAllExercises);
router.get('/body-parts',authenticate, getAllBodyParts);
router.get('/equipment',authenticate, getAllEquipment);
router.get('/muscles',authenticate, getAllMuscles);

module.exports = router;
