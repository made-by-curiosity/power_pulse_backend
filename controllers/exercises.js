const { Exercises, Filters } = require('../models/exercises');
const tryCatchWrapper = require('../middlewares/tryCatchWrapper');

const getAllExercises = async (req, res) => {
    const result = await Exercises.find();
    res.json(result);
};

const getAllBodyParts = async (req, res) => {
    const bodyParts = await Filters.find({filter:"Body parts"});
        res.json(bodyParts);
};

const getAllEquipment = async (req, res) => {
    const equipment = await Filters.find({filter: "Equipment"});
        res.json(equipment);
};

module.exports = {
    getAllExercises: tryCatchWrapper(getAllExercises),
    getAllBodyParts: tryCatchWrapper(getAllBodyParts),
    getAllEquipment: tryCatchWrapper(getAllEquipment),
};
    