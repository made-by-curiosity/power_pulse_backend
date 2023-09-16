const { Exercises, Filters } = require('../models/exercises');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllExercises = async (req, res) => {
    const result = await Exercises.find();
    res.json(result);
};

const getAllBodyParts = async (req, res) => {
    const bodyParts = await Filters.find();
        res.json(bodyParts);
};

module.exports = {
    getAllExercises: tryCatchWrapper(getAllExercises),
    getAllBodyParts: tryCatchWrapper(getAllBodyParts),
};
    