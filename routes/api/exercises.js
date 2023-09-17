const express = require('express');

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const router = express.Router();

const { getAllExercises } = require('../../controllers/exercises');

router.get('/exercises', getAllExercises);

module.exports = router;
