const express = require('express');

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const router = express.Router();

const { getAllExercises, getAllBodyParts } = require('../../controllers/exercises');

router.get('/', getAllExercises);
router.get('/body-parts', getAllBodyParts );

module.exports = router;
