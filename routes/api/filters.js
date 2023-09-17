const express = require('express');

const { validation, tryCatchWrapper, auth, upload } = require('../../middlewares');

const router = express.Router();

const { 
    getAllBodyParts, 
    getAllEquipment,
    getAllMuscles, 
} = require('../../controllers/filters');

router.get('/body-parts', getAllBodyParts);
router.get('/equipment', getAllEquipment);
router.get('/muscles', getAllMuscles);

module.exports = router;