const express = require('express');

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const router = express.Router();

const { 
    getAllExercises, 
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');

router.get('/', getAllExercises);
router.get('/body-parts', getAllBodyParts);
router.get('/equipment', getAllEquipment);
router.get('/muscles', getAllMuscles);

module.exports = router;
