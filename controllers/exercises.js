const Exercises = require('../models/exercises');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllExercises = async (req, res) => {
    const result = await Exercises.find();
    res.json(result);
};

module.exports = {
    getAllExercises: tryCatchWrapper(getAllExercises),
};
    