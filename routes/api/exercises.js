const express = require('express');

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const router = express.Router();

const { 
    getAllExercises,
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/exercises');

router.get('/', auth, getAllExercises);
router.get('/body-parts', auth, getAllBodyParts);
router.get('/equipment', auth, getAllEquipment);
router.get('/muscles', auth, getAllMuscles);

module.exports = router;
